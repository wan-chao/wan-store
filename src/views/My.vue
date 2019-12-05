<template>
  <div class="container">
    <h1>我的</h1>
  </div>
</template>

<script>
export default {
  name: 'my',
  components: {
  },
  data(){
    return {
    }
  },
  methods:{
    getUrlVars(decodedUrl) {
        let vars = {};
        let parts = decodedUrl.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
        });
        return vars;
    },
    getCmrFilters(url) {
        //Function to get CMR filter from EDS URL
        let decodedUrl = decodeURIComponent(url);

        let filter = [];
        let allConceptIds = this.getUrlVars(decodedUrl)["p"];
        console.log(allConceptIds);
        let conceptId = [];

        conceptId = allConceptIds.split("!");
        //conceptId = conceptId.filter((item, i, arr) => arr.indexOf(item) === i);
        console.log(conceptId);

        let noOfDatasets = conceptId.length - 1;
        let temporal = [];
        for (let i = 1; i <= noOfDatasets; i++) {
            temporal[i - 1] = this.getUrlVars(decodedUrl)["pg[" + i + "][qt]"];
            //console.log(temporal[i-1], i);
        }
        let temporalGlobal = this.getUrlVars(decodedUrl)["qt"];
        let polygon = this.getUrlVars(decodedUrl)["polygon"];
        let rectangle = this.getUrlVars(decodedUrl)["sb"];
        let point = this.getUrlVars(decodedUrl)["sp"];
        for (let i = 0; i < noOfDatasets; i++) {

            filter[i] = {};
            filter[i]['temporal'] = "&temporal[]=";
            filter[i]['polygon'] = "&polygon=";
            filter[i]['rectangle'] = "&bounding_box=";
            filter[i]['point'] = "&point=";
            filter[i]['concept_id'] = "?collection_concept_id=" + conceptId[i+1];
            if (temporal[i]) //granule filter
            {
                filter[i]['temporal'] = "&temporal[]=" + temporal[i];
            }                
            else if(temporalGlobal){
                filter[i]['temporal'] =  "&temporal[]=" + temporalGlobal;
            }
            
            if (polygon)
                filter[i]['polygon'] = "&polygon=" + polygon;
            if (rectangle)
                filter[i]['rectangle'] = "&bounding_box=" + rectangle;
            if (point)
                filter[i]['point'] = "&point=" + point;
        }
        console.log(filter);
        return filter;
    },
    getCmrQueryLink(url) {
        // Function to get CMR link with appropriate filter
        let filter = [];
        filter = this.getCmrFilters(url);
        console.log(filter);
        let noOfDatasets = filter.length;
        console.log(noOfDatasets);
        let baseUrl = "https://cmr.earthdata.nasa.gov/search/granules.json";
        let urls = [];
        for (let i = 0; i < noOfDatasets; i++) {
            urls[i] = baseUrl + filter[i]['concept_id'] + filter[i]['polygon'] + filter[i]['rectangle'] + filter[i]['point'] + filter[i]['temporal'] + "&page_size=700&page_num=";
        }
        console.log(urls);
        return urls;
    },
    download(url) {
        let cmrUrls = [];
        cmrUrls = this.getCmrQueryLink(url);
        console.log(cmrUrls);
        let noOfDatasets = cmrUrls.length;

        window.numberOfEntries = 0;
        let cmrUrlPaging = [];
        for (let i = 0; i < noOfDatasets; i++) {
            let page = 1;
            do {
                cmrUrlPaging[i] = cmrUrls[i] + page;

                console.log(cmrUrlPaging[i]);

                let downloadLink = [];

                fetch(cmrUrlPaging[i])
                  .then(res => res.json())
                  .then((out) => {
                      let entries = out['feed']['entry'];

                      numberOfEntries = entries.length;
                      if (numberOfEntries === 0) {
                          swal.fire("Empty Dataset", "Earthdata CMR returned no granules for this search query. Please contact Earthdata Help Desk", "error");
                      }

                      for (let k = 0; k < numberOfEntries; k++) {
                          downloadLink[k] = out.feed.entry[k].links[0].href; //filters all the download links
                      }

                    console.log('11',downloadLink)
                      let x = new XMLHttpRequest();
                      x.open("POST", downloadLink[0], true);
                      x.responseType = 'blob';

                      let filename = downloadLink[0].substring(downloadLink[0].lastIndexOf('/') + 1);
                      x.onload = function (e) {
                          console.log("downloading " + downloadLink[0]);
                          download(x.response, filename);
                      }
                      x.send();

                  })
                  .catch(err => {
                      console.error("Error in fetching download links");
                      throw err
                  });

                

                page++;

            } while (numberOfEntries !== 0);
        }

    }
  },
  mounted(){
    this.download('https://search.earthdata.nasa.gov/projects?p=C1237113465-GES_DISC!C1237113465-GES_DISC&pg[1][v]=t&sb=-0.703125%2C25.129822332414292%2C8.578125%2C29.48686525245875&m=-14.6953125!50.0625!2!1!0!0%2C2&tl=1559445734!4!!')
  }
}
</script>

<style lang="less">

</style>

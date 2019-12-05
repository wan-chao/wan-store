import service from '@/util/http'
import {apiUrl} from '@/config/config'

//获取首页热门商品
export function hotGoodsList() {
    return service({
        url: `${apiUrl}/goods/getHotGoodsList`,
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: {
        }
    })
}

// 查询首页推荐商品
export function recommendGoodsList(page) {
    let url =`${apiUrl}/goods/getRecommendGoodsList`
    let data = {
        page
    }
    return service.post(url,data)
}

//读取大分类
export function categoryList() {
    return service({
        url: `${apiUrl}/goods/getCategoryList`,
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: {
        }
    })
}

//读取小分类
export function categorySubList(categoryId) {
    let url =`${apiUrl}/goods/getCategorySubList`
    let data = {
        categoryId
    }
    return service.post(url,data)
}

//根据类别获取商品列表
export function goodsListByCategorySubId(categorySubId,page) {
    let url =`${apiUrl}/goods/getGoodsListByCategorySubId`
    let data = {
        categorySubId,
        page
    }
    return service.post(url,data)
}

//商品详情
export function detailGoodsInfo(goodsId) {
    let url =`${apiUrl}/goods/getDetailGoodsInfo`
    let data = {
        goodsId
    }
    return service.post(url,data)
}

//商品详情
export function goodsListByIdList(ids) {
    let url =`${apiUrl}/goods/getGoodsListByIdList`
    let data = {
        ids
    }
    return service.post(url,data)
}
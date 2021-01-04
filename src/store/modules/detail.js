import {getGoodsDetail} from "../../api"
const state = {
    responseGoodsDetailObj : {}
}
const mutations = {
    RECEIVE_DETAILINFO(state,data){
        state.responseGoodsDetailObj = data
    }
}
const actions = {
    async getDetail({commit},params){
        const result = await getGoodsDetail(params)
        if( result.code === 200 ) commit("RECEIVE_DETAILINFO",result.data)
    },
}
const getters = {
    categoryView({responseGoodsDetailObj}){
        return responseGoodsDetailObj.categoryView || {}
    },
    spuSaleAttrList({responseGoodsDetailObj}){
        return responseGoodsDetailObj.spuSaleAttrList || []
    },
    skuInfo({responseGoodsDetailObj}){
        return responseGoodsDetailObj.skuInfo || {}
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}
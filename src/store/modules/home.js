import {getBaseCategoryList,getBanner,getFloors,getRecommends} from "../../api"
const state = {
    CategoryList : [],
    bannerList : [],
    recommendList : [],
    floorList : []
}
const mutations = {
    RECEIVE_CATEGORYARR(state,data){
        state.CategoryList = data.slice(0,16)
    },
    RECEIVE_BANNERARR(state,data){
        state.bannerList = data
    },
    RECEIVE_RECOMMENDARR(state,data){
        state.recommendList = data
    },
    RECEIVE_FLOORARR(state,data){
        state.floorList = data
    }
}
const actions = {
    async categoryArr({commit}){
        const result = await getBaseCategoryList()
        if( result.code === 200 ) commit("RECEIVE_CATEGORYARR",result.data)
    },
    async bannerArr({commit}){
        const result = await getBanner()
        if(result.code === 200 ) commit("RECEIVE_BANNERARR",result.data)
    },
    async recommendArr({commit}){
        const result = await getRecommends()
        if(result.code === 200 ) commit("RECEIVE_RECOMMENDARR",result.data)
    },
    async floorArr({commit}){
        const result = await getFloors()
        if(result.code === 200 ) commit("RECEIVE_FLOORARR",result.data)
    },
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}
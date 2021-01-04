import {getSearchGoods} from "../../api"
const state = {
    searchGoodsObj : {}
}
const mutations = {
    RECEIVE_SEARCHGOODS(state,data){
        state.searchGoodsObj = data
    }
}
const actions = {
    async getSearchGoodsInfo({commit},searchOfParams){
        searchOfParams = {...searchOfParams}
        Object.keys(searchOfParams).forEach(e => {
            if(searchOfParams[e] === "" || (Array.isArray(searchOfParams[e]) && searchOfParams[e].length === 0)) delete searchOfParams[e]
        })
        const result = await getSearchGoods(searchOfParams)
        if(result.code === 200) commit("RECEIVE_SEARCHGOODS",result.data)
    }
}
const getters = {
    goodsList({searchGoodsObj}){
         return searchGoodsObj.goodsList || []
    },
    trademarkList({searchGoodsObj}){
        return searchGoodsObj.trademarkList || []
    },
    attrsList({searchGoodsObj}){
        return searchGoodsObj.attrsList || []
    },
    total({searchGoodsObj}){
        return searchGoodsObj.total || 0
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}
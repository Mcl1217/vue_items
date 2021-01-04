import {addDoodsToCart,getCartList,updataShopCheckedState,deleteShopOne} from "../../api"
const state = {
    cartshoplist: []
}
const mutations = {
    RECEIVE_GETCARTSHOPLIST(state,data){
        state.cartshoplist = data
    }
}
const actions = {
    async addOrUpdataDoodsToCart({commit},{skuId,skuNum}){
        const result = await addDoodsToCart(skuId,skuNum)
        if( result.code === 200 )  return "ok"
        else return Promise.reject(new Error("失败了"))
    },
    async getCartShopList({commit}){
        const result = await getCartList()
        if( result.code === 200 )  commit("RECEIVE_GETCARTSHOPLIST",result.data)
    },
    async updataGoodsCheckedState({commit},{skuId,isChecked}){
        const result = await updataShopCheckedState(skuId,isChecked)
        if( result.code === 200 )  return "ok"
        else return Promise.reject(new Error("失败了"))
    },
    async updataGoodsCheckedAll({state,dispatch},isChecked){
        // Promise.all 是一个方法（函数）
        // 参数： 一个promise对象的数组
        // 返回值: 一个新的promise对象
        // 新的promise对象的状态是成功还是失败:
        //如果promise对象的数组当中有一个失败，那么状态就是失败，失败的原因就是第一个失败的promise的原因
        //如果promise对象的数组当中没有失败，那么状态就是成功，成功的结果是所有的promise成功的结果组成的数组
        let promises = []
        state.cartshoplist.forEach(e => {
           if( e.isChecked === isChecked) return
           let promise = dispatch("updataGoodsCheckedState",{skuId:e.skuId,isChecked})
           promises.push(promise)
        })
        return Promise.all(promises)
    },
    async deleteOneShop({commit},skuId){
        const result = await deleteShopOne(skuId)
        if( result.code === 200 )  return "ok"
        else return Promise.reject(new Error("失败了"))
    },
    async deleteAllGoods({state,dispatch}){
        let promises = []
        state.cartshoplist.forEach((e)=>{
            if(!e.isChecked) return
            let promise = dispatch("deleteOneShop",e.skuId)
            promises.push(promise)
        })
        return Promise.all(promises)
    }
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}
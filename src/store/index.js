import Vue from "vue"
import Vuex from "vuex"
import home from "./modules/home"
import users from "./modules/users"
import search from "./modules/search"
import detail from "./modules/detail"
import cart from "./modules/cart";
Vue.use(Vuex)

const state = {

}
const mutations = {

}
const actions = {

}
const getters = {

}
const modules = {
    home,
    users,
    search,
    detail,
    cart

}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules
})
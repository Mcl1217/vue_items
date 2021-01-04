import App from "./App";
import Vue from "vue";
import router from "./router"
import store from "./store"
import "./mock/mockServers"
import GoodsClassify from "./components/GoodsClassify/GoodsClassify";
import pagination from "./components/Pagination/Pagination";
import "swiper/css/swiper.css"
Vue.config.productionTip = false
Vue.component(GoodsClassify.name,GoodsClassify)
Vue.component(pagination.name,pagination)
new Vue({
   beforeCreate() {
       Vue.prototype.$globalEventBus = this//全局事件总线
   },
    el:"#app",
    router,
    store,
    render:h => h(App)
})
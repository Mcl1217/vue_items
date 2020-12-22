import App from "./App";
import Vue from "vue";
new Vue({
  /* beforeCreate() {
       Vue.prototype.$globalEventBus = this//全局事件总线
   },*/
    el:"#app",
    render:h => h(App)
})
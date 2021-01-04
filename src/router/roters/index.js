import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Search from "../../pages/Search/Search";
import Register from "../../pages/Register/Register";
import Detail from "../../pages/Detail/Detail";
import AddCartSuccess from "../../pages/AddCartSuccess/AddCartSuccess";
import ShopCart from "../../pages/ShopCart/ShopCart";
export default [
    {
        path:"/shopcart",
        component: ShopCart
    },
    {
        path:"/",
        component:Home
    },
    {
        path:"/search/:keyword?",
        component:Search,
        name:"search",
    },
    {
        path:"/register",
        component:Register,
        meta:{
            isShow:true
        },
    },
    {
        path:"/login",
        component:Login,
        meta:{
            isShow:true
        },
    },
    {
        path:"/detail/:skuId",
        component: Detail
    },
    {
        path:"/addcartsuccess",
        component: AddCartSuccess
    }
]
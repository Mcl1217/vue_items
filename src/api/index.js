import ajax from "./ajax"
import beforeAjax from "./before_item"
import mockAjax from "./mockAjsx"
export function getBaseCategoryList() {
    return ajax({
        url: "/product/getBaseCategoryList",
        method: "GET"
    })
}
export const getBanner = () => beforeAjax('/cms/banner')
export const getFloors = () => mockAjax("/floors")
export const getRecommends = () => mockAjax("/recommends")
export const getSearchGoods = (searchParams) => ajax.post("/list",searchParams)
export const getGoodsDetail = (skuId) => {
    return ajax({
        url:`/item/${ skuId }`,
        method:"GET"
    })
}
export const addDoodsToCart = (skuId,skuNum)=>{
    return ajax({
        url:`/cart/addToCart/${ skuId }/${ skuNum }`,
        method:"POST"
    })
}

export const getCartList = ()=>{
    return ajax({
        url:"/cart/cartList",
        method:"GET"
    })
}

export const updataShopCheckedState = (skuId,isChecked)=>{
    return ajax({
        url:`/cart/checkCart/${skuId}/${isChecked}`,
        method:"GET"
    })
}

export const deleteShopOne = (skuId)=>{
    return ajax({
        url:`/cart/deleteCart/${skuId}`,
        method:"DELETE"
    })
}

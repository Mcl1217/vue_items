<template>
    <div class="type-nav">
        <div class="container">
            <div @mouseleave="isHideNav_dealNavList" @mouseenter="isShowNav_dealNavList">
                <h2 class="all">全部商品分类</h2>
               <transition name="slide">
                   <div class="sort" v-show="navIsShow">
                       <div class="all-sort-list2" @click="toSearch">
                           <div class="item" @mouseenter="delayShow(index)" :class="{active:currentIndex === index}" v-for="(e1,index) in responseCategoryArr" :key="e1.categoryId">
                               <h3>
                                   <!--                            给标签添加自定义data属性,存在了标签的dataset属性中,dataset属性中属性名都是小写,不会出现大写-->
                                   <a :data-categoryName="e1.categoryName" :data-category1Id="e1.categoryId" href="javascript:">{{e1.categoryName}}</a>
                               </h3>
                               <div class="item-list clearfix">
                                   <div class="subitem">
                                       <dl class="fore" v-for="e2 in e1.categoryChild" :key="e2.categoryId">
                                           <dt>
                                               <a :data-categoryName="e2.categoryName" :data-category2Id="e1.categoryId" href="javascript:">{{e2.categoryName}}</a>
                                           </dt>
                                           <dd>
                                               <em v-for="e3 in e2.categoryChild" :key="e3.categoryId">
                                                   <a :data-categoryName="e3.categoryName" :data-category3Id="e3.categoryId" href="javascript:">{{e3.categoryName}}</a>
                                               </em>
                                           </dd>
                                       </dl>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </transition>
            </div>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    import throttle from "lodash/throttle"
    export default {
        name: "GoodsClassify",
        data() {
            const {path} = this.$route
            return {
                currentIndex: -2,
                navIsShow:path === "/"
            }
        },
        computed: {
                ...mapState({
                        responseCategoryArr:state => state.home.CategoryList
                })
        },
        methods: {
            toSearch({target}){
                console.dir(target)
                // 取出data自定义属性值
                const {categoryname,category1id,category2id,category3id} = target.dataset
                if(categoryname){
                    let query = {categoryName:categoryname}
                    if(category1id) query.category1Id = category1id
                    else if (category2id) query.category2Id = category2id
                    else if(category3id) query.category3Id = category3id
                    if(this.$route.name === "search") {
                        this.$router.replace({
                            name:"search",
                            query,
                            params:this.$route.params
                        })
                    }else{
                        this.$router.push({
                            name:"search",
                            query,
                            params:this.$route.params
                        })
                    }
                    this.isHideNav_dealNavList()
                }
            },
            isShowNav_dealNavList(){
                this.currentIndex = -1
                this.navIsShow = true
            },
            isHideNav_dealNavList(){
                this.currentIndex = -2
                if(this.$route.path !== "/") this.navIsShow = false
            },
            delayShow:throttle(function(i){
                if(this.currentIndex !== -2) this.currentIndex = i
            },200)
        },
    }
</script>

<style lang="less" scoped>
    .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                &.slide-enter-active,&.slide-leave-active{
                    transition: all 0.5s;
                }
                &.slide-enter,&slide-leave-to{
                    opacity: 0;
                    height:0
                }

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        &.active {
                            background-color: #ccc;
                            .item-list {
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
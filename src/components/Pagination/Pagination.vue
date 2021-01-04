<template>
    <div class="pagination">
        <button :disabled="ownCurrentPage === 1" :class="{disable:ownCurrentPage === 1}" @click="setPages(ownCurrentPage - 1)">上一页</button>
        <button v-if="startEnd.start != 1" @click="setPages(1)">1</button>

        <button class="disable" v-if="startEnd.start > 2">...</button>

        <button v-for="e in startEnd.end" :key="e" v-if="e >= startEnd.start" :class="{active:e === ownCurrentPage}" @click="setPages(e)">{{e}}</button>

        <button class="disable" v-if="startEnd.end < totalPages - 1">...</button>

        <button v-if="startEnd.end < totalPages" @click="setPages(totalPages)">{{totalPages}}</button>
        <button :disabled="ownCurrentPage === totalPages" :class="{disable:startEnd.end === totalPages}" @click="setPages(ownCurrentPage + 1)">下一页</button>
        <button class="disable">共{{total}}条</button>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props:{
            currentPage:{//当前页码
                type:Number,
                default:1
            },
            pageSize:{//每页的数据的最大数量
                type:Number,
                default:10
            },
            showPageNumber:{//显示连续页码数量
                type:Number,
                default:5,
                // 自定义验证函数,要求传的值要是奇数
                validator: function (v) {
                    return v % 2 !== 0
                }
            },
            total:{//数据总量
                type:Number,
                default:0,
            }
        },
        data() {
            return {
                ownCurrentPage: this.currentPage
            }
        },
        computed: {
            totalPages() {
                return Math.ceil(this.total/this.pageSize)
            },
            startEnd(){
                let start,end
                const {ownCurrentPage,showPageNumber,totalPages} = this
                start = ownCurrentPage - Math.floor(showPageNumber / 2)
                if(start < 1) start = 1
                end = start + showPageNumber - 1
                if(end > totalPages){
                    end = totalPages
                    start = end - showPageNumber + 1
                    if(start < 1) start = 1
                }
                return{start,end}
            }
        },
        watch: {
            currentPage: {
                handler(newValue, oldValue) {
                    this.ownCurrentPage = newValue
                }
            }
        },
        methods: {
            setPages(p) {
                if(this.ownCurrentPage === p) return
                this.ownCurrentPage = p
                this.$emit("currentChange",p)
            }
        },
    }
</script>

<style lang="less" scoped>
    .pagination {
        button {
            margin: 0 5px;
            background-color: #f4f4f5;
            color: #606266;
            outline: none;
            border-radius: 2px;
            padding: 0 4px;
            vertical-align: top;
            display: inline-block;
            font-size: 13px;
            min-width: 35.5px;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            border: 0;

            &.active {
                background: blue;
                color: white;
                cursor: not-allowed;
            }

            &.disable {
                cursor: not-allowed;
                color: #ccc;
            }
        }
    }
</style>
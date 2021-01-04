<template>
    <div>
        <GoodsClassify></GoodsClassify>
        <List></List>
        <Recommend></Recommend>
        <GoodsRank></GoodsRank>
        <GuessLike></GuessLike>
        <Floor v-for="e in floorArr" :key="e.id" :floor="e"></Floor>
        <Brand></Brand>
    </div>
</template>

<script>
    import List from "./content/List";
    import Recommend from "./content/Recommend";
    import GoodsRank from "./content/GoodsRank";
    import GuessLike from "./content/GuessLike";
    import Floor from "./content/Floor";
    import Brand from "./content/Brand";
    import {mapState} from "vuex"
    export default {
        name: "Home",
        components:{
            List,
            Recommend,
            GoodsRank,
            GuessLike,
            Floor,
            Brand
        },
        computed: {
            ...mapState({
                floorArr : ({home}) => home.floorList
            })
        },
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <Footer v-show="!$route.meta.isShow"></Footer>
    </div>
</template>

<script>
    import Header from "./components/Header/Header";
    import Footer from "./components/Footer/Footer";
    export default {
        name: "App",
        components:{
            Header,
            Footer
        },
        mounted() {
            this.$store.dispatch("categoryArr")
            this.$store.dispatch("bannerArr")
            this.$store.dispatch("floorArr")
            this.$store.dispatch("recommendArr")
        }
    }
</script>

<style scoped>

</style>
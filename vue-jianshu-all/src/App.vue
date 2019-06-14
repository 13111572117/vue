<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    // import footers from './components/footers'
    // import  Home from './components/Head'
    export default {
        name:'app',
    }


</script>

<style>
    /*<style scoped>  scoped css针对当前页面使用*/
    html,body{
        margin: 0;
        padding: 0;
        height: 100%;
    }
    #app{
        height: 100%;
    }
</style>

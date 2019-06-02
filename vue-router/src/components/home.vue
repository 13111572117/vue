<template>
    <div id="home">
        <!--    路由容器-->
        <router-view></router-view>
        <p>我是home按钮</p>
    </div>
</template>
<script>
    export default {
        name: "home"
    }
</script>
<style>
    #home{
        /*padding-top: 200px;*/
        height: 500px;
    }
    #home p{
        float: left;
        width: 100%;
        margin-top: 100px;
    }
</style>
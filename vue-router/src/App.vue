<template>
    <div id="app">
        <!--    路由容器-->
        <header>
            <router-link to="/logo">logo</router-link>
            <router-link to="/home">home按钮</router-link>
            <router-link to="/chat">chat按钮</router-link>
            <router-link to="/text">text按钮</router-link>
            <router-view></router-view>
        </header>
        <footers></footers>
        <mycom2></mycom2>
    </div>
</template>

<script>
    import footers from './components/footers'

    export default {
        name: 'app',
        methods: {
        },
        components: {
            'footers': footers,
            'mycom2':mycom2
        },
        // Vue.component('mycom2',{

    // })
    }
</script>

<style>
    #app {
        width: 100%;
        text-align: center;
        background-color: red;
    }

    #app header {
        height:61px;
        padding-right: 0;
        background-color: darkorange;
    }

    #app header > a {
        text-decoration: none;
        float: left;
        width: 15%;
        padding: 20px 0px 20px 0px;
        background-color: darkorange;
    }

    #app header > a:nth-of-type(1) {
        margin-left: 20%;
        background-color: rgb(143, 226, 208);
    }

    #app header > div {
        float: left;
        background-color: #e2e3dd;
        width: 100%;
    }
</style>

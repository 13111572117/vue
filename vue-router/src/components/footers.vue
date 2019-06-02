<template>
    <div id="app2">
        <p>{{msg}}</p>
    </div>
</template>

<script>
    export default {
        name: "footers",
        data(){
            return{
                msg:'Footer内容'
            }
        }
    }
</script>

<style scoped>
    #app2{
        line-height: 60px;
        float: left;
        background-color: #7b7b7b;
        width: 100%;
        height: 80px;
    }
</style>
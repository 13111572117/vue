<template>
    <div id="nowplaying">
        以下跳转至text按钮

        <ul>
            <li v-for="(item,index) in list" :key="index" @click="handleClick(index)">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
    import router from "../router"
    export default {
        name: "nowplaying",
        data(){
            return{
                list:[
                    'noelearning1',
                    'noelearning2',
                    'noelearning3',
                    'noelearning4',
                ]
            }
        },
        methods:{
            handleClick(index){
                router.push(`/text/${index}`)
                // console.log(index)
            }
        }
    }
</script>

<style scoped>
    #nowplaying{
        width: 100%;
        background-color: aqua;
    }
    #nowplaying ul{
        list-style: none;
        padding: 5px 0 10px 0;
    }
    #nowplaying ul > li {
        margin: 10px 0 10px 0;
        width: 100%;
        border-bottom:1px solid #7b7b7b;
    }
</style>
<template>
    <div id="yigouneirong">
        <Head/>
        <div class="Imgs">
            <img src="../../assets/Qyigouneirong.png" alt="">
        </div>
        <div class="cahngeTab">
            <ul>
                <li v-for="(item,index) in goods" :class="{'isBorder': isShowd === index }" :key="index" @click="changetabs(index)">
                    <router-link to=""><i :class="item.icon"></i>{{item.title}}</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Head from '../Head'
    export default ({
        name:'yigouneirong',
        data(){
            return{
                isShowd:0,
                goods:[
                    {icon:'layui-icon layui-icon-read',title:'文章'},
                    {icon:'layui-icon layui-icon-fire',title:'连载'},
                ]
            }
        },
        methods:{
            changetabs(index){
                this.isShowd=index
            }
        },
        components:{
            Head
        }
    })
</script>

<style scoped>
    #yigouneirong{
        text-align: center;
        width: 65%;
        margin: 80px auto;
    }
    .Imgs img{
        width: 70%;
        height: 105px;
    }
    .cahngeTab{
        margin:20px auto;
        width: 70%;
        padding-bottom: 52px;
        border-bottom: 1px solid #f0f0f0;
    }
    .cahngeTab li{
        font-size: 14px;
        font-weight: 700;
        float: left;
        padding: 20px 30px 12px 30px;
    }
    .cahngeTab li>a{
        color: #969696;
    }
    .cahngeTab i{
        font-size: 16px;
        margin-right: 10px;
    }
    .cahngeTab li:hover{
        border-bottom: 2px solid #333333;
    }
    .isBorder{
        color: #333333;
        border-bottom: 2px solid #333333;
    }
</style>
<template>
    <div id="jianxinLeft">
        <Head/>
       <el-row>
           <el-col :span="6">
               <ul>
                   <router-link v-for="(item,index) in list" :key="index" :to="{path:item.path}">
                        <li :class="{'bgColor':IsShow===index}" @click="changeStyle(index)">
                           <i :class="item.Icon"></i><p>{{item.text}}</p>
                        </li>
                   </router-link>
               </ul>
           </el-col>
           <el-col :span="17" :offset="1">
                <router-view/>
           </el-col>
       </el-row>
    </div>
</template>

<script>
    import Head from '../Head'
    export default ({
        name:'jianxinLeft',
        data(){
            return{
                IsShow:0,
                list:[
                    {path:'jianxinleft',Icon:'el-icon-chat-square',text:'评论'},
                    {path:'jxCont2',Icon:'el-icon-message',text:'简信'},
                    {path:'jxCont3',Icon:'el-icon-upload2',text:'投稿请求'},
                    {path:'jxCont4',Icon:'layui-icon layui-icon-praise',text:'喜欢和赞'},
                    {path:'jxCont5',Icon:'el-icon-star-off',text:'关注'},
                    {path:'jxCont6',Icon:'layui-icon layui-icon-rmb',text:'赞赏和付费'},
                    {path:'jxCont7',Icon:'el-icon-more',text:'其他提醒'},
                ]
            }
        },
        methods:{
            changeStyle(index){
                this.IsShow=index
            }
        },
        components:{
            Head
        }
    })
</script>

<style scoped>
    #jianxinLeft{
        width: 60%;
        /*border: 1px solid #ff4f4c;*/
        margin: 0 auto;
        padding-top: 80px;
    }
    .el-row .el-col-6 li{
        width: 80%;
        padding: 15px 10% 15px 10%;
        color: #333333;
        font-size: 15px;
    }
    .el-row .el-col-6 li i{
        float: left;
        font-size: 24px;
        font-weight: 700;
        margin-right: 15px;
        color: #ea6f5a;
    }
    .el-row .el-col-6 li:hover{
        background-color: #f0f0f0;
        border-radius: 5px;
    }
    .bgColor{
        background-color: #f0f0f0;
    }
</style>
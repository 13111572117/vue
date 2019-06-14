<template>
    <div id="app1">
        <el-row class="maxHeader">
            <el-col :span="4">
                <router-link to="/">
                    <img :style="[headerImg,Center]" src="../assets/images/nav-logo.png" alt="">
                </router-link>
            </el-col>
            <el-col :span="12" :style="headerLheight">
                <el-row :gutter="20">
                    <el-col :span="3" :style="textStyle">
<!--                        <li :class="{'bgcolor1':actives===i}" @click="changeStyle1(i)" >-->
                            <li>
                            <router-link class="layui-icon layui-icon-find-fill" to="/" :style="[fontColor2,textD]">
                            发现</router-link></li>
                    </el-col>
<!--                    <el-col :span="4" :style="textStyle" class="HoverStyle">-->
<!--                        <router-link to="/" class="layui-icon layui-icon-cellphone-fine" :style="[fontColor2,textD]">下载App</router-link>-->
<!--                    </el-col>-->
                    <el-col :span="4" :style="textStyle" class="HoverStyle">
                        <li>
                            <router-link to="/myGuanzhu" class="layui-icon layui-icon-star" :style="[fontColor2,textD]">
                            关注</router-link></li>
                    </el-col>
                    <el-col :span="3" :style="textStyle" class="XiaoXi HoverStyle">
                        <li>
                            <router-link to="/jianxinleft" class="layui-icon layui-icon-notice" :style="[fontColor2,textD]">
                            消息
                            <el-badge :value="3" class="item"/>
                            <template>
                                <ul class="xiaoxi">
                                    <li><i class="el-icon-chat-square"></i><router-link to="">评论</router-link></li>
                                    <li><i class="el-icon-message"></i><router-link to="/jianxin">简信</router-link></li>
                                    <li><i class="el-icon-upload2"></i><router-link to="">投稿请求</router-link></li>
                                    <li><i class="el-icon-star-on"></i><router-link to="">喜欢和赞</router-link></li>
                                    <li><i class="el-icon-s-custom"></i><router-link to="">关注</router-link></li>
                                    <li><i class="layui-icon layui-icon-rmb"></i><router-link to="">赞赏和付费</router-link></li>
                                    <li><i class="el-icon-more"></i><router-link to="">其他提醒</router-link></li>
                                </ul>
                            </template>
                        </router-link></li>
                    </el-col>
                    <el-col :span="8" :offset="1">
                        <el-popover trigger="click">
                            <el-taable id="History">
                                <el-row>
                                    <el-col :span="15">
                                        <p>热门搜索</p>
                                    </el-col>
                                    <el-col :span="9">
                                        <button class="el-icon-refresh-left" @click="changeTab2">换一批</button>
                                    </el-col>
                                    <div style="margin-top: 10px" v-if="shows2 === 'shows3'">
                                        <button :style="mrBtn">区块链</button>
                                        <button :style="mrBtn">小程序</button>
                                        <button :style="mrBtn">vue</button>
                                        <button :style="mrBtn">毕业</button>
                                        <button :style="mrBtn">PHP</button>
                                        <button :style="mrBtn">故事</button>
                                        <button :style="mrBtn">flutter</button>
                                        <button :style="mrBtn">理财</button>
                                        <button :style="mrBtn">没事</button>
                                        <button :style="mrBtn">投稿</button>
                                    </div>
                                    <div style="margin-top: 10px" v-else>
                                        <button :style="mrBtn">手账</button>
                                        <button :style="mrBtn">书法</button>
                                        <button :style="mrBtn">PPT</button>
                                        <button :style="mrBtn">穿塔</button>
                                        <button :style="mrBtn">打碗碗花</button>
                                        <button :style="mrBtn">简书</button>
                                        <button :style="mrBtn">姥姥的澎湖湾</button>
                                        <button :style="mrBtn">设计</button>
                                        <button :style="mrBtn">创业</button>
                                        <button :style="mrBtn">交友</button>
                                    </div>
                                </el-row>
                            </el-taable>
                            <div slot="reference" class="Search3">
                                <input class="Search1 el-icon-search" v-model="input" placeholder="搜索" :style="inputStyle"/>
                                <i class="el-icon-search serch"></i>
                            </div>
                        </el-popover>
                    </el-col>
                </el-row>
            </el-col>
            <el-col span="8" :style="headerLheight">
                <el-row :gutter="20">
                    <el-col :span="3" :offset="2">
                        <el-popover width="236" trigger="click">
                                <div style="border-bottom: 1px solid #eee;z-index: 5;width: 100%;padding:6px 0px 15px 0px">
                                    <p class="el-icon-moon" style="width: 50%;">夜间模式</p>
                                    <el-switch @change="changeStyle($event)" style="float: right;width: 20%" v-model="value" active-color="#409eff" inactive-color="#ff4949"></el-switch>
                                </div>
                                <div style="padding: 10px 10px 10px 10px;" class="familyBtn">
                                    <button class="activebtn" v-for="(item,index) in goods1" :key="index" :class="{'activeBtn':index === checkIndex1}" @click="changeBtn1(index)">{{item.text}}</button>
                                    <button class="activebtn" v-for="(item,index) in goods2" :key="index" :class="{'activeBtn':index === checkIndex2}" @click="changeBtn2(index)">{{item.text}}</button>
                                </div>
                            <el-button style="border: 0;width: 100%;padding-left: 13px" slot="reference"><i :style="[fontSize,Aam]">Aa</i></el-button>
                        </el-popover>
                    </el-col>
                    <el-col :span="4" class="betaBtn" id="layerDemo">
                        <img class="beta" src="../assets/images/beta.png" alt="">
                    </el-col>
<!--                    <el-col :span="4">-->
<!--                        <router-link to="/login-dl" :style="[fontSize,textD]">登陆</router-link>-->
<!--                    </el-col>-->
<!--                    <el-col :span="5">-->
<!--                        <button :style="[buttons1]"><router-link to="/login-zhc" :style="[fontColor,textD]">注册</router-link></button>-->
<!--                    </el-col>-->
                    <el-col :span="6" class="User" :offset="0">
                        <div class="Users">
                            <i class="el-icon-caret-bottom">
                                <img src="../assets/3.jpg" alt="">
                            </i>
                            <template>
                                <ul class="Uhome">
                                    <li><i class="el-icon-s-custom"></i><router-link to="/MyC">我的主页</router-link></li>
                                    <li><i class="el-icon-s-management"></i><router-link to="/shoucang">收藏的文章</router-link></li>
                                    <li><i class="el-icon-star-on"></i><router-link to="/xihuan">喜欢的文章</router-link></li>
                                    <li><i class="layui-icon layui-icon-rmb"></i><router-link to="/yigouneirong">已购内容</router-link></li>
                                    <li><i class="el-icon-bank-card"></i><router-link to="/qianbao">我的钱包</router-link></li>
                                    <li><i class="el-icon-s-tools"></i><router-link to="/mysetting">设置</router-link></li>
                                    <li><i class="el-icon-chat-line-square"></i><router-link to="/bangzhuCont">帮助与反馈</router-link></li>
                                    <li><i class="el-icon-more"></i><router-link to="">退出</router-link></li>
                                </ul>
                            </template>
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-button type="danger" round><router-link to="/write" :style="[fontColor3,textD]">
                            <i class="layui-icon layui-icon-edit"></i>写文章
                        </router-link></el-button>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    // import headerIMG from "./headerIMG";

    export default {
        name: 'app1',
        data(){
            return{
                value:false,
                show:false,
                shows2:'shows3',
                actives:1,
                input:'',
                checkIndex1:1,
                checkIndex2:0,
                goods1:[
                    {text:"宋体"},
                    {text:"黑体"},
                    ],
                goods2:[
                    {text:"简体"},
                    {text:"繁体"}
                ],
                fontColor:{
                    color:'#ff4f4c'
                },
                fontColor3:{
                    color:'#fff'
                },
                Aam:{
                    marginRight:'20px',
                },
                fontSize:{
                    color:'#9b9b9b',
                    fontSize:'15px'
                },
                textD:{
                    fontSize:'15px',
                    textDecoration:'none',
                },
                fontColor2:{
                    display:'block',
                    width:'100%',
                    height:'100%',
                    color:'#3b3b3b'
                },
                Center:{
                    position: 'relative',
                    left:'50%',
                    transform: 'translateX(-50%)',
                },
                headerImg:{
                    width:'100px',
                    height:'56px'
                },
                headerLheight:{
                    lineHeight:'55px',
                },
                inputStyle:{
                    color:'#505050',
                    paddingLeft:'30px',
                    height:'30px',
                    border:'0',
                    marginLeft:'-10%',
                    // backgroundColor:'#eeeeee',
                    borderRadius:'15px',
                    // width:'70%'
                },
                buttons1:{
                    backgroundColor:'#fff',
                    border:'1px solid #ff4f4c',
                    borderRadius:'30px',
                    width:'80px',
                    height:'40px'
                },
                textStyle:{
                    textAlign:'center'
                },
                mrBtn:{
                    fontSize:'10px',
                    marginRight:'15px'
                }
            }
        },
        methods:{
            changeTab2() {
                if(this.shows2=='shows3'){
                    this.shows2=''
                }
                else{
                    this.shows2='shows3'
                }
            },
            // changeStyle1(i) {
            //     this.actives=i
            // },
            changeStyle($event){
                // console.log($event)
                if ($event==true){
                    var div = document.createElement('cover');
                    div.id="cover"
                    div.setAttribute('style','position:fixed;top:0;left:0;outline:5000px solid rgba(0,0,0,0.5);z-index:100;');
                    document.body.appendChild(div);
                }else if($event==false){
                    var div = document.getElementById('cover');
                    div.parentNode.removeChild(div);
                }
            },
            changeBtn1(index) {
                this.checkIndex1 = index
                if(index==0){
                    document.getElementsByTagName("body")[0].className="add_bg";
                }else if(index==1){
                    document.getElementsByTagName("body")[0].className="add_f";
                }
            },
            changeBtn2(index){
                this.checkIndex2 = index
            },
            // opens(){
            //     let _this = this
            //     _this.$layer.iframe({
            //         type:1,
            //         title:'简书下载App',
            //         shadeClose:true,
            //         shade:false,
            //         maxmin:true,
            //         area:['400px,500px'],
            //         content:{
            //             content:headerIMG,
            //             parent:this,
            //             data:[]
            //         }
            //     })
            // }
        },
        components: {

        },
        mounted() {

        }
    }
</script>

<style>
    /*.bgcolor1 a{*/
    /*    color: #ff4f4c;*/
    /*}*/
    #app1{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        /*height: 100%;*/
        background-color: #f1f1f1;
    }
    .maxHeader{
        background-color: #fff;
        border-bottom: 1px solid #eee;
    }
    #History{
        position: absolute;
        top: -10px;
        left: -30%;
        z-index: 5;
        color: #9c9c9c;
        width: 215px;
        padding: 0px 10px 20px 10px;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 0 8px rgba(0,0,0,.1);
    }
    #History .el-col-9 button{
        margin-top: 0px;
        border: 0;
    }
    #History button{
        color: #9c9c9c;
        margin-top: 15px;
        border-radius: 20px;
        padding: 2px 5px 2px 5px;
        background-color: #fff;
        border: 1px solid #9c9c9c;
    }
    .el-row{
        width: 100%;
        /*border-bottom: 1px solid #9b9b9b;*/
        /*height: 58px;*/
    }
    .beta{
        width: 56px;
        height: 25px;
    }
    .serch{
        color: #9c9c9c;
        margin-left: -12%;
    }
    .Search1::-webkit-input-placeholder {
        font-size: 12px;
        color: #9c9c9c;
    }
    .Search1{
        width: 75%;
        background-color: #eee;
    }
    .Search3:hover .serch{
        border-radius: 15px;
        width: 20px;
        height: 20px;
        color: #fff;
        padding: 5px 0px 0px 5px;
        background-color: #9c9c9c;
    }
    .Search3 input:hover{
        width: 90%;
    }
    .xiaoxi ,.Uhome{
        text-align: left;
        position: absolute;
        z-index: 5;
        background-color: #fff;
        display: none;
        width: 190px;
        border-radius: 2px;
        padding-top: 5px;
        padding-bottom: 5px;
        box-shadow: 0 0 8px rgba(0,0,0,.1);
    }
    .xiaoxi li , .Uhome li{
        font-size: 14px;
        width: 80%;
        height: 45px;
        margin-left: 10%;
    }
    .xiaoxi li:hover{
        width: 90%;
        margin-left:0;
        padding-left: 10%;
        background-color: #eeeeee;
    }
    .xiaoxi i ,.Uhome i{
        color: #ff4f4c;
        font-size: 18px;
        margin-right: 20px;
    }
    .XiaoXi :hover .xiaoxi{
        display: block;
        background-color: #fff;
    }
    .item{
        margin: -20px 0 0 -5px;
    }
    .HoverStyle :hover{
        background-color: #f7f7f7;
     }
    .activebtn{
        width: 35%;
        height: 35px;
        border: 1px solid #eee;
        background-color: #fff;
        border-radius: 20px;
    }
    .activeBtn{
        background-color: #6dacf4;
    }
    .familyBtn button:nth-of-type(1),.familyBtn button:nth-of-type(3){
        border-radius:20px 0 0 20px;
        margin-left: 15%;
    }
    .familyBtn button:nth-of-type(2),.familyBtn button:nth-of-type(4){
        margin-top: 20px;
        border-radius: 0 20px 20px 0;
    }
    .activebtn:nth-of-type(1){
        font-family: 宋体;
    }
    .activebtn:nth-of-type(2){
        font-weight: 600;
        font-family: 黑体;
    }
    .add_bg{
        font-family: 宋体;
    }
    .add_f{
        font-family: 黑体;
    }
    .betaBtn>.el-message-box{
        width: 305px;
    }
    .User img{
        width: 42px;
        height: 42px;
        float: left;
        margin-top: -10px;
        border-radius: 50%;
    }
    .User i{
        color: #9c9c9c;
        color: #9c9c9c;
    }
    .Users{
        padding-left: 25px;
    }
    .Users:hover{
        background-color: #eeeeee;
    }
    .Users:hover .Uhome{
        display: block;
    }
    .Uhome {
        margin-left: -25px;
        width: 135px;
    }
    .Uhome li{
        font-size:14px;
        color: #333333;
    }
    .Uhome li:hover{
        width: 90%;
        margin-left: 0;
        padding-left: 10%;
        background-color: #eeeeee;
    }
    .Uhome i{
        margin-right: 10px;
        font-size: 14px;
        color: #ff4f4c;
    }
</style>
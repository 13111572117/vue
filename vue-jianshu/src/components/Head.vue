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
                    <el-col :span="3">
                        <router-link class="el-icon-picture-outline-round" to="/" :style="[fontColor,textD]">首页</router-link>
                    </el-col>
                    <el-col :span="4">
                        <router-link to="/" class="el-icon-download" :style="[fontColor2,textD]">下载App</router-link>
                    </el-col>
                    <el-col :span="12">
                        <input v-model="input" placeholder="搜索" :style="inputStyle"/>
                        <i  class="el-icon-search serch"></i>
                    </el-col>
                </el-row>
            </el-col>
            <el-col span="8" :style="headerLheight">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <i :style="[fontSize,Aam]">Aa</i>
                        <img class="beta" src="../assets/images/beta.png" alt="">
                    </el-col>
                    <el-col :span="4">
                        <router-link to="/login-dl" :style="[fontSize,textD]">登陆</router-link>
                    </el-col>
                    <el-col :span="5">
                        <button :style="[buttons1]"><router-link to="/login-zhc" :style="[fontColor,textD]">注册</router-link></button>
                    </el-col>
                    <el-col :span="5">
                        <el-button type="danger" round><router-link to="/" :style="[fontColor3,textD]">写文章</router-link></el-button>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'app1',
        data(){
            return{
                input:'',
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
                    paddingLeft:'30px',
                    height:'30px',
                    border:'0',
                    backgroundColor:'#eeeeee',
                    borderRadius:'15px',
                    width:'60%'
                },
                buttons1:{
                    backgroundColor:'#fff',
                    border:'1px solid #ff4f4c',
                    borderRadius:'30px',
                    width:'80px',
                    height:'40px'
                }
            }
        },
        methods: {

        },
        components: {

        },
        mounted() {

        }
    }
</script>

<style>

    #app1{
        /*height: 58px;*/
        background-color: #f1f1f1;
    }
    .maxHeader{
        background-color: #fff;
        border-bottom: 1px solid #9b9b9b;
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
        margin-left: -10%;
    }
</style>
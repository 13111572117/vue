<template>
    <div id="login-dl" :style="loginDl">
        <el-row>
            <el-col :span="24">
                <router-link to="/"><img :style="logoStyle" src="../assets/images/nav-logo.png" alt=""></router-link>
            </el-col>
        </el-row>
        <nav class="denglu" :span="4">
            <el-row :style="textAligns">
                <el-col :span="4" :offset="7">
                    <router-link to="/login-dl" :style="dlTitle" class="dl-title">登录</router-link>
                </el-col>
                <el-col :span="2" :style="dian">
                    <p>•</p>
                </el-col>
                <el-col :span="4">
                    <router-link to="/login-zhc" :style="zhcTitle" class="zhuce-tilte">注册</router-link>
                </el-col>
                <el-col :span="16" :offset="4">
                    <el-input :style="sessionem" placeholder="手机号或邮箱" v-model="input3">
                        <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
                    </el-input>
                </el-col>
                <el-col :span="16" :offset="4">
                    <el-input :style="sessionmima" placeholder="手机号" v-model="input3">
                        <i slot="prefix" class="el-input__icon el-icon-phone"></i>
                    </el-input>
                </el-col>
                <el-col :span="16" :offset="4">
                    <el-input :style="sessionmima" placeholder="密码" v-model="input3">
                        <i slot="prefix" class="el-input__icon el-icon-unlock"></i>
                    </el-input>
                </el-col>
                <el-col :span="16" :offset="4">
                    <el-button :style="dlBtn" type="success" round>注册</el-button>
                </el-col>
                <el-col :span="16" :offset="4" class="xieyi">
                    <el-col :span="20" :offset="2"><p>点击 “注册” 即表示您同意并愿意遵守简书</p></el-col>
                    <el-col :span="6" :offset="5"><router-link to="/">用户协议</router-link></el-col>
                    <el-col :span="2"><p>和</p></el-col>
                    <el-col :span="6"><router-link to="/">隐私政策</router-link></el-col>
                </el-col>
                <el-col class="fengexian" :span="16" :offset="4">
                    <el-divider><p>社交帐号直接注册</p></el-divider>
                </el-col>
            </el-row>
            <el-col :span="16" :offset="4" :style="textAligns" class="qqwx">
                <el-col :span="6" :offset="6">
                    <i class="layui-icon layui-icon-login-wechat" style="font-size: 30px;color: #0eba43;"></i>
                </el-col>
                <el-col :span="6">
                    <i class="layui-icon layui-icon-login-qq" style="font-size: 30px;color: #2c95ff;"></i>
                </el-col>
            </el-col>
        </nav>

    </div>
</template>

<script>
    export default {
        name: "login-dl",
        data(){
            return{
                loginDl:{
                    height:'500px'
                },
                logoStyle:{
                    width:'150px',
                    height:'86px'
                },
                textAligns:{
                    textAlign:'center'
                },
                zhcTitle:{
                    borderBottom:'2px solid #ff4f4c',
                    paddingBottom:'5px',
                    textDecoration: 'none',
                    color:'#ff4f4c',
                    fontWeight:'700'
                },
                dlTitle:{
                    textDecoration: 'none',
                    color:'#969696',
                    fontSize: '18px',
                    // fontWeight:'700'
                },
                dian:{
                    color:'#969696',
                    fontSize: '18px',
                    // marginTop:'-20px'
                },
                sessionem:{
                    marginTop:'50px',
                },
                sessionmima:{
                },
                jizhuInput:{
                    width:'6px',
                    height:'6px',
                },
                dlBtn:{
                    marginTop:'30px',
                    width:'100%'
                }
            }
        }
    }
</script>

<style scoped>
    .denglu{
        background-color: #fff;
        margin: 20px auto;
        width: 400px;
        height: 400px;
        padding: 20px 0 80px 0;
        box-shadow: 0 0 8px rgba(0,0,0,.1);
    }
    .zhuce-tilte{
        color: #969696;
        padding-top: 50px;
        font-size: 18px;
    }
    .dl-title p{
        padding-top: 0;
    }
    .dl-title:hover{
        border-bottom: 2px solid #ff4f4c;
        padding-bottom: 5px;
    }
    .fengexian{
        margin-top: 25px;
    }
    .fengexian p{
        color: #9b9b9b;
        font-size: 11px;
    }
    .qita a{
        color: #9b9b9b;
        line-height: 30px
    }
    .qqwx{
        margin-top: 10px;
    }
    .xieyi{
        margin-top: 5px;
        color: #9b9b9b;
        font-size: 12px;
    }
    .xieyi a{
        color: dodgerblue;
    }
</style>
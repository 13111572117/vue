<template>
  <div id="login-dl">
      <el-row>
          <el-col :span="24">
              <router-link to="/"><img :style="logoStyle" src="../assets/images/nav-logo.png" alt=""></router-link>
          </el-col>
      </el-row>
      <nav class="denglu" :span="4">
          <el-row :style="textAligns" class="dl-title">
              <el-col :span="4" :offset="7">
                  <router-link to="/login-dl" :style="dlTitle">登录</router-link>
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
                  <el-input :style="sessionmima" placeholder="密码" v-model="input3">
                      <i slot="prefix" class="el-input__icon el-icon-unlock"></i>
                  </el-input>
              </el-col>
              <el-col :span="16" :offset="4" class="jzw">
                  <el-col :span="6">
                      <p><input :style="jizhuInput" type="text">记住我</p>
                  </el-col>
                  <el-col :span="10" :offset="8">
                      <p>遇到了登录问题?</p>
                  </el-col>
              </el-col>
              <el-col :span="16" :offset="4">
                  <el-button :style="dlBtn" type="primary" round>登录</el-button>
              </el-col>
              <el-col class="fengexian" :span="16" :offset="4">
                  <el-divider><p>社交帐号登录</p></el-divider>
              </el-col>
          </el-row>
          <el-col :span="16" :offset="4" :style="textAligns">
              <el-col :span="6">
                  <i class="layui-icon layui-icon-login-weibo" style="font-size: 30px;color: #ff4f4c;"></i>
              </el-col>
              <el-col :span="6">
                  <i class="layui-icon layui-icon-login-wechat" style="font-size: 30px;color: #0eba43;"></i>
              </el-col>
              <el-col :span="6">
                  <i class="layui-icon layui-icon-login-qq" style="font-size: 30px;color: #2c95ff;"></i>
              </el-col>
              <el-col :span="6" class="qita">
                  <router-link to="/">其他</router-link>
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
                logoStyle:{
                    width:'150px',
                    height:'86px',
                    input3:''
                },
                textAligns:{
                    textAlign:'center'
                },
                dlTitle:{
                    borderBottom:'2px solid #ff4f4c',
                    paddingBottom:'5px',
                    textDecoration: 'none',
                    color:'#ff4f4c',
                    fontWeight:'700'
                },
                zhcTitle:{
                    textDecoration: 'none',
                    color:'#969696',
                    // fontWeight:'700'
                },
                dian:{
                    // marginTop:'-20px'
                },
                sessionem:{
                    marginTop:'50px',
                    // backgroundColor:'#333333',
                },
                sessionmima:{
                    // backgroundColor:'#333333',
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
    #login-dl{
        padding-bottom: 56px;
        /*background-color: #f1f1f1;*/
    }
    .denglu{
        background-color: #fff;
        margin: 20px auto;
        width: 400px;
        height: 450px;
        box-shadow: 0 0 8px rgba(0,0,0,.1);
    }
    .dl-title{
        color: #969696;
        padding-top: 50px;
        font-size: 18px;
    }
    .dl-title p{
        padding-top: 0;
    }
    .zhuce-tilte:hover{
        border-bottom: 2px solid #ff4f4c;
        padding-bottom: 5px;
    }
    .jzw{
        margin-top: 20px;
        font-size: 13px;
    }
    .fengexian{
        margin-top: 30px;
    }
    .qita a{
        color: #9b9b9b;
        line-height: 30px
    }
</style>
<template>
    <div id="Setting1">
        <el-row>
            <div class="setting-tx">
                <el-col :span="5">
                    <img src="../../assets/3.jpg" alt="">
                </el-col>
                <el-col :span="19">
                    <el-button :style="settingBtn">更换头像</el-button>
                </el-col>
            </div>
            <el-col :span="24">
                <div class="setting-name">
                    <el-col :span="5">
                        <p>昵称</p>
                    </el-col>
                    <el-col :span="19">
                        <input type="text" placeholder="这个名字可以用吧">
                    </el-col>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <div class="setting-email">
                <el-col :span="5">
                    <p>电子邮件</p>
                </el-col>
                <el-col :span="19">
                    <router-link to="">
                        <el-button :style="settingBtn" @click="open">点击绑定</el-button>
                    </router-link>
                </el-col>
            </div>
        </el-row>
        <el-row>
            <div class="setting-iphone">
                <el-col :span="5">
                    <p>手机</p>
                </el-col>
                <el-col :span="19">
                    <div class="setting-gh">
                        <b>131*****2117</b>
                        <b class="el-icon-check"> 已验证</b>
                        <span @click="open1"><router-link to="">更换绑定的手机号</router-link></span>
                    </div>
                </el-col>
            </div>
        </el-row>
        <el-row>
            <div class="setting-write">
                <el-col :span="5">
                    <p>常用编辑器</p>
                </el-col>
                <el-col :span="19">
                    <el-radio :style="elRadio" v-model="radio" label="1" fill="#4f4f">富文本</el-radio>
                    <el-radio v-model="radio" label="2">Markdown <i class="el-icon-question"></i></el-radio>
                    <el-col :span="24" class="write">
                        <p style="font-size: 11px;">切换后对新建文章生效</p>
                    </el-col>
                </el-col>
            </div>
        </el-row>
        <el-row>
            <div class="setting-language">
                <el-col :span="5">
                    <p>语言设置</p>
                </el-col>
                <el-col :span="19">
                    <el-radio :style="elRadio" v-model="radio1" label="1">中文简体</el-radio>
                    <el-radio v-model="radio1" label="2">中文繁体</el-radio>
                </el-col>
            </div>
        </el-row>
        <el-row>
            <div class="setting-who">
                <el-col :span="5">
                    <p>接收谁的简信</p>
                </el-col>
                <el-col :span="19">
                    <el-col :span="24">
                        <el-radio :style="elRadio" v-model="radio3" label="1">所有人</el-radio>
                        <el-radio v-model="radio3" label="2">我关注的人、我发过简信的人</el-radio>
                    </el-col>
                </el-col>
            </div>
        </el-row>
        <el-row>
            <div class="setting-up">
                <el-col :span="5">
                    <p>提醒邮件通知</p>
                </el-col>
                <el-col :span="19">
                    <el-radio-group v-model="radio2">
                        <el-radio :style="elRadio" :label="3">所有动态</el-radio>
                        <el-radio :style="elRadio1" :label="6">每天未读汇总</el-radio>
                        <el-radio :style="elRadio1" :label="9">不接收</el-radio>
                    </el-radio-group>
                </el-col>
            </div>
        </el-row>
        <template>
            <el-button :style="[settingBtn,settingBtn2]">保存</el-button>
        </template>
    </div>
</template>

<script>
    export default ({
        name:'Setting1',
        data(){
          return{
              radio: 0,
              radio1: 0,
              radio2: 0,
              radio3: 0,
              settingBtn:{
                    fontSize: '12px',
                    color: '#409EFF',
                    border: '1px solid #409EFF',
                    borderRadius: '20px',
                    backgroundColor: '#fff',
                    padding: '5px 8px 5px 8px',
              },
              settingBtn2:{
                  margin:'30px 0 20px 0',
                  color:'#fff',
                  width:'80px',
                  height:'28px',
                  backgroundColor:'#409EFF'
              },
              elRadio:{
                  width:'20%',
              },
              elRadio1:{
                  // width:'35%'
                  marginLeft:'25px'
              }
          }
        },
        components:{

        },
        methods: {
            open() {
                this.$alert('<div style="width: 90%;border-top: 1px solid #C9C9C9;padding-top:25px;"/>' +
                    '<i style="position: absolute;top:43px;left: 15%;font-size: 20px;color: #969696" class="el-icon-message"></i>' +
                    '<input style="background-color: #eee;width:65%;margin-left:11%;padding: 10px 0 10px 50px;border: 1px solid #9b9b9b;border-radius: 5px 5px 0 0" type="text" placeholder="请输入你的常用邮箱"><br>' +
                    '<i style="position: absolute;top:80px;left: 15%;font-size: 20px;color: #969696" class="layui-icon layui-icon-auz"></i>' +
                    '<input style="background-color: #eee;width:65%;margin-left:11%;padding: 10px 0 10px 50px;border: 1px solid #9b9b9b;border-radius: 0 0 5px 5px" type="text" placeholder="验证码">' +
                    '<button style="padding:8px 20px 8px 20px;border: 0;font-size: 13px;color: #fff;border-radius: 30px;background-color:#409EFF;margin-left: -30%">' +
                    '发送验证码</button>',
                    '绑定邮箱', {
                    dangerouslyUseHTMLString: true
                });
            },
            open1() {
                this.$alert('<div style="border-top: 1px solid #C9C9C9;width: 80%;padding:10px 11% 15px 11%;font-size: 12px;color: #9c9c9c"><p>根据国家法律要求，目前只支持国内手机号。绑定遇到问题？<a style="color: #409EFF" href="">点击查看帮助</a></p></div>' +
                    '<i style="position: absolute;top:90px;left: 15%;font-size: 20px;color: #969696" class="layui-icon layui-icon-cellphone"></i>' +
                    '<input style="background-color: #eee;width:65%;margin-left:11%;padding: 10px 0 10px 50px;border: 1px solid #9b9b9b;border-radius: 5px 5px 0 0" type="text" placeholder="手机号"><br>' +
                    '<i style="position: absolute;top:130px;left: 15%;font-size: 20px;color: #969696" class="layui-icon layui-icon-auz"></i>' +
                    '<input style="background-color: #eee;width:65%;margin-left:11%;padding: 10px 0 10px 50px;border: 1px solid #9b9b9b;border-radius: 0 0 5px 5px" type="text" placeholder="短信验证码">' +
                    '<button style="padding:8px 20px 8px 20px;border: 0;font-size: 13px;color: #fff;border-radius: 30px;background-color:#409EFF;margin-left: -30%">' +
                    '发送验证码</button>',
                    '绑定手机', {
                        dangerouslyUseHTMLString: true
                    });
            }
        }
    })
</script>

<style scoped>
    .write p{
        margin-top: 10px;
    }
    #Setting1 p{
        font-size: 15px;
        color: #969696;
    }
    .el-row:nth-of-type(1){
        padding-top: 0;
    }
    .el-row{
        padding: 20px 0 20px 0;
        border-bottom: 1px solid #eeeeee;
    }
    .el-row:nth-of-type(7){
        border-bottom: 0;
    }
    .setting-tx{
        line-height: 80px;
    }
    .setting-tx img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .setting-name{
        line-height: 30px;
        padding: 20px 0 0 0;
    }
    .setting-name input{
        padding: 5px 10px;
        font-size: 15px;
        border-radius: 4px;
        border: 1px solid #c8c8c8;
        background-color: hsla(0,0%,71%,.1);
    }
    .setting-name input::-webkit-input-placeholder{
        color: #333333;
        font-size: 13px;
    }
    .setting-email{
        line-height: 30px;
    }
    .setting-iphone b{
        float: left;
        font-weight: 600;
        margin-right: 15px;
    }
    .setting-iphone b:nth-of-type(2){
        font-size: 12px;
        margin-top: 3px;
        color: #969696;
    }
    .setting-iphone span{
        font-size: 12px;
        color: #969696;
        display: none;
    }
    .setting-iphone:hover .setting-gh span{
        display: block;
    }
    .setting-write .el-col-5{
        padding-top: 10px;
    }
</style>
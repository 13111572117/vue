<template>
    <div id="Setting2">
        <el-row>
            <div class="setting-xinbie">
                <el-col :span="5">
                    <p>性别</p>
                </el-col>
                <el-col :span="19">
                    <el-radio-group v-model="radio">
                        <el-radio :style="elRadio" :label="3">男</el-radio>
                        <el-radio :style="elRadio" :label="6">女</el-radio>
                        <el-radio :style="elRadio" :label="9">保密</el-radio>
                    </el-radio-group>
                </el-col>
            </div>
        </el-row>
        <el-row>
            <div class="setting-jianjie">
                <el-col :span="5">
                    <p>个人简介</p>
                </el-col>
                <el-col :span="19">
                    <input type="text" placeholder="填写你的个人简介">
                </el-col>
            </div>
        </el-row>
        <el-row>
            <div class="setting-myweb">
                <el-col :span="5">
                    <p>个人网站</p>
                </el-col>
                <el-col :span="19">
                    <input type="text" placeholder="http://你的网站">
                </el-col>
                <el-col :span="24">
                    <p :style="Rp">填写后会在个人主页显示图标</p>
                </el-col>
            </div>
        </el-row>
        <el-row>
            <div class="setting-mywx">
                <el-col :span="5">
                    <p>微信二维码</p>
                </el-col>
                <el-col :span="12">
                    <el-button :style="[settingBtn]">更换图片</el-button>
                </el-col>
                <el-col :span="7">
                    <p :style="Rp">上传后会在个人主页显示图标</p>
                </el-col>
            </div>
        </el-row>
        <el-row>
            <div class="setting-myzhanghao">
                <el-col :span="5">
                    <p>社交帐号</p>
                </el-col>
                <el-col :span="19">
                    <p :style="Rp">你可以通过绑定的社交帐号登录简书。出于安全因素, 你最初用来创建账户的社交帐号不能移除。</p>
                    <p :style="Rp" style="margin-top: 10px">
                        如果帐号被占用，你可以在
                        <router-link to="" :style="Rp" style="color: #409EFF">简书帐号绑定解绑相关问题汇总</router-link>
                        中获得相关帮助。
                    </p>
                    <ul>
                        <li :style="settingBd" v-for="(item,index) in list" :key="index">
                            <router-link :to="{path: item.path}">
                                <i :class="item.Icon">{{item.WenziTu}}{{item.Jia}}</i>{{item.text}} <a class="el-icon-arrow-right"></a>
                            </router-link>
                        </li>
                    </ul>
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
        name:'Setting2',
        data(){
            return{
                radio: 0,
                list:[
                    {path:'Setting2',Icon: 'layui-icon layui-icon-login-weibo',text:'绑定微博'},
                    {path:'Setting2',Icon: 'layui-icon layui-icon-login-wechat',text:'绑定微信'},
                    {path:'Setting2',Icon: 'layui-icon layui-icon-login-qq',text:'绑定QQ'},
                    {path:'Setting2',Icon: '',WenziTu:'豆',text:'绑定豆瓣'},
                    {path:'Setting2',Icon: '',WenziTu:'G',Jia:'+',text:'绑定Google+'},
                ],
                settingBtn:{
                    fontSize: '12px',
                    color: '#409EFF',
                    border: '1px solid #409EFF',
                    borderRadius: '20px',
                    backgroundColor: '#fff',
                    padding: '5px 8px 5px 8px',
                },
                settingBtn2:{
                    margin:'30px 0 50px 0',
                    color:'#fff',
                    width:'80px',
                    height:'28px',
                    backgroundColor:'#409EFF'
                },
                elRadio:{
                    width:'20%',
                },
                Rp:{
                    fontSize:'11px'
                },
                settingBd:{
                    padding:'15px 0 15px 0',
                    borderBottom:'1px solid #eeeeee'
                },
            }
        },
        components:{

        }
    })
</script>

<style scoped>
    #Setting2 p {
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
    .el-row:nth-of-type(5){
        border-bottom: 0;
    }
    .setting-jianjie input{
        width: 97%;
        padding: 10px 0 80px 3%;
        font-size: 15px;
        border: 1px solid #c8c8c8;
        border-radius: 4px;
        background-color: hsla(0,0%,71%,.1);
        display: block;
        resize: none;
        outline-style: none;
    }
    .setting-myweb input::-webkit-input-placeholder ,.setting-jianjie input::-webkit-input-placeholder{
        color: #969696;
    }
    .setting-myweb p{
        line-height: 37px;
    }
    .setting-myweb .el-col-24 , .setting-myweb .el-col-7{
        text-align: right;
    }
    .setting-myweb input{
        width: 97%;
        padding: 10px 0 10px 3%;
        font-size: 15px;
        border: 1px solid #c8c8c8;
        border-radius: 4px;
        background-color: hsla(0,0%,71%,.1);
        display: block;
        resize: none;
        outline-style: none;
    }
    .setting-myzhanghao ul>li>a>i{
        color: #ff4f4c;
        margin-right: 25px;
    }
    .setting-myzhanghao ul>li:nth-of-type(2) i{
        color: #42c02e;
    }
    .setting-myzhanghao ul>li:nth-of-type(3) i{
        color: #3194d0;
    }
    .setting-myzhanghao ul>li:nth-of-type(4) i{
        color: #42c02e;
    }
    .setting-myzhanghao ul>li:nth-of-type(5) i{
        color: #ec6149;
    }
    .setting-myzhanghao ul>li>a{
        font-size: 13px;
        color: #333333;
    }
</style>
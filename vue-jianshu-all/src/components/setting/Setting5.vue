<template>
    <div id="Setting5">
        <el-row>
            <div class="setting-RMB">
                <el-col :span="5">
                    <p>打包下载文章</p>
                </el-col>
                <el-col :span="19">
                    <el-button :style="[settingBtn]">下载所有文章</el-button>
                </el-col>
            </div>
        </el-row>
        <el-row>
            <div class="setting-splice">
                <div v-if="isShows">
                    <el-col :span="24">
                        <h3>永久删除帐号</h3>
                        <ul v-for="(item,index) in list" :key="index">
                            <li>{{item.text}}<router-link to="">{{item.a}}</router-link></li>
                        </ul>
                    </el-col>
                    <el-button :style="[settingBtn]" @click="isSwitch">保留我的账号</el-button>
                    <el-button :style="[settingBtn,settingBtn1]" @click="SpliceArt">删除账号</el-button>
                </div>
                <el-col v-else :span="24">
                    <button class="Splice" to="" @click="isSwitch">
                        <router-link to="">删除帐号 <i class="el-icon-arrow-down"></i></router-link>
                    </button>
                </el-col>
            </div>
        </el-row>
    </div>
</template>

<script>
    export default ({
        name:'Setting5',
        data(){
            return{
                radio: 0,
                radio1: 0,
                radio2: 0,
                radio3: 0,
                isShows:false,
                list:[
                    {text:'如果你不小心创建出了多余的帐号，或在绑定帐号的时候提示帐号被占用，你可以在中获得相关帮助。',a:'简书帐号绑定解绑相关问题汇总'},
                    {text:'如果你对简书上的某些内容、功能或社区规则不满意，你可以在向我们提出。',a:'帮助与反馈页'},
                    {text:'删除帐号前，请确保已经没有任何公开或私密文章，且钱包中全部余额已清零。',a:''},
                    {text:'删除帐号是不可逆的操作，删除后将无法恢复。',a:''},
                ],
                settingBtn1:{
                    border:'1px solid #ea6f5a',
                    color:'#ea6f5a'
                },
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
        methods:{
            isSwitch(){
                this.isShows=!this.isShows
            },
            SpliceArt(){
                alert("请确认你确实要删除你的账户，此操作无法恢复")
            }
        },
        components:{

        }
    })
</script>

<style scoped>
    .write p{
        margin-top: 10px;
    }
    #Setting5 p ,a{
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
    .el-row:nth-of-type(2){
        border-bottom: 0;
    }
    .setting-splice h3{
        font-size: 18px;
    }
    .setting-splice li>a{
        color: #409EFF;
        font-size: 14px;
    }
    .setting-splice ul>li{
        color: #333333;
        margin: 15px 0 0 15px;
        font-size: 14px;
        list-style: initial;
    }
    .setting-splice .el-button{
        margin-top:30px
    }
    .Splice{
        border: 0 ;
        background-color: #fff;
    }
</style>
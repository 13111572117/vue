<template>
    <div id="Setting4">
        <el-row>
            <div class="setting-RMB">
                <el-col :span="5">
                    <p>赞赏功能</p>
                </el-col>
                <el-col :span="19">
                    <el-radio :style="elRadio" v-model="radio" label="1" fill="#4f4f">开启</el-radio>
                    <el-radio v-model="radio" label="2">关闭</el-radio>
                    <el-col :span="24" class="write">
                        <p style="font-size: 12px;">开启后赞赏按钮将出现在你的文章底部</p>
                    </el-col>
                </el-col>
            </div>
        </el-row>
        <el-row>
            <div class="setting-cont">
                <el-col :span="5">
                    <p>赞赏描述	</p>
                </el-col>
                <el-col :span="19">
                    <input type="text">
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
        name:'Setting4',
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

        }
    })
</script>

<style scoped>
    .write p{
        margin-top: 10px;
    }
    #Setting4 p{
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
    .setting-cont input{
        width: 90%;
        padding: 10px 5% 50px 5%;
    }
</style>
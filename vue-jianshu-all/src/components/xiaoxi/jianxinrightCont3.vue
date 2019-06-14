<template>
    <div id="jxCont3">
        <el-row>
            <el-col :span="24"><b>全部投稿请求</b></el-col>
            <el-col :span="24">
                <router-link to="">
                    <el-col :span="3" :offset="1">
                        <div class="sahngchuan">
                            <i class="el-icon-upload2"></i>
                        </div>
                    </el-col>
                    <el-col :span="20">
                        <p>全部未处理请求</p>
                    </el-col>
                </router-link>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
    #jxCont3 img{
        /*display: block;*/
        /*margin: 150px auto;*/
        /*margin-bottom: 20px;*/
        /*width: 100px;*/
        /*height: 86px;*/
    }
    #jxCont3 b{
        font-size: 14px;
        color: #333333;
    }
    #jxCont3 .el-col-24:nth-of-type(1){
        padding-bottom: 20px;
        border-bottom: 1px solid #f0f0f0;
        margin-bottom: 20px;
    }
    .sahngchuan{
        width: 48px;
        height: 48px;
        text-align: center;
        border: 1px solid #f4f4f4;
        border-radius: 4px;
    }
    #jxCont3 .el-col-24:nth-of-type(2) i{
        margin-top: 14px;
        font-size: 25px;
        color: #ea6f5a;
        display: block;
    }
    #jxCont3 .el-col-24:nth-of-type(2) p{
        line-height: 48px;
        font-size: 15px;
        color: #333333;
    }
</style>
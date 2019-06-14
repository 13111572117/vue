<template>
    <div id="jxCont2">
        <el-row>
            <el-col :span="24"><b>我的简信</b></el-col>
            <el-col :span="24">
                <router-link to="">
                    <el-col :span="3" :offset="1">
                        <img src="../../assets/img/link.jpg" alt="">
                    </el-col>
                    <el-col :span="20">
                        <el-col :span="19">
                            <h3>简宝玉</h3>
                        </el-col>
                        <el-col :span="5">
                            <h4>06.08 12:36 <i class="el-icon-arrow-down"></i></h4>
                        </el-col>
                        <el-col :span="24">
                            <p>欢迎加入丰富多彩的原创内容社区—简书。新手有关简书的任何疑问请点击链接查看 http://ww...</p>
                        </el-col>
                    </el-col>
                </router-link>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
    #jxCont2 img{
        /*display: block;*/
        /*margin: 150px auto;*/
        /*margin-bottom: 20px;*/
        /*width: 100px;*/
        /*height: 86px;*/
    }
    #jxCont2 b{
        font-size: 14px;
        color: #333333;
    }
    #jxCont2 .el-col-24:nth-of-type(1){
        padding-bottom: 20px;
        border-bottom: 1px solid #f0f0f0;
        margin-bottom: 20px;
    }
    #jxCont2 .el-col-24:nth-of-type(2) img{
        width: 48px;
        height: 48px;
        border-radius: 24px;
    }
    #jxCont2 .el-col-24:nth-of-type(2) h3{
        font-size: 15px;
        color: #333333;
    }
    #jxCont2 .el-col-24:nth-of-type(2) h4{
        font-size: 13px;
        color: #969696;
    }
    #jxCont2 .el-col-24:nth-of-type(2) p{
        font-size: 12px;
        color: #999999;
    }
    #jxCont2 .el-col-24:nth-of-type(2) .el-col-20{
        margin-top: 5px;
    }
</style>
<template>
    <div id="jxCont1">
        <el-row>
            <el-col :span="24"><b>收到的评论</b></el-col>
            <el-col :span="24">
                <img src="../../assets/icon_nocontent-png.png" alt="">
                <b>这里还木有内容哦~</b>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
    #jxCont1 img{
        display: block;
        margin: 150px auto;
        margin-bottom: 20px;
        width: 100px;
        height: 86px;
    }
    #jxCont1 b{
        font-size: 14px;
        color: #333333;
    }
    #jxCont1 .el-col-24:nth-of-type(2){
        text-align: center;
    }
</style>
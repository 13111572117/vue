<template>
    <div id="jxCont4">
        <el-row>
            <el-col :span="24"><b>全部关注</b></el-col>
            <el-col :span="24">
                <img src="../../assets/icon_nocontent-png.png" alt="">
                <b>这里还木有内容哦~</b>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
    #jxCont4 img{
        display: block;
        margin: 150px auto;
        margin-bottom: 20px;
        width: 100px;
        height: 86px;
    }
    #jxCont4 b{
        font-size: 14px;
        color: #333333;
    }
    #jxCont4 .el-col-24:nth-of-type(2){
        text-align: center;
    }
</style>
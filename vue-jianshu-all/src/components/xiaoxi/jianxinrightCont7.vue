<template>
    <div id="jxCont3">
        <el-row>
            <el-col :span="24"><b>全部投稿请求</b></el-col>
            <el-col :span="24">
                <p class="fontStyle"><i class="layui-icon layui-icon-diamond"></i>你的简书会员已过期，点
                    <router-link to="">续费或查看更多</router-link></p>
                <el-col :span="24">
                    <p class="fontStyle2">2019.06.14 17:00</p>
                </el-col>
            </el-col>
            <el-col :span="24">
                <p class="fontStyle"><i class="layui-icon layui-icon-diamond"></i>的简书会员将于 5 天后 (2019-06-14 12:36) 过期，点击
                    <router-link to="">续费或查看更多</router-link></p>
                <el-col :span="24">
                    <p class="fontStyle2">2019.06.09 04:04</p>
                </el-col>
            </el-col>
            <el-col :span="24">
                <p class="fontStyle"><i class="layui-icon layui-icon-diamond"></i>你已成功购买简书会员，本次购买时间为0个月 (31天为1个月)，你的简书会员将于 2019-06-14 12:36 过期，点击
                    <router-link to="">续费或查看更多
                </router-link></p>
                <el-col :span="24">
                    <p class="fontStyle2">2019.06.07 12:36</p>
                </el-col>
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
    .fontStyle{
        margin: 10px 0 10px 20px;
        font-size: 15px;
        color: #333333;
    }
    .fontStyle i{
        margin-right: 5px;
        font-size: 20px;
        float: left;
        color: #ff4f4c;
    }
    .fontStyle a{
        color: #2D93CA;
    }
    .fontStyle2{
        margin-left: 20px;
        font-size: 12px;
        color: #969696;
    }
</style>
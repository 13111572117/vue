<template>
    <div class="zhengge">
        <div class="yiwen">
            <el-row>
                <el-col :span="8">
                    <img src="../../assets/Qyiwen.png">
                </el-col>
                <el-col :span="16" style="margin-top: 10px">
                    <p>还没解决你的疑问？</p>
                    <a href="">去反馈&nbsp;&nbsp;></a>
                </el-col>

            </el-row>
            <div class="fenge">
                <el-divider></el-divider>
                <p>帐户冻结、文章锁定问题，请邮件联系 </p>
                <p>help@jianshu.com</p>
                <el-divider></el-divider>
                <p>程序/功能问题、bug 反馈，可添加“简</p>
                <p>书专题社群委员会委员长”微信号</p>
                <p>Jianshu_dama，备注“Web公测”，加群</p>
                <p>第一时间获得帮助。</p>
                <el-divider></el-divider>
                <p>也可以<a href="">联系我们&nbsp;&nbsp;></a></p>
            </div>

        </div>

    </div>

</template>


<script>


</script>

<style scoped>
    .zhengge {
        margin-top: 20px;
        width: 100%;
        height: 100%;
        margin-left: 15%;;
    }
    .yiwen img{
        width: 60px;
        height: 55px;
    }
    .yiwen p {
        font-size: 14px;
        color: #333333;
    }

    .yiwen a {
        font-size: 14px;
        color: #3194d0;
        text-decoration: none;
    }

</style>
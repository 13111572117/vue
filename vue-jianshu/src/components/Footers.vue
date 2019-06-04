<template>
    <div class="footers">
        <el-row>
            <el-col :span="2">
                <div class="biaoqian1">
                    <a href="">关于简书</a>

                </div>
            </el-col>
            <el-col :span="2">
                <div class="biaoqian1">
                    <a href="">联系我们</a>

                </div>
            </el-col>
            <el-col :span="2">
                <div class="biaoqian1">
                    <a href="">加入我们</a>

                </div>
            </el-col>
            <el-col :span="2">
                <div class="biaoqian1">
                    <a href="">简书出版</a>

                </div>
            </el-col>
            <el-col :span="2">
                <div class="biaoqian1">
                    <a href="">品牌与徽标</a>

                </div>
            </el-col>
            <el-col :span="2">
                <div class="biaoqian1">
                    <a href="">帮助中心</a>

                </div>
            </el-col>
            <el-col :span="2">
                <div class="biaoqian1">
                    <a href="">合作伙伴</a>

                </div>
            </el-col>

        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="biaoqian2">
                    <p style="font-size:13px;float:left;color:rgb(180,180,187);margin: 15px 0 10px 0">©2012-2019 上海佰集信息科技有限公司 / 简书 /
                        沪ICP备11018329号-5 /<img src="../assets/images/1.png">沪公网安备31010402002252号 /</p>

                </div>
            </el-col>

        </el-row>
        <el-row>

            <p style="font-size:13px;float:left;color:rgb(180,180,187)"><img src="../assets/images/2.png">简书网举报电话：021-34770013
                /<img src="../assets/images/3.png"></p>
        </el-row>


    </div>


</template>
<script>
    export default {
        name: "footers"
    }
</script>
<style>
    .footers {
        padding-left: 20%;
        width: 80%;
        height: 120px;
        margin: 50px auto;
    }

    .biaoqian1 a {
        color: rgb(202, 202, 210);
        list-style: none;
        float: left;
        text-decoration: none;

    }


</style>
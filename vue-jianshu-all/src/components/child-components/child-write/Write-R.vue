<template>
    <div id="writeR">
        <div style="height:auto;border: 0">
            <el-row class="timeTitle">
                <el-col :span="21" :offset="1">
                    <h2>2019-06-04</h2>
                </el-col>
                <el-col :span="2">
                    <h2>已保存</h2>
                </el-col>
            </el-row>
            <el-row class="heard">
                <el-col :span="18" :offset="1">
                    <ul>
                        <li><p>B<i class="el-icon-caret-bottom"></i></p></li>
                        <li><i class="el-icon-picture"></i></li>
                        <li><p>H1<i class="el-icon-caret-bottom"></i></p></li>
                        <li><i class="el-icon-minus"></i></li>
                        <li><i class="layui-icon layui-icon-link"></i></li>
                        <li><i class="layui-icon layui-icon-play"></i></li>
                        <li><i class="el-icon-sort"></i></li>
                        <li><i class="el-icon-refresh-left"></i>
                            <i class="el-icon-caret-bottom"></i></li>
                        <li><i class="layui-icon layui-icon-log"></i></li>
                        <li><i class="layui-icon layui-icon-speaker"></i></li>
                    </ul>
                </el-col>
                <el-col :span="1">
                    <i class="el-icon-document-checked"></i>
                </el-col>
                <el-col :span="1">
                    <i class="el-icon-rank"></i>
                </el-col>
                <el-col :span="3">
                    <button class="el-icon-right fabuBtn">发布文章</button>
                </el-col>
            </el-row>
        </div>
        <div style="height:80%">
            <textarea type="text" placeholder="内容"></textarea>
        </div>
    </div>
</template>

<script>

    export default ({
        name:'writeR',
        data(){
            return{
                // date:new Date()
            }
        },
        mounted() {
            let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
            this.timer = setInterval(() => {
                _this.date = new Date(); // 修改数据date
            }, 1000)
        },
        beforeDestroy() {
            if (this.timer) {
                clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
            }
        },
        components:{
        }
    })
</script>

<style>
    #writeR{
        height: 100%;
    }
    .timeTitle{
        color: #505050;
        font-size: 20px;
        padding: 20px 0px 20px 0;
     }
    .timeTitle .el-col-2{
        position: absolute;
        right: 5px;
        top: 0;
        text-align: right;
        font-size: 9px;
    }
    .heard{
        line-height: 10px;
        background-color: #dddddd;
        padding: 10px 0 10px 0;
        font-size: 13px;
    }
    .heard li{
        color: #747474;
        width: 50px;
        float: left;
    }
    .fabuBtn{
        background-color: #dddddd;
        border: 0;
    }
    #writeR textarea{
        background-color: #eeeeee;
        padding:20px 20px 10px 20px;
        width: 95%;
        max-height: 100%;
        height: 100%;
        border: 0;
    }
</style>

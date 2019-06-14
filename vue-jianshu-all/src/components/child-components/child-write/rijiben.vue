<template>
    <div id="rijiben">
        <template>
            <button class="el-icon-circle-plus xinjianBtn">新建日记</button>
        </template>
        <div v-for="(item,index) in xjWz" :key="index">
            <el-row>
                <el-col :span="5">
                    <i class="layui-icon layui-icon-file"></i>
                    <p>字数:0</p>
                </el-col>
                <el-col :span="16">
                    <p>2019-06-05</p>
                </el-col>
                <el-col :span="2" :offset="1">
                    <i @click="sWz(index)" class="el-icon-s-tools"></i>
                </el-col>
            </el-row>
        </div>
        <template>
            <button @click="xjWzBtn" class="layui-icon layui-icon-add-1 xjBtn">在下方新建日记</button>
        </template>
    </div>
</template>

<script>
    export default({
        name:'rijiben',
        data(){
            return{
                xjWz:[1],
            }
        },
        methods:{
            xjWzBtn(){
                this.xjWz.push(1);
            },
            sWz(index){
                this.xjWz.splice(index, 1)
            }
        }
    })
</script>

<style scoped>
    .xinjianBtn{
        text-align: left;
        background-color: #eeeeee;
        font-weight: 500;
        color: #505050;
        padding-left: 20px;
        width: 100%;
        height: 58px;
        border: 0;
    }
    .el-row{
        padding: 20px 0 0 0;
        height: 100px;
        border: 1px solid #d1d1d1;
        border-left:5px solid #ff7954;
        background-color: #dfdfdf;
    }
    .el-col-5{
        margin-top: 15px;
        text-align: center;
    }
    .el-col-5 i{
        color: #9c9c9c;
        font-size: 30px;
    }
    .el-col-5 p{
        font-size: 13px;
        color: #505050;
    }
    .el-col-16{
        font-size: 18px;
    }
    .el-col-2{
        color: #505050;
        line-height: 60px;
    }
    .xjBtn{
        text-align: left;
        background-color: #eeeeee;
        border: 0;
        width: 100%;
        color: #9c9c9c;
        font-size: 12px;
        font-weight: 600;
        padding: 20px 0 20px 20px;
    }
</style>
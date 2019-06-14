<template>
    <div id="writeC">
        <el-row>
            <el-col :span="6">
                <router-view></router-view>
            </el-col>
            <el-col :span="18">
                <Write-R/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import WriteR from "./child-write/Write-R"
    export default ({
        name:'writeC',
        components:{
            WriteR
        }
    })
</script>

<style scoped>
    #writeC{
        height: 100%;
        /*border: 1px solid blue;*/
    }
    #writeC .el-row , .el-col-6 , .el-col-18{
        height: 100%;
        background-color: #eeeeee;
        border-right: 1px solid #9c9c9c;
    }
</style>

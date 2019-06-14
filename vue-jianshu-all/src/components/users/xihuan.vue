<template>
<div>
    <Head/>
    <div style="width:70%;margin:0 auto;
    margin-top:60px;">
        <el-row :gutter="20">
            <el-col :span="16"><div class="grid-content bg-purple">
                <ConterH></ConterH>
                <ConterL2></ConterL2>
                </div>
            </el-col>
            <el-col :span="8"><div class="grid-content bg-purple-light">
                <ConterR></ConterR>
                </div>
            </el-col>
        </el-row>
    </div>
</div>
</template>
<script>
    import Head from '../Head'
import ConterH from './conter-H'
import ConterL2 from './conter-L2'
import ConterR from './conter-R'
export default {
    name:'app',
    components:{
        Head,
        ConterH,
        ConterR,
        ConterL2,
    }
    
}
</script>
<style lang="scss" scoped>


 
</style>



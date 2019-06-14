<template>
<div id="MyC">
    <Head/>
    <div style="width:70%;margin:0 auto;
    margin-top:60px;">
        <el-row :gutter="20">
            <el-col :span="16"><div class="grid-content bg-purple">
                <ConterH></ConterH>
                <ConterL></ConterL>
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
import ConterL from './conter-L'
import ConterR from './conter-R'
export default ({
    name:'MyC',
    components:{
        Head,
        ConterH,
        ConterR,
        ConterL,
    }
    
})
</script>
<style lang="scss" scoped>


 
</style>



<template>
    <div id="bangzhuCont">
        <Head/>
        <el-row>
            <el-col :span="16">
                <Remenwenti/>
            </el-col>
            <el-col :span="8">
                <Youceneironrg/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import  Head from '../Head'
    import Remenwenti from './remenwenti'
    import Youceneironrg from './youceneirong'
    export default ({
        name:"bangzhuCont",
        components:{
            Remenwenti,
            Youceneironrg,
            Head
        }
    })
</script>

<style scoped>
    #bangzhuCont{
        padding-top: 80px;
        width: 65%;
        margin: 0 auto;
    }
</style>
<template>
    <div id="qianbao">
        <Head/>
        <div class="qianbao">
            <el-row>
                <el-col :span="8" :style="boDer">
                    <el-col :span="8" style="margin-left: -35px"><img src="../../assets/3.jpg" alt=""></el-col>
                    <el-col :span="16" :style="names">
                        <router-link to="" :style="namesA">这个名字可以用吧</router-link>
                        <p :style="namesP">已绑定手机</p>
                    </el-col>
                </el-col>
                <el-col :span="8" :style="boDer">
                    <div class="zhanghu"><p>账户余额</p><b>0</b><b>.00元</b></div>
                    <div class="yue">
                        <button>体现</button>
                        <p><i class="">*</i>当前余额不足</p>
                    </div>
                </el-col>
                <el-col :span="8" :style="boDer1">
                    <li class="userwenti" v-for="(item,index) in list" :key="index">
                        <p>{{item.textP}}</p><router-link to="">{{item.textA}}</router-link>
                    </li>
                </el-col>
            </el-row>
            <div class="userTl">
                <el-row>
                    <el-col :span="4" :style="userTable">
                        <p>时间</p>
                    </el-col>
                    <el-col :span="2" :style="userTable">
                        <p>类型</p>
                    </el-col>
                    <el-col :span="12" :style="userTable">
                        <p>详情</p>
                    </el-col>
                    <el-col :span="2" :style="userTable">
                        <p>金额</p>
                    </el-col>
                    <el-col :span="4" :style="userTable1">
                        <p>状态</p>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import Head from '../Head'
    export default ({
        name:'qianbao',
        data(){
            return {
                list:[
                    {textP:'每次提现最小额度为￥100.00',textA:''},
                    {textP:'提现会在 3-5 个工作日内到账',textA:''},
                    {textP:'结算后的收益，提现不再收取手续费',textA:''},
                    {textP:'',textA:'收入结算与提现常见问题'},
                ],
                boDer:{
                    paddingLeft:'5%',
                    borderRight:'1px solid #969696'
                },
                boDer1:{
                    paddingLeft:'5%',
                },
                names:{
                    padding:'15px 10% 0 0',
                },
                namesA:{
                    fontSize: '21px',
                    color: '#333333'
                },
                namesP:{
                    fontSize:'14px',
                    color:'#969696'
                },
                userTable:{
                    paddingLeft:'20px',
                    borderRight:'1px dashed #969696'
                },
                userTable1:{
                    paddingLeft:'20px',
                }
            }
        },
        methods:{

        },
        components:{
            Head
        }
    })
</script>

<style scoped>
    #qianbao{
        margin: 80px auto;
        width: 65%;
    }
    .qianbao img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .zhanghu p{
        margin-top: 8px;
        font-size: 16px;
        color: #969696;
        float: left;
        width: 30%;
    }
    .zhanghu b:nth-of-type(1){
        font-size: 28px;
    }
    .zhanghu b{
        font-size: 18px;
        color: #333333;
    }
    .yue{
        margin-top: 20px;
    }
    .yue button{
        float: left;
        background-color: #fff;
        color: #42c02e;
        border: 1px solid #42c02e;
        font-size: 17px;
        padding: 4px 25px 4px 25px;
        margin-right: 20px;
        border-radius: 25px;
    }
    .yue p{
        line-height: 33px;
        font-size: 13px;
        color: #969696;
    }
    .userwenti{
        line-height: 20px;
        font-size: 13px;
        color: #969696;
    }
    .userwenti a{
        color: #3194d0;
    }
    .userTl{
        border: 1px solid #DCDCDC;
        margin-top: 50px;
        border-radius: 6px 6px 0 0;
        padding: 30px 0 30px 0px;
    }
</style>
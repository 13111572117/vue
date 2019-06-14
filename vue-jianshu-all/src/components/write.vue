<template>
    <div id="write">
        <el-row>
            <el-col :span="4" id="writeL">
                <template>
                        <button class="layui-btn-radius layui-btn-primary fanhuiBtn">
                            <router-link to="/" style="background-color: #494949">返回首页</router-link>
                        </button>
                </template>
                <template>
                    <div class="tabTitle">
                        <button class="showcontBtn" @click="showCont">
                            <router-link to="/write" style="background-color: #494949"><i class="layui-icon layui-icon-add-1 jia"></i>新建文集</router-link>
                        </button>
                        <div class="xinJian" v-if="show1">
                            <input @keyup.enter="addItem" v-model="msg" type="text" placeholder="请输入文集名...">
                            <div>
                                <button @click="addItem">提交</button>
                                <button @click="showCont">取消</button>
                            </div>
                        </div>
                        <router-link to="/rijiben" class="gaoliang">
                            日记本<i class="layui-icon layui-icon-set-fill">
<!--                                    <div v-if="show2">-->
<!--                                        <button>删除</button>-->
<!--                                        <button>修改</button>-->
<!--                                    </div>-->
                                </i>
                        </router-link>
                        <router-link to="/suibi" class="gaoliang">
                            随笔<i class="layui-icon layui-icon-set-fill">
<!--                                    <div v-if="show2">-->
<!--                                        <button>删除</button>-->
<!--                                        <button>修改</button>-->
<!--                                    </div>-->
                                </i>
                        </router-link>
                        <router-link class="gaoliang" v-for="(item, index) in items" :key="index" to="/write">
                            {{item}}<i @click="shezhiBtn" class="layui-icon layui-icon-set-fill">
                                        <div v-if="show2">
                                            <button @click="removeItem(index)">删除</button>
                                            <button>修改</button>
                                        </div>
                                    </i>
                        </router-link>
                    </div>
                </template>
                <template>
                    <el-row style="height: auto" class="tabFooter">
                        <el-col :span="14">
                            <router-link to="/" style="background-color: #494949"><i class="layui-icon layui-icon-set-sm"></i>设置</router-link>
                        </el-col>
                        <el-col :span="10">
                            <router-link to="/" style="background-color: #494949">遇到问题<i class="layui-icon layui-icon-survey"></i></router-link>
                        </el-col>
                    </el-row>
                </template>
            </el-col>
            <el-col :span="20">
                <WriteC/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import WriteC from './child-components/Write-C'

    export default ({
        name:'write',
        data(){
            return{
                tabPosition:'left',
                show1:false,
                shows:0,
                show2:false,
                items:[],
                msg:''
            }
        },
        methods:{
            changeTab(index){
                this.shows = index;
            },
            addItem(){
                this.items.push(this.msg)
                this.msg = ''
                },
            removeItem(index){
                this.items.splice(index, 1)
            },
            showCont(){
                this.show1 = !this.show1
            },
            shezhiBtn(){
                this.show2 = !this.show2
            }
        },
        components:{
            // WriteL,
            WriteC,
        }
    })
</script>

<style scoped>
    #write{
        height: 100%;
    }
    #write .el-row ,.el-col{
        height: 100%;
    }
    #writeL{
        height: 100%;
        margin: 0 auto;
        background-color: #494949;
    }
    .fanhuiBtn{
        width: 80%;
        height: auto;
        margin: 30px 0 30px 10%;
        padding: 5px 0 5px 0;
        color: #ff4f4c;
        background-color: #494949;
        border: 1px solid #ff4f4c;
    }
    .tabTitle{
        height: 82%;
    }
    .showcontBtn{
        text-align: left;
        width: 80%;
        background-color: #494949;
        border: 0;
        color: #fff;
        font-size: 13px;
    }
    .tabTitle a{
        height: 20px;
        padding: 5px 10% 5px 10%;
        margin: 0 0 0px 0;
        display: block;
        width: 80%;
        font-size: 13px;
        font-weight: 500;
        color: #eee;
    }
    .router-link-active{
        background-color: #9b9b9b;
        color: #ff4f4c;
    }
    .xinJian{
        width: 80%;
        padding: 0px 10px 10px 25px;
    }
    .xinJian input{
        width: 100%;
        padding: 3px 0 3px 5px;
        background-color: #595959;
        border: 1px solid #363636;
        border-radius: 2px;
    }
    .xinJian input::-webkit-input-placeholder {
        font-size: 12px;
        color: #9c9c9c;
    }
    .xinJian button{
        margin: 20px 50px 10px 0px;
        font-size: 13px;
        border-radius: 15px;
        padding: 3px 8px 3px 8px;
        background-color: #494949;
    }
    .xinJian button:hover{
        background-color: #5d5d5d;
    }
    .xinJian button:nth-of-type(1){
        color: #42c02e;
        border: 1px solid #42c02e;
    }
    .xinJian button:nth-of-type(2){
        color: #999999;
        border: 0;
    }
    .gaoliang:hover{
        background-color: #9b9b9b;
    }
    .jia{
        font-weight: 900;
    }
    .gaoliang i{
        line-height: 20px;
        display: none;
        font-size: 13px;
        margin-right: -10px;
        color: #eee;
        float: right;
    }
    .gaoliang i div{
        position:absolute;
        margin-top: -20px;
        margin-left: -70px
    }
    .gaoliang i button{
        border: 1px solid #999999;
        border-radius: 2px;
        margin-right: 2px;
        padding: 0 3px 0 3px;
        background-color: #eeeeee;color: #999999;
    }
    .gaoliang i button:hover{
        background-color: #999999;
        color: #fff;
    }
    .gaoliang:hover i{
        display: block;
    }
    .tabFooter{
        width: 100%;
        /*margin-top:100%;*/
        padding: 5px 0 5px 5%;
    }
    .tabFooter a ,i{
        font-weight: 500;
        font-size: 13px;
        color: #9b9b9b;
    }
    .tabFooter i{
        margin:0 5px 0 5px;
    }
</style>

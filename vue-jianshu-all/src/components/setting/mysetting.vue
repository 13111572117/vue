<template>
    <div id="mysetting">
        <Head/>
        <el-row>
            <el-col :span="5" :offset="3" id="setingTitle">
                <ul>
                    <li v-for="(set,index) in sets" :key="index" :class="{'actives':index === isActives}" @click="changeTabs(index)">
                        <router-link :to="{path:set.path}"><p><i :class="set.iClass"></i></p>{{set.title}}</router-link>
                    </li>
                </ul>
            </el-col>
            <el-col :span="15" :offset="1" id="settingContent">
                <router-view/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Head from '../Head'
    export default ({
        name:'mysetting',
        data() {
            return{
                isActives:0,
                    sets: [
                        {path: 'mysetting', iClass: 'el-icon-set-up', title: '基础设置'},
                        {path: 'Setting2', iClass: 'el-icon-user', title: '个人资料'},
                        {path: 'Setting3', iClass: 'el-icon-warning-outline', title: '黑名单'},
                        {path: 'Setting4', iClass: 'layui-icon layui-icon-rmb', title: '赞赏设置'},
                        {path: 'Setting5', iClass: 'el-icon-s-tools', title: '账号管理'},
                    ]
            }
        },
        methods:{
            changeTabs(index){
                this.isActives=index;
            }
        },
        components:{
            Head,
        }
    })
</script>

<style scoped>
    #mysetting{
        width: 65%;
        margin: 0 auto;
        padding-top: 70px;
    }
    #setingTitle li>a{
        display: block;
        font-size: 15px;
        color: #333333;
        padding: 12px 0 12px 15px;
        border-radius: 5px;
    }
    #setingTitle li>a:hover{
        background-color: #f0f0f0;
    }
    #setingTitle a>p{
        text-align: center;
        float: left;
        position: relative;
        margin-right: 15px;
        transform: translateY(-10%);
        width: 28px;
        height: 28px;
        border-radius: 5px;
        background-color: #a0a0a0;
    }
    #setingTitle i{
        line-height: 28px;
        font-size: 16px;
        color: #fff;
    }
    .actives{
        background-color: #f0f0f0;
        color: #ff4f4c;
    }
    #settingContent{

    }
</style>
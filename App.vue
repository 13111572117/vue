<template>
    <div id="app">
        <p v-text="msg" v-bind:style="[styleTitle]"></p>
        <input @keyup.enter="addItem" class="tjinput" type="text" v-model="itemLabel" placeholder="请输入你要执行的事件"/>
        <button class="tjbtn" @click="addItem">提交</button>
<!--        {{itemLabel}}-->
        <ol>
            <li v-for="(item, index) in items" :key="index">
                <p v-if="!item.isEdit">{{item.label}}</p>
                <input v-else type="text" v-model="item.label"
                       v-on:keyup.enter="item.isEdit = !item.isEdit"/>
                <button @click="ulItem(index)">删除</button>
                <button @click="item.isEdit = !item.isEdit">修改</button>
            </li>
        </ol>
    </div>
</template>
<script>
    // import HelloWorld from './components/HelloWorld.vue'
    export default {
        data: () => ({
            itemLabel: '',
            isEdit: false,
            msg:'欢迎使用TODOlist应用',
            items: [
                // {
                // label: '买菜',
                // isEdit: false
            // }, {
            //     label: '打游戏',
            //     isEdit: false
            // }, {
            //     label: '学习Vue',
            //     isEdit: false
            // },
            ],
            styleTitle:{
                'text-align':'center',
                color:'#9c9c9c',
                fontSize:'35px'
            }
        }),
        methods: {
            addItem: function () {
                // this.items.push(this.itemLabel),
                // console.log("this",this)
                this.items.push({
                    label: this.itemLabel,
                    //   check: false,
                    isEdit: false
                })
                this.itemLabel = ''
            },
            ulItem(index) {
                this.items.splice(index, 1)
            }
        },
        components: {}
    }
</script>

<style>
    #app{
        margin: 0 auto;
        width: 500px;
        border: 1px solid red;
        padding-bottom: 35px
    }
    .tjinput{
        padding:0 30px 0 30px;
        font-size: 18px;
        border-radius: 5px;
        border: 1px solid #9c9c9c;
        height: 35px;
        background-color: #fdffdc;
        margin: 20px 10px 20px 20px;
        width: 70%;
    }
    .tjbtn{
        color: #fff;
        height: 35px;
        background-color: #ff4f4c;
        border: 1px solid #ff4f4c;
        border-radius: 2px;
    }
    #app li > input{
        width: 60%;
    }
    #app li > button{
        margin: 0 20px 0 20px;
    }
</style>

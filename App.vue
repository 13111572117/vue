<template>
    <div id="app">
        <input type="text" v-model="itemLabel"/>
        <button @click="addItem">提交</button>
<!--        {{itemLabel}}-->
        <ol>
            <li v-for="(item, index) in items" :key="index">
                <p v-if="!item.isEdit">{{item.label}}</p>
                <input v-else type="text" v-model="item.label"
                       v-on:keyup.enter="item.isEdit = !item.isEdit"/>
                <button @click="ulItem(index)">X</button>
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
            items: [{
                label: '买菜',
                // isEdit: false
            }, {
                label: '打游戏',
                // isEdit: false
            }, {
                label: '学习Vue',
                // isEdit: false
            },]
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

</style>

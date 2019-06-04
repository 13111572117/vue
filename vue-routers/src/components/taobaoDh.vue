<template>
  <div id="tabao" :style="footerDh">
      <ul>
        <li class="layui-col-xs3">
            <router-link to="/First" @click="changeTab">
                <i class="layui-icon layui-icon-home"></i>首页</router-link>
        </li>
          <li class="layui-col-xs3">
              <router-link to="/shop" @click="changeTab">
                  <i class="layui-icon layui-icon-cart"></i>购物车</router-link>
          </li>
          <li class="layui-col-xs3">
              <router-link to="/form" @click="changeTab">
                  <i class="layui-icon layui-icon-form"></i>订单列表</router-link>
          </li>
          <li class="layui-col-xs3">
              <router-link to="/user" @click="changeTab">
                  <i class="layui-icon layui-icon-user"></i>我的淘宝</router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'tabao',
  props: {
    msg: String
  },
    data(){
      return{
          shows:1,
          footerDh:{
              width:'100%',
              height:'80px',
              backgroundColor:'#eeeeee',
              position:'fixed',
              bottom:'0'
          }
      }
    },
    methods:{
        changeTab(index){
          this.shows=index;
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #tabao li{
        margin-top: 10px;
        font-size: 20px;
    }
    #tabao i{
        width: 100%;
        display: block;
        font-size: 25px;
    }
    #tabao p{
        color: #363636;
        display: block;
        width: 100%;
    }
    .router-link-active{
        color: #ff4f4c;
    }
</style>

<template>
  <div id="app">
    <router-view class="texts"/>
    <taobaoDh/>
  </div>
</template>

<script>
  import TaobaoDh from "./components/taobaoDh"

  export default ({
    data(){
      return{

      }
    },
    components:{
      TaobaoDh
    }
  })
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  #app{
    width: 100%;
    height: 500px;
  }
  .texts{
    width: 100%;
    height: 500px;
  }
</style>

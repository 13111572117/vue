<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <taobao-dh msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TaobaoDh from '../components/taobaoDh'

export default {
  name: 'home',
  components: {
    TaobaoDh
  }
}
</script>

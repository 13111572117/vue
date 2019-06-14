<template>
  <div id="app">
      <Head/>
      <ConterL/>
      <ConterR/>
<!--      <router-view/>-->
  </div>
</template>

<script>
import ConterL from './conter-L'
import ConterR from './conter-R'
import Head from '../Head'

export default {
  name: 'app',
  components: {
    ConterL,
    ConterR,
      Head
  }
}
</script>

<style scoped>
    #app{
        padding-top: 100px;
      width: 80%;
      margin: 0 auto;
    }
    ConterL{
      width: 80%;
    }
    ConterR{
      width: 20%
    }
</style>
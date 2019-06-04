<template>
    <div id="app2">
        <Head/>
        <contents></contents>
        <Footers/>
    </div>
</template>

<script>
    import Head from './Head'
    import contents from './contents'
    // import contentRight from './contentRight'
    import Footers from './Footers'

    export default {
        name: "Home",
        components: {
            Head,
            Footers,
            contents,
            // contentLeft
        }
    }
</script>

<style scoped>
    .cont{
        width: 80%;
        height: auto;
         margin: 0 auto;
    }
    .cont1{
        margin-left: 5%;
        float: left;
        width: 50%;
        height: 1500px;
        border: 1px solid red;
    }
    .cont2{
        float: right;
        width: 30%;
    }
</style>
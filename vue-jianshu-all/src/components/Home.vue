<template>
    <div id="app2">
        <Head/>
        <contents/>
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
    html,body{
        margin: 0;
        padding: 0;
        height: 100%;
    }
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
    contents{
        width: 80%;
    }
    Footers{
        width: 80%;
    }
</style>
<template>
    <div id="text">
        我是text内容--{{$route.params.id}}
    </div>
</template>

<script>
    export default {
        name: "chat"
    }
</script>

<style scoped>
    #text{
        line-height: 500px;
    }
</style>
<template>
    <div id="text">
        我是text按钮--{{$route.params.id}}
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
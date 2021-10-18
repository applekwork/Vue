<template>
    <div>
        <h2>我是About页面</h2>
        <h3>传递数据:{{$route.query.id}}</h3>
    </div>
</template>

<script>
export default {
    name:'About'
}
</script>
<style lang="css">
    h2{
        color: red;
    }
</style>
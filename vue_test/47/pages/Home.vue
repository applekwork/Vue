<template>
    <div>
        <h2>我是Home页面</h2>
        <h2>{{id}}</h2>
    </div>
</template>

<script>
export default {
    name:'Home',
    props:['id']
}
</script>
<style lang="css">
    h2{
        color: red;
    }
</style>
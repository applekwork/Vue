<template>
    <div>
        <input type="checkbox" checked>
        <span>{{todoobj.name}}</span>
        <button>删除</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        props:['todoobj']
    }
</script>

<style lang="scss" scoped>

</style>
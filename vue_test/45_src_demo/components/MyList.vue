<template>
    <div>
        <MyItem v-for="todoobj in todolist" :key="todoobj.id" :todoobj="todoobj" />
    </div>
</template>

<script>
import MyItem from './MyItem.vue'
    export default {
        components:{
            MyItem
        },
        props:['todolist']
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
        <MyHeader :addtodo="addtodo" />
        <MyList :todolist="todolist" />
        <MyFooter/>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'
import nanoid from 'nanoid'
    export default {
        name:'App',
        components:{
            MyHeader,
            MyList,
            MyFooter
        },
        data(){
           return {
               todolist:[
                {id:'001',name:'吃饭',check:true},
                {id:'002',name:'睡觉',check:true},
                {id:'003',name:'打豆豆',check:false},
            ]}
        },
        methods:{
            addtodo(X){
                this.todolist.unshift(X)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
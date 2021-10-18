<template>
    <div class="header">
        <input type="text" placeholder="请输入你的任务名称,按回车键确认" v-model="title" @keyup.enter="add">
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
    export default {
        data(){
            return {
                title:''
            }
        },
        methods:{
            add() {
                if(!this.title.trim()) return alert('输入内容不能为空！')
                const obj = {id:nanoid(),name:this.title,check:false}
                this.addtodo(obj)
            }
        },
        props:['addtodo']

    }
</script>

<style scoped>
    .header input {
        width: 230px;
        border: 1px solid gray;
        border-radius: 2px;
    }

</style>
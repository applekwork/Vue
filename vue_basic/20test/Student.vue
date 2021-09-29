<template>
  <div>
      <h2>学生姓名{{studentname}}</h2>
      <h2>学生年龄{{studentage}}</h2>
  </div>
</template>

<script>
export default {
    name:'student',
    data() {
        return {
            studentname:'张三',
            age:18
        }
    },
}
</script>

<style>
    .demo{
        background-color: aquamarine;
    }
</style>
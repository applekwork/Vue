<template>
<div>
    <div>
        <button>点我切换About<router-link to="/about?id=36">About</router-link></button>
        <button>点我切换Home<router-link :to="{
            name:'home',
            query:{
                id:'我要传递参数给home'
            }
        }">Home</router-link></button>
    </div>
    <div class="container">
         <router-view></router-view>
    </div>
</div>
</template>

<script>
import About from './pages/About.vue'
import Home from './pages/Home.vue'

export default {
    name: 'App',
    components: {
        About,
        Home
    },
    activated() {

    },
    deactivated() {
        
    },
}
</script>

<style>
.container {
    background-color: aquamarine;
    width: 200px;
    height: 200px;
}
</style>

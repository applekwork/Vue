import VueRouter from "vue-router"
import About from './pages/About.vue'
import Home from './pages/Home.vue'

export default new VueRouter({
    routes: [{
            path: '/about',
            component: About
        },
        {
            name:'home',
            path: '/home',
            component: Home,
            props($route) {
                return {
                    id:$route.query.id
                }
            }
        }
    ]
})
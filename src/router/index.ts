import Vue from 'vue'
import VueRouter from 'vue-router'
import Money from '@/views/Money.vue'

Vue.use(VueRouter)

const routes=[
    {
        path:'/money',
        name:'Money',
        component:Money
    }
]

const router = new VueRouter({
    routes
})

export default router

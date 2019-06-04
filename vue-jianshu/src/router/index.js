import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import LoginDl from '../components/login-dl'
import LoginZhc from '../components/login-zhc'
import Tuijianzuozhe from '../components/tuijianzuozhe'

Vue.use(VueRouter)

export default new VueRouter ({
    mode:'history',
    routes:[
        // {
        //     path:'/',
        //     redirect:'/Home'
        // },
        {
            path:'/login-dl',
            component:LoginDl,
        },
        {
            path:'/login-zhc',
            component:LoginZhc,
        },
        {
            path: '/',
            component:Home
        },
        {
            path:'/tuijianzuozhe',
            component:Tuijianzuozhe
        }
    ]
})
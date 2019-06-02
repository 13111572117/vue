import Vue from 'vue'
import VueRouter from 'vue-router'
import Logo from '../components/logo'
import Home from '../components/home'
import Chat from '../components/chat'
import Text from '../components/text'
import NowPlaying from '../components/nowplaying'
import NowLearning from '../components/nowlearning'

Vue.use(VueRouter)

export default new VueRouter ({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect: {name:'logo'}
            // redirect:'/home'
        },
        {
            path:'/logo',
            component: Logo,
            name:'logo'
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'/',
                    redirect: 'now-playing'
                },
                {
                    path:'now-playing',
                    component:NowPlaying
                },
                {
                    path:'now-learning',
                    component:NowLearning
                },
            ]
        },
        {
            path:'/chat',
            component:Chat
        },
        {
            path:'/text/:id',
            component:Text
        }
    ]
})
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import VideosList from "@/components/videos-list/videos-list"

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home,
        children: [{
            path: '/videos-list',
            name: 'VideosList',
            component: VideosList,
        }]
    }]
})
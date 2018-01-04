import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/index'
import Home from '@/components/home/Home.vue'
import Travel from '@/components/travel/Travel.vue'
import Show from '@/components/show/Show.vue'
import Beautiful from '@/components/beautiful/Beautiful.vue'
import Skill from '@/components/skill/Skill.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',

            component: HelloWorld,
            children: [{
                    path: '/',
                    name: 'Home',
                    component: Home
                },
                {
                    path: '/travel',
                    name: 'Travel',
                    component: Travel
                },
                {
                    path: '/show',
                    name: 'Show',
                    component: Show
                },
                {
                    path: '/beautiful',
                    name: 'Beautiful',
                    component: Beautiful
                },
                {
                    path: '/skill',
                    name: 'Skill',
                    component: Skill
                }
            ]
        },

    ]
})
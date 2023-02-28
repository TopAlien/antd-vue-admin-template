import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'newRouter',
        redirect: '/title',
        meta: { title: '仪表盘', keepAlive: true, icon: 'a-icon', },
        children: [
            {
                path: 'ahaha',
                name: 'ahaha1231',
                component: () => import('components/HelloWorld.vue'),
                meta: { title: '分析页1', keepAlive: true }
            },
            {
                path: 'https://pro.loacg.com/docs/getting-started',
                name: 'docs',
                meta: {
                    title: '文档',
                    target: '_blank'
                }
            },
            {
                path: "title",
                name: 'router-name',
                meta: { title: 'test' },
                children: [
                    {
                        path: 'ahaha123',
                        name: 'ahaha',
                        component: () => import('components/PageU.vue'),
                        meta: { title: '分析页2123' }
                    }
                ]
            }
        ]
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

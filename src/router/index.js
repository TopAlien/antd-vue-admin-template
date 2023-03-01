import { createRouter, createWebHistory } from "vue-router";

export const routes = [
    {
        path: '/',
        name: 'Root',
        redirect: '/welcome',
        component: () => import('layout/index.vue'),
        children: [
            {
              path: 'welcome',
              name: 'Welcome',
              component: () => import('pages/welcome/index.vue'),
              meta: {
                  title: "Welcome",
                  hideInMenu: true
              }
            },
            {
                path: 'https://www.antdv.com/components/button-cn',
                name: 'AntdDocs',
                meta: {
                    title: 'AntdVue文档',
                    target: '_blank'
                }
            },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('pages/login/index.vue'),
        meta: {
            title: "Login",
            hideInMenu: true
        }
    },
    // {
    //     path: '/:pathMatch(.*)*',
    //     name: 'NotFound',
    //     component: () => import('pages/exception/404.vue'),
    //     meta: {
    //         title: '404',
    //         hideInMenu: true
    //     }
    // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

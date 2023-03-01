export const getUserMenu = () => {
    return new Promise((resolve) => {
        const menu = [
            {
                path: "exception",
                name: 'Exception',
                redirect: '/exception/404',
                meta: {
                    title: '异常管理'
                },
                children: [
                    {
                        path: '404',
                        name: 'Exception404',
                        component: 'exception/404.vue',
                        meta: { title: '404' }
                    },
                    {
                        path: '401',
                        name: 'Exception401',
                        component: 'exception/401.vue',
                        meta: { title: '401' }
                    }
                ]
            }
        ]
        setTimeout(() => {
            resolve(menu)
        }, 500)
    })
}

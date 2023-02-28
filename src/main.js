import { createApp } from 'vue'

import ProLayout, { PageContainer } from '@ant-design-vue/pro-layout'
import router from '@/router/index.js'
import './permission'
import App from './App.vue'

import '@ant-design-vue/pro-layout/dist/style.css'
import './styles/style.css'
import './styles/cover_antd.css'

const app = createApp(App)

app.use(router)
.use(ProLayout)
.use(PageContainer)
.mount('#app')

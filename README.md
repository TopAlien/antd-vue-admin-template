# Vue3 + Vite + Antd-Vue3 + Pinia + Vue-Router

## 其他配置已完成
- [x] antd-vue v3按需加载
- [x] vite版动态路由
- [x] git提交规范

## 动态路由权限
- 动态路由无需创建router配置
- 根据页面配置信息约定页面配置（1、指定页面文件目录位置；2、指定路由path等）

## antd-pro-layout补充文档 
- 详见： https://www.npmjs.com/package/@ant-design-vue/pro-layout
- router 必须在根目录 / 下children中定义 详见pro-layout源码
```js
  import { getMenuData, clearMenuItem } from '@ant-design-vue/pro-layout';
const getMenuData = (routes) => {
    const childrenRoute = routes.find((route) => route.path === "/");
    const breadcrumb = {};
    return {
        menuData: formatRelativePath((childrenRoute == null ? void 0 : childrenRoute.children) || [], breadcrumb),
        breadcrumb
    };
};

const { menuData } = getMenuData(clearMenuItem(router.getRoutes()));
```

- pro-layout菜单配置项 详见可参考 clearMenuItem 方法, router配置暂时不清楚 有无其他配置
```js
const menusDataItem = {
    path: "title", // 可以是站外全url, 例: https://baidu.com
    name: 'router-name',
    meta: { 
        title: 'test',
        hideInMenu: true, // 菜单栏中隐藏
    },
    children: [
        {
            path: 'ahaha123', // 可带可不带 /
            name: 'ahaha',
            component: () => import('components/PageU.vue'),
            meta: { title: '分析页2123', keepAlive: true }
        }
    ]
}
```

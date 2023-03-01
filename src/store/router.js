import router, { routes } from "@/router/index.js";
import { defineStore } from 'pinia'
import { getUserMenu } from "@/service/user.js";
import { shallowRef } from "vue";

// 导入pages需要匹配的文件夹
const constantRouterComponents = import.meta.glob('../pages/**/*.vue', {
  eager: true,
});

const complementComponent = (componentKey) => {
  const key = `../pages/${componentKey}`;
  return (constantRouterComponents[key] || {}).default
};

const _generatorRoutes = (routesArr) => {
  return (routesArr || []).map((item) => {

    const { icon } = item.meta || {};
    const currentRouter = {
      path: item.path,
      name: item.name || '',
      component: shallowRef(complementComponent(item.component)),
      meta: {
        ...item.meta,
        icon: icon || undefined
      },
    };

    // 为了防止出现后端返回结果不规范，处理有可能出现拼接出两个 反斜杠
    if (!currentRouter.path.startsWith('http')) {
      currentRouter.path = currentRouter.path.replace('//', '/');
    }

    item.redirect && (currentRouter.redirect = item.redirect);
    if (item.children && item.children.length > 0) {
      currentRouter.children = _generatorRoutes(item.children);
    }
    return currentRouter;
  });
};

const useAsyncRouesStore = defineStore('asyncRoutes', {
  state: () => ({ asyncRoutes: [], isSyncRoutes: false }),
  actions: {
    async generateRoutes() {
      const data = await getUserMenu()
      this.asyncRoutes = _generatorRoutes(data)
    },
    async addRoute() {
      await this.generateRoutes();

      if(this.asyncRoutes && this.asyncRoutes.length <= 0) {
        return
      }

      let rootRoute = routes.find(item => item.path === '/')
      rootRoute.children.push(...this.asyncRoutes)

      await router.addRoute(rootRoute);
      this.isSyncRoutes = true;
    }
  }
})

export default useAsyncRouesStore

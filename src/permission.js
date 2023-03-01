import router from "@/router/index.js"
import useAsyncRouesStore from "@/store/router.js"
import { getToken } from "utils/storage.js";

const whiteList = ['/login']

router.beforeEach(async(to, from, next) => {
  document.title = to.meta.title || ''

  if(getToken()) {
    if(to.path === '/login') {
      next({ path: '/' })
    } else {
      const asyncRouesStore = useAsyncRouesStore()
      if (asyncRouesStore.isSyncRoutes) {
        next()
      } else {
        try {
          await asyncRouesStore.addRoute();

          next({ ...to, replace: true })
        } catch (error) {
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    if(whiteList.includes(to.path)) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})

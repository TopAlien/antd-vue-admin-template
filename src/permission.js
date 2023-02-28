import router from "@/router/index.js";

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || ''

  next()
})

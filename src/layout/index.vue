<template>
  <pro-layout
      title="哇咔咔"
      v-bind="layoutConfig"
      v-model:openKeys="state.openKeys"
      v-model:collapsed="state.collapsed"
      v-model:selectedKeys="state.selectedKeys"
  >
    <router-view />
  </pro-layout>
</template>

<script setup>
  import { reactive } from "vue";
  import { useRouter } from "vue-router";
  import { getMenuData, clearMenuItem } from '@ant-design-vue/pro-layout';

  const router = useRouter()
  const { menuData } = getMenuData(clearMenuItem(router.getRoutes()));

  const state = reactive({
    collapsed: false,
    openKeys: ['/title'],
    selectedKeys: ['/title/ahaha123'],
  })

  const layoutConfig = reactive({
    navTheme: 'light',
    headerTheme: 'light',
    layout: 'mix',
    splitMenus: false,
    menuData,
  });
</script>

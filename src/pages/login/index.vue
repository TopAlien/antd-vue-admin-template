<template>
  <div>
    <a-button @click="login">login</a-button>
  </div>
</template>

<script setup>
  import { useRouter } from "vue-router";
  import { setToken } from "utils/storage.js";

  const router = useRouter()
  const login = () => {
    router.push({ path: '/welcome' })
    setToken('asdhakshdaksdhuquouwqeqwe')
  }
</script>

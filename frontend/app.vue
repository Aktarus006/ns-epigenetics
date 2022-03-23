<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  {{ user }}
</template>

<script setup lang="ts">
import { useUserStore } from './store/authStore'

const user = useUserStore()

</script>

<style>
@import '~/assets/styles/main.css';
</style>

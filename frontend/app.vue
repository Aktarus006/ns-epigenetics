<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  {{ user }}
</template>

<script setup lang="ts">

const user = useStrapiUser()

</script>

<style>
@import '~/assets/styles/main.css';
</style>

<template>
  <div class="relative">
    <HeaderSection />
    <section p="t-24">
      <slot />
    </section>
  </div>
</template>

<style scoped>
  body {
    -webkit-font-smoothing: antialiased;
  }
  html, body {
    margin: 0;
    padding: 0;
  }
</style>

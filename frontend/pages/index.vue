<template>
  <div>
    <div v-for="product in products.data" :key="product.id">
      <nuxt-link :to="`/products/${product.id}`">
        <h1 font="bold">
          {{ product.attributes.Title }}
        </h1>
        {{ product.attributes.Description }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const { data: products } = await useFetch('http://localhost:1337/api/products')
</script>

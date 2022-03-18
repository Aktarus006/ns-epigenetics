<script setup>
const route = useRoute()
const id = route.params.id
const { data: product } = await useFetch(`http://localhost:1337/api/products/${id}`)

</script>

<template>
  {{ product.data.attributes.Title }}
</template>

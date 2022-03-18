<template>
  <header z="50" fixed w="full" p="y-2" bg="red-800" >
    <div grid="~ gap-6 cols-12" w="full" p="x-4" m="x-auto" class="items-center">
      <div class="col-span-3">
        <nuxt-link to="/">
          <Logo h="20" p="y-2" />
        </nuxt-link>
      </div>
      <div class="col-span-6" >
        <NavBar md="block" />
      </div>
      <div justify="end" class="flex col-span-3 items-center">
        <CartInfo />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

const user = useStrapiUser()
const router = useRouter()
const { login, logout } = useStrapiAuth()

const loading = ref(false)
const form = reactive({ identifier: '', password: '' })

const onSubmit = async() => {
  loading.value = true

  try {
    await login(form)
    router.push('/authenticated')
  }
  catch (e) {}

  loading.value = false
}

const onLogout = async() => {
  try {
    await logout()
    router.push('/')
  }
  catch (e) {}
}

</script>

<template>
  <nav>
    <ul flex="~ col" justify="center" text="center" md="flex-row" class="items-center gap-6" text-decoration="none">
      <li text="xl teal-800" font="bold" transition="colors" hover="text-teal-500" class="tracking-tighter">
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </li>
      <li text="xl teal-800" font="bold" transition="colors" hover="text-teal-500" class="tracking-tighter">
        <nuxt-link to="/authenticated">
          Auth
        </nuxt-link>
      </li>
    </ul>

    <div v-if="user">
      <h2>{{ user['username'] }}</h2>
      <button type="button" @click="onLogout">
        Logout
      </button>
    </div>
    <form v-else @submit.prevent="onSubmit">
      <input v-model="form.identifier" placeholder="Email" type="text" name="email" required>

      <input v-model="form.password" placeholder="Password" type="password" name="password" required>

      <button type="submit">
        {{ loading ? 'Loading...' : 'Login' }}
      </button>
    </form>
  </nav>
</template>

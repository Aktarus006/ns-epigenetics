<script setup lang="ts">
const { register } = useStrapiAuth()
const router = useRouter()

const loading = ref(false)
const form = reactive({ email: '', username: '', password: '' })

const onSubmit = async() => {
  try {
    await register(form)

    router.push('/')
  }
  catch (e) {}
}
</script>

<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input v-model="form.email" placeholder="Email" type="email" name="email" required>
      <input v-model="form.username" placeholder="Username" type="text" name="username" required>
      <input v-model="form.password" placeholder="Password" type="password" name="password" required>
      <button type="submit">
        {{ loading ? 'Loading...' : 'Login' }}
      </button>
    </form>
  </div>
</template>

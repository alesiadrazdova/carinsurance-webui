import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginUser } from '@/apis/apiService'
import { useRouter } from 'vue-router'

export const useLoginStore = defineStore('login', () => {
  const login = ref('')
  const password = ref('')
  const role = ref('')
  const isLoading = ref(false)
  const errorMessage = ref('')
  const router = useRouter()

  const setLogin = (newLogin: string) => {
    login.value = newLogin;
  }

  const setPassword = (newPassword: string) => {
    password.value = newPassword;
  }

  const submitForm = async () => {
    if (!login.value || !password.value) {
      return
    }
    isLoading.value = true

    try {
      const response = await loginUser(login.value, password.value)

      if (response.status === 200) {
        const data = await response.json()
        role.value = data.role
        localStorage.setItem('role', role.value)
        errorMessage.value = login.value = password.value = ''
        router.push('/api/client')
      } else if (response.status === 401) {
        const data = await response.json()
        errorMessage.value = 'Error logging in. Please try again.'
      } else {
        console.error(`Unexpected error, status: ${response.status}`)
      }
    } catch (error) {
      console.error('Network or request error', error)
    }
    isLoading.value = false
  }

  return {
    login,
    password,
    role,
    isLoading,
    errorMessage,
    setLogin,
    setPassword,
    submitForm
  }
})

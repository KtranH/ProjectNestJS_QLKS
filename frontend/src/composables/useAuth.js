import { ref } from 'vue'

const isLoading = ref(false)
const error = ref(null)

export function useAuth() {
  const login = async (payload) => {
    isLoading.value = true
    error.value = null
    try {
      // TODO: gọi API đăng nhập tại đây
      await new Promise((r) => setTimeout(r, 600))
    } catch (e) {
      error.value = 'Đăng nhập thất bại'
    } finally {
      isLoading.value = false
    }
  }

  const register = async (payload) => {
    isLoading.value = true
    error.value = null
    try {
      // TODO: gọi API đăng ký tại đây
      await new Promise((r) => setTimeout(r, 800))
    } catch (e) {
      error.value = 'Đăng ký thất bại'
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    // TODO: clear token, state, chuyển hướng
  }

  return { login, register, logout, isLoading, error }
}



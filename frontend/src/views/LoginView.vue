<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Background Grid -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
      <div class="grid grid-cols-6 gap-4 p-8 opacity-20">
        <div v-for="i in 24" :key="i" class="aspect-square bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl"></div>
      </div>
    </div>

    <!-- Content Container -->
    <div class="relative z-10 min-h-screen flex items-center justify-center p-6">
      <div class="w-full max-w-6xl flex items-center">
        <!-- Left Side - Text Overlay -->
        <div class="hidden lg:flex lg:w-1/2 lg:pr-12" data-aos="fade-right">
          <div class="relative">
            <!-- Dark overlay for better text readability -->
            <div class="absolute inset-0 bg-black/20 rounded-3xl backdrop-blur-sm"></div>
            <div class="relative p-8 rounded-3xl">
              <h1 class="text-5xl font-bold mb-6 text-gray-900 drop-shadow-lg">
                Đăng nhập để
                <span class="bg-white bg-clip-text text-transparent">
                  khám phá
                </span>
                trải nghiệm tuyệt vời
              </h1>
              <p class="text-xl text-gray-800 mb-8 max-w-md font-medium">
                Chào mừng bạn quay trở lại với KtStay. Đăng nhập để tiếp tục hành trình khám phá những điểm đến tuyệt vời.
              </p>
              <router-link to="/home" class="flex items-center space-x-4">
                <IconApp />
                <span class="text-2xl font-bold text-gray-900">KtStay</span>
              </router-link>
            </div>
          </div>
        </div>

        <!-- Right Side - Login Form -->
        <div class="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div class="w-full max-w-md">
            <!-- Logo for mobile -->
            <div class="text-center mb-8 lg:hidden" data-aos="fade-down">
              <router-link to="/home" class="flex items-center justify-center gap-3 mb-4">
                <IconApp />
                <span class="text-2xl font-bold text-gray-900">KtStay</span>
              </router-link>
              <p class="text-gray-600">Đăng nhập để tiếp tục</p>
            </div>

            <!-- Login Form Card -->
            <div class="bg-white rounded-3xl shadow-strong p-8 border border-gray-100 backdrop-blur-sm" data-aos="fade-up">
              <div class="text-center mb-8">
                <router-link to="/home" class="flex items-center justify-center gap-3 mb-4">
                  <IconApp />
                  <span class="text-xl font-bold text-gray-900">KtStay</span>
                </router-link>
                <h1 class="text-2xl font-bold text-gray-900 mb-2">Chào mừng trở lại</h1>
                <p class="text-gray-600">Đăng nhập vào tài khoản của bạn</p>
              </div>

              <form class="space-y-6" @submit.prevent="onSubmit">
                <div data-aos="fade-up" data-aos-delay="100">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input 
                    v-model="email" 
                    type="email"
                    :icon="Mail"
                    placeholder="Nhập email của bạn" 
                    required 
                  />
                </div>
                
                <div data-aos="fade-up" data-aos-delay="200">
                  <div class="flex items-center justify-between mb-2">
                    <label class="block text-sm font-medium text-gray-700">Mật khẩu</label>
                    <router-link to="/register" class="text-sm text-black hover:text-gray-700 hover:underline transition-colors font-medium">
                      Chưa có tài khoản?
                    </router-link>
                  </div>
                  <Input 
                    v-model="password" 
                    type="password"
                    :icon="Lock"
                    placeholder="Nhập mật khẩu" 
                    required 
                  />
                </div>

                <div class="flex items-center justify-between" data-aos="fade-up" data-aos-delay="300">
                  <label class="flex items-center">
                    <input type="checkbox" class="rounded border-gray-300 text-black focus:ring-black" />
                    <span class="ml-2 text-sm text-gray-600">Ghi nhớ đăng nhập</span>
                  </label>
                  <a href="#" class="text-sm text-black hover:text-gray-700 hover:underline transition-colors font-medium">
                    Quên mật khẩu?
                  </a>
                </div>

                <Button 
                  type="submit"
                  :loading="isLoading"
                  :icon="LogIn"
                  size="lg"
                  class="w-full"
                  data-aos="fade-up" 
                  data-aos-delay="400"
                >
                  {{ isLoading ? 'Đang xử lý...' : 'Đăng nhập' }}
                </Button>

                <p v-if="error" class="text-sm text-red-600 bg-red-50 p-3 rounded-2xl border border-red-200" data-aos="fade-up" data-aos-delay="500">
                  {{ error }}
                </p>
              </form>

              <!-- Social Login -->
              <div class="mt-8" data-aos="fade-up" data-aos-delay="600">
                <div class="relative">
                  <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-200"></div>
                  </div>
                  <div class="relative flex justify-center text-sm">
                    <span class="px-2 bg-white text-gray-500">Hoặc đăng nhập với</span>
                  </div>
                </div>

                <div class="mt-6 grid grid-cols-2 gap-3">
                  <Button variant="outline" class="w-full">
                    <svg class="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span class="ml-2">Google</span>
                  </Button>

                  <Button variant="outline" class="w-full">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span class="ml-2">Facebook</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import AOS from 'aos'
import { Mail, Lock, LogIn } from 'lucide-vue-next'
import IconApp from '@/components/icons/iconApp.vue'
import Button from '@/components/base/Button.vue'
import Input from '@/components/base/Input.vue'

const router = useRouter()
const { login, isLoading, error } = useAuth()

const email = ref('')
const password = ref('')

const onSubmit = async () => {
  await login({ email: email.value, password: password.value })
  if (!error.value) router.push('/dashboard')
}

onMounted(() => {
  AOS.refresh()
})
</script>



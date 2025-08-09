<template>
  <header class="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur bg-white/90 shadow-soft">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center space-x-3" data-aos="fade-right">
          <div class="w-8 h-8 bg-black rounded-2xl flex items-center justify-center shadow-medium">
            <Hotel class="w-5 h-5 text-white" />
          </div>
          <span class="text-xl font-bold text-gray-900">LuxStay</span>
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center space-x-8" data-aos="fade-down">
          <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors font-medium">Trang chủ</a>
          <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors font-medium">Phòng</a>
          <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors font-medium">Dịch vụ</a>
          <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors font-medium">Liên hệ</a>
        </nav>

        <!-- Auth Buttons -->
        <div class="flex items-center space-x-4" data-aos="fade-left">
          <router-link to="/login" class="text-gray-600 hover:text-gray-900 transition-colors">
            <User class="w-5 h-5" />
          </router-link>
          <router-link to="/register" class="bg-black text-white px-4 py-2 rounded-2xl hover:bg-gray-800 transition-all shadow-medium">
            Đăng ký
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Hotel, User } from 'lucide-vue-next'
</script>

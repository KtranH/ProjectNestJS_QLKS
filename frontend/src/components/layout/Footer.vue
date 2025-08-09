<template>
    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center space-x-3 mb-4">
              <div class="w-8 h-8 bg-white rounded-2xl flex items-center justify-center shadow-medium">
                <Hotel class="w-5 h-5 text-gray-900" />
              </div>
              <span class="text-xl font-bold">LuxStay</span>
            </div>
            <p class="text-gray-400">Trải nghiệm nghỉ dưỡng tuyệt vời với dịch vụ 5 sao.</p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Liên kết</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Về chúng tôi</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Phòng</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Dịch vụ</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Liên hệ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Hỗ trợ</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Chính sách</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Điều khoản</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Bảo mật</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Liên hệ</h3>
            <ul class="space-y-2 text-gray-400">
              <li class="flex items-center"><Phone class="w-4 h-4 mr-2" /> +84 123 456 789</li>
              <li class="flex items-center"><Mail class="w-4 h-4 mr-2" /> info@luxstay.com</li>
              <li class="flex items-center"><MapPin class="w-4 h-4 mr-2" /> 123 Đường ABC, TP.HCM</li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 KtStay. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
</template>

<script setup>
import { Hotel, Mail, Lock, LogIn, Phone, MapPin } from 'lucide-vue-next'
</script>

<style scoped>

</style>
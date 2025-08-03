<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-brand">
        <h1>🏨 Quản lý Khách sạn</h1>
      </div>
      <div class="nav-links">
        <router-link to="/" class="nav-link">Trang chủ</router-link>
        <router-link to="/rooms" class="nav-link">Phòng</router-link>
        <router-link to="/guests" class="nav-link">Khách</router-link>
        <router-link to="/bookings" class="nav-link">Đặt phòng</router-link>
      </div>
    </nav>
    
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.nav-brand h1 {
  color: white;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: rgba(255,255,255,0.1);
}

.nav-link.router-link-active {
  background-color: rgba(255,255,255,0.2);
  font-weight: 600;
}

.main-content {
  padding: 2rem;
  min-height: calc(100vh - 80px);
  background-color: #f8f9fa;
}
</style> 
<template>
  <div class="container">
    <router-view name="header-top"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/GUI/navbar.vue'

export default {
 
};
</script>

<style>
body {
  background: #ddd;
}
</style>

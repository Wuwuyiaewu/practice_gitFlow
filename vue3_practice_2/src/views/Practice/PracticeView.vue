<template>
  <div class="practice">
     <h1>Vue3 Practice</h1>
  </div>
  <div>
    <li class="route"><router-link to="/">Home</router-link></li>
    <li class="route"><router-link to="/counter">Counter</router-link></li>
    <li class="route"><router-link to="/search">Search</router-link></li>
    <li class="route"><router-link to="/filterDemo">FilterDemo</router-link></li>
    <li class="route"><router-link to="/listDemo">ListDemo</router-link></li>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {},
});
</script>
<style scoped>
    .route{
        list-style-type: none;
        margin:16px 0;
    }
</style>
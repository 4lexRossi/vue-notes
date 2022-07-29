<template>
  <Navbar />
  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
</template>

<script setup>
/*
  imports
*/
import Navbar from './components/layout/Navbar.vue';
import { useStoreAuth } from '@/stores/storeAuth';
import { onMounted } from 'vue';

/*
  store
*/
const storeAuth = useStoreAuth()

/*
  hooks
*/
  onMounted(() => {
    storeAuth.init()
  })

</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>

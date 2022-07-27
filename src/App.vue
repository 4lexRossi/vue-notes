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
import { useStoreNotes } from '@/stores/storeNotes';
import { onMounted } from 'vue';

/*
  store
*/
const storeNotes = useStoreNotes()

/*
  hooks
*/
  onMounted(() => {
    storeNotes.getNotes()
  })

</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>

<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      bgColor="link"
      placeholder="Edit Note"
      label="Edit Note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button @click="$router.back()" class="button is-link is-light">
          Cancel
        </button>
        <button
          class="button is-link has-background-link"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
/*
  imports
*/
import { ref } from 'vue';
import AddEditNote from '@/components/notes/AddEditNote.vue';
import { useStoreNotes } from '../stores/storeNotes';
import { useRoute } from 'vue-router';

/*
  router
*/
const route = useRoute()

/*
  note
*/

const storeNotes = useStoreNotes();

const noteContent = ref('');

noteContent.value = storeNotes.getNoteContent(route.params.id)
</script>

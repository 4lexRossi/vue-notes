<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
      <div class="columns is-mobile has-text-grey-light mt-2">
        <small class="column">{{ dateFormatted }}</small>
        <small class="column has-text-right">{{ characterLenght }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/edit-note/${note.id}`" class="card-footer-item"
        >Edit
      </RouterLink>
      <a
        @click.prevent="modals.deleteNote = true"
        class="card-footer-item"
        >Delete</a
      >
    </footer>
    <ModalDeleteNote
      v-if="modals.deleteNote"
      v-model="modals.deleteNote"
      :noteId="note.id"
    />
  </div>
</template>

<script setup>
/*
  imports
*/
import { computed, reactive } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes';
import ModalDeleteNote from '@/components/notes/ModalDeleteNote.vue';
import { useDateFormat } from '@vueuse/core';

/*
  date format
*/
const dateFormatted = computed(() => {
  const date = new Date(parseInt(props.note.date))
  return useDateFormat(date, 'DD-MM-YYYY HH:mm').value
})

/*
  props
*/

const storeNotes = useStoreNotes();

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const characterLenght = computed(() => {
  const length = props.note.content.length;
  const description = length > 1 ? 'characters' : 'character';
  return `${length} ${description}`;
});

/*
  modals
*/

const modals = reactive({
  deleteNote: false,
});
</script>

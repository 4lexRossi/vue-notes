<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
      <div class="has-text-right has-text-grey-light mt-2">
        <small>{{ characterLenght }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
        :to="`/edit-note/${ note.id }`"
        class="card-footer-item">Edit
      </RouterLink>
      <a
        @click.prevent="storeNotes.deleteNote(note.id)"
        class="card-footer-item"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
/*
  imports
*/
import { computed } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes';

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
</script>

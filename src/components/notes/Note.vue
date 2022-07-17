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
      <a href="#" class="card-footer-item">Edit</a>
      <a @click.prevent="handleDeleteClick" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script setup>
/*
  imports
*/
import { computed } from 'vue';

/*
  props
*/
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
  emits
*/
const emit = defineEmits(['deleteClicked'])

/*
  functions
*/

const handleDeleteClick = () => {
  emit('deleteClicked', props.note.id)
}
</script>

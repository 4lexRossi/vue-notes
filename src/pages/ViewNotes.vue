<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new Note"
            ref="newNoteRef"
          />
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <Note
    v-for="note in notes"
    :key="notes.id"
    :note="note"
    @deleteClicked="deleteNote"
    />
  </div>
</template>

<script setup>
/*
  imports
*/
import { ref } from 'vue';
import Note from '@/components/notes/Note.vue'

/*
  notes
*/

const newNote = ref('');
const newNoteRef = ref(null);

const notes = ref([
  {
    id: 'id1',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit Reprehenderit harum voluptas libero ad ducimus autem ex, distinctio eveniet eum perspiciatis adipisci possimus exercitationem repudiandae alias nisi nulla voluptatibus quam mollitia.',
  },
  {
    id: 'id2',
    content: 'Short Note.',
  },
]);

/*
  functions
*/

const addNote = () => {
  const currentDate = new Date().getTime() + Math.random(2),
    id = currentDate.toString();
  const note = {
    id,
    content: newNote.value,
  };
  notes.value.unshift(note);
  newNote.value = '';
  newNoteRef.value.focus();
};

const deleteNote = id => {
  notes.value = notes.value.filter(f => f.id !== id)
}
</script>

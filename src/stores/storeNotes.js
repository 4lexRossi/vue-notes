import { defineStore } from 'pinia';

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit Reprehenderit harum voluptas libero ad ducimus autem ex, distinctio eveniet eum perspiciatis adipisci possimus exercitationem repudiandae alias nisi nulla voluptatibus quam mollitia.',
        },
        {
          id: 'id2',
          content: 'Short Note.',
        },
      ],
    };
  },
  actions: {
    addNote(newNoteContent) {
      const currentDate = new Date().getTime() + Math.random(2),
        id = currentDate.toString();
      const note = {
        id,
        content: newNoteContent,
      };
      this.notes.unshift(note);
    },
    deleteNote(id) {
      this.notes = this.notes.filter((f) => f.id !== id);
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((f) => {
          return f.id === id;
        })[0].content;
      };
    },
  },
});

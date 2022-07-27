import { defineStore } from 'pinia';
import { collection, onSnapshot, doc, setDoc } from 'firebase/firestore';
import { db } from '@/js/firebase';

const notesCollectionRef = collection(db, 'notes');

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [],
    };
  },
  actions: {
    async getNotes() {
      onSnapshot(notesCollectionRef, (querySnapshot) => {
        let notes = [];
        querySnapshot.forEach((doc) => {
          const note = {
            id: doc.id,
            content: doc.data().content,
          };
          notes.push(note);
        });
        this.notes = notes;
      });
    },

    async addNote(newNoteContent) {
      const currentDate = new Date().getTime() + Math.random(2),
        id = currentDate.toString();
      // const note = {
      //   id,
      //   content: newNoteContent,
      // };
      // this.notes.unshift(note);
      await setDoc(doc(notesCollectionRef, id), {
        content: newNoteContent
      })
    },
    deleteNote(id) {
      this.notes = this.notes.filter((f) => f.id !== id);
    },
    updateNote(id, content) {
      //doing without return and curly bracketes
      const index = this.notes.findIndex((note) => note.id === id);
      this.notes[index].content = content;
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((f) =>
          //doing with return inside curly bracketes
          {
            return f.id === id;
          }
        )[0].content;
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
});

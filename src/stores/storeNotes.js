import { defineStore } from 'pinia';
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
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
      await setDoc(doc(notesCollectionRef, id), {
        content: newNoteContent,
      });
    },
    async deleteNote(id) {
      await deleteDoc(doc(notesCollectionRef, id));
    },
    async updateNote(id, content) {
      await updateDoc(doc(notesCollectionRef, id), {
        content
      })
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

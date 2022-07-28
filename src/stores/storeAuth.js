import { defineStore } from 'pinia';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '@/js/firebase';

export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {};
  },
  actions: {
    registerUser(credentials) {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        }).catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage)
        });
    },
    logoutUser() {
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }
  },
});

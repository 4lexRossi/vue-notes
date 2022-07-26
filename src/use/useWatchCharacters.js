import { watch } from 'vue';

export function useWatchCharacters(valueToWatch) {
  watch(valueToWatch, (newValue, oldValue) => {
    if (newValue.length === 100) {
      alert('sadd');
    }
  });
}

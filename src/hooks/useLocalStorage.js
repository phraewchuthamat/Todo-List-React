import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      const parsedItem = item ? JSON.parse(item) : null;

      if (
        !parsedItem ||
        (Array.isArray(parsedItem) && parsedItem.length === 0)
      ) {
        return initialValue;
      }

      return parsedItem;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    if (storedValue.length === 0) {
      setStoredValue(initialValue);
    }
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue, initialValue]);

  return [storedValue, setStoredValue];
}

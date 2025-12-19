import { useEffect, useState, useRef } from "react";

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
      console.error("Error reading from localStorage:", error);
      return initialValue;
    }
  });

  const initialRef = useRef(initialValue);

  useEffect(() => {
    try {
      if (Array.isArray(storedValue) && storedValue.length === 0) {
        const fallback = initialRef.current;

        if (!(Array.isArray(fallback) && fallback.length === 0)) {
          setStoredValue(fallback);
          return;
        }
      }

      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  // State to hold the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Update debounced value after a specified delay
    const debounceTimeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clear the timeout if the value changes before the delay
    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;

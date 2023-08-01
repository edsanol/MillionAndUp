import React, {useState, useEffect} from 'react';

/**
 * Hook personalizado para filtrar un valor de entrada de manera debounced (retardada).
 * El valor filtrado se actualiza después de un tiempo determinado (time) desde la última vez que cambia el valor de entrada (input).
 * @param {string} input - El valor de entrada que se va a filtrar de manera debounced.
 * @param {number} time - El tiempo de retardo en milisegundos para el filtrado debounced.
 * @returns {string} - El valor filtrado después de aplicar la lógica debounced.
 */
const useDebouncedFilter = (input: string = '', time: number = 700): string => {
  const [filter, setFilter] = useState<string>(input);

  useEffect(() => {
    // Se inicia un temporizador que activará el filtrado después del tiempo especificado (time).
    const timer = setTimeout(() => {
      // Se actualiza el estado con el valor de entrada actual (input) después de que haya pasado el tiempo de retardo.
      setFilter(input);
    }, time);

    // Cuando el componente se desmonta o cuando el valor de entrada cambia, se cancela el temporizador anterior y se inicia uno nuevo.
    // Esto asegura que el filtrado solo se aplique después de que el usuario ha dejado de escribir por el tiempo especificado (time).
    return () => clearTimeout(timer);
  }, [input]);

  return filter;
};

export default useDebouncedFilter;

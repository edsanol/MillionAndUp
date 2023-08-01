import React, {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {addCryptos} from '../../store/actions/cryptoActions';
import {RootState} from '../../store/store';
import {Crypto} from '../../../domain/entities/Crypto';
import useDebouncedFilter from '../../hooks/useDebouncedFilter';

/**
 * Modelo de vista para la pantalla de inicio.
 * Contiene la lógica y la gestión de datos relacionados con la pantalla de inicio.
 * @returns {Object} Objeto con las propiedades y funciones para la pantalla de inicio.
 */
const HomeViewModel = () => {
  const dispatch = useDispatch<Dispatch<any>>();
  const [search, setSearch] = useState('');
  const [start, setStart] = useState(0);
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const limit = 20;
  const pageUrl = useRef('/tickers/?start=0&limit=20');
  const debouncedValue = useDebouncedFilter(search, 400);

  // Selección del estado desde el store mediante react-redux useSelector hook
  const cryptosSelector = useSelector(
    (state: RootState) => state.cryptoReducer.cryptos,
  );
  const loading = useSelector(
    (state: RootState) => state.cryptoReducer.loading,
  );
  const error = useSelector((state: RootState) => state.cryptoReducer.error);

  /**
   * Maneja el evento de cambio en el campo de búsqueda.
   * @param {string} text - Texto ingresado en el campo de búsqueda.
   */
  const handleSearch = (text: string) => {
    setSearch(text);
  };

  /**
   * Filtra las criptomonedas en función del texto de búsqueda.
   * @param {string} name - Texto de búsqueda para filtrar las criptomonedas.
   * @returns {Crypto[]} Lista de criptomonedas que coinciden con el filtro.
   */
  const filterCryptos = (name: string): Crypto[] => {
    return cryptosSelector.filter(crypto => {
      return (
        crypto.name.toLowerCase().includes(name.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(name.toLowerCase())
      );
    });
  };

  /**
   * Obtiene todas las criptomonedas iniciales al cargar la pantalla.
   */
  const getAllCryptos = () => {
    pageUrl.current = `/tickers/?start=${start}&limit=${limit}`;
    dispatch(addCryptos(pageUrl.current));
  };

  /**
   * Carga más criptomonedas al hacer scroll en la lista.
   */
  const loadMoreCryptos = () => {
    setStart(prevStart => (prevStart < 80 ? prevStart + limit : prevStart));
  };

  /**
   * Efecto que se ejecuta al cargar o actualizar el estado de las criptomonedas desde el store.
   * Actualiza el estado local de las criptomonedas con el contenido del store.
   */
  useEffect(() => {
    if (cryptosSelector?.length > 0) {
      setCryptos(cryptosSelector);
    }
  }, [cryptosSelector]);

  /**
   * Efecto que se ejecuta cuando cambia el valor de búsqueda debounced.
   * Filtra las criptomonedas según el texto de búsqueda debounced y actualiza el estado local.
   */
  useEffect(() => {
    if (debouncedValue.length > 0) {
      setCryptos(filterCryptos(debouncedValue));
    } else {
      setCryptos(cryptosSelector);
    }
  }, [debouncedValue]);

  /**
   * Efecto que se ejecuta cuando cambia el valor de "start".
   * Obtiene las criptomonedas en función del valor de "start".
   */
  useEffect(() => {
    getAllCryptos();
  }, [start]);

  return {
    cryptos,
    loading,
    error,
    search,
    handleSearch,
    getAllCryptos,
    loadMoreCryptos,
  };
};

export default HomeViewModel;

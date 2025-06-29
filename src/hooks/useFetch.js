// IMPORTS
import { useCallback, useState } from 'react';
import { apiFetch } from '../api/fetch';



// CUSTOM HOOK: useFetch (hacer peticiones a la API)
/**
 * Hook personalizado para realizar peticiones HTTP y manejar su estado.
 *
 * @returns {Object} - Contiene el estado de la petición y la función `fetchData`.
 * @property {*} data - Los datos obtenidos de la petición.
 * @property {boolean} isLoading - Indica si la petición está en curso.
 * @property {string|null} error - Mensaje de error si la petición falla.
 * @property {Function} fetchData - Función para disparar una petición HTTP.
 *
 * @example
 * const { data, isLoading, error, fetchData } = useFetch();
 * useEffect(() => {
 *   fetchData('https://api.example.com/data');
 * }, []);
 */
export const useFetch = () => {
    // Estados:
    const [data, setData] = useState([]); //datos
    const [isLoading, setIsLoading] = useState(false); //estado de carga
    const [error, setError] = useState(null); //error

    // Función para disparar la petición:
    const fetchData = useCallback(async (url, method='GET', headers={}, body={}) => { //useCallback es un hook de React que memoriza una función. Evita bugs y llamadas innecesarias.
        setIsLoading(true); //Indica el estado de carga, y con ello que la petición ha comenzado
        setError(null); //Resetea el estado de error antes de lanzar una nueva petición

        try {
            const response = await apiFetch(url, method, headers, body);
            setData(response); //Almacena la respuesta recibidad en el estado "data"

        } catch (err) {
            setError(err.message || 'Error desconocido'); //Si hay error lo guarda en el estado error

        } finally {
            setIsLoading(false); //Deja de indicar el cargando... La petición ha terminado
        }

    }, []); //Dependencia vacía -> La función no se vuelve a crear en cada render a no ser que algo externo cambie


    //Devuelve los estados y la función para disparar la petición:
    return { data, isLoading, error, fetchData };
};
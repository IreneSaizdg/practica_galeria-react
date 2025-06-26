// IMPORTS
import { useState, useEffect } from 'react';



// CUSTOM HOOK: useFetch (hacer peticiones a la API)
/**
 * Custom hook para hacer una petición fetch a una API y manejar estados de carga, datos y error.
 * @param {string} url - La URL de la API a la que se quiere hacer la petición.
 * @returns {Object} Un objeto con las propiedades:
 *   - data: los datos obtenidos de la API (o null mientras carga).
 *   - loading: boolean que indica si la petición está en curso.
 *   - error: mensaje de error si ocurre alguno (o null si no hay error).
 */
export const useFetch = (url) => { // recibe una URL como parámetro

    //Estados: 
    const [data, setData] = useState([]); //Estado: guardar los datos que trae la API
    const [isLoading, setIsLoading] = useState(true); //Estado: controla si la petición está cargando
    const [error, setError] = useState(null); //Estado: guardar un posible error si la petición falla

    useEffect(() => { //useEffect jecuta código cuando el componente se monta o cuando cambia algo
        if (!url) return; //Si no hay URL, no hacemos nada 
        //TODO: gestionar el error
        
        setIsLoading(true);               //Al empezar la petición: Loading en true
        setError(null);                 //Limpieza de errores previos

        fetch(url)//Llamada a la API con fetch (retorna un promesa)
            .then((res) => {
                if (!res.ok) {//Si la respuesta no es ok lanza un error
                    throw error('Error en la respuesta');
                }
                return res.json();//Convertir respuesta a JSON para trabajar con datos
            })
            .then((data) => {
                setData(data);          //Guardamos la data en el estado
                setIsLoading(false);      //Paramos la carga
            })
            .catch((err) => {
                setError(err.message);  //Si hay un error, lo guardamos 
                setIsLoading(false);      //y paramos la carga
            });
        }, [url]);//Este efecto se ejecuta cada vez que cambie la URL

  return { data, isLoading, error };//Retornamos esto para que el componente que use este hook pueda acceder
}

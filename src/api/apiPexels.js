/* API PEXELS

Todo lo relacionado con la configuración de la API de Pexels
    - Guardar tu API Key de forma centralizada.
    - Preparar una función reutilizable que haga peticiones a Pexels.
    - Definir la base URL y otros valores reutilizables (ej: número de resultados por página).
*/


const API_KEY = 'x8raJ42QFxrUxmknlqHMSuHKvq3jQTCBaTWTkUEXmzjhqTc2tCkWIjgk'
const BASE_URL = 'https://api.pexels.com/v1'
const PER_PAGE = 6


//FUNCIÓN: construir URL para buscar imgs por categoría y  página
export const buildSearchUrl = (query, page) => {
    return `${BASE_URL}/search?query=${encodeURIComponent(query)}&page=${page}&per_page=${PER_PAGE}`;
    //*encodeURIComponent -> convierte los caracteres especiales para ser legible por navegadores y servidores
}


//FUNCIÓN: opciones del fetch
export const fetchOptions = { //Headers para el fetch (autenticación con la API)
    headers: {
        Authorization: API_KEY
    }
}
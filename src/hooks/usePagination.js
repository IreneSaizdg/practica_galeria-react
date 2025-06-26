// IMPORTS:
import { useState } from 'react'; //hook useState: permite guardar y actualizar el estado del form



// CUSTOM HOOK: pagination  
/**
 * Hook personalizado para manejar la lógica de paginación. Maneja:
 *  - El número de página actual.
 *  - Las funciones para ir a la página siguiente y anterior.
 *  - Una función para reiniciar la paginación.
 *  - Posibilidad de establecer directamente una página (setPage), si lo necesitas.
 * 
 * 
 * @param {number} initialPage - Número de página inicial (por defecto 1).
 * @returns {{
 *   page: number,
 *   nextPage: () => void,
 *   prevPage: () => void,
 *   setPage: (pageNumber: number) => void,
 *   resetPage: () => void
 * }}
 */
const usePagination = (initialPage = 1) => {
    const [page, setPage] = useState(initialPage);

    const nextPage = () => {            //Función para incrementar el número de página
        setPage((prev) => prev + 1);
    };

    const prevPage = () => {            //Función para disminuir el número de página sin bajar de 1
        setPage((prev) => (prev > 1 ? prev - 1 : 1)); //Si prev es mayor que 1 se le resta 1 y si no 1 y punto
    };

    const resetPage = () => {           //Función para reiniciar la paginación al valor inicial
        setPage(initialPage); 
    }; 

    return{
        page,           //Pag. actual
        setPage,        //Establecer directamente la página (porsiacaso)
        nextPage,       //Pag. siguiente
        prevPage,       //Pag. anterior
        resetPage,      //Volver a página 1
    }
}



// EXPORTS
export default usePagination

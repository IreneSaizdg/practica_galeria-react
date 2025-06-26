// IMPORTS
import { useState } from 'react'; //hook useState: permite guardar y actualizar el estado del form




// CUSTOM HOOK: useForm (maneja el input de usuario)
/**
 * Custom Hook que maneja el estado de un input de formulario.
 *      - Guardar el estado de los campos del formulario (una categoría de búsqueda).
 *      - Actualiza ese estado a medida que el usuario escribe.
 *      - Encapsula handleChange
 * 
 * @param {string} initialValue - Valor inicial del input.
 * @returns {{
 *   inputValue: string,
 *   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
 *   resetInput: () => void
 * }}
 * - inputValue: el valor actual del input.
 * - setInputValue: función para cambiar el estado del input. 
 * - handleChange: función para actualizar el valor cuando el usuario escribe.
 * - resetInput: función para reiniciar el input a un valor vacío.
 */
const useForm = (initialValue) => {
    //Estado:
    const [inputValue, setInputValue] = useState(initialValue); //Guarda lo que el usuario escribe en el form. 

    //Manejador: 
    const handleChange = (event) => { //Esta función se activa cada vez que el user escribe en el input
        setInputValue(event.target.value); //Obtiene el nuevo valor del usuario y luego cambbia/actualiza el estado 
    };

    const resetInput = () => { 
        setInputValue(''); //Reinicia el valor del input a vacío por si queremos vaciar el campo de búsqueda
    }

    return {
        inputValue,     //Texto actual del input
        handleChange,   //Función para actualizar el input cuando cambia
        resetInput      //Función para limpiar el campo
    }
}




// EXPORTS
export default useForm



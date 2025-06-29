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
    const [form, setForm] = useState(initialValue); //Guarda lo que el usuario escribe en el form. 

    //Manejador: de cambios para inputs
    const handleChange = (event) => { //Esta función se activa cada vez que el user escribe en el input
        const { name, value } = event.target; //Extrae name y value del input

        setForm((newFormData) => ({     //Toma la versión más actual del estado
            ...newFormData,             //Copia todos los valores existentes del estado form
            [name]: value,              //Sobrescribe el campo del form con el name del input que está siendo editado y le asigna su value
        }));
        console.log(`useForm, newFormData, Nuevo valor introducido por el usuario: ${value}`);
    };

    const resetInput = () => { // Reset del input
        const resetState = {};
        for (const key in form) {
            resetState[key] = "";
        }
        setForm(resetState); 
    };

    const serializeForm = () => { //Serializa el formulario eliminando espacios y valores vacíos
        const serialized = {};

        for (const key in form) {   //Recorre cada campo del form por su nombre key
        const value = form[key];    //Obtiene el valor del campo actual

            if (typeof value === 'string') {    //Si el valor es un string, elimina espacios en blanco al principio y al final
                const trimmed = value.trim();
                if (trimmed) {
                    serialized[key] = trimmed;  //Evalúa si el string no está vacío, si tiene contenido guarda el valor en el objeto final
                }

            } else if (value !== undefined && value !== null) { 
                serialized[key] = value; //Si no es string pero si un valor válido, también lo guarda
            }
        }

        return serialized;
    };

    return {
        form,
        handleChange,
        resetInput,
        serializeForm,
    };

};



// EXPORTS
export default useForm







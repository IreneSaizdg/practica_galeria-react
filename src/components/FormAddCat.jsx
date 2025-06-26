
// IMPORTS
import useForm from '../hooks/useForm'




// COMPONENT: formulario de añadir categoría
/**
 * Componente FormAddCat
 * Muestra un formulario para añadir una nueva categoría.
 *    - Usa un hook personalizado (useForm) para controlar el estado del input.
 *    - Enviar la categoría escrita al componente padre al hacer submit.
 *    - Limpiar el input tras enviar.
 * 
 * 
 * @param {Function} onNewCategory - Función del padre para añadir la categoría nueva
 */
export const FormAddCat = ({ onNewCategory }) => {
    const { inputValue, handleChange, resetInput } = useForm('');

    //Manejador
    const handleSubmit = (ev) => { //Función que se ejecuta al enviar el formulario
        ev.preventDefault(); //Previene el comportamiento por defecto

        const trimmedValue = inputValue.trim(); //Elimina espacios antes y después para que el usuario no añada categorías vacías.
        if (trimmedValue.length <= 1) return; //Sale de la función y no hace nada

        onNewCategory(trimmedValue); //Llama a una función para añadir la nueva categoría y le pasa el input ya limpio y validado
        resetInput(); //Limpia el campo de búsqueda
    }

    return (
        <section className="formAdddCat">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="category" 
                    placeholder="Escribe una categoría"
                    value={inputValue}
                    onChange={handleChange}
                />
                <button type="submit">Añadir categoría</button>
            </form>
        </section>
    );
};




// EXPORT
export default FormAddCat

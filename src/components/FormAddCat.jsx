
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
const FormAddCat = ({ onNewCategory }) => {
    console.log("onNewCategory prop:", onNewCategory)
    const { form, handleChange, resetInput, serializeForm } = useForm({category:''});

    //Manejador
    const handleSubmit = (ev) => { //Función que se ejecuta al enviar el formulario
        ev.preventDefault(); //Previene el comportamiento por defecto

        const formData = serializeForm(); //Elimina espacios y campos vacíos
        if (!formData.category || formData.category.length <= 1) return;

        onNewCategory(formData.category); //Llama a una función para añadir la nueva categoría y le pasa el input ya limpio y validado
        resetInput(); //Limpia el campo de búsqueda
    }

    return (
        <section className="formAdddCat">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="category" 
                    placeholder="Escribe una categoría"
                    value={form.category}
                    onChange={handleChange}
                />
                <button type="submit">Añadir categoría</button>
            </form>
        </section>
    );
};

export default FormAddCat;

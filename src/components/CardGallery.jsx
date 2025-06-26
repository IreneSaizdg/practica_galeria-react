// IMPORTS
import { Card } from './Card'
import { useFetch } from '../hooks/useFetch'
import { buildSearchUrl, fetchOptions } from '../api/apiPexels'



//COMPONENTE: card gallery
/**
 * Componente CardGallery
 * Este componente muestra una galería de tarjetas de imágenes usando datos de la API de Pexels.
 * 
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.category - Categoría o término de búsqueda para las imágenes.
 * @param {number} props.page - Número de página para la paginación de resultados.
 * 
 * @returns {JSX.Element} Galería de tarjetas con imágenes o mensajes de carga/error.
 */
export const CardGallery = ({ category, page }) => {
    const url = buildSearchUrl(category, page); //Construye la URL de búsqueda con la categoría y la página
    const { data, isLoading, error } = useFetch(url, fetchOptions); //Hook personalizado para obtener los datos de la API
    console.log('data:', data);

    return (
        <section>
            <h1>{category}</h1>

            {isLoading && <p>Cargando imágenes...</p>} {/* Muestra mensaje de carga mientras se obtienen los datos */}
            {error && <p>Error: {error} </p>} {/* Muestra mensaje de error si ocurre un fallo en la petición */}

            <div className="card-group">
                {data?.photos?.length === 0 && <p>No se encontraron imágenes.</p>} {/* Si no hay fotos, muestra mensaje (ojo: typo en "length") */}
                    {/* data? -> si hay data pasa a photos, si no undefined sin lanzar error. UTIL PARA DATOS ASÍNCRONOS */}
                
                {/* Mapea sobre las imágenes y renderiza un componente <Card /> por cada una */}
                {data?.photos?.map(image => ( 
                    <Card key={image.id} image={image}/> 
                ))}
            </div>
        </section>
    )
}




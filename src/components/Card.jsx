
// COMPONENTE: Card
/**
 * Componente para mostrar una sola imagen con su descripción y enlace a la fuente Pexels.
 * @param {Object} props
 * @param {Object} props.image - Objeto con información de la imagen.
 */
export const Card = ({ image }) => {
  console.log('Card recibe image:', image); //Prueba para comprobar que recibe la info

  if (!image || !image.src) {
    return null; // O un loader, o un mensaje de "imagen no disponible"
  }
    
  return (
    <article className="card">
       
      <div>
        <img src={image.src.medium} alt={image.alt || 'Imagen de Pexels'} /> {/* Imagen con descripción alternativa */}
      </div>
      
      <h4 className="card-title">{image.alt || 'Imagen sin descripción'}</h4> {/* Título / descripción */}

      <p> Fuente: <a href={image.url} target="_blank">Pexels</a> {/* Enlace a la página original en Pexels */}</p>
    </article>
  )
}

export default Card
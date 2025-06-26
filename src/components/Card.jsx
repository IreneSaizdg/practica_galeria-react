

export const Card = ({ image }) => {
  return (
    <>
        <article className="card">
          <div>
            imagen {image}
          </div>
          <h4 className="card-title">Card Title</h4>
          <p>Descripción</p>
        </article>
    </>
  )
}

export default Card
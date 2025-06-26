import { Card } from './Card'
import { useFetch } from '../hooks/useFetch'

export const CardGallery = ({ category }) => {
    const response = ['a', 'b', 'c']/* obtengo de la api */

    // const { data, isLoading, error } = useFetch('http://....')

    return (


        <section>
            <h1 key={category}>{category}</h1>

            <div className="card-group">
                {
                    /* llamar a la api y crear una card por cada resultado */
                    response.map((image) => (
                        /* CARD */

                        <Card key={image} image={image} />
                    ))
                }
            </div>

        </section>



    )
}


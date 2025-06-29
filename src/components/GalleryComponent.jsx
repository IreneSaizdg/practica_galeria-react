import { useState } from "react"
import { CardGallery } from "./cardGallery"
import FormAddCat from "./FormAddCat"


// COMPONENT:galería completa
export const GalleryComponent = () => {

    const [categories, setCategories] = useState([1, 2, 3])
    const onNewCategory = (category) => {
        /* Si la categoria existe return */
        setCategories([category, ...categories])

    }


    return (
        <>
            <h1> Galeria</h1>

            {/*FormAddCat.jsx */}
            <FormAddCat onNewCategory={onNewCategory} />


            {/*CardGallery.jsx */}
            {
                categories.map(category => (
                    <CardGallery key={category} category={category} />

                ))
            }

        </>
    )


}
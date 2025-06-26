import { useState } from "react"
import FormAddCat from "./FormAddCat"
import CardGallery from "./CardGallery"


// COMPONENT: ga
export const GalleryBlock = () => {

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


export const FormAddCat = ({onNewCategory}) => {
  
  const handleSubmit = (ev) => {
    ev.preventDefault();

    const resultado = 'nueva categoria'
    onNewCategory(resultado)
  }

    // const { handleSubmit, formulario } = useForm({})
    // useEffect(()=>{
    // },[formulario])
    // onNuevaCategoria(formulario.cat)


  return (
    <>
      <section className="formAdddCat">

        <form action="" onSubmit={handleSubmit}>
          <input type="text" id="category" name="category" placeholder="Escribe una categoría"/>
          <button type="submit">Añadir categoria</button>
        </form>
      </section>
    </>
  )
}

export default FormAddCat

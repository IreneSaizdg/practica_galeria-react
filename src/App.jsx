import { FormAddCat } from './components/FormAddCat'
import { CardGallery } from './components/CardGallery'




function App() {
  return (
    <>
      <header className='bg-black text-white text-center py-5 '>
        <p className='display-2'>Práctica Galería React</p>
      </header>

      <main className='container'>
        <FormAddCat/>
        <CardGallery/>

      </main>

      <footer className='bg-black text-secondary text-center py-2'>
        <p className='display-10'>Práctica Galería</p>
      </footer>
    </>
  )
}


export default App
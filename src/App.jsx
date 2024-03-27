import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return (
    <>
      <body className='d-flex flex-column'>
        <NavBar />
        <main className="d-flex flex-row justify-content-between">
          <div className="card w-25 p-3 text-center">
            <ItemListContainer
              nombre="Cuarto Kilo de Helado"
              precio={3000}
              imagen="https://saintmoritz.com.ar/wp-content/uploads/2020/08/helados-saint-mortiz-mediokg-1-1.png"
            />
            <button className="btn btn-primary">Agregar al carrito</button>
          </div>
          <div className="card w-25 p-3 text-center">
            <ItemListContainer
              nombre="Medio Kilo de Helado"
              precio={5900}
              imagen="https://alem.heladosheggel.com/wp-content/uploads/2018/11/453858-94cf7cc8-9271-4a94-9e22-6ee6e6a2571e.jpg"
            />
            <button className="btn btn-primary">Agregar al carrito</button>
          </div>
          <div className="card w-25 p-3 text-center">
            <ItemListContainer
              nombre="Un Kilo de Helado"
              precio={11500}
              imagen="https://nuestracarta.com.ar/wp-content/uploads/2021/06/37983-b527c1c0-a75f-4d06-8f4e-6c9ac10cb853.jpg"
            />
            <button className="btn btn-primary">Agregar al carrito</button>
          </div>
        </main>
      </body>
    </>
  )
}

export default App

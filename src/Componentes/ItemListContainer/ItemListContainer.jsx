import { useEffect, useState } from "react"
import { gFetch } from "../../Utils/gFetch"



export const ItemListContainer = ({ saludo }) => {
  const [ productos, setProductos ] = useState ([])
  const [ loading, setLoading ] = useState (true)

  useEffect (()=>{
    gFetch ()
      .then (res => {
        setProductos (res)
      })
      .catch (error => console.log (error))
      .finally (()=> setLoading (false))
  
}, [])

  console.log (productos)
  
  return (
    <center>
      <br />
      { 
      loading ? <img src='img/viniloanimado.gif' alt="vinilocargando" /> :

      productos.map (producto =>  <div key={producto.id} className='card w-50 mt-3'>
                                      <div className='card-header'>
                                        Nombre: {producto.nombre}
                                      </div>
                                      <div className='card-body'>
                                        <img src={producto.foto} alt="foto" className="w-50"/> <br /> <hr />
                                        Categoría: {producto.categoría} <br />
                                        Precio: {producto.precio}
                                      </div>
                                      <div className='card-footer'>
                                        <button className="btn btn-outline-dark w-50">Detalle</button>
                                      </div>
                                    </div>)
      }
    </center>
  )
}

export default ItemListContainer
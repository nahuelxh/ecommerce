import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { gFetch } from "../../Utils/gFetch"



export const ItemListContainer = ({ saludo }) => {
  const [ productos, setProductos ] = useState ([])
  const [ loading, setLoading ] = useState (true)

  const { idCategoria } =  useParams ()

  useEffect (()=>{

    if (idCategoria) {

      gFetch ()
        .then (res => {
          setProductos (res.filter(producto => producto.categoria === idCategoria ))
        })
        .catch (error => console.log (error))
        .finally (()=> setLoading (false))

    } else {
      
      gFetch ()
        .then (res => {
          setProductos (res)
        })
        .catch (error => console.log (error))
        .finally (()=> setLoading (false))

    }
    
  
}, [idCategoria])



  console.log (productos)
  

  return (
      
      loading
        ?
          <img src='/public/img/viniloanimado.gif' alt="loading" />
        :

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        
      { productos.map (producto =>  <div key={producto.id} className='card w-25 mt-2'>
                                      <div className='card-header'>
                                        Nombre: {producto.nombre}
                                      </div>
                                      <div className='card-body'>
                                        <img src={producto.foto} alt="foto" className="w-100"/> <br /> <hr />
                                        Categoría: {producto.categoria} <br />
                                        Precio: {producto.precio}
                                      </div>
                                      <div className='card-footer'>
                                        <Link to={`/detalle/${producto.id}`}>
                                          <button className="btn btn-outline-dark w-100">Detalle</button>                                        
                                        </Link>
                                      </div>
                                    </div>) }
        
      </div>

      
  )

}


export default ItemListContainer
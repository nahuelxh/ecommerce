import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { gFetch } from "../../Utils/gFetch"
import ItemList from "../ItemList/ItemList"



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

        <ItemList productos={productos} />

      </div>

      
  )

}


export default ItemListContainer
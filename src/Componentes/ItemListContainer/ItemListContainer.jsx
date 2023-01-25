import { gFetch } from "../../Utlis/gFetch"



export const ItemListContainer = ({ saludo }) => {
  gFetch ()
    .then (resResuelto => {
      console.log (resResuelto)
    })
    .catch (error => console.log (error))
    .finally (()=> console.log ('siempre y al último'))
  
  return (
    <h1>
      { saludo }
    </h1>
  )
}

export default ItemListContainer
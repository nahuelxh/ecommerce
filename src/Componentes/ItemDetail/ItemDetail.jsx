import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ producto }) => {
    const [isCount, setIsCount] = useState(true)

    const { agregarCarrito } = useCartContext()

    const onAdd = (cant)=>{
        console.log(cant)   
        agregarCarrito( { ... producto, cantidad: cant } )
        setIsCount(false)
    }  


    return (
        <div>
            <div className="row"> 
                <div className="col-6"> 
                    <img src = {producto.foto} className='w-50'/>
                    <h2>Nombre: {producto.nombre}</h2> 
                    <h4>Categoría: {producto.categoria}</h4> 
                    <h4>Precio: {producto.precio}</h4>
                        
                </div>
                <div className="col-6">
                    {
                        isCount ? 
                            <ItemCount initial={1} stock={30} onAdd={onAdd} />                        
                        :
                            <>
                                <Link className="btn btn-outline-success" to='/cart'>
                                    Ir a Cart
                                </Link>
                                <Link className="btn btn-outline-primary" to='/'>
                                    Ir a Home
                                </Link>

                            </>
                    }   

                </div>
            </div>
        </div>
    )
}

export default ItemDetail
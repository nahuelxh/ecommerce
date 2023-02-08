import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({producto}) => {

  const {agregarCarrito}= useCartContext()

  const onAdd = (cant)=> {
    console.log(cant)

    //agregarCarrito({ ... producto, cantidad: cant })
  }
  return (
    <div>
        <div className="row">
          <div className="col-6">
            <img src={producto.foto} className="w-50" />
            <h2>Nombre: {producto.nombre}</h2>
            <h4>Categoría {producto.categoria}</h4>
            <h4>Precio{producto.precio}</h4>

          </div>

          <div className="col-6">
            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
          </div>

        </div>
    </div>
  )
}

export default ItemDetail
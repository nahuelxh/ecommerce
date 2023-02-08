import { Link } from "react-router-dom"

const Item = ({producto}) => {
  return (
    <div className='card w-25 mt-2'>
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
                                    </div>
  )
}

export default Item
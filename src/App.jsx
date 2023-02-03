import { useState , useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemCount from './Componentes/ItemCount/ItemCount';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './Componentes/CartWidget/CartWidget';
import { CartContainer } from './Componentes/CartContainer/CartContainer';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer saludo='Buenas canciones, siempre' /> } />
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer saludo='Buenas canciones, siempre' /> } />
          <Route path='/detalle/:idProducto' element={ <ItemDetailContainer /> } />
          <Route path='/cart' element={ <CartContainer /> } />
          <Route path='/carrito' element={ <CartWidget /> } />
          <Route path='*' element={ <Navigate to={ '/' } /> } />
        </Routes>
        <ItemCount />
    </BrowserRouter>


  )

}

export default App

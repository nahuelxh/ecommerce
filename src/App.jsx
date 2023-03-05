import { useState , useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemCount from './Componentes/ItemCount/ItemCount';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './Componentes/CartContainer/CartContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContextProvider } from './context/CartContext';


function App() {

  return (
    
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <div>
          <Routes>
            <Route path='/' element={ <ItemListContainer saludo='Buenas canciones, siempre' /> } />
            <Route path='/categoria/:idCategoria' element={ <ItemListContainer saludo='Buenas canciones, siempre' /> } />
            <Route path='/detalle/:idProducto' element={ <ItemDetailContainer /> } />
            <Route path='/cart' element={ <CartContainer /> } />
            <Route path='*' element={ <Navigate to={ '/' } /> } />
          </Routes>
        </div>  
      </CartContextProvider>   
    </BrowserRouter>


  )

}

export default App

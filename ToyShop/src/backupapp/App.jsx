import { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import './App.scss'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Toggle from './components/Toggle/Toggle'

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContain from './components/CartContainer/CartContain';
import { createContext } from 'react';

// creando constante

const AppContext = createContext([])

//

function App() {
  const saludo = 'productos' 
  console.log(AppContext)

  return (
    <BrowserRouter>
    <div className="App">

      <header className="header">
        <NavBar>
          <Toggle/>
        </NavBar>
      </header>
      
      <main className="main">
        <Routes>
          <Route path='/' element={<ItemListContainer  greeting={saludo}/>} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer  greeting={saludo}/>} />  
  
          <Route path='/detalle/:idProducto' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<CartContain/>} />

          <Route path='*' element= {<Navigate to='/'></Navigate>} />
        </Routes>
        
      </main>
      <footer className="footer"></footer>
    </div>

    </BrowserRouter>
  )
}

export default App

//min 1:20
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
import { CartContextProvider } from './context/CartContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormPushProduct from './components/FormPushProduct/FormPushProduct';
import LikeContain from './components/LikeContain/LikeContain';
import TiketCompra from "./components/TiketCompra/TiketCompra";
import Error404 from "./components/Error404/Error404.jsx";
import Footer from "./components/Footer/Footer";
import UpScroll from "./components/UpScroll/UpScroll";
import { useRef } from "react";

// creando constante
//

function App() {
  const saludo = 'productos'
  const footerRef = useRef(null)

  return (
    
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">

          <header className="header">
            <NavBar footerRef={footerRef}>
              <Toggle />
            </NavBar>
          </header>

          <main className="main">
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={saludo} />} />
              <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting={saludo} />} />

              <Route path='/detalle/:idProducto' element={<ItemDetailContainer />} />

              <Route path='/like' element={<LikeContain />} />
              <Route path='/cart' element={<CartContain />} />

              <Route path='/formProduct' element={<FormPushProduct />} />
              <Route path='/tiket' element={<TiketCompra />} />
              <Route path='/error404' element={<Error404 />} />

              <Route path='*' element={<Navigate to='/error404'></Navigate>} />

            </Routes>
          </main>
          <UpScroll/>
          <footer className="footer" ref={footerRef}>
            <Footer />
          </footer>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" />
      </CartContextProvider>
    </BrowserRouter>

  )
}

export default App

//min 1:20
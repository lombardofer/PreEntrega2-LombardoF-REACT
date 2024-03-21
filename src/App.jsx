import React, { useState, useEffect } from 'react';
import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar'; 
import ProductCard from './componentes/ProdCard.jsx';
import { fetchProducts } from './asyncMock';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactComponent from './componentes/contacto/ContactComponent.jsx';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((productsData) => {
        setProducts(productsData);
    });
  }, []);

  useEffect(() => {
    console.log("Nuevos items", products);
  }, [products]);

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<ItemListContainer/>}/>
            <Route exact path='/productos' element={<ItemListContainer/>}/>
            <Route exact path='/productos/:id' element={<ItemListContainer/>}/>
            <Route exact path='/productos/:category' element={<ItemListContainer/>}/>
        </Routes>
      <NavBar /> 
      <header>
      <h1 className='titulo'>La Matería Online</h1>
      <ItemListContainer greeting={"¡Bienvenidos a Nuestro Sitio Web oficial!"}/>
      </header>
      <div className="container1">
      <h2 className='titulo2'>Nuestro catálogo</h2>
      </div>
      
      <div className="agruparitems">
        <div className="containeritems">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.image}
              description={product.description}
              precio={product.precio}
              descuento={product.descuento}
              stock={product.stock}
            />
          ))}
        </div>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;

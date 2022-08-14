import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCartContainer from './components/ItemCartContainer/ItemCartContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter >
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:categoryId/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<ItemCartContainer />} />
            <Route path='*' element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>

  );
}

export default App;

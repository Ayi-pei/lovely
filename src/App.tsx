import { Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
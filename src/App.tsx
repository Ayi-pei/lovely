import { Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import { LINE_ID } from './constants.ts';  // 导入 LINE_ID

function App() {
  return (
    <div>
      <h1>Learn React</h1>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <footer>
        <p>LINE ID: {LINE_ID}</p>  {/* 显示 LINE_ID */}
      </footer>
    </div>
  );
}

export default App;

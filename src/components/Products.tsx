import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// 导入产品图片
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';
import product5 from '../assets/product5.jpg';
import product6 from '../assets/product6.jpg';
import product7 from '../assets/product7.jpg';
import product8 from '../assets/product8.jpg';
import product9 from '../assets/product9.jpg';

const products = [
  { id: 1, image: product1, title: '产品1', description: '这是产品1的简短介绍' },
  { id: 2, image: product2, title: '产品2', description: '这是产品2的简短介绍' },
  { id: 3, image: product3, title: '产品3', description: '这是产品3的简短介绍' },
  { id: 4, image: product4, title: '产品4', description: '这是产品4的简短介绍' },
  { id: 5, image: product5, title: '产品5', description: '这是产品5的简短介绍' },
  { id: 6, image: product6, title: '产品6', description: '这是产品6的简短介绍' },
  { id: 7, image: product7, title: '产品7', description: '这是产品7的简短介绍' },
  { id: 8, image: product8, title: '产品8', description: '这是产品8的简短介绍' },
  { id: 9, image: product9, title: '产品9', description: '这是产品9的简短介绍' },
];

const ITEMS_PER_PAGE = 9;

function Products() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const currentProducts = products.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          我们的产品
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={prevPage}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              上一页
            </button>
            <span className="flex items-center px-4 py-2 text-sm font-medium text-gray-700">
              第 {currentPage + 1} 页，共 {totalPages} 页
            </span>
            <button
              onClick={nextPage}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              下一页
              <ChevronRight className="h-5 w-5 ml-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
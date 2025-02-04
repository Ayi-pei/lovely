import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog } from '@headlessui/react';

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
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
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
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
          在线的觅友
        </h2>
        <p
          className="text-sm text-gray-500 text-center cursor-pointer hover:underline"
          onClick={() => setIsDisclaimerOpen(true)}
        >
          免责说明
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex justify-center space-x-4">
            <button onClick={prevPage} className="px-4 py-2 border rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <ChevronLeft className="h-5 w-5 mr-1" /> 上一页
            </button>
            <span className="text-gray-700">第 {currentPage + 1} 页，共 {totalPages} 页</span>
            <button onClick={nextPage} className="px-4 py-2 border rounded-md text-gray-700 bg-white hover:bg-gray-50">
              下一页 <ChevronRight className="h-5 w-5 ml-1" />
            </button>
          </div>
        )}
      </div>

      {/* 免责声明弹窗 */}
      <Dialog open={isDisclaimerOpen} onClose={() => setIsDisclaimerOpen(false)} className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <Dialog.Title className="text-lg font-semibold">免责声明</Dialog.Title>
          <div className="mt-2 text-sm text-gray-700 space-y-2">
            <p>第一条：接受条款</p>
            <p>在访问和使用本网站之前，请务必仔细阅读并同意本声明。访问者通过访问、浏览、使用本网站的任何内容或服务，即表示已无条件接受本声明的全部条款。如有异议，请立即停止访问本网站，并与我们联系协商。</p>
            <p>第二条：访问者义务</p>
            <p>访问者在使用本网站时（包括但不限于访问、浏览、使用、转载、宣传等行为），应遵循善意原则，不得故意或过失损害本网站的合法权利与利益，不得利用本网站从事任何违反当地法律或社会公德的行为。</p>
            <p>第三条：内容来源及版权声明</p>
            <p>本网站所有内容均来自用户自行上传或互联网收集，本网站不对其真实性、合法性负责。若内容侵犯您的权益或隐私，请联系我们处理。</p>
            <p>第四条：观点声明</p>
            <p>本网站所发布的内容仅代表作者个人观点，并不代表本网站的立场或观点，相关责任由作者自行承担。</p>
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setIsDisclaimerOpen(false)}>关闭</button>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}

export default Products;

import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Heart, ArrowLeft, Clock, Target } from 'lucide-react';
import { LINE_ID } from '../constants.ts';  // 导入 LINE_ID

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

// 获取20～35之间的随机年龄
const getRandomAge = () => Math.floor(Math.random() * (35 - 20 + 1)) + 20;

// 产品数据：名称、简介、随机年龄
const products = [
  {
    id: 1,
    image: product1,
    title: '소연',
    description: '안녕하세요, 저는 소연입니다. 활발하고 긍정적인 성격을 가지고 있습니다.',
    age: getRandomAge(),
  },
  {
    id: 2,
    image: product2,
    title: '지수',
    description: '안녕하세요, 저는 지수입니다. 섬세하고 따뜻한 마음을 가지고 있습니다.',
    age: getRandomAge(),
  },
  {
    id: 3,
    image: product3,
    title: '혜진',
    description: '안녕하세요, 저는 혜진입니다. 창의적이고 열정적인 성격을 가지고 있습니다.',
    age: getRandomAge(),
  },
  {
    id: 4,
    image: product4,
    title: '유나',
    description: '안녕하세요, 저는 유나입니다. 예술과 음악을 사랑하며 감성이 풍부합니다.',
    age: getRandomAge(),
  },
  {
    id: 5,
    image: product5,
    title: '은지',
    description: '안녕하세요, 저는 은지입니다. 믿음직하고 책임감 있는 성격입니다.',
    age: getRandomAge(),
  },
  {
    id: 6,
    image: product6,
    title: '다혜',
    description: '안녕하세요, 저는 다혜입니다. 온화하고 지혜로운 마음을 가지고 있습니다.',
    age: getRandomAge(),
  },
  {
    id: 7,
    image: product7,
    title: '지연',
    description: '안녕하세요, 저는 지연입니다. 배려심 깊고 경험이 풍부한 사람입니다.',
    age: getRandomAge(),
  },
  {
    id: 8,
    image: product8,
    title: '서린',
    description: '안녕하세요, 저는 서린입니다. 차분하고 친절한 성격을 지녔습니다.',
    age: getRandomAge(),
  },
  {
    id: 9,
    image: product9,
    title: '민지',
    description: '안녕하세요, 저는 민지입니다. 에너지가 넘치고 활발한 성격입니다.',
    age: getRandomAge(),
  },
];

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">제품을 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative">
          <button
            onClick={() => navigate('/products')}
            className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
          >
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </button>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto max-h-screen object-contain"
          />
        </div>

        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            <div className="flex flex-col items-center">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-3 rounded-full transition-colors ${
                  isLiked
                    ? 'bg-pink-100 text-pink-500'
                    : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                }`}
              >
                <Heart className={`h-6 w-6 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              {/* 新增的“发送消息”按钮 */}
              <button
                onClick={() => window.location.href = `https://line.me/ti/p/${LINE_ID}`}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                发送消息
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-2" />
              <span>나이: {product.age}세</span>
            </div>

            <div className="flex items-start space-x-2">
              <Target className="h-5 w-5 text-gray-600 mt-1" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">소개</h2>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

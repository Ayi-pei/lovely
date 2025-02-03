import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react'; // 添加这一行
import { Heart, ArrowLeft, Clock, Target } from 'lucide-react';

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
  {
    id: 1,
    image: product1,
    title: '产品1',
    description: '这是产品1的简短介绍',
    time: '2024年3月15日',
    purpose: '这个产品主要用于提升生活品质，让您的日常更加轻松愉快。它采用了创新的设计理念，将实用性和美观完美结合。'
  },
  {
    id: 2,
    image: product2,
    title: '产品2',
    description: '这是产品2的简短介绍',
    time: '2024年3月14日',
    purpose: '专为追求品质生活的人们设计，这款产品能够有效改善您的日常体验，带来前所未有的便利。'
  },
  {
    id: 3,
    image: product3,
    title: '产品3',
    description: '这是产品3的简短介绍',
    time: '2024年3月13日',
    purpose: '这是一款多功能产品，无论是在家庭还是办公环境中都能发挥重要作用，提升效率的同时保持优雅。'
  },
  {
    id: 4,
    image: product4,
    title: '产品4',
    description: '这是产品4的简短介绍',
    time: '2024年3月12日',
    purpose: '为现代生活设计的完美解决方案，既能满足功能需求，又能为空间增添独特的艺术气息。'
  },
  {
    id: 5,
    image: product5,
    title: '产品5',
    description: '这是产品5的简短介绍',
    time: '2024年3月11日',
    purpose: '创新科技与人性化设计的完美结合，让您的生活更加智能化，同时保持简约优雅的风格。'
  },
  {
    id: 6,
    image: product6,
    title: '产品6',
    description: '这是产品6的简短介绍',
    time: '2024年3月10日',
    purpose: '专注于解决特定需求，这款产品将为您带来全新的使用体验，让生活充满惊喜。'
  },
  {
    id: 7,
    image: product7,
    title: '产品7',
    description: '这是产品7的简短介绍',
    time: '2024年3月9日',
    purpose: '以用户体验为核心，每一个细节都经过精心打磨，为您提供卓越的使用感受。'
  },
  {
    id: 8,
    image: product8,
    title: '产品8',
    description: '这是产品8的简短介绍',
    time: '2024年3月8日',
    purpose: '将艺术与实用完美融合，这款产品不仅能满足您的需求，还能为空间增添独特魅力。'
  },
  {
    id: 9,
    image: product9,
    title: '产品9',
    description: '这是产品9的简短介绍',
    time: '2024年3月7日',
    purpose: '采用环保材料制作，既能满足您的使用需求，又能为环境保护贡献一份力量。'
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
        <p className="text-xl text-gray-600">产品未找到</p>
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
          </div>

          <div className="space-y-6">
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-2" />
              <span>发布时间：{product.time}</span>
            </div>

            <div className="flex items-start space-x-2">
              <Target className="h-5 w-5 text-gray-600 mt-1" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">产品作用</h2>
                <p className="text-gray-600 leading-relaxed">
                  {product.purpose}
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
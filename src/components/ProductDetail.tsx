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
    description: '저는 미지의 세계를 탐험하는 것을 좋아해요. 만나는 모든 순간이 인연이라고 믿어요. 기대가 되네요..',
    age: getRandomAge(),
  },
  {
    id: 2,
    image: product2,
    title: '지수',
    description: '때로는 물처럼 맑고 부드럽기도 하고 때로는 물줄기처럼 활기차고 자유롭게 느껴질 때도 있어요',
    age: getRandomAge(),
  },
  {
    id: 3,
    image: product3,
    title: '혜진',
    description: '창조하고 나누는 것을 좋아해요 제 마음에는 삶에 대한 열정이 가득해요 친구들과 함께 이야기하고 토론하며 서로의 이야기를 나누는 시간이 가장 즐거워요',
    age: getRandomAge(),
  },
  {
    id: 4,
    image: product4,
    title: '유나',
    description: '모든 사람은 고유한 빛을 가지고 있다고 믿어요 제 열정으로 주변 사람들에게 영향을 주고 싶어요 예술과 음악을 좋아하고 특히 미지의 만남에서 영감을 찾는 과정을 즐깁니다',
    age: getRandomAge(),
  },
  {
    id: 5,
    image: product5,
    title: '은지',
    description: '저는 항상 삶 속의 작은 행복을 찾으려 노력하고 친구들과 함께 기쁜 순간들을 나누는 것을 좋아해요 같이 멋진 추억을 만들어 갈 수 있었으면 좋겠어요' ,
    age: getRandomAge(),
  },
  {
    id: 6,
    image: product6,
    title: '다혜',
    description: '온화함과 지혜는 삶에서 가장 중요한 가치라고 생각해요 저와 같은 온화한 분을 만나는 걸 기대해요',
    age: getRandomAge(),
  },
  {
    id: 7,
    image: product7,
    title: '지연',
    description: '지혜는 인생에서 가장 귀중한 재산이라고 믿고 친구는 우리 여행에서 최고의 동반자예요 서로의 경험을 공유하고, 지지하며 함께 미래의 도전을 맞이할 수 있기를 희망해요',
    age: getRandomAge(),
  },
  {
    id: 8,
    image: product8,
    title: '서린',
    description: '마음이 고운 내면이 부드러운 친구들을 만나길 기대해요 함께하는 매 순간을 즐길 수 있었으면 좋겠어요',
    age: getRandomAge(),
  },
  {
    id: 9,
    image: product9,
    title: '민지',
    description: '저에게는 이것이 매우 소중한 일이라고 생각해요 여러분과 깊은 소통을 하며 함께 성장할 수 있기를 기대합니다',
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

import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Heart, ArrowLeft, Clock, Target } from 'lucide-react';
import { LINE_ID } from '../constants.ts';

// 导入多张产品图片
import product1_1 from '../assets/product1_1.jpg';
import product1_2 from '../assets/product1_2.jpg';
import product1_3 from '../assets/product1_3.jpg';

import product2_1 from '../assets/product2_1.jpg';
import product2_2 from '../assets/product2_2.jpg';

import product3_1 from '../assets/product3_1.jpg';
import product3_2 from '../assets/product3_2.jpg';

import product4_1 from '../assets/product4_1.jpg';
import product4_2 from '../assets/product4_2.jpg';
import product4_3 from '../assets/product4_3.jpg';

import product5_1 from '../assets/product5_1.jpg';
import product5_2 from '../assets/product5_2.jpg';

import product6_1 from '../assets/product6_1.jpg';
import product6_2 from '../assets/product6_2.jpg';
import product6_3 from '../assets/product6_3.jpg';

import product7_1 from '../assets/product7_1.jpg';
import product7_2 from '../assets/product7_2.jpg';

import product8_1 from '../assets/product8_1.jpg';
import product8_2 from '../assets/product8_2.jpg';

import product9_1 from '../assets/product9_1.jpg';

import product10_1 from '../assets/product10_1.jpg';
import product10_2 from '../assets/product10_2.jpg';

import product11_1 from '../assets/product11_1.jpg';
import product11_2 from '../assets/product11_2.jpg';
import product11_3 from '../assets/product11_3.jpg';

import product12_1 from '../assets/product12_1.jpg';
import product12_2 from '../assets/product12_2.jpg';

import product13_1 from '../assets/product13_1.jpg';
import product13_2 from '../assets/product13_2.jpg';

import product14_1 from '../assets/product14_1.jpg';
import product14_2 from '../assets/product14_2.jpg';
import product14_3 from '../assets/product14_3.jpg';

import product15_1 from '../assets/product15_1.jpg';
import product15_2 from '../assets/product15_2.jpg';

import product16_1 from '../assets/product16_1.jpg';
import product16_2 from '../assets/product16_2.jpg';

import product17_1 from '../assets/product17_1.jpg';
import product17_2 from '../assets/product17_2.jpg';

import product18_1 from '../assets/product18_1.jpg';
import product18_2 from '../assets/product18_2.jpg';

// 产品数据：名称、简介、随机年龄、多张图片
const products = [
  {
    id: 1,
    images: [product1_1, product1_2, product1_3],
    title: '소연',
    description: '저는 미지의 세계를 탐험하는 것을 좋아해요. 만나는 모든 순간이 인연이라고 믿어요. 기대가 되네요.',
    age: 27,
  },
  {
    id: 2,
    images: [product2_1, product2_2],
    title: '지수',
    description: '때로는 물처럼 맑고 부드럽기도 하고 때로는 물줄기처럼 활기차고 자유롭게 느껴질 때도 있어요.',
    age: 25,
  },
  {
    id: 3,
    images: [product3_1, product3_2],
    title: '혜진',
    description: '창조하고 나누는 것을 좋아해요. 제 마음에는 삶에 대한 열정이 가득해요.',
    age: 30,
  },
  {
    id: 4,
    images: [product4_1, product4_2, product4_3],
    title: '유진',
    description: '언제나 새로운 것을 배우고 탐구하는 것이 저의 큰 기쁨이에요.',
    age: 26,
  },
  {
    id: 5,
    images: [product5_1, product5_2],
    title: '수지',
    description: '감성을 공유하고 진솔한 대화를 나누는 것을 좋아해요.',
    age: 29,
  },
  {
    id: 6,
    images: [product6_1, product6_2, product6_3],
    title: '다혜',
    description: '따뜻한 감성을 가진 사람들과 소통하는 걸 좋아해요.',
    age: 24,
  },
  {
    id: 7,
    images: [product7_1, product7_2],
    title: '유나',
    description: '밝고 긍정적인 에너지를 나누고 싶어요.',
    age: 28,
  },
  {
    id: 8,
    images: [product8_1, product8_2],
    title: '소민',
    description: '새로운 만남에서 영감을 얻고 싶어요.',
    age: 23,
  },
  {
    id: 9,
    images: [product9_1],
    title: '민지',
    description: '자연을 좋아하고, 함께 여행하며 추억을 만들고 싶어요.',
    age: 31,
  },
  {
    id: 10,
    images: [product10_1, product10_2],
    title: '채영',
    description: '소소한 일상 속에서 행복을 찾는 걸 좋아해요.',
    age: 27,
  },
  {
    id: 11,
    images: [product11_1, product11_2, product11_3],
    title: '서연',
    description: '서로의 이야기를 듣고 공유하는 걸 소중하게 여겨요.',
    age: 26,
  },
  {
    id: 12,
    images: [product12_1, product12_2],
    title: '나연',
    description: '열정적이고 새로운 도전을 두려워하지 않아요.',
    age: 25,
  },
  {
    id: 13,
    images: [product13_1, product13_2],
    title: '예린',
    description: '잔잔한 음악을 들으며 책 읽는 시간을 좋아해요.',
    age: 32,
  },
  {
    id: 14,
    images: [product14_1, product14_2, product14_3],
    title: '지연',
    description: '함께 성장하고 배울 수 있는 관계를 원해요.',
    age: 30,
  },
  {
    id: 15,
    images: [product15_1, product15_2],
    title: '하린',
    description: '자연 속에서 힐링하는 것을 좋아해요.',
    age: 24,
  },
  {
    id: 16,
    images: [product16_1, product16_2],
    title: '가영',
    description: '예술과 디자인을 사랑하고 창의적인 일을 즐겨요.',
    age: 28,
  },
  {
    id: 17,
    images: [product17_1, product17_2],
    title: '미나',
    description: '언제나 따뜻한 마음으로 사람들을 대하고 싶어요.',
    age: 26,
  },
  {
    id: 18,
    images: [product18_1, product18_2],
    title: '정아',
    description: '소소한 일상 속에서도 특별한 순간을 만들고 싶어요.',
    age: 29,
  },
];

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">제품을 찾을 수 없습니다.</p>
      </div>
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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

          <Slider {...sliderSettings}>
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.title}-${index + 1}`}
                className="w-full h-auto max-h-screen object-contain"
              />
            ))}
          </Slider>
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
              <button
                onClick={() => window.location.href = `https://line.me/ti/p/${LINE_ID}`}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                메시지 보내기
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
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// 导入产品图片
import product1 from '../assets/product1_1.jpg';
import product2 from '../assets/product2_1.jpg';
import product3 from '../assets/product3_1.jpg';
import product4 from '../assets/product4_1.jpg';
import product5 from '../assets/product5_1.jpg';
import product6 from '../assets/product6_1.jpg';
import product7 from '../assets/product7_1.jpg';
import product8 from '../assets/product8_1.jpg';
import product9 from '../assets/product9_1.jpg';
import product10 from '../assets/product10_1.jpg';
import product11 from '../assets/product11_1.jpg';
import product12 from '../assets/product12_1.jpg';
import product13 from '../assets/product13_1.jpg';
import product14 from '../assets/product14_1.jpg';
import product15 from '../assets/product15_1.jpg';
import product16 from '../assets/product16_1.jpg';
import product17 from '../assets/product17_1.jpg';
import product18 from '../assets/product18_1.jpg';

const products = [
  { id: 1, image: product1, title: '소연', description: '저는 미지의 세계를 탐험하는 것을 좋아해요 만나는 모든 순간이 인연이라고 믿어요 기대가 되네요...' },
  { id: 2, image: product2, title: '지수', description: '때로는 물처럼 맑고 부드럽기도 하고 때로는 물줄기처럼 활기차고 자유롭게 느껴질 때도 있어요' },
  { id: 3, image: product3, title: '혜진', description: '창조하고 나누는 것을 좋아해요 제 마음에는 삶에 대한 열정이 가득해요 친구들과 함께 이야기하고 토론하며 서로의 이야기를 나누는 시간이 가장 즐거워요' },
  { id: 4, image: product4, title: '유나', description: '모든 사람은 고유한 빛을 가지고 있다고 믿어요 제 열정으로 주변 사람들에게 영향을 주고 싶어요 예술과 음악을 좋아하고 특히 미지의 만남에서 영감을 찾는 과정을 즐깁니다' },
  { id: 5, image: product5, title: '은지', description: '저는 항상 삶 속의 작은 행복을 찾으려 노력하고 친구들과 함께 기쁜 순간들을 나누는 것을 좋아해요 같이 멋진 추억을 만들어 갈 수 있었으면 좋겠어요' },
  { id: 6, image: product6, title: '다혜', description: '온화함과 지혜는 삶에서 가장 중요한 가치라고 생각해요 저와 같은 온화한 분을 만나는 걸 기대해요' },
  { id: 7, image: product7, title: '지연', description: '지혜는 인생에서 가장 귀중한 재산이라고 믿고 친구는 우리 여행에서 최고의 동반자예요 서로의 경험을 공유하고, 지지하며 함께 미래의 도전을 맞이할 수 있기를 희망해요' },
  { id: 8, image: product8, title: '서린', description: '마음이 고운 내면이 부드러운 친구들을 만나길 기대해요 함께하는 매 순간을 즐길 수 있었으면 좋겠어요' },
  { id: 9, image: product9, title: '민지', description: '저에게는 이것이 매우 소중한 일이라고 생각해요 여러분과 깊은 소통을 하며 함께 성장할 수 있기를 기대합니다' },
  { id: 10, image: product10, title: '수진', description: '새로운 만남을 기대하며 따뜻한 인연을 찾고 있어요' },
  { id: 11, image: product11, title: '나연', description: '긍정적인 에너지를 나누고 싶어요' },
  { id: 12, image: product12, title: '하린', description: '여행과 음악을 좋아하는 사람과 대화 나누고 싶어요' },
  { id: 13, image: product13, title: '예린', description: '꿈과 목표를 향해 함께 걸어갈 친구를 찾고 있어요' },
  { id: 14, image: product14, title: '지원', description: '진솔한 대화를 통해 서로를 알아가고 싶어요' },
  { id: 15, image: product15, title: '다현', description: '같이 맛있는 음식을 먹고 여행을 다니며 행복을 찾고 싶어요' },
  { id: 16, image: product16, title: '채원', description: '새로운 도전을 좋아하는 나와 함께 모험을 떠날 친구를 만나고 싶어요' },
  { id: 17, image: product17, title: '은서', description: '서로를 이해하고 배려할 수 있는 친구를 찾고 있어요' },
  { id: 18, image: product18, title: '윤서', description: '마음이 맞는 사람과 깊은 이야기를 나누고 싶어요' },
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
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">온라인 매칭</h2>

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
              <ChevronLeft className="h-5 w-5 mr-1" /> 이전 페이지
            </button>
            <span className="text-gray-700">
              페이지 {currentPage + 1} / {totalPages}
            </span>
            <button onClick={nextPage} className="px-4 py-2 border rounded-md text-gray-700 bg-white hover:bg-gray-50">
              다음 페이지 <ChevronRight className="h-5 w-5 ml-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;

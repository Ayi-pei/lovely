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
  { id: 1, image: product1, title: '소연', description: '저는 미지의 세계를 탐험하는 것을 좋아해요 만나는 모든 순간이 인연이라고 믿어요 기대가 되네요...' },
  { id: 2, image: product2, title: '지수', description: '때로는 물처럼 맑고 부드럽기도 하고 때로는 물줄기처럼 활기차고 자유롭게 느껴질 때도 있어요' },
  { id: 3, image: product3, title: '혜진', description: '창조하고 나누는 것을 좋아해요 제 마음에는 삶에 대한 열정이 가득해요 친구들과 함께 이야기하고 토론하며 서로의 이야기를 나누는 시간이 가장 즐거워요' },
  { id: 4, image: product4, title: '유나', description: '모든 사람은 고유한 빛을 가지고 있다고 믿어요 제 열정으로 주변 사람들에게 영향을 주고 싶어요 예술과 음악을 좋아하고 특히 미지의 만남에서 영감을 찾는 과정을 즐깁니다' },
  { id: 5, image: product5, title: '은지', description: '저는 항상 삶 속의 작은 행복을 찾으려 노력하고 친구들과 함께 기쁜 순간들을 나누는 것을 좋아해요 같이 멋진 추억을 만들어 갈 수 있었으면 좋겠어요' },
  { id: 6, image: product6, title: '다혜', description: '온화함과 지혜는 삶에서 가장 중요한 가치라고 생각해요 저와 같은 온화한 분을 만나는 걸 기대해요' },
  { id: 7, image: product7, title: '지연', description: '지혜는 인생에서 가장 귀중한 재산이라고 믿고 친구는 우리 여행에서 최고의 동반자예요 서로의 경험을 공유하고, 지지하며 함께 미래의 도전을 맞이할 수 있기를 희망해요' },
  { id: 8, image: product8, title: '서린', description: '마음이 고운 내면이 부드러운 친구들을 만나길 기대해요 함께하는 매 순간을 즐길 수 있었으면 좋겠어요' },
  { id: 9, image: product9, title: '민지', description: '저에게는 이것이 매우 소중한 일이라고 생각해요 여러분과 깊은 소통을 하며 함께 성장할 수 있기를 기대합니다' },
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
          온라인 매칭
        </h2>
        <p
          className="text-sm text-gray-500 text-center cursor-pointer hover:underline"
          onClick={() => setIsDisclaimerOpen(true)}
        >
          면책 조항
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

      {/* 면책 조항 다이얼로그 */}
      <Dialog open={isDisclaimerOpen} onClose={() => setIsDisclaimerOpen(false)} className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <Dialog.Title className="text-lg font-semibold">면책 조항</Dialog.Title>
          <div className="mt-2 text-sm text-gray-700 space-y-2">
            <p>제1조: 약관 수락</p>
            <p>
              본 웹사이트를 방문하고 사용하기 전에 반드시 본 조항을 주의 깊게 읽고 동의해 주시기 바랍니다.
              방문자가 웹사이트의 어떤 콘텐츠나 서비스를 이용함으로써 본 조항의 모든 내용을 무조건 수락하는 것으로 간주됩니다.
              이의가 있으신 경우, 즉시 웹사이트 방문을 중단하고 저희와 연락해 협의해 주시기 바랍니다.
            </p>
            <p>제2조: 방문자 의무</p>
            <p>
              방문자는 본 웹사이트를 이용할 때(방문, 열람, 이용, 전재, 홍보 등을 포함하되 이에 국한되지 않음),
              선의의 원칙을 준수하여야 하며, 고의 또는 과실로 본 웹사이트의 합법적인 권리와 이익을 해치는 행위를 하여서는 안 됩니다.
              또한, 현지 법률 또는 사회 윤리에 위배되는 행위에 웹사이트를 이용하여서는 안 됩니다.
            </p>
            <p>제3조: 콘텐츠 출처 및 저작권 고지</p>
            <p>
              본 웹사이트의 모든 콘텐츠는 사용자가 직접 업로드하거나 인터넷에서 수집된 것으로, 본 웹사이트는 그 진실성이나 합법성에 대해 책임지지 않습니다.
              콘텐츠가 귀하의 권리 또는 개인정보를 침해하는 경우, 저희에게 연락하여 처리해 주시기 바랍니다.
            </p>
            <p>제4조: 견해 고지</p>
            <p>
              본 웹사이트에 게시된 콘텐츠는 오로지 작성자의 개인 의견을 나타내며, 본 웹사이트의 입장이나 견해를 대변하지 않습니다.
              관련 책임은 작성자가 부담합니다.
            </p>
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setIsDisclaimerOpen(false)}>
            닫기
          </button>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}

export default Products;

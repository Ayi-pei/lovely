import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// 导入背景图片
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';

const backgroundImages = [image1, image2, image3, image4, image5];

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-pink-100/70 backdrop-blur-md rounded-lg max-w-md w-full p-6 relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
};

function Welcome() {
  const navigate = useNavigate();

  // 初始仅显示欢迎页，模态框初始为关闭状态
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 当前步骤：0 - 选择性别，1 - 选择城市，2 - 最后确认
  const [currentStep, setCurrentStep] = useState(0);
  // 保存用户选择的城市（这里未存储性别，仅用于步骤流程控制）
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  /**
   * 韩国主要市级行政区划（市、广域市、特别市等）的中文名称。
   * 这里只列出部分常用城市，如需更全面的数据可自行补充。
   */
  const cities = [
    // 首都及广域市
    "서울", "부산", "대구", "인천", "광주", "대전", "울산", "세종",
    // 京畿道（部分）
    "수원", "고양", "성남", "용인", "부천", "안산", "평택", "과천", "안양", "의왕", "시흥", "김포", "광명", "군포", "오산", "이천", "구리", "남양주", "화성", "파주", "양주", "포천", "연천",
    // 江原道
    "춘천", "원주", "강릉", "동해", "태백", "속초", "삼척",
    // 忠清北道
    "청주", "충주", "제천",
    // 忠清南道
    "천안", "공주", "보령", "아산", "서산", "논산",
    // 全罗北道
    "전주", "군산", "익산", "정읍", "남원", "김제",
    // 全罗南道
    "목포", "여수", "순천", "羅州", "광양",
    // 庆尚北道
    "포항", "경주", "구미", "영주", "안동", "문경", "상주", "영천",
    // 庆尚南道
    "창원", "김해", "밀양", "진주", "거제", "양산", "통영",
    // 济州特别自治道
    "제주", "서귀포"
  ];

  // 循环播放背景图片，每隔 3 秒切换一次
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 点击欢迎页“开始匹配”时打开模态框，并重置流程
  const openModal = () => {
    setCurrentStep(0);
    setSelectedCity(null);
    setIsModalOpen(true);
  };

  // 第一步：选择性别（此处仅作为流程控制，不保存具体性别）
  const handleGenderSelect = () => {
    setCurrentStep(1);
  };

  // 第二步：选择城市
  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
  };

  const handleCityConfirm = () => {
    if (selectedCity) {
      setCurrentStep(2);
    }
  };

  // 第三步：最终确认后关闭模态框并跳转到 /products 页面
  const handleFinalContinue = () => {
    setIsModalOpen(false);
    navigate('/products');
  };

  // 根据当前步骤生成模态框的内容
  const renderModalContent = () => {
    if (currentStep === 0) {
      return (
        <>
          <p className="text-gray-800 mb-6 text-lg">
          매칭을 시작하기 전에 성별을 알려주실 수 있으실까요? 이 부분이 정말 중요해요
          </p>
          <div className="flex justify-around">
            <button
              onClick={handleGenderSelect}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
            >
              선생님
            </button>
            <button
              onClick={handleGenderSelect}
              className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-lg transition-colors"
            >
              여사님
            </button>
          </div>
        </>
      );
    } else if (currentStep === 1) {
      return (
        <>
          <p className="text-gray-800 mb-6 text-lg">
          선호 설정이 성공적으로 완료되었습니다. 더 나은 서비스를 제공해 드리기 위해, 지금 계신 도시를 선택해 주세요
          </p>
          <div className="max-h-80 overflow-y-auto mb-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => handleCitySelect(city)}
                  className={`py-1 px-3 rounded border transition-colors ${
                    selectedCity === city
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleCityConfirm}
            disabled={!selectedCity}
            className={`w-full py-2 px-4 rounded-lg transition-colors ${
              selectedCity
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            알겠습니다
          </button>
        </>
      );
    } else if (currentStep === 2) {
      return (
        <>
          <p className="text-gray-800 mb-6 text-lg">
          진심으로 감사드려요. 이번 경험이 재미있고 만족스러운 시간이 될 거라 믿어요~ 이제 시작해 볼까요?
          </p>
          <button
            onClick={handleFinalContinue}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
          >
            시작
          </button>
        </>
      );
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* 背景图片 */}
      <div className="fixed inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${image})`,
              opacity: index === currentImageIndex ? 1 : 0,
              zIndex: index === currentImageIndex ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      </div>

      {/* 欢迎页内容 */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
        미유에 오신 것을 환영합니다
        </h1>
        <p className="text-xl text-white text-center max-w-2xl mb-8">
        이번은 거래가 아닙니다. 서로 진심과 친절로 비밀스러운 소통을 쌓는 시간이 될 것입니다
        </p>
        <button
          onClick={openModal}
          className="bg-white/90 backdrop-blur-sm text-gray-900 py-3 px-8 rounded-lg font-semibold hover:bg-white transition-colors"
        >
          매칭 시작
        </button>
      </div>

      {/* 模态框（点击“开始匹配”后显示） */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {renderModalContent()}
      </Modal>
    </div>
  );
}

export default Welcome;

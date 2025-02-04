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
    "首尔", "釜山", "大邱", "仁川", "光州", "大田", "蔚山", "世宗",
    // 京畿道（部分）
    "水原", "高阳", "城南", "龙仁", "富川", "安山", "平泽", "果川", "安阳", "义政", "始兴", "金浦", "光明", "军浦", "吴山", "利川", "九里", "南阳州", "华城", "坡州", "阳州", "浦川", "延川",
    // 江原道
    "春川", "原州", "江陵", "东海", "太白", "束草", "三陟",
    // 忠清北道
    "清州", "忠州", "济川",
    // 忠清南道
    "天安", "公州", "保寧", "阿山", "西山", "论山",
    // 전라북도（全罗北道）
    "全州", "群山", "益山", "正邑", "南元", "金制",
    // 전라남도（全罗南道）
    "木浦", "丽水", "顺天", "罗州", "光阳",
    // 경상북도（庆尚北道）
    "浦项", "庆州", "九美", "永州", "安东", "文京", "尚州", "永川",
    // 경상남도（庆尚南道）
    "昌原", "金海", "密阳", "晋州", "巨济", "杨山", "统营",
    // 济州特别自治道
    "济州", "西归浦"
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

  // 第三步：最终确认后关闭模态框并跳转到 /h2 页面
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
            在开始匹配前请告诉我您的性别，这很重要
          </p>
          <div className="flex justify-around">
            <button
              onClick={handleGenderSelect}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
            >
              男
            </button>
            <button
              onClick={handleGenderSelect}
              className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-lg transition-colors"
            >
              女
            </button>
          </div>
        </>
      );
    } else if (currentStep === 1) {
      return (
        <>
          <p className="text-gray-800 mb-6 text-lg">
            恭喜您偏好设置成功，请选择您的所在城市以便我们提供贴心的服务
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
            确认
          </button>
        </>
      );
    } else if (currentStep === 2) {
      return (
        <>
          <p className="text-gray-800 mb-6 text-lg">
            感谢您的真诚，相信这是一次有趣满意的体验~让我们开始吧
          </p>
          <button
            onClick={handleFinalContinue}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
          >
            开始
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
          欢迎来到觅友
        </h1>
        <p className="text-xl text-white text-center max-w-2xl mb-8">
          这不是一次交易,这是建立彼此真诚友善的秘密交流
        </p>
        <button
          onClick={openModal}
          className="bg-white/90 backdrop-blur-sm text-gray-900 py-3 px-8 rounded-lg font-semibold hover:bg-white transition-colors"
        >
          开始匹配
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

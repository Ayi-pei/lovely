import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// 导入背景图片
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';

const backgroundImages = [
  image1,
  image2,
  image3,
  image4,
  image5
];

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onContinue, content }) => {
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
        <p className="text-gray-800 mb-6 text-lg">{content}</p>
        <button
          onClick={onContinue}
          className="w-full bg-blue-600/90 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors backdrop-blur-sm"
        >
          继续
        </button>
      </div>
    </div>
  );
};

const contents = [
  "欢迎来到这个模版，背景可更换轮播",
  "这里可以放一些自我介绍或者入站规则",
  "你准备好了吗？一起探索一下。"
];

function Welcome() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleContinue = () => {
    if (currentStep < contents.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsModalOpen(false);
      navigate('/products');
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

      {/* 主页内容 */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
          欢迎来到觅友
        </h1>
        <p className="text-xl text-white text-center max-w-2xl mb-8">
          这不是一次交易,这是真诚友善的秘密交流
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-white/90 backdrop-blur-sm text-gray-900 py-3 px-8 rounded-lg font-semibold hover:bg-white transition-colors"
        >
          进入探索
        </button>
      </div>

      {/* 模态框 */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onContinue={handleContinue}
        content={contents[currentStep]}
      />
    </div>
  );
}

export default Welcome;
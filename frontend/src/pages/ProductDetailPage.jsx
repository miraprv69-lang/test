import React, { useState } from 'react';
import { RiShoppingBag3Line, RiStarFill, RiTruckLine, RiShieldCheckLine } from 'react-icons/ri';

// Mock Product Data
const product = {
  id: 1,
  name: 'جهاز ايفون 15 برو ماكس - تيتانيوم طبيعي',
  price: '1,250,000',
  currency: 'د.ع',
  oldPrice: '1,350,000',
  description: 'الجهاز الأقوى من أبل مع معالج A17 Pro الجديد، وهيكل من التيتانيوم خفيف الوزن وقوي للغاية. نظام كاميرات احترافي جديد كلياً.',
  colors: [
    { name: 'تيتانيوم طبيعي', class: 'bg-gray-400' },
    { name: 'تيتانيوم أزرق', class: 'bg-blue-900' },
    { name: 'تيتانيوم أسود', class: 'bg-gray-900' },
  ],
  storage: ['256GB', '512GB', '1TB'],
  images: [
    'https://via.placeholder.com/600x600',
    'https://via.placeholder.com/600x600/eee',
    'https://via.placeholder.com/600x600/ccc',
  ]
};

const ProductDetailPage = () => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState('256GB');
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Right Column: Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative group">
             <img src={mainImage} alt={product.name} className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105" />
             <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
               خصم 10%
             </span>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setMainImage(img)}
                className={`aspect-square rounded-xl border-2 overflow-hidden bg-white ${mainImage === img ? 'border-blue-600' : 'border-transparent hover:border-gray-200'}`}
              >
                <img src={img} alt="" className="w-full h-full object-contain p-2" />
              </button>
            ))}
          </div>
        </div>

        {/* Left Column: Details */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400 text-sm">
                {[...Array(5)].map((_, i) => <RiStarFill key={i} />)}
              </div>
              <span className="text-sm text-gray-500 font-medium">(124 تقييم)</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-black text-blue-600">{product.price} <span className="text-xl">{product.currency}</span></span>
              <span className="text-xl text-gray-400 line-through font-bold">{product.oldPrice}</span>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed font-medium">
            {product.description}
          </p>

          {/* Options */}
          <div className="space-y-6">
            {/* Color Selector */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-3">اللون: <span className="text-gray-500 font-normal">{product.colors[selectedColor].name}</span></label>
              <div className="flex gap-3">
                {product.colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(idx)}
                    className={`w-10 h-10 rounded-full ring-2 ring-offset-2 ${color.class} ${selectedColor === idx ? 'ring-blue-600' : 'ring-transparent'}`}
                  />
                ))}
              </div>
            </div>

            {/* Storage Selector */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-3">سعة التخزين</label>
              <div className="flex gap-3">
                {product.storage.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedStorage(size)}
                    className={`px-6 py-2 rounded-xl border-2 font-bold text-sm transition-all ${
                      selectedStorage === size 
                      ? 'border-blue-600 bg-blue-50 text-blue-600' 
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-gray-100 space-y-4">
            <button className="w-full bg-blue-600 text-white text-lg font-bold py-4 rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
              <RiShoppingBag3Line className="text-xl" />
              أضف إلى السلة
            </button>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <RiTruckLine className="text-lg text-blue-600" />
                <span>توصيل سريع خلال 24 ساعة</span>
              </div>
              <div className="flex items-center gap-2">
                <RiShieldCheckLine className="text-lg text-blue-600" />
                <span>ضمان لمدة سنة كاملة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
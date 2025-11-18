import React from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingBagLine } from 'react-icons/ri';

const StoreProductCard = ({ product }) => {
  return (
    <Link 
      to={`/store/product/${product.id}`} 
      className="group relative block bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Image Container */}
      <div className="aspect-[4/5] bg-gray-50 relative overflow-hidden">
        <img 
          src={product.img} 
          alt={product.name} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
        />
        
        {/* Quick Add Button (Visible on Hover) */}
        <button className="absolute bottom-4 right-4 bg-white text-primary p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10 hover:bg-primary hover:text-white">
          <RiShoppingBagLine className="text-xl" />
        </button>

        {product.discount && (
          <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
            {product.discount}
          </span>
        )}
      </div>
      
      {/* Info */}
      <div className="p-5">
        <h3 className="font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-1">{product.category || 'اجهزة الكترونية'}</p>
        
        <div className="flex items-center gap-3">
          <span className="text-lg font-black text-primary">{product.price}</span>
          {product.oldPrice && (
             <span className="text-sm font-bold text-gray-300 line-through">{product.oldPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default StoreProductCard;
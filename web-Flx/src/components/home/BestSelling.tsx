import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Product } from '../../types';
import { Heart, Eye } from 'lucide-react';

export const BestSelling = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.getProducts().then(data => setProducts(data.slice(4, 8))); // Get next 4 for best selling
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-5 h-10 bg-[#1443C3] rounded-sm"></div>
            <span className="text-[#1443C3] font-bold">This Month</span>
          </div>
          
          <div className="flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Best Selling Products</h2>
            <button className="bg-[#1443C3] text-white px-8 py-3 rounded-sm font-medium hover:bg-red-500 transition-colors">
              View All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group w-[90%] mx-auto">
              <div className="relative bg-gray-100 rounded-md p-4 mb-4 h-[200px] flex items-center justify-center overflow-hidden">
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-3/4 h-3/4 object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="text-center">
                <h3 className="font-medium text-base mb-1 truncate">{product.title}</h3>
                <div className="flex items-center justify-center gap-3 mb-1">
                  <span className="text-red-500 font-medium">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

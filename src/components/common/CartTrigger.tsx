
import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import ModernCart from './ModernCart';

const CartTrigger = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const itemCount = 2; // This would come from your cart state

  return (
    <>
      <button
        onClick={() => setIsCartOpen(true)}
        className="relative p-3 rounded-full bg-gradient-to-r from-mylli-primary to-mylli-secondary text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
        <ShoppingCart size={24} />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-mylli-accent text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse">
            {itemCount}
          </span>
        )}
      </button>
      
      <ModernCart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </>
  );
};

export default CartTrigger;

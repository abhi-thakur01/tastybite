import React from 'react';
import { Link } from 'react-router-dom';
import { FiX, FiPlus, FiMinus, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const CartSidebar = () => {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-50" onClick={closeCart} />}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-dark z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <h2 className="text-lg font-bold flex items-center gap-2"><FiShoppingBag className="text-primary" /> Your Cart ({totalItems})</h2>
            <button onClick={closeCart} className="p-2 hover:bg-gray-800 rounded-full transition-colors"><FiX size={20} /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <FiShoppingBag size={64} className="mb-4" />
                <p className="text-lg font-medium">Your cart is empty</p>
                <Link to="/menu" onClick={closeCart} className="btn-primary mt-6">Browse Menu</Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 bg-darkCard rounded-xl p-3">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold">{item.name}</h3>
                      <p className="text-primary font-bold text-sm mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 bg-dark rounded-full">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:text-primary"><FiMinus size={14} /></button>
                          <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:text-primary"><FiPlus size={14} /></button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="p-1 text-red-400 hover:text-red-300"><FiTrash2 size={16} /></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="p-4 border-t border-gray-800">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Subtotal</span><span className="font-bold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-4 pt-2 border-t border-gray-800">
                <span className="font-bold text-lg">Total</span><span className="font-bold text-lg text-primary">${totalPrice.toFixed(2)}</span>
              </div>
              <Link to="/checkout" onClick={closeCart} className="btn-primary w-full justify-center">Proceed to Checkout</Link>
              <Link to="/cart" onClick={closeCart} className="btn-outline w-full justify-center mt-2 text-sm">View Full Cart</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiMinus, FiTrash2, FiArrowLeft, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) return (
    <div className="pt-20 min-h-screen bg-dark flex items-center justify-center">
      <div className="text-center"><FiShoppingBag size={80} className="text-gray-600 mx-auto mb-6" /><h2 className="text-2xl font-bold mb-2">Your cart is empty</h2><Link to="/menu" className="btn-primary mt-4 inline-flex">Browse Menu</Link></div>
    </div>
  );

  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Shopping Cart</h1>
          <button onClick={clearCart} className="text-red-400 hover:text-red-300 text-sm flex items-center gap-1"><FiTrash2 /> Clear Cart</button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="card-dark flex gap-4 p-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl object-cover" />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div><h3 className="font-bold text-lg">{item.name}</h3><p className="text-primary font-bold mt-1">${item.price}</p></div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-300 p-1"><FiTrash2 size={18} /></button>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3 bg-dark rounded-full px-3 py-1">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><FiMinus size={16} /></button>
                      <span className="font-bold w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><FiPlus size={16} /></button>
                    </div>
                    <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-darkCard rounded-2xl p-6 h-fit sticky top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-gray-400"><span>Subtotal</span><span>${totalPrice.toFixed(2)}</span></div>
              <div className="flex justify-between text-gray-400"><span>Delivery</span><span className="text-green-400">Free</span></div>
              <div className="flex justify-between text-gray-400"><span>Tax</span><span>${(totalPrice * 0.08).toFixed(2)}</span></div>
            </div>
            <div className="border-t border-gray-700 pt-3 mb-6">
              <div className="flex justify-between font-bold text-lg"><span>Total</span><span className="text-primary">${(totalPrice * 1.08).toFixed(2)}</span></div>
            </div>
            <Link to="/checkout" className="btn-primary w-full justify-center text-lg py-3">Proceed to Checkout</Link>
            <Link to="/menu" className="flex items-center justify-center gap-2 text-primary mt-4 text-sm"><FiArrowLeft /> Continue Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
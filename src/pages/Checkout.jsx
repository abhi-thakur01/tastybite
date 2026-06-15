import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', address: '', city: '', zipCode: '', paymentMethod: 'card' });

  const handleSubmit = (e) => { e.preventDefault(); clearCart(); navigate('/track-order'); };

  if (items.length === 0) return (
    <div className="pt-20 min-h-screen bg-dark flex items-center justify-center">
      <div className="text-center"><h2 className="text-2xl font-bold mb-4">Your cart is empty</h2><Link to="/menu" className="btn-primary">Browse Menu</Link></div>
    </div>
  );

  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/cart" className="inline-flex items-center gap-2 text-primary hover:text-accent mb-8"><FiArrowLeft /> Back to Cart</Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-darkCard rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4">Delivery Details</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-2">First Name</label><input type="text" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary" required /></div>
                <div><label className="block text-sm font-medium mb-2">Last Name</label><input type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary" required /></div>
                <div><label className="block text-sm font-medium mb-2">Email</label><input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary" required /></div>
                <div><label className="block text-sm font-medium mb-2">Phone</label><input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary" required /></div>
                <div className="sm:col-span-2"><label className="block text-sm font-medium mb-2">Address</label><input type="text" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary" required /></div>
                <div><label className="block text-sm font-medium mb-2">City</label><input type="text" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary" required /></div>
                <div><label className="block text-sm font-medium mb-2">ZIP Code</label><input type="text" value={formData.zipCode} onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })} className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary" required /></div>
              </div>

              <h3 className="text-lg font-bold mt-6 mb-3">Payment Method</h3>
              <div className="space-y-3 mb-6">
                {['card', 'paypal', 'cod'].map((method) => (
                  <label key={method} className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer border transition-colors ${formData.paymentMethod === method ? 'border-primary bg-primary/10' : 'border-gray-700'}`}>
                    <input type="radio" name="payment" value={method} checked={formData.paymentMethod === method} onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })} className="accent-primary" />
                    <span>{method === 'card' ? '💳 Credit/Debit Card' : method === 'paypal' ? '🅿️ PayPal' : '💵 Cash on Delivery'}</span>
                  </label>
                ))}
              </div>
              <button type="submit" className="btn-primary w-full justify-center text-lg py-3">Place Order 🎉</button>
            </form>
          </div>

          <div className="bg-darkCard rounded-2xl p-6 h-fit sticky top-24">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-3 mb-3">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                <div className="flex-1"><p className="text-sm font-medium">{item.name}</p><p className="text-xs text-gray-400">x{item.quantity}</p></div>
                <p className="text-sm font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <div className="border-t border-gray-700 pt-3 mt-3">
              <div className="flex justify-between font-bold text-lg"><span>Total</span><span className="text-primary">${(totalPrice * 1.08).toFixed(2)}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
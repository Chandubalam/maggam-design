import { useRef, useEffect } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { OWNER_PHONE } from '../utils/constants';


export default function CartDrawer({ isOpen, onClose }) {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
    const drawerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleWhatsAppOrder = () => {
        if (cart.length === 0) return;

        let message = "Hello, I would like to place an order for the following items:\n\n";
        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}\n`;
        });
        message += `\nTotal Amount: ₹${cartTotal}`;
        message += "\n\nPlease confirm availability and payment details.";

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${OWNER_PHONE}?text=${encodedMessage}`, '_blank');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" aria-hidden="true"></div>

            {/* Drawer */}
            <div
                ref={drawerRef}
                className="relative w-full max-w-md bg-white shadow-xl flex flex-col h-full transform transition-transform duration-300 ease-in-out"
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-900">Your Cart ({cart.length})</h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-500 transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {cart.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-64 text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
                                <X size={32} />
                            </div>
                            <p className="text-gray-500 mb-4">Your cart is empty</p>
                            <button
                                onClick={onClose}
                                className="text-pink-600 font-medium hover:text-pink-700 hover:underline"
                            >
                                Browse Products
                            </button>
                        </div>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="flex gap-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                <div className="w-20 h-20 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                                    {item.image ? (
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.parentNode.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-pink-50 text-pink-300"><span class="text-xl">🌸</span></div>';
                                            }}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-pink-50 text-pink-300">
                                            <span className="text-xl">🌸</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{item.name}</h3>
                                        <p className="text-sm text-gray-500">₹{item.price}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center border border-gray-200 rounded-lg bg-white">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-1 text-gray-500 hover:text-gray-700"
                                                disabled={item.quantity <= 1}
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="px-2 text-sm font-medium text-gray-900">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-1 text-gray-500 hover:text-gray-700"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 hover:text-red-600 transition-colors p-1"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-600">Total Amount</span>
                            <span className="text-xl font-bold text-gray-900">₹{cartTotal}</span>
                        </div>
                        <div className="space-y-3">
                            <button
                                onClick={handleWhatsAppOrder}
                                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors"
                            >
                                <MessageCircle size={20} />
                                Order via WhatsApp
                            </button>
                            <button
                                onClick={clearCart}
                                className="w-full text-center text-gray-500 text-sm hover:text-gray-700 hover:underline"
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

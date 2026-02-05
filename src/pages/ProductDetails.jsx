import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { OWNER_PHONE } from '../utils/constants';

import { ShoppingCart, ArrowLeft, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
                <button
                    onClick={() => navigate('/shop')}
                    className="text-pink-600 hover:underline flex items-center"
                >
                    <ArrowLeft size={16} className="mr-1" /> Back to Shop
                </button>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(product);
        toast.success(`${product.name} added to cart!`);
    };

    const handleWhatsAppInquiry = () => {
        const message = `Hi, I am interested in knowing more about: ${product.name} (Price: ₹${product.price})`;
        window.open(`https://wa.me/${OWNER_PHONE}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-transparent py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-gray-500 hover:text-pink-600 mb-8 transition-colors"
                >
                    <ArrowLeft size={20} className="mr-2" /> Back
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-white/50">
                    {/* Image Section */}
                    <div className="relative aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-inner">
                        {product.image ? (
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.parentNode.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-pink-50 text-pink-300"><span class="text-6xl">🌸</span></div>';
                                }}
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-pink-50 text-pink-300">
                                <span className="text-6xl">🌸</span>
                            </div>
                        )}
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col justify-center">
                        <span className="text-pink-600 font-medium tracking-wide text-sm uppercase mb-2">
                            {product.category}
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {product.name}
                        </h1>
                        <p className="text-2xl font-bold text-gray-900 mb-6">₹{product.price}</p>

                        <div className="prose prose-sm text-gray-600 mb-8">
                            <p>{product.description}</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors active:scale-95"
                            >
                                <ShoppingCart size={20} />
                                Add to Cart
                            </button>
                            <button
                                onClick={handleWhatsAppInquiry}
                                className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors active:scale-95"
                            >
                                <MessageCircle size={20} />
                                WhatsApp Inquiry
                            </button>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-8 border-t border-gray-100 pt-8 space-y-4">
                            <div className="flex items-start">
                                <div className="min-w-6 mt-1 text-green-500">✓</div>
                                <p className="ml-3 text-sm text-gray-600">Free shipping on orders above ₹5000</p>
                            </div>
                            <div className="flex items-start">
                                <div className="min-w-6 mt-1 text-green-500">✓</div>
                                <p className="ml-3 text-sm text-gray-600">Customization available on request</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

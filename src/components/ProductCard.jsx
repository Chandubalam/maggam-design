import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="group relative bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
            <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-white/50">
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.parentNode.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-pink-50/50 text-pink-300"><span class="text-4xl">🌸</span></div>';
                        }}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-pink-50/50 text-pink-300">
                        <span className="text-4xl">🌸</span>
                    </div>
                )}

                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {/* Quick Actions could go here */}
                </div>
            </Link>

            <div className="p-4 flex flex-col flex-grow">
                <p className="text-sm text-pink-600 font-medium mb-1">{product.category}</p>
                <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-pink-600 transition-colors mb-1 line-clamp-1">{product.name}</h3>
                </Link>
                <div className="mt-auto pt-3 flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                    <button
                        onClick={() => addToCart(product)}
                        className="flex items-center gap-2 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-pink-600 transition-colors active:scale-95"
                    >
                        <ShoppingCart size={16} />
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

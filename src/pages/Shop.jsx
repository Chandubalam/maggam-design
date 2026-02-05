import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Filter } from 'lucide-react';

export default function Shop() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Extract unique categories
    const categories = ["All", ...new Set(products.map(p => p.category))];

    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="min-h-screen bg-transparent pt-8 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Our Collection</h1>
                        <p className="text-gray-600 mt-1">Explore our exclusive maggam works</p>
                    </div>

                    <div className="flex items-center overflow-x-auto pb-2 md:pb-0 hide-scrollbar gap-2">
                        <Filter size={20} className="text-gray-400 mr-2 flex-shrink-0" />
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === category
                                    ? 'bg-pink-600 text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-500">No products found in this category.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

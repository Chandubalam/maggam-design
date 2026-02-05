import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WHATSAPP_LINK } from '../utils/constants';


export default function Home() {
    // Show only first 3 products for featured section
    const featuredProducts = products.slice(0, 3);

    return (
        <div className="min-h-screen bg-transparent">
            <Hero />

            {/* Featured Collection */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Featured Designs</h2>
                        <p className="mt-2 text-gray-600">Hand-picked favorites just for you</p>
                    </div>
                    <Link to="/shop" className="hidden sm:flex items-center text-pink-600 hover:text-pink-700 font-medium transition-colors">
                        View All <ArrowRight size={16} className="ml-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-8 sm:hidden flex justify-center">
                    <Link to="/shop" className="flex items-center text-pink-600 hover:text-pink-700 font-medium transition-colors">
                        View All Designs <ArrowRight size={16} className="ml-1" />
                    </Link>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-white/60 backdrop-blur-md py-16 px-4 border-t border-white/50">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose Maggam Art?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6">
                            <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">💎</div>
                            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                            <p className="text-gray-600">We use only the finest silk, zari, and stones for our embroidery.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🧵</div>
                            <h3 className="text-xl font-semibold mb-2">Custom Fit</h3>
                            <p className="text-gray-600">Tailored to perfection based on your specific measurements.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🚚</div>
                            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                            <p className="text-gray-600">Timely delivery for your special occasions and weddings.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-4 max-w-7xl mx-auto text-center" id="contact">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Have a Custom Design in Mind?</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    We specialize in creating unique, handcrafted maggam designs tailored to your preferences.
                    Get in touch with us to discuss your requirements.
                </p>
                <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    <MessageCircle className="mr-2" size={24} />
                    WhatsApp Inquiry
                </a>
            </section>
        </div>
    );
}

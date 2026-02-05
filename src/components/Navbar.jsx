import { useState } from 'react';
import { ShoppingBag, Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { WHATSAPP_LINK } from '../utils/constants';


export default function Navbar({ onCartClick }) {
    const [isOpen, setIsOpen] = useState(false);
    const { cartCount } = useCart();

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-yellow-500 bg-clip-text text-transparent">
                            Maggam Art
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Home</Link>
                        <Link to="/shop" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Shop</Link>
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors">
                            <Phone size={18} />
                            <span>Contact</span>
                        </a>

                        <button
                            onClick={onCartClick}
                            className="relative p-2 text-gray-700 hover:text-pink-600 transition-colors"
                        >
                            <ShoppingBag size={24} />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-pink-600 rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={onCartClick}
                            className="relative p-2 mr-2 text-gray-700"
                        >
                            <ShoppingBag size={24} />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-pink-600 rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-700 hover:text-pink-600 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            to="/"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/shop"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50"
                            onClick={() => setIsOpen(false)}
                        >
                            Shop
                        </Link>
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50"
                            onClick={() => setIsOpen(false)}
                        >
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

import { Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WHATSAPP_LINK } from '../utils/constants';


export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent mb-4">
                            Maggam Art
                        </h3>
                        <p className="text-gray-400 max-w-xs">
                            Bringing traditional elegance to modern fashion with exquisite handcrafted maggam designs.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-400 hover:text-pink-500 transition-colors">Home</Link></li>
                            <li><Link to="/shop" className="text-gray-400 hover:text-pink-500 transition-colors">Shop Collection</Link></li>
                            <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                        <div className="flex space-x-4 mb-4">
                            <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors"><Instagram size={24} /></a>
                            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Facebook size={24} /></a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter size={24} /></a>
                            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors"><MessageCircle size={24} /></a>
                        </div>
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} Maggam Art. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

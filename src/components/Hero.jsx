import { Link } from 'react-router-dom';
import { WHATSAPP_LINK } from '../utils/constants';


export default function Hero() {
    return (
        <div className="relative w-full overflow-hidden isolate">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    {/* Decorative Blob */}
                    <div className="absolute top-0 -left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute top-0 -right-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Handcrafted Elegance on</span>{' '}
                                <span className="block text-pink-600 xl:inline">Every Stitch</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Discover bespoke Maggam works, intricate embroidery, and timeless designs tailored for your special occasions.
                                Elevate your style with our exclusive collection.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <Link
                                        to="/shop"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 md:py-4 md:text-lg transition-transform hover:scale-105"
                                    >
                                        Browse Collections
                                    </Link>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a
                                        href={WHATSAPP_LINK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-pink-700 bg-pink-100 hover:bg-pink-200 md:py-4 md:text-lg transition-transform hover:scale-105"
                                    >
                                        Custom Orders
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div className="h-56 w-full bg-gradient-to-br from-pink-200 to-yellow-100 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
                    {/* Placeholder for Hero Image since generation failed */}
                    <div className="text-center p-8">
                        <div className="text-6xl mb-4">✨</div>
                        <p className="text-pink-800 font-serif italic text-2xl">Exquisite Maggam Work</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

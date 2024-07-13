import {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>

<nav className="mb-2 bg-white shadow-md">
                <div className="container mx-auto px-2">
                    <div className="relative flex items-center justify-between">
                        <div className="w-auto">
                            <Link className="inline-block" to='/'>
                                <img src={logo} alt="Logo" className='w-40 h-auto' />
                            </Link>
                        </div>
                        <div className="w-auto hidden lg:flex space-x-4">
                            <Link className='inline-block py-2 px-6 font-medium text-base text-white bg-green-600 hover:bg-green-700 border border-green-600 hover:border-green-700 rounded-full transition duration-200 ' to={'/signin'}>Sign in</Link>
                            <Link className="inline-block py-2 px-6 font-medium text-base text-white bg-green-600 hover:bg-green-700 border border-green-600 hover:border-green-700 rounded-full transition duration-200" to={'/signup'}>Signup</Link>
                        </div>
                        <div className="w-auto lg:hidden">
                            <button
                                className="navbar-burger inline-flex items-center justify-center w-10 h-10 bg-gray-500 hover:bg-gray-600 rounded-full transition duration-200"
                                aria-label="Open menu"
                                onClick={toggleMobileMenu}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6H20M4 12H20M4 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={`navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="navbar-backdrop fixed inset-0 backdrop-blur-xl backdrop-filter bg-gray-900 bg-opacity-80"></div>
                <nav className="relative pt-7 pb-8 bg-white h-full overflow-y-auto">
                    <div className="flex flex-col px-6 h-full">
                        <Link className="inline-block ml-4 mb-7" to='/'>
                            <img src={logo} alt="Logo" className="w-32" />
                        </Link>
                        <ul className="w-full mb-auto pb-16 space-y-2">
                            <li><Link className="block text-base font-medium py-4 px-6 hover:bg-green-50 rounded-sm" to='/'>Home</Link></li>
                            <li><Link className="block text-base font-medium py-4 px-6 hover:bg-green-50 rounded-sm" to='/signup'>Signup</Link></li>
                        </ul>
                        <div className="w-full mt-auto">
                            <Link className="block w-full py-4 px-4 mb-4 text-center font-medium text-base hover:text-green-500 border border-gray-900 hover:border-green-500 rounded transition duration-200" to='/signin'>Log in</Link>
                            <Link className="block w-full py-4 px-4 mb-8 text-center font-medium text-base text-white bg-green-600 hover:bg-green-700 border border-green-600 hover:border-green-700 rounded transition duration-200" to='/signup'>Sign up</Link>
                            <p className="pl-2 text-sm">2024 © Shuffle</p>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (


        <nav className="bg-[#2c3e50] border-gray-200 text-white fixed left-0 right-0 top-0 z-50">
            <div className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 duration-300 ${isScrolled ? "py-4" : "py-8"}`}>
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-3xl font-bold whitespace-nowrap">START FRAMEWORK</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => setIsOpen(!isOpen)}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`w-full md:block md:w-auto overflow-hidden ${isOpen ? "h-[200px]" : "h-0"} md:h-fit duration-300`} id="navbar-default">
                    <ul className="font-bold flex flex-col p-4 gap-y-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
                        <li>
                            <NavLink to="/about" className="block py-2 px-3 duration-300 w-fit" aria-current="page">ABOUT</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio" className="block py-2 px-3 rounded duration-300 w-fit">PORTFOLIO</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="block py-2 px-3 rounded duration-300 w-fit">CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

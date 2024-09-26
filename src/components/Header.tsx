import { useState, useMemo } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';


export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const { pathname } = useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])
    const isContact = useMemo(() => pathname === '/contact', [pathname])

    const headerClass = isHome
        ? 'bg-transparent absolute top-0 left-0 right-0 z-20'
        : isContact
        ? 'bg-purple-500 absolute top-0 left-0 right-0 z-20 opacity-50'
        : 'bg-slate-900';

    return (
        <header className={headerClass}>
            <div className="container mx-auto px-5 py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-10" src={logo} alt="logotipo" />
                    </div>

                    <nav className={`font-bold md:flex md:gap-4 ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-0 left-0 right-0 bg-gray-900 md:bg-transparent p-4 md:p-0`}>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ?
                                'text-indigo-500 block py-2 md:py-0 border-b-2 border-indigo-500 hover:bg-slate-800 px-3 rounded-md transition-colors duration-300' :
                                'text-slate-400 block py-2 md:py-0 hover:bg-slate-800 px-3 rounded-md transition-colors duration-300'
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Inicio
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) => isActive ?
                                'text-indigo-500 block py-2 md:py-0 border-b-2 border-indigo-500 hover:bg-slate-800 px-3 rounded-md transition-colors duration-300' :
                                'text-slate-400 block py-2 md:py-0 hover:bg-slate-800 px-3 rounded-md transition-colors duration-300'
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Proyectos
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => isActive ?
                                'text-indigo-500 block py-2 md:py-0 border-b-2 border-indigo-500 hover:bg-slate-800 px-3 rounded-md transition-colors duration-300' :
                                'text-slate-400 block py-2 md:py-0 hover:bg-slate-800 px-3 rounded-md transition-colors duration-300'
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contacto
                        </NavLink>
                    </nav>

                    <button className="md:hidden" onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <XMarkIcon className="h-8 w-8 text-slate-400 hover:text-indigo-500" />
                        ) : (
                            <Bars3Icon className="h-8 w-8 text-slate-400 hover:text-indigo-500" />
                        )}
                    </button>
                </div>
            </div>
        </header >
    )
}

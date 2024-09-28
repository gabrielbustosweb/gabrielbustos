import { Outlet } from 'react-router-dom'
import CoverParticles from '../components/CoverParticles'
import Header from '../components/Header'
import { MotionTransition } from '../components/TransitionComponent'
import { NavLink } from 'react-router-dom'
import { HomeIcon, BriefcaseIcon, EnvelopeIcon } from '@heroicons/react/24/outline'


export default function Layout() {
    return (
        <div className="relative min-h-screen">
            <CoverParticles />
            <div className="relative z-10">
                <Header />
                <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto bottom-10">
                    <nav className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 backdrop-blur-sm">
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? 'bg-secondary rounded-full' : ''}
                        >
                            <HomeIcon className="w-9 h-9 py-1 px-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary" />
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) => isActive ? 'bg-secondary rounded-full' : ''}
                        >
                            <BriefcaseIcon className="w-9 h-9 py-1 px-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary" />
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => isActive ? 'bg-secondary rounded-full' : ''}
                        >
                            <EnvelopeIcon className="w-9 h-9 py-1 px-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary" />
                        </NavLink>
                    </nav>
                </MotionTransition>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

import { Outlet } from 'react-router-dom'
import CoverParticles from '../components/CoverParticles'
import Header from '../components/Header'

export default function Layout() {
    return (
        <div className="relative min-h-screen">
            <CoverParticles />
            <div className="relative z-10">
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

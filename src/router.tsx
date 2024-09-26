import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './views/IndexPage'
import ProjectsPage from './views/ProjectsPage'
import ContactPage from './views/ContactPage'
import Layout from './layouts/Layout'

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<IndexPage />} index/>
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router

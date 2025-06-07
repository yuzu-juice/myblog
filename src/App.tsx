import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollToTop from '@/components/utils/ScrollToTop'
import LayoutRoot from '@/Layouts/LayoutRoot'
import HomePage from './pages'
import WorkDetail from './pages/works/[id]'
import AboutPage from './pages/about'
import NotFoundPage from './pages/404'
import './App.css'

function App() {
    return (
        <Router>
            <LayoutRoot>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/works/:nanoid" element={<WorkDetail />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </LayoutRoot>
        </Router>
    )
}

export default App

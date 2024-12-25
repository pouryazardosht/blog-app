import { Navigate, Route, Routes } from "react-router"
import HomePage from "../pages/HomePage"
import BlogPage from '../pages/BlogPage'
function Router() {
    return (
        <Routes>
            <Route path="/blogs" element={<HomePage />} />
            <Route path="/" element={<Navigate to='/blogs' replace />} />
            <Route path="/blogs/:id" element={<BlogPage />} />
        </Routes>
    )
}

export default Router
import { Navigate, useLocation } from "react-router-dom"


function ProtectedRoute ({children}) {
    const isAuthenticated = !!localStorage.getItem('token')
    const location = useLocation()

    if(!isAuthenticated) {
        return <Navigate to="/" state={{from:location}} replace />
    }

    return children;
}

export default ProtectedRoute;
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = ({isAuth}) => {
    console.log("triggerred");
    return isAuth ? <Outlet /> : <Navigate to={'/'} />
}
export default PrivateRoute;
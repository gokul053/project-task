import { Outlet } from "react-router-dom";
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";

const LayoutProvider = () => {
    return(
        <>
            <HeaderPage />
            <Outlet />
            <FooterPage />
        </>
    );
}

export default LayoutProvider;
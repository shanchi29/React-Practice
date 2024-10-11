import {useLocation} from "react-router-dom";
import Header from "components/Header/Header"

const Layout = ({ children }) => {
    const location = useLocation();
    const noHeaderRoutes = ["/login", "/register"];

    return (
        <div>
            {!noHeaderRoutes.includes(location.pathname) && <Header />}
            <div>{children}</div>
        </div>
    );
};
export default Layout;
import {FC} from "react";
import {Layout} from "antd";
import {Route, Routes} from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import About from "../about/About";
import NotFound from "../NotFound/NotFound";
import RickMorty from "../RickMorty/RickMorty";


const AppLayout: FC = () => {
    return (
        <Layout style={{
            height: '91vh'
        }}>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/RickMorty" element={<RickMorty />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
    )
};
export default AppLayout


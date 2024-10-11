import React, {FC, useEffect} from "react";
import Layout from "components/ui/Layout/Layout";
import {Route, Routes, useNavigate} from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import About from "../about/About";
import NotFound from "../NotFound/NotFound";
import RickMorty from "../RickMorty/RickMorty";
import Authorization from "pages/Authorization/Authorization";
// import {useAppSelector} from "store/hook/reduxHooks";
// import {selectIsAuth} from "store/selectors/selectors";
import ProtectedRoute from "../../hoc/ProtectedRoute";



const AppLayout: FC = () => {
  // const navigate = useNavigate()
  // const isAuth = useAppSelector(selectIsAuth)

  // useEffect(() => {
  //     if (!isAuth)
  //     {navigate("/login")}
  // }, [])

  return (
      <div style={{ height: "91vh" }}>
        <Layout>
        <Routes>
          <Route path="/" element={
              <ProtectedRoute>
              <MainPage />
              </ProtectedRoute>
              }
          />
          <Route path="/about" element={
              <ProtectedRoute>
              <About />
              </ProtectedRoute>}
          />
          <Route path="/rickMorty" element={
              <ProtectedRoute>
              <RickMorty />
              </ProtectedRoute>}
          />
          <Route path="*" element={
              <ProtectedRoute>
              <NotFound />
              </ProtectedRoute>
          } />
          <Route path="/login" element={<Authorization />} />
        </Routes>
      </Layout>
      </div>
  );
};
export default AppLayout;

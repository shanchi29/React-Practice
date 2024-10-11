import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "store/hook/reduxHooks";
import { selectIsAuth } from "store/selectors/selectors";

const ProtectedRoute = ({ children }) => {
    const isAuth = useAppSelector(selectIsAuth);

    if (!isAuth) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
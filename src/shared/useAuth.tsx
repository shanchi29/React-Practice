import React from 'react';
import { Navigate } from 'react-router-dom';
import {useAppSelector} from "store/hook/reduxHooks";
import {selectIsAuth} from "store/selectors/selectors";


export const useAuth = (element: React.ReactElement) => {
    const isAuth = useAppSelector(selectIsAuth);
    return isAuth ? element : <Navigate to="/login" replace />;
};
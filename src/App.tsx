import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppLayout from "./pages/AppLayout/AppLayout";
import Header from "./components/Header/Header";

const App = () => {
    return (
            <BrowserRouter>
                <Header />
                <AppLayout />
            </BrowserRouter>
    )
};
export default App;

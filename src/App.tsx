import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout/AppLayout";

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};
export default App;

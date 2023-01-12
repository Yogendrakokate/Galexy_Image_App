import React from "react";
import { Route, Routes } from "react-router-dom";
import ReqAuth from "../Components/ReqAuth";
import Login from "./Login.jsx";
import Data from "./Data";
import Singledata from "./Singledata";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Data />} />;
          <Route path="/login" element={<Login />} />
      <Route path="/shoes/:id" element={<ReqAuth><Singledata /></ReqAuth>} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoutes;
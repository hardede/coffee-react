import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Orders from "../pages/OrdersPage/Orders";
import Review from "../pages/ReviewsPage/Review";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/review" element={<Review />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="*" element={<Navigate replace to="/home" />} />
    </Routes>
  );
};

export default AppRouter;

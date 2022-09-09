import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Products } from "../components/Products";
import { Settings } from "../components/Settings";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";

export function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route element={<Home component={<Products />} />}>
          <Route path="/home" element={<Products />} />
        </Route>
        <Route element={<Home component={<Products />} />}>
          <Route path="/products" element={<Products />} />
        </Route>
        <Route element={<Home component={<Settings />} />}>
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

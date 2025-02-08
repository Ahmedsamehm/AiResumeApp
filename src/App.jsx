import React, { lazy, Suspense } from "react";
import { BrowserRouter, HashRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AuthContextProvider from "./contexts/AuthContext";
import DashBoardContextProvider from "./contexts/DashBoardContext";
import CreateDocContextProvider from "./contexts/CreateDocContext";
import Loading from "./components/Loading";

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const DashBoard = lazy(() => import("./pages/DashBoard"));
const Resume = lazy(() => import("./pages/Resume"));

function App() {
  return (
    <HashRouter>
      <AuthContextProvider>
        <DashBoardContextProvider>
          <CreateDocContextProvider>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/DashBoard" element={<DashBoard />} />
                  <Route path="/Resume/:ResumeId" element={<Resume />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Route>
              </Routes>
            </Suspense>
          </CreateDocContextProvider>
        </DashBoardContextProvider>
      </AuthContextProvider>
    </HashRouter>
  );
}

export default App;

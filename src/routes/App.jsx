import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Main from "../pages/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Main/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

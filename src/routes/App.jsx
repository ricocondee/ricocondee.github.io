import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Main from "../pages/Main";
import BlogPost from "../pages/BlogPost";
import Blog from "../components/Blog"; // Import Blog component

const AdminRedirect = () => {
  useEffect(() => {
    window.location.href = "/admin/index.html";
  }, []);
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout><Main/></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} /> {/* New route for Blog list */}
        <Route path="/blog/:slug" element={<Layout><BlogPost /></Layout>} />
        <Route path="/admin" element={<AdminRedirect />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

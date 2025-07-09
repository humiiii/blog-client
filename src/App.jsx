import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Layout from "./components/Layout";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AddBlog from "./components/admin/AddBlog";
import Blogs from "./components/admin/Blogs";
import Comments from "./components/admin/Comments";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/admin/addBlog" element={<AddBlog />} />
        <Route path="/admin/blogs" element={<Blogs />} />
        <Route path="/admin/comments" element={<Comments />} />
      </Route>
    </Routes>
  );
};

export default App;

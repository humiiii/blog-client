import React from "react";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";

const AdminLayout = () => {
  return (
    <>
      <Container>
        <Navbar />
      </Container>
      <div className="">
        <div className="">
          <Sidebar />
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;

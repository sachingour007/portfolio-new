import React from "react";
import { Homepage, ProfileDetails, SideBar } from "../index";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="mainContainer">
      <div className="wrapper">
        <section className="profileSection">
          <ProfileDetails />
        </section>
        <section className="mainContent">
          <Outlet />
        </section>
        <section className="sidebarSection">
          <SideBar />
        </section>
      </div>
    </div>
  );
};

export default MainLayout;

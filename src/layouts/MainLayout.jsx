import React from "react";
import { Homepage, ProfileDetails, SideBar } from "../index";

const MainLayout = () => {
  return (
    <div className="mainContainer">
      <div className="wrapper">
        <section className="profileSection">
          <ProfileDetails />
        </section>
        <section className="mainContent">
          <Homepage />
        </section>
        <section className="sidebarSection">
          <SideBar />
        </section>
      </div>
    </div>
  );
};

export default MainLayout;

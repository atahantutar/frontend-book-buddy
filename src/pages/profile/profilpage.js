import React from "react";

import Sidebar from "../../components/sideBar/sidebar";

import Header from "../../components/header/header";

import Content from "../../components/profileContent/content";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <div className="row container">
        <Sidebar />
        <Content />
      </div>
    </>
  );
};

export default ProfilePage;

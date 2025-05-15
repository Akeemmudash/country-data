import React from "react";
import CardList from "../components/CardList";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex font-inter relative">
      <Sidebar />
      <div className="h-screen flex-1">
        <Header />
        <main className="container py-10  h-[calc(100vh-155px)] overflow-y-auto">
          <CardList />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

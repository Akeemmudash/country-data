import React from "react";
import Header from "./Header";
import CardList from "./CardList";

const Dashboard = () => {
  return (
    <div className="space-y-12 font-inter">
      <Header />
      <main className="container">
        <CardList />
      </main>
    </div>
  );
};

export default Dashboard;

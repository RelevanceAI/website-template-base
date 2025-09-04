import React from "react";
import DashboardSidebar from "../components/DashboardSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  );
};

export default DashboardLayout; 
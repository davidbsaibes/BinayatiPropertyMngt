import React, { useState } from "react";
import Header from "../dashboard/Header";
import Footer from "../dashboard/Footer";
import Sidebar from "../dashboard/Sidebar";
import { useLocation } from "react-router-dom";

interface MasterLayoutProps {
  children: React.ReactNode;
}

const MasterLayout = ({ children }: MasterLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();

  const getActiveModule = () => {
    const path = location.pathname;
    if (path === "/") return "dashboard";
    return path.split("/")[1] || "dashboard";
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        activeModule={getActiveModule()}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          onNotificationsClick={() => setShowNotifications(!showNotifications)}
        />
        <main className="flex-1 overflow-auto bg-gray-50">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default MasterLayout;

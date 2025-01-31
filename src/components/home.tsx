import React, { useState } from "react";
import Sidebar from "./dashboard/Sidebar";
import Header from "./dashboard/Header";
import Footer from "./dashboard/Footer";
import KPIGrid from "./dashboard/KPIGrid";
import PropertyList from "./dashboard/PropertyList";
import QuickActions from "./dashboard/QuickActions";
import NotificationsPanel from "./dashboard/NotificationsPanel";
import DashboardSummary from "./dashboard/DashboardSummary";
import PropertySearch from "./dashboard/PropertySearch";

interface HomeProps {
  initialSidebarState?: boolean;
}

const Home = ({ initialSidebarState = false }: HomeProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(initialSidebarState);
  const [activeModule, setActiveModule] = useState("dashboard");
  const [showNotifications, setShowNotifications] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleModuleSelect = (module: string) => {
    setActiveModule(module);
    if (module === "properties") {
      window.location.href = "/properties";
    }
  };

  const handlePropertyAction = (action: string, id: string) => {
    console.log(`Property ${action} action triggered for ID: ${id}`);
  };

  const handleQuickAction = (action: string) => {
    console.log(`Quick action triggered: ${action}`);
  };

  const handleNotificationClick = (id: string) => {
    console.log(`Notification clicked: ${id}`);
  };

  return (
    <div className="flex h-screen w-full bg-gray-100 overflow-hidden relative">
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onToggle={handleSidebarToggle}
        activeModule={activeModule}
        onModuleSelect={handleModuleSelect}
      />
      <div className="flex-1 flex flex-col min-w-0 w-full transition-all duration-300">
        <Header
          onNotificationsClick={() => setShowNotifications(!showNotifications)}
        />

        <main className="flex-1 overflow-auto">
          <div className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Property Dashboard</h1>
            </div>

            <KPIGrid />

            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 space-y-4">
                <PropertySearch
                  onSearch={(term) => console.log("Search:", term)}
                  onStatusFilter={(status) => console.log("Status:", status)}
                  onRentRangeFilter={(range) => console.log("Range:", range)}
                />
                <PropertyList
                  onViewProperty={(id) => handlePropertyAction("view", id)}
                  onEditProperty={(id) => handlePropertyAction("edit", id)}
                  onDeleteProperty={(id) => handlePropertyAction("delete", id)}
                />
                <DashboardSummary />
              </div>
              {showNotifications && (
                <div className="w-full lg:w-auto">
                  <NotificationsPanel
                    onNotificationClick={handleNotificationClick}
                  />
                </div>
              )}
            </div>
          </div>

          <QuickActions
            onAddProperty={() => handleQuickAction("add-property")}
            onAddTenant={() => handleQuickAction("add-tenant")}
            onCreateTicket={() => handleQuickAction("create-ticket")}
          />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Home;

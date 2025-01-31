import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Home,
  Users,
  Building2,
  Wrench,
  Receipt,
  FileText,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
  activeModule?: string;
  onModuleSelect?: (module: string) => void;
}

const Sidebar = ({
  isCollapsed = false,
  onToggle = () => {},
  activeModule = "dashboard",
  onModuleSelect = () => {},
}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(isCollapsed);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
    onToggle();
  };

  const handleModuleSelect = (moduleId: string) => {
    onModuleSelect(moduleId);
    switch (moduleId) {
      case "dashboard":
        navigate("/");
        break;
      case "properties":
        navigate("/properties");
        break;
      case "maintenance":
        navigate("/maintenance");
        break;
      case "tenants":
        navigate("/tenants");
        break;
      case "payments":
        navigate("/payments");
        break;
      case "documents":
        navigate("/documents");
        break;
      case "reports":
        navigate("/reports");
        break;
      default:
        break;
    }
  };

  const modules = [
    { id: "dashboard", icon: Home, label: "Dashboard" },
    { id: "properties", icon: Building2, label: "Properties" },
    { id: "tenants", icon: Users, label: "Tenants" },
    { id: "maintenance", icon: Wrench, label: "Maintenance" },
    { id: "payments", icon: Receipt, label: "Payments" },
    { id: "documents", icon: FileText, label: "Documents" },
    { id: "reports", icon: BarChart3, label: "Reports" },
  ];

  return (
    <div
      className={cn(
        "h-screen bg-white border-r transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex items-center justify-between p-4 border-b">
        {!collapsed && (
          <img
            src="https://cpanel.binayati.com/images/logo.png"
            alt="Logo"
            className="h-8 w-auto"
          />
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="ml-auto"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </Button>
      </div>

      <nav className="flex-1 p-1">
        <TooltipProvider>
          <ul className="space-y-2">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <li key={module.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant={
                          activeModule === module.id ? "secondary" : "ghost"
                        }
                        className={cn(
                          "w-full flex items-center gap-2 justify-start",
                          collapsed ? "justify-center" : "",
                        )}
                        onClick={() => handleModuleSelect(module.id)}
                      >
                        <Icon size={20} />
                        {!collapsed && <span>{module.label}</span>}
                      </Button>
                    </TooltipTrigger>
                    {collapsed && (
                      <TooltipContent side="right">
                        <p>{module.label}</p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </li>
              );
            })}
          </ul>
        </TooltipProvider>
      </nav>

      <div className="p-4 border-t">
        {!collapsed && (
          <div className="text-sm text-gray-500">
            <p>PropManager v1.0</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

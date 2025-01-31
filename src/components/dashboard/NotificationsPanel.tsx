import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Bell, AlertTriangle, CheckCircle, Info } from "lucide-react";

interface Notification {
  id: string;
  type: "urgent" | "success" | "info";
  title: string;
  message: string;
  timestamp: string;
}

interface NotificationsPanelProps {
  notifications?: Notification[];
  onNotificationClick?: (id: string) => void;
}

const NotificationsPanel = ({
  notifications = [
    {
      id: "1",
      type: "urgent",
      title: "Maintenance Request",
      message: "Urgent repair needed at 123 Main St - Water leak reported",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      type: "success",
      title: "Rent Payment",
      message: "Rent payment received from tenant at 456 Oak Ave",
      timestamp: "3 hours ago",
    },
    {
      id: "3",
      type: "info",
      title: "New Application",
      message: "New tenant application received for 789 Pine St",
      timestamp: "5 hours ago",
    },
  ],
  onNotificationClick = () => {},
}: NotificationsPanelProps) => {
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "urgent":
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "urgent":
        return "bg-red-50 border-red-100";
      case "success":
        return "bg-green-50 border-green-100";
      case "info":
        return "bg-blue-50 border-blue-100";
      default:
        return "bg-gray-50 border-gray-100";
    }
  };

  return (
    <Card className="w-full sm:w-[320px] bg-white">
      <CardHeader className="flex flex-row items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          <h3 className="font-semibold">Notifications</h3>
        </div>
        <Badge variant="secondary">{notifications.length}</Badge>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px] w-full">
          <div className="flex flex-col gap-1 p-2">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors hover:bg-gray-100 ${getNotificationColor(
                  notification.type,
                )}`}
                onClick={() => onNotificationClick(notification.id)}
              >
                <div className="flex-shrink-0 mt-1">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{notification.title}</p>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {notification.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default NotificationsPanel;

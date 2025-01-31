import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, WrenchIcon, DollarSign } from "lucide-react";

interface LeaseRenewal {
  id: string;
  name: string;
  property: string;
  dueDate: string;
  avatar: string;
}

interface MaintenanceRequest {
  id: string;
  property: string;
  issue: string;
  priority: "low" | "medium" | "high";
  reportedDate: string;
}

interface Payment {
  id: string;
  name: string;
  amount: number;
  date: string;
  status: "completed" | "pending";
}

interface DashboardSummaryProps {
  leaseRenewals?: LeaseRenewal[];
  maintenanceRequests?: MaintenanceRequest[];
  recentPayments?: Payment[];
}

const DashboardSummary = ({
  leaseRenewals = [
    {
      id: "1",
      name: "John Doe",
      property: "Sunset Apartments 3B",
      dueDate: "2024-04-15",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    },
    {
      id: "2",
      name: "Jane Smith",
      property: "Ocean View 12A",
      dueDate: "2024-04-20",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
    },
  ],
  maintenanceRequests = [
    {
      id: "1",
      property: "Mountain View 5C",
      issue: "Leaking faucet in kitchen",
      priority: "medium",
      reportedDate: "2024-04-10",
    },
    {
      id: "2",
      property: "Sunset Apartments 2A",
      issue: "AC not working",
      priority: "high",
      reportedDate: "2024-04-09",
    },
  ],
  recentPayments = [
    {
      id: "1",
      name: "Robert Johnson",
      amount: 1200,
      date: "2024-04-08",
      status: "completed",
    },
    {
      id: "2",
      name: "Sarah Williams",
      amount: 950,
      date: "2024-04-07",
      status: "pending",
    },
  ],
}: DashboardSummaryProps) => {
  const priorityColors = {
    low: "bg-blue-100 text-blue-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-red-100 text-red-800",
  };

  const statusColors = {
    completed: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Lease Renewals */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-2 p-4">
          <Calendar className="h-5 w-5" />
          <h3 className="font-semibold">Upcoming Lease Renewals</h3>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="space-y-4">
            {leaseRenewals.map((lease) => (
              <div key={lease.id} className="flex items-center gap-3">
                <img
                  src={lease.avatar}
                  alt={lease.name}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium">{lease.name}</p>
                  <p className="text-sm text-gray-500">{lease.property}</p>
                  <p className="text-sm text-gray-500">
                    Due: {new Date(lease.dueDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Maintenance Requests */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-2 p-4">
          <WrenchIcon className="h-5 w-5" />
          <h3 className="font-semibold">Pending Maintenance</h3>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="space-y-4">
            {maintenanceRequests.map((request) => (
              <div key={request.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{request.property}</h4>
                  <Badge
                    variant="secondary"
                    className={priorityColors[request.priority]}
                  >
                    {request.priority}
                  </Badge>
                </div>
                <p className="text-sm text-gray-500">{request.issue}</p>
                <p className="text-xs text-gray-400">
                  Reported:{" "}
                  {new Date(request.reportedDate).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Payments */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-2 p-4">
          <DollarSign className="h-5 w-5" />
          <h3 className="font-semibold">Recent Payments</h3>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="space-y-4">
            {recentPayments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between"
              >
                <div>
                  <p className="font-medium">{payment.name}</p>
                  <p className="text-sm text-gray-500">
                    Date: {new Date(payment.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">${payment.amount}</p>
                  <Badge
                    variant="secondary"
                    className={statusColors[payment.status]}
                  >
                    {payment.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardSummary;

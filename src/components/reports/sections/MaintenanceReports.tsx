import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";

const MaintenanceReports = () => {
  const maintenanceData = {
    requests: [
      { type: "Plumbing", count: 15, avgResolutionTime: 48 },
      { type: "Electrical", count: 8, avgResolutionTime: 24 },
      { type: "HVAC", count: 12, avgResolutionTime: 72 },
      { type: "Appliances", count: 6, avgResolutionTime: 36 },
    ],
    status: {
      open: 10,
      inProgress: 15,
      completed: 45,
    },
    costs: [
      { month: "January", amount: 5000 },
      { month: "February", amount: 3500 },
      { month: "March", amount: 4200 },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="font-semibold">Maintenance Requests by Type</h3>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {maintenanceData.requests.map((request) => (
              <div
                key={request.type}
                className="flex justify-between items-center p-2 bg-gray-50 rounded"
              >
                <div>
                  <p className="font-medium">{request.type}</p>
                  <p className="text-sm text-gray-500">
                    Avg. Resolution: {request.avgResolutionTime}h
                  </p>
                </div>
                <Badge>{request.count} requests</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="font-semibold">Request Status Overview</h3>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Open</span>
              <Badge
                variant="secondary"
                className="bg-yellow-100 text-yellow-800"
              >
                {maintenanceData.status.open}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>In Progress</span>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                {maintenanceData.status.inProgress}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Completed</span>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800"
              >
                {maintenanceData.status.completed}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="font-semibold">Maintenance Costs</h3>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {maintenanceData.costs.map((cost) => (
              <div
                key={cost.month}
                className="flex justify-between items-center"
              >
                <span>{cost.month}</span>
                <span>${cost.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MaintenanceReports;

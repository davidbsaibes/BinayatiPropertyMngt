import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";

const TenantReports = () => {
  const tenantData = {
    leaseExpirations: [
      { tenant: "John Smith", unit: "3B", expiration: "2024-06-30" },
      { tenant: "Sarah Johnson", unit: "5A", expiration: "2024-07-15" },
      { tenant: "Michael Brown", unit: "2C", expiration: "2024-08-01" },
    ],
    turnover: [
      { month: "January", moveIns: 3, moveOuts: 2 },
      { month: "February", moveIns: 2, moveOuts: 1 },
      { month: "March", moveIns: 4, moveOuts: 3 },
    ],
    occupancyRate: 92,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="font-semibold">Upcoming Lease Expirations</h3>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tenantData.leaseExpirations.map((lease, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-2 bg-gray-50 rounded"
              >
                <div>
                  <p className="font-medium">{lease.tenant}</p>
                  <p className="text-sm text-gray-500">Unit {lease.unit}</p>
                </div>
                <Badge variant="outline">
                  {new Date(lease.expiration).toLocaleDateString()}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="font-semibold">Tenant Turnover</h3>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tenantData.turnover.map((data) => (
              <div
                key={data.month}
                className="flex justify-between items-center"
              >
                <span>{data.month}</span>
                <div className="flex gap-4">
                  <span className="text-green-600">+{data.moveIns}</span>
                  <span className="text-red-600">-{data.moveOuts}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="font-semibold">Current Occupancy</h3>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">
              {tenantData.occupancyRate}%
            </div>
            <p className="text-sm text-gray-500 mt-2">Occupancy Rate</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TenantReports;

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";

const OccupancyReports = () => {
  const occupancyData = {
    trends: [
      { month: "January", rate: 92 },
      { month: "February", rate: 94 },
      { month: "March", rate: 95 },
      { month: "April", rate: 93 },
    ],
    unitStatus: [
      { unit: "1A", status: "occupied", tenant: "John Smith" },
      { unit: "2B", status: "vacant", lastTenant: "Sarah Johnson" },
      { unit: "3C", status: "maintenance", nextTenant: "Michael Brown" },
    ],
    marketComparison: [
      { property: "Our Property", rate: 95, rent: 2500 },
      { property: "Competitor A", rate: 92, rent: 2600 },
      { property: "Competitor B", rate: 88, rent: 2400 },
    ],
  };

  const statusColors = {
    occupied: "bg-green-100 text-green-800",
    vacant: "bg-red-100 text-red-800",
    maintenance: "bg-yellow-100 text-yellow-800",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="font-semibold">Occupancy Trends</h3>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {occupancyData.trends.map((trend) => (
              <div
                key={trend.month}
                className="flex justify-between items-center"
              >
                <span>{trend.month}</span>
                <span>{trend.rate}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="font-semibold">Unit Status</h3>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {occupancyData.unitStatus.map((unit) => (
              <div
                key={unit.unit}
                className="flex justify-between items-center p-2 bg-gray-50 rounded"
              >
                <div>
                  <p className="font-medium">Unit {unit.unit}</p>
                  <p className="text-sm text-gray-500">
                    {unit.tenant || unit.lastTenant || unit.nextTenant}
                  </p>
                </div>
                <Badge
                  variant="secondary"
                  className={
                    statusColors[unit.status as keyof typeof statusColors]
                  }
                >
                  {unit.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="font-semibold">Market Comparison</h3>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {occupancyData.marketComparison.map((comp) => (
              <div
                key={comp.property}
                className="flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{comp.property}</p>
                  <p className="text-sm text-gray-500">
                    ${comp.rent.toLocaleString()}/month
                  </p>
                </div>
                <Badge variant="outline">{comp.rate}% occupied</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OccupancyReports;

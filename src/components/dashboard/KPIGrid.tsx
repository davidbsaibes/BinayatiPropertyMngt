import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon, HomeIcon, WrenchIcon } from "lucide-react";

interface KPICardProps {
  title?: string;
  value?: string | number;
  change?: number;
  icon?: React.ReactNode;
}

const KPICard = ({
  title = "Metric",
  value = "0",
  change = 0,
  icon = <HomeIcon className="h-5 w-5" />,
}: KPICardProps) => {
  return (
    <Card className="bg-white">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div className="p-2 bg-primary/10 rounded-lg">{icon}</div>
          <div
            className={`flex items-center gap-1 text-sm ${change >= 0 ? "text-green-600" : "text-red-600"}`}
          >
            {change >= 0 ? (
              <ArrowUpIcon className="h-4 w-4" />
            ) : (
              <ArrowDownIcon className="h-4 w-4" />
            )}
            <span>{Math.abs(change)}%</span>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
      </CardContent>
    </Card>
  );
};

interface KPIGridProps {
  metrics?: {
    totalProperties?: number;
    occupancyRate?: number;
    revenue?: number;
    pendingRequests?: number;
  };
}

const KPIGrid = ({
  metrics = {
    totalProperties: 150,
    occupancyRate: 85,
    revenue: 250000,
    pendingRequests: 23,
  },
}: KPIGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <KPICard
        title="Total Properties"
        value={metrics.totalProperties}
        change={5}
        icon={<HomeIcon className="h-5 w-5" />}
      />
      <KPICard
        title="Occupancy Rate"
        value={`${metrics.occupancyRate}%`}
        change={2}
        icon={<HomeIcon className="h-5 w-5" />}
      />
      <KPICard
        title="Monthly Revenue"
        value={`$${metrics.revenue.toLocaleString()}`}
        change={-3}
        icon={<HomeIcon className="h-5 w-5" />}
      />
      <KPICard
        title="Pending Requests"
        value={metrics.pendingRequests}
        change={10}
        icon={<WrenchIcon className="h-5 w-5" />}
      />
    </div>
  );
};

export default KPIGrid;

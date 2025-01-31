import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Breadcrumb from "../common/Breadcrumb";
import FinancialReports from "./sections/FinancialReports";
import TenantReports from "./sections/TenantReports";
import MaintenanceReports from "./sections/MaintenanceReports";
import OccupancyReports from "./sections/OccupancyReports";
import ComplianceReports from "./sections/ComplianceReports";

const ReportsPage = () => {
  return (
    <div className="w-full h-full p-6 space-y-6">
      <Breadcrumb
        items={[{ label: "Dashboard", href: "/" }, { label: "Reports" }]}
      />

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Reports</h1>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" /> Export All
        </Button>
      </div>

      <Tabs defaultValue="financial" className="w-full">
        <TabsList className="grid grid-cols-2 lg:grid-cols-5 h-auto">
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="tenant">Tenant & Lease</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="occupancy">Occupancy</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="financial">
            <FinancialReports />
          </TabsContent>

          <TabsContent value="tenant">
            <TenantReports />
          </TabsContent>

          <TabsContent value="maintenance">
            <MaintenanceReports />
          </TabsContent>

          <TabsContent value="occupancy">
            <OccupancyReports />
          </TabsContent>

          <TabsContent value="compliance">
            <ComplianceReports />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default ReportsPage;

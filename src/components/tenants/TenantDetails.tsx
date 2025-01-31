import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import Breadcrumb from "../common/Breadcrumb";
import {
  User,
  Home,
  FileText,
  DollarSign,
  MessageSquare,
  Clock,
  Key,
} from "lucide-react";

interface TenantDetails {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: "active" | "pending" | "inactive";
  personalInfo: {
    dateOfBirth: string;
    ssn: string;
    occupation: string;
    employer: string;
    emergencyContact: {
      name: string;
      relationship: string;
      phone: string;
    };
  };
  leaseInfo: {
    unit: string;
    moveInDate: string;
    leaseEnd: string;
    rentAmount: number;
    securityDeposit: number;
    leaseDocuments: Array<{
      name: string;
      url: string;
      uploadDate: string;
    }>;
  };
  paymentHistory: Array<{
    id: string;
    date: string;
    amount: number;
    type: string;
    status: string;
  }>;
  maintenanceRequests: Array<{
    id: string;
    date: string;
    issue: string;
    status: string;
  }>;
}

const defaultTenant: TenantDetails = {
  id: "T1",
  name: "John Smith",
  email: "john@example.com",
  phone: "(555) 123-4567",
  status: "active",
  personalInfo: {
    dateOfBirth: "1985-06-15",
    ssn: "***-**-1234",
    occupation: "Software Engineer",
    employer: "Tech Corp",
    emergencyContact: {
      name: "Jane Smith",
      relationship: "Spouse",
      phone: "(555) 987-6543",
    },
  },
  leaseInfo: {
    unit: "3B",
    moveInDate: "2023-01-01",
    leaseEnd: "2024-12-31",
    rentAmount: 2500,
    securityDeposit: 2500,
    leaseDocuments: [
      {
        name: "Lease Agreement.pdf",
        url: "#",
        uploadDate: "2022-12-15",
      },
      {
        name: "Move-in Checklist.pdf",
        url: "#",
        uploadDate: "2023-01-01",
      },
    ],
  },
  paymentHistory: [
    {
      id: "P1",
      date: "2024-03-01",
      amount: 2500,
      type: "Rent",
      status: "Paid",
    },
    {
      id: "P2",
      date: "2024-02-01",
      amount: 2500,
      type: "Rent",
      status: "Paid",
    },
  ],
  maintenanceRequests: [
    {
      id: "M1",
      date: "2024-02-15",
      issue: "Leaking faucet",
      status: "Resolved",
    },
    {
      id: "M2",
      date: "2024-03-10",
      issue: "AC not cooling",
      status: "In Progress",
    },
  ],
};

const TenantDetails = () => {
  const { id } = useParams();
  const tenant = defaultTenant; // In real app, fetch based on id

  const statusColors = {
    active: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    inactive: "bg-gray-100 text-gray-800",
  };

  return (
    <div className="w-full p-6 space-y-6">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/" },
          { label: "Tenants", href: "/tenants" },
          { label: tenant.name },
        ]}
      />

      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">{tenant.name}</h1>
            <Badge className={statusColors[tenant.status]} variant="secondary">
              {tenant.status.charAt(0).toUpperCase() + tenant.status.slice(1)}
            </Badge>
          </div>
          <p className="text-gray-500 mt-1">Unit {tenant.leaseInfo.unit}</p>
        </div>
      </div>

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid grid-cols-3 lg:grid-cols-7 h-auto">
          <TabsTrigger value="personal" className="flex gap-2">
            <User className="h-4 w-4" /> Personal
          </TabsTrigger>
          <TabsTrigger value="lease" className="flex gap-2">
            <Key className="h-4 w-4" /> Lease
          </TabsTrigger>
          <TabsTrigger value="unit" className="flex gap-2">
            <Home className="h-4 w-4" /> Unit
          </TabsTrigger>
          <TabsTrigger value="payments" className="flex gap-2">
            <DollarSign className="h-4 w-4" /> Payments
          </TabsTrigger>
          <TabsTrigger value="maintenance" className="flex gap-2">
            <Clock className="h-4 w-4" /> Maintenance
          </TabsTrigger>
          <TabsTrigger value="documents" className="flex gap-2">
            <FileText className="h-4 w-4" /> Documents
          </TabsTrigger>
          <TabsTrigger value="communications" className="flex gap-2">
            <MessageSquare className="h-4 w-4" /> Communications
          </TabsTrigger>
        </TabsList>

        <ScrollArea className="h-[600px] w-full rounded-md border p-4 mt-4">
          <TabsContent value="personal">
            <Card>
              <CardHeader className="text-lg font-semibold">
                Personal Information
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium">Contact Information</h3>
                    <p className="text-gray-600">{tenant.email}</p>
                    <p className="text-gray-600">{tenant.phone}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Employment</h3>
                    <p className="text-gray-600">
                      {tenant.personalInfo.occupation}
                    </p>
                    <p className="text-gray-600">
                      {tenant.personalInfo.employer}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">Emergency Contact</h3>
                    <p className="text-gray-600">
                      {tenant.personalInfo.emergencyContact.name}
                    </p>
                    <p className="text-gray-600">
                      {tenant.personalInfo.emergencyContact.relationship}
                    </p>
                    <p className="text-gray-600">
                      {tenant.personalInfo.emergencyContact.phone}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Add other tab contents similarly */}
        </ScrollArea>
      </Tabs>
    </div>
  );
};

export default TenantDetails;

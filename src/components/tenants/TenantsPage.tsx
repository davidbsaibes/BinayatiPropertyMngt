import React from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus } from "lucide-react";
import Breadcrumb from "../common/Breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Tenant {
  id: string;
  name: string;
  email: string;
  phone: string;
  unit: string;
  status: "active" | "pending" | "inactive";
  moveInDate: string;
  leaseEnd: string;
  rentAmount: number;
}

const defaultTenants: Tenant[] = [
  {
    id: "T1",
    name: "John Smith",
    email: "john@example.com",
    phone: "(555) 123-4567",
    unit: "3B",
    status: "active",
    moveInDate: "2023-01-01",
    leaseEnd: "2024-12-31",
    rentAmount: 2500,
  },
  {
    id: "T2",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "(555) 234-5678",
    unit: "5A",
    status: "pending",
    moveInDate: "2024-05-01",
    leaseEnd: "2025-04-30",
    rentAmount: 3000,
  },
  {
    id: "T3",
    name: "Michael Brown",
    email: "michael@example.com",
    phone: "(555) 345-6789",
    unit: "2C",
    status: "inactive",
    moveInDate: "2022-06-01",
    leaseEnd: "2024-03-31",
    rentAmount: 2200,
  },
];

const TenantsPage = () => {
  const navigate = useNavigate();

  const statusColors = {
    active: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    inactive: "bg-gray-100 text-gray-800",
  };

  return (
    <div className="p-6 space-y-6">
      <Breadcrumb
        items={[{ label: "Dashboard", href: "/" }, { label: "Tenants" }]}
      />

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tenants</h1>
        <Button onClick={() => navigate("/tenants/new")}>
          <Plus className="h-4 w-4 mr-2" /> Add Tenant
        </Button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search tenants..." className="pl-10" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Move In</TableHead>
              <TableHead>Lease End</TableHead>
              <TableHead>Rent</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {defaultTenants.map((tenant) => (
              <TableRow
                key={tenant.id}
                className="cursor-pointer hover:bg-gray-50"
                onClick={() => navigate(`/tenants/${tenant.id}`)}
              >
                <TableCell className="font-medium">{tenant.name}</TableCell>
                <TableCell>{tenant.unit}</TableCell>
                <TableCell>
                  <div className="text-sm">
                    <p>{tenant.email}</p>
                    <p className="text-gray-500">{tenant.phone}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={statusColors[tenant.status]}
                  >
                    {tenant.status.charAt(0).toUpperCase() +
                      tenant.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>
                  {new Date(tenant.moveInDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(tenant.leaseEnd).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  ${tenant.rentAmount.toLocaleString()}/month
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TenantsPage;

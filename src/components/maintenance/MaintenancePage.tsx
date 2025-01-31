import React from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

interface MaintenanceRequest {
  id: string;
  title: string;
  property: string;
  tenant: string;
  priority: "low" | "medium" | "high" | "urgent";
  status: "open" | "in_progress" | "on_hold" | "resolved" | "closed";
  submissionDate: string;
  category: string;
}

const defaultRequests: MaintenanceRequest[] = [
  {
    id: "MR001",
    title: "Broken AC Unit",
    property: "Sunset Apartments 3B",
    tenant: "John Smith",
    priority: "high",
    status: "open",
    submissionDate: "2024-04-10",
    category: "HVAC",
  },
  {
    id: "MR002",
    title: "Leaking Faucet",
    property: "Ocean View 12A",
    tenant: "Sarah Johnson",
    priority: "low",
    status: "in_progress",
    submissionDate: "2024-04-09",
    category: "Plumbing",
  },
  {
    id: "MR003",
    title: "Electrical Outlet Malfunction",
    property: "Mountain View 5C",
    tenant: "Robert Brown",
    priority: "medium",
    status: "resolved",
    submissionDate: "2024-04-08",
    category: "Electrical",
  },
];

const MaintenancePage = () => {
  const navigate = useNavigate();

  const priorityColors = {
    low: "bg-blue-100 text-blue-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-orange-100 text-orange-800",
    urgent: "bg-red-100 text-red-800",
  };

  const statusColors = {
    open: "bg-blue-100 text-blue-800",
    in_progress: "bg-yellow-100 text-yellow-800",
    on_hold: "bg-orange-100 text-orange-800",
    resolved: "bg-green-100 text-green-800",
    closed: "bg-gray-100 text-gray-800",
  };

  const formatStatus = (status: string) => {
    return status
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="flex-1 p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Maintenance Requests</h1>
        <Button onClick={() => navigate("/maintenance/new")}>
          <Plus className="h-4 w-4 mr-2" /> New Request
        </Button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search requests..." className="pl-10" />
          </div>
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="on_hold">On Hold</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="plumbing">Plumbing</SelectItem>
                <SelectItem value="electrical">Electrical</SelectItem>
                <SelectItem value="hvac">HVAC</SelectItem>
                <SelectItem value="structural">Structural</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Request ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Tenant</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Category</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {defaultRequests.map((request) => (
              <TableRow
                key={request.id}
                className="cursor-pointer hover:bg-gray-50"
                onClick={() => navigate(`/maintenance/${request.id}`)}
              >
                <TableCell className="font-medium">{request.id}</TableCell>
                <TableCell>{request.title}</TableCell>
                <TableCell>{request.property}</TableCell>
                <TableCell>{request.tenant}</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={priorityColors[request.priority]}
                  >
                    {request.priority.charAt(0).toUpperCase() +
                      request.priority.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={statusColors[request.status]}
                  >
                    {formatStatus(request.status)}
                  </Badge>
                </TableCell>
                <TableCell>
                  {new Date(request.submissionDate).toLocaleDateString()}
                </TableCell>
                <TableCell>{request.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MaintenancePage;

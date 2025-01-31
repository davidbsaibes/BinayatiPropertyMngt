import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ClipboardList,
  User,
  Building2,
  Wrench,
  Clock,
  MessageSquare,
  FileText,
  Star,
} from "lucide-react";

interface MaintenanceRequest {
  id: string;
  title: string;
  description: string;
  submissionDate: string;
  priority: "low" | "medium" | "high" | "urgent";
  category: "Plumbing" | "Electrical" | "HVAC" | "Structural" | "Other";
  status: "open" | "in_progress" | "on_hold" | "resolved" | "closed";
  tenant: {
    name: string;
    email: string;
    phone: string;
    unit: string;
  };
  property: {
    name: string;
    address: string;
    unit: string;
  };
  assignment: {
    assignedTo: string;
    assignmentDate: string;
    scheduledDate: string;
  };
  resolution: {
    date: string;
    notes: string;
    materials: Array<{ item: string; cost: number }>;
    totalCost: number;
  };
  attachments: Array<{
    type: "image" | "document";
    url: string;
    name: string;
  }>;
  statusHistory: Array<{
    status: string;
    date: string;
    note: string;
  }>;
  feedback: {
    rating: number;
    comment: string;
  };
}

const defaultRequest: MaintenanceRequest = {
  id: "MR001",
  title: "Broken AC Unit",
  description: "AC unit is not cooling properly and making unusual noises",
  submissionDate: "2024-04-10T09:00:00Z",
  priority: "high",
  category: "HVAC",
  status: "in_progress",
  tenant: {
    name: "John Smith",
    email: "john@example.com",
    phone: "(555) 123-4567",
    unit: "3B",
  },
  property: {
    name: "Sunset Apartments",
    address: "123 Sunset Boulevard, Los Angeles, CA 90028",
    unit: "3B",
  },
  assignment: {
    assignedTo: "Mike Johnson",
    assignmentDate: "2024-04-10T10:30:00Z",
    scheduledDate: "2024-04-11T14:00:00Z",
  },
  resolution: {
    date: "",
    notes: "",
    materials: [],
    totalCost: 0,
  },
  attachments: [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1576770341285-c927e18bba01",
      name: "AC-unit-front.jpg",
    },
    {
      type: "document",
      url: "#",
      name: "maintenance-report.pdf",
    },
  ],
  statusHistory: [
    {
      status: "open",
      date: "2024-04-10T09:00:00Z",
      note: "Ticket created",
    },
    {
      status: "in_progress",
      date: "2024-04-10T10:30:00Z",
      note: "Assigned to technician",
    },
  ],
  feedback: {
    rating: 0,
    comment: "",
  },
};

const MaintenanceDetails = () => {
  const { id } = useParams();
  const request = defaultRequest; // In real app, fetch based on id

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
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">{request.title}</h1>
            <Badge variant="outline">{request.id}</Badge>
          </div>
          <p className="text-gray-500 mt-1">
            {request.property.name} - Unit {request.property.unit}
          </p>
        </div>
        <div className="flex gap-2">
          <Badge
            className={priorityColors[request.priority]}
            variant="secondary"
          >
            {request.priority.charAt(0).toUpperCase() +
              request.priority.slice(1)}{" "}
            Priority
          </Badge>
          <Badge className={statusColors[request.status]} variant="secondary">
            {formatStatus(request.status)}
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="details" className="w-full">
        <TabsList className="grid grid-cols-4 lg:grid-cols-8 h-auto">
          <TabsTrigger value="details" className="flex gap-2">
            <ClipboardList className="h-4 w-4" /> Details
          </TabsTrigger>
          <TabsTrigger value="tenant" className="flex gap-2">
            <User className="h-4 w-4" /> Tenant
          </TabsTrigger>
          <TabsTrigger value="property" className="flex gap-2">
            <Building2 className="h-4 w-4" /> Property
          </TabsTrigger>
          <TabsTrigger value="assignment" className="flex gap-2">
            <Wrench className="h-4 w-4" /> Assignment
          </TabsTrigger>
          <TabsTrigger value="timeline" className="flex gap-2">
            <Clock className="h-4 w-4" /> Timeline
          </TabsTrigger>
          <TabsTrigger value="comments" className="flex gap-2">
            <MessageSquare className="h-4 w-4" /> Comments
          </TabsTrigger>
          <TabsTrigger value="attachments" className="flex gap-2">
            <FileText className="h-4 w-4" /> Attachments
          </TabsTrigger>
          <TabsTrigger value="feedback" className="flex gap-2">
            <Star className="h-4 w-4" /> Feedback
          </TabsTrigger>
        </TabsList>

        <ScrollArea className="h-[600px] w-full rounded-md border p-4 mt-4">
          <TabsContent value="details">
            <Card>
              <CardHeader className="text-lg font-semibold">
                Request Details
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium">Description</h3>
                    <p className="text-gray-600">{request.description}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Category</h3>
                    <p className="text-gray-600">{request.category}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Submission Date</h3>
                    <p className="text-gray-600">
                      {new Date(request.submissionDate).toLocaleString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tenant">
            <Card>
              <CardHeader className="text-lg font-semibold">
                Tenant Information
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium">Name</h3>
                    <p className="text-gray-600">{request.tenant.name}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Unit</h3>
                    <p className="text-gray-600">{request.tenant.unit}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">{request.tenant.email}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">{request.tenant.phone}</p>
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

export default MaintenanceDetails;

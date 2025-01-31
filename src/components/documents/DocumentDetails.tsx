import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import Breadcrumb from "../common/Breadcrumb";
import {
  FileText,
  Download,
  Share2,
  History,
  Lock,
  Eye,
  Settings,
} from "lucide-react";

interface DocumentDetails {
  id: string;
  name: string;
  type: "lease" | "invoice" | "maintenance" | "legal" | "other";
  category: string;
  description: string;
  uploadDate: string;
  size: string;
  status: "active" | "archived" | "draft";
  lastModified: string;
  metadata: {
    author: string;
    createdDate: string;
    version: string;
    tags: string[];
  };
  security: {
    accessLevel: string;
    permissions: string[];
    expiryDate?: string;
  };
  versions: Array<{
    version: string;
    date: string;
    author: string;
    changes: string;
  }>;
  relatedDocuments: Array<{
    id: string;
    name: string;
    type: string;
  }>;
}

const defaultDocument: DocumentDetails = {
  id: "DOC1",
  name: "Lease Agreement - Unit 3B",
  type: "lease",
  category: "Contracts",
  description: "Standard lease agreement for Unit 3B at Sunset Apartments",
  uploadDate: "2024-03-15",
  size: "2.5 MB",
  status: "active",
  lastModified: "2024-03-15",
  metadata: {
    author: "John Smith",
    createdDate: "2024-03-15",
    version: "1.0",
    tags: ["lease", "unit-3b", "contract"],
  },
  security: {
    accessLevel: "Restricted",
    permissions: ["view", "download", "share"],
    expiryDate: "2025-03-15",
  },
  versions: [
    {
      version: "1.0",
      date: "2024-03-15",
      author: "John Smith",
      changes: "Initial version",
    },
  ],
  relatedDocuments: [
    {
      id: "DOC2",
      name: "Move-in Checklist - Unit 3B",
      type: "checklist",
    },
    {
      id: "DOC3",
      name: "Property Insurance Policy",
      type: "legal",
    },
  ],
};

const DocumentDetails = () => {
  const { id } = useParams();
  const document = defaultDocument; // In real app, fetch based on id

  const statusColors = {
    active: "bg-green-100 text-green-800",
    archived: "bg-gray-100 text-gray-800",
    draft: "bg-yellow-100 text-yellow-800",
  };

  const typeColors = {
    lease: "bg-blue-100 text-blue-800",
    invoice: "bg-purple-100 text-purple-800",
    maintenance: "bg-orange-100 text-orange-800",
    legal: "bg-red-100 text-red-800",
    other: "bg-gray-100 text-gray-800",
  };

  return (
    <div className="w-full h-full flex flex-col">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/" },
          { label: "Documents", href: "/documents" },
          { label: document.name },
        ]}
      />

      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">{document.name}</h1>
            <Badge
              className={statusColors[document.status]}
              variant="secondary"
            >
              {document.status.charAt(0).toUpperCase() +
                document.status.slice(1)}
            </Badge>
          </div>
          <p className="text-gray-500 mt-1">{document.description}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" /> Download
          </Button>
          <Button variant="outline" className="gap-2">
            <Share2 className="h-4 w-4" /> Share
          </Button>
        </div>
      </div>

      <Tabs defaultValue="details" className="w-full">
        <TabsList className="grid grid-cols-3 lg:grid-cols-6 h-auto">
          <TabsTrigger value="details" className="flex gap-2">
            <FileText className="h-4 w-4" /> Details
          </TabsTrigger>
          <TabsTrigger value="preview" className="flex gap-2">
            <Eye className="h-4 w-4" /> Preview
          </TabsTrigger>
          <TabsTrigger value="versions" className="flex gap-2">
            <History className="h-4 w-4" /> Versions
          </TabsTrigger>
          <TabsTrigger value="security" className="flex gap-2">
            <Lock className="h-4 w-4" /> Security
          </TabsTrigger>
          <TabsTrigger value="related" className="flex gap-2">
            <FileText className="h-4 w-4" /> Related
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex gap-2">
            <Settings className="h-4 w-4" /> Settings
          </TabsTrigger>
        </TabsList>

        <ScrollArea className="h-[600px] w-full rounded-md border p-4 mt-4">
          <TabsContent value="details">
            <Card>
              <CardHeader className="text-lg font-semibold">
                Document Information
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium">Document Type</h3>
                    <Badge
                      variant="secondary"
                      className={typeColors[document.type]}
                    >
                      {document.type.charAt(0).toUpperCase() +
                        document.type.slice(1)}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-medium">Category</h3>
                    <p className="text-gray-600">{document.category}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Upload Date</h3>
                    <p className="text-gray-600">
                      {new Date(document.uploadDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">Size</h3>
                    <p className="text-gray-600">{document.size}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Author</h3>
                    <p className="text-gray-600">{document.metadata.author}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Version</h3>
                    <p className="text-gray-600">{document.metadata.version}</p>
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

export default DocumentDetails;

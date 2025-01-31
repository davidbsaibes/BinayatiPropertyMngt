import React from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, FileText, Download } from "lucide-react";
import Breadcrumb from "../common/Breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Document {
  id: string;
  name: string;
  type: "lease" | "invoice" | "maintenance" | "legal" | "other";
  category: string;
  uploadDate: string;
  size: string;
  status: "active" | "archived" | "draft";
  lastModified: string;
}

const defaultDocuments: Document[] = [
  {
    id: "DOC1",
    name: "Lease Agreement - Unit 3B",
    type: "lease",
    category: "Contracts",
    uploadDate: "2024-03-15",
    size: "2.5 MB",
    status: "active",
    lastModified: "2024-03-15",
  },
  {
    id: "DOC2",
    name: "Maintenance Report - Q1 2024",
    type: "maintenance",
    category: "Reports",
    uploadDate: "2024-04-01",
    size: "1.8 MB",
    status: "draft",
    lastModified: "2024-04-05",
  },
  {
    id: "DOC3",
    name: "Property Insurance Policy",
    type: "legal",
    category: "Insurance",
    uploadDate: "2024-01-10",
    size: "3.2 MB",
    status: "active",
    lastModified: "2024-01-10",
  },
];

const DocumentsPage = () => {
  const navigate = useNavigate();

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
    <div className="p-6 space-y-6">
      <Breadcrumb
        items={[{ label: "Dashboard", href: "/" }, { label: "Documents" }]}
      />

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Documents</h1>
        <Button onClick={() => navigate("/documents/new")}>
          <Plus className="h-4 w-4 mr-2" /> Upload Document
        </Button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search documents..." className="pl-10" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Upload Date</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Modified</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {defaultDocuments.map((doc) => (
              <TableRow
                key={doc.id}
                className="cursor-pointer hover:bg-gray-50"
                onClick={() => navigate(`/documents/${doc.id}`)}
              >
                <TableCell>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-gray-500" />
                    <span className="font-medium">{doc.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className={typeColors[doc.type]}>
                    {doc.type.charAt(0).toUpperCase() + doc.type.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>{doc.category}</TableCell>
                <TableCell>
                  {new Date(doc.uploadDate).toLocaleDateString()}
                </TableCell>
                <TableCell>{doc.size}</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={statusColors[doc.status]}
                  >
                    {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>
                  {new Date(doc.lastModified).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DocumentsPage;

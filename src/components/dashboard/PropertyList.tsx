import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Property {
  id: string;
  title: string;
  address: string;
  status: "occupied" | "vacant" | "maintenance";
  rent: number;
}

interface PropertyListProps {
  properties?: Property[];
  onViewProperty?: (id: string) => void;
  onEditProperty?: (id: string) => void;
  onDeleteProperty?: (id: string) => void;
}

const defaultProperties: Property[] = [
  {
    id: "1",
    title: "Modern Apartment",
    address: "123 Main Street, City, State",
    status: "vacant",
    rent: 1500,
  },
  {
    id: "2",
    title: "Luxury Villa",
    address: "456 Park Avenue, City, State",
    status: "occupied",
    rent: 2500,
  },
  {
    id: "3",
    title: "Cozy Cottage",
    address: "789 Oak Road, City, State",
    status: "maintenance",
    rent: 1200,
  },
];

const PropertyList = ({
  properties = defaultProperties,
  onViewProperty = () => {},
  onEditProperty = () => {},
  onDeleteProperty = () => {},
}: PropertyListProps) => {
  const navigate = useNavigate();
  const statusColors = {
    occupied: "bg-green-100 text-green-800",
    vacant: "bg-blue-100 text-blue-800",
    maintenance: "bg-yellow-100 text-yellow-800",
  };

  const handleViewProperty = (id: string) => {
    navigate(`/properties/${id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Property</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Rent</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {properties.map((property) => (
            <TableRow key={property.id}>
              <TableCell className="font-medium">{property.title}</TableCell>
              <TableCell>{property.address}</TableCell>
              <TableCell>
                <Badge
                  className={statusColors[property.status]}
                  variant="secondary"
                >
                  {property.status.charAt(0).toUpperCase() +
                    property.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>${property.rent.toLocaleString()}/month</TableCell>
              <TableCell className="text-right whitespace-nowrap">
                <TooltipProvider>
                  <div className="flex justify-end gap-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleViewProperty(property.id)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View details</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => onEditProperty(property.id)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Edit property</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => onDeleteProperty(property.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Delete property</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PropertyList;

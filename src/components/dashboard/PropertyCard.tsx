import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Eye } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PropertyCardProps {
  id?: string;
  image?: string;
  title?: string;
  address?: string;
  status?: "occupied" | "vacant" | "maintenance";
  rent?: number;
  onView?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const PropertyCard = ({
  id = "1",
  image = "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  title = "Modern Apartment",
  address = "123 Main Street, City, State",
  status = "vacant",
  rent = 1500,
  onView = () => {},
  onEdit = () => {},
  onDelete = () => {},
}: PropertyCardProps) => {
  const statusColors = {
    occupied: "bg-green-100 text-green-800",
    vacant: "bg-blue-100 text-blue-800",
    maintenance: "bg-yellow-100 text-yellow-800",
  };

  return (
    <Card className="w-[380px] bg-white overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <Badge
            className={`absolute top-4 right-4 ${statusColors[status]}`}
            variant="secondary"
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{address}</p>
        <p className="text-lg font-bold">${rent.toLocaleString()}/month</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-end gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" onClick={() => onView(id)}>
                <Eye className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>View details</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" onClick={() => onEdit(id)}>
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
                onClick={() => onDelete(id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete property</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;

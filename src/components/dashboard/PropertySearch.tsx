import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PropertySearchProps {
  onSearch?: (searchTerm: string) => void;
  onStatusFilter?: (status: string) => void;
  onRentRangeFilter?: (range: string) => void;
}

const PropertySearch = ({
  onSearch = () => {},
  onStatusFilter = () => {},
  onRentRangeFilter = () => {},
}: PropertySearchProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search properties..."
            className="pl-10"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Select onValueChange={onStatusFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="occupied">Occupied</SelectItem>
              <SelectItem value="vacant">Vacant</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={onRentRangeFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Rent Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Ranges</SelectItem>
              <SelectItem value="0-1000">$0 - $1,000</SelectItem>
              <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
              <SelectItem value="2000+">$2,000+</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;

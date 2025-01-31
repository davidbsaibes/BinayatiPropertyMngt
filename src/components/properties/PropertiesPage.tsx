import React from "react";
import PropertySearch from "../dashboard/PropertySearch";
import PropertyGrid from "../dashboard/PropertyGrid";

interface Property {
  id: string;
  image: string;
  title: string;
  address: string;
  status: "occupied" | "vacant" | "maintenance";
  rent: number;
}

const properties: Property[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    title: "Sunset Apartments",
    address: "123 Sunset Boulevard, Los Angeles, CA 90028",
    status: "occupied",
    rent: 2500,
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    title: "Ocean View Condos",
    address: "456 Coastal Highway, Miami, FL 33139",
    status: "vacant",
    rent: 3200,
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    title: "Mountain View Residences",
    address: "789 Mountain Road, Denver, CO 80202",
    status: "maintenance",
    rent: 1800,
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    title: "Parkside Townhomes",
    address: "321 Park Avenue, Seattle, WA 98101",
    status: "occupied",
    rent: 2800,
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126",
    title: "Downtown Lofts",
    address: "555 Downtown Street, Chicago, IL 60601",
    status: "vacant",
    rent: 2200,
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    title: "Riverside Apartments",
    address: "888 River Road, Portland, OR 97201",
    status: "occupied",
    rent: 1950,
  },
];

const PropertiesPage = () => {
  const handleSearch = (term: string) => {
    console.log("Searching for:", term);
  };

  const handleStatusFilter = (status: string) => {
    console.log("Filtering by status:", status);
  };

  const handleRentRangeFilter = (range: string) => {
    console.log("Filtering by rent range:", range);
  };

  const handleViewProperty = (id: string) => {
    window.location.href = `/properties/${id}`;
  };

  const handleEditProperty = (id: string) => {
    console.log("Editing property:", id);
  };

  const handleDeleteProperty = (id: string) => {
    console.log("Deleting property:", id);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Properties</h1>
      </div>

      <PropertySearch
        onSearch={handleSearch}
        onStatusFilter={handleStatusFilter}
        onRentRangeFilter={handleRentRangeFilter}
      />

      <PropertyGrid
        properties={properties}
        onViewProperty={handleViewProperty}
        onEditProperty={handleEditProperty}
        onDeleteProperty={handleDeleteProperty}
      />
    </div>
  );
};

export default PropertiesPage;

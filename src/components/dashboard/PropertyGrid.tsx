import React from "react";
import PropertyCard from "./PropertyCard";

interface Property {
  id: string;
  image: string;
  title: string;
  address: string;
  status: "occupied" | "vacant" | "maintenance";
  rent: number;
}

interface PropertyGridProps {
  properties?: Property[];
  onViewProperty?: (id: string) => void;
  onEditProperty?: (id: string) => void;
  onDeleteProperty?: (id: string) => void;
}

const defaultProperties: Property[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    title: "Modern Apartment",
    address: "123 Main Street, City, State",
    status: "vacant",
    rent: 1500,
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    title: "Luxury Villa",
    address: "456 Park Avenue, City, State",
    status: "occupied",
    rent: 2500,
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    title: "Cozy Cottage",
    address: "789 Oak Road, City, State",
    status: "maintenance",
    rent: 1200,
  },
];

const PropertyGrid = ({
  properties = defaultProperties,
  onViewProperty = () => {},
  onEditProperty = () => {},
  onDeleteProperty = () => {},
}: PropertyGridProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            id={property.id}
            image={property.image}
            title={property.title}
            address={property.address}
            status={property.status}
            rent={property.rent}
            onView={onViewProperty}
            onEdit={onEditProperty}
            onDelete={onDeleteProperty}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyGrid;

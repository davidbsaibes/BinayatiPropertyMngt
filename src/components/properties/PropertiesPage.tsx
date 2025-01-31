import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import PropertySearch from "../dashboard/PropertySearch";

interface Property {
  id: string;
  image: string;
  title: string;
  address: string;
  status: "occupied" | "vacant" | "maintenance";
  rent: number;
  description: string;
  features: string[];
  bedrooms: number;
  bathrooms: number;
  sqft: number;
}

const properties: Property[] = [
  // Single Building Property
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    title: "The Metropolitan",
    address: "123 Downtown Ave, New York, NY 10001",
    status: "occupied",
    rent: 3500,
    description:
      "Luxury high-rise apartment building with modern amenities and stunning city views",
    features: [
      "24/7 Doorman",
      "Fitness Center",
      "Rooftop Lounge",
      "Package Room",
      "Bike Storage",
    ],
    bedrooms: 0, // Building total
    bathrooms: 0, // Building total
    sqft: 150000,
  },
  // Residential Compound Property

  {
    id: "2",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    title: "Parkview Gardens",
    address: "789 Park Road, Los Angeles, CA 90210",
    status: "occupied",
    rent: 2800,
    description:
      "Exclusive gated community featuring multiple residential buildings, landscaped gardens, and resort-style amenities",
    features: [
      "Gated Community",
      "Multiple Pools",
      "Tennis Courts",
      "Clubhouse",
      "Walking Trails",
      "24/7 Security",
    ],
    bedrooms: 0, // Compound total
    bathrooms: 0, // Compound total
    sqft: 500000,
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    title: "Mountain View Residences",
    address: "789 Mountain Road, Denver, CO 80202",
    status: "maintenance",
    rent: 1800,
    description: "Cozy mountain retreat with stunning natural surroundings",
    features: ["Fireplace", "Balcony", "Heated Parking", "Storage"],
    bedrooms: 1,
    bathrooms: 1,
    sqft: 850,
  },
];

const PropertiesPage = () => {
  const navigate = useNavigate();

  const statusColors = {
    occupied: "bg-green-100 text-green-800",
    vacant: "bg-blue-100 text-blue-800",
    maintenance: "bg-yellow-100 text-yellow-800",
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Properties</h1>
        <Button onClick={() => navigate("/properties/new")}>
          <Plus className="h-4 w-4 mr-2" /> Add Property
        </Button>
      </div>

      <PropertySearch
        onSearch={(term) => console.log("Search:", term)}
        onStatusFilter={(status) => console.log("Status:", status)}
        onRentRangeFilter={(range) => console.log("Range:", range)}
      />

      <div className="space-y-4">
        {properties.map((property) => (
          <Card
            key={property.id}
            className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
            onClick={() => navigate(`/properties/${property.id}`)}
          >
            <CardContent className="p-0">
              <div className="flex">
                <div className="w-72 h-48">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover rounded-l-lg"
                  />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {property.title}
                      </h3>
                      <p className="text-gray-500">{property.address}</p>
                    </div>
                    <Badge
                      variant="secondary"
                      className={statusColors[property.status]}
                    >
                      {property.status.charAt(0).toUpperCase() +
                        property.status.slice(1)}
                    </Badge>
                  </div>
                  <p className="mt-2 text-gray-600">{property.description}</p>
                  <div className="mt-4 flex items-center gap-6">
                    <div>
                      <span className="font-semibold">{property.bedrooms}</span>{" "}
                      <span className="text-gray-500">Beds</span>
                    </div>
                    <div>
                      <span className="font-semibold">
                        {property.bathrooms}
                      </span>{" "}
                      <span className="text-gray-500">Baths</span>
                    </div>
                    <div>
                      <span className="font-semibold">
                        {property.sqft.toLocaleString()}
                      </span>{" "}
                      <span className="text-gray-500">sqft</span>
                    </div>
                    <div className="ml-auto">
                      <span className="text-2xl font-bold">
                        ${property.rent.toLocaleString()}
                      </span>
                      <span className="text-gray-500">/month</span>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    {property.features.map((feature, index) => (
                      <Badge key={index} variant="outline">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;

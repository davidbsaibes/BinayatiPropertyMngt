import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Building2,
  User,
  DollarSign,
  FileText,
  Warehouse,
  Shield,
  Plug,
} from "lucide-react";

interface PropertyDetailsProps {
  property?: {
    id: string;
    name: string;
    type: string;
    status: "occupied" | "vacant" | "maintenance";
    address: {
      street: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
    };
    location: {
      latitude: number;
      longitude: number;
    };
    description: string;
    images: string[];
    owner: {
      name: string;
      email: string;
      phone: string;
      address: string;
    };
    ownershipType: string;
    taxInfo: {
      id: string;
      history: Array<{
        date: string;
        amount: number;
        status: string;
      }>;
    };
    physical: {
      size: number;
      units: number;
      yearBuilt: number;
      renovations: Array<{
        date: string;
        description: string;
        cost: number;
      }>;
      utilities: {
        electric: string;
        water: string;
        gas: string;
        internet: string;
      };
    };
    financial: {
      rent: number;
      leases: Array<{
        tenantName: string;
        startDate: string;
        endDate: string;
        amount: number;
      }>;
      expenses: Array<{
        category: string;
        monthly: number;
        annual: number;
      }>;
      revenue: {
        rental: number;
        other: number;
      };
      mortgage?: {
        lender: string;
        amount: number;
        term: number;
        rate: number;
      };
    };
  };
}

const defaultProperty = {
  id: "1",
  name: "Sunset Apartments",
  type: "Residential Complex",
  status: "occupied" as const,
  address: {
    street: "123 Sunset Boulevard",
    city: "Los Angeles",
    state: "CA",
    postalCode: "90028",
    country: "USA",
  },
  location: {
    latitude: 34.0928,
    longitude: -118.3287,
  },
  description: "Modern apartment complex with luxury amenities",
  images: [
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  ],
  owner: {
    name: "John Smith",
    email: "john@example.com",
    phone: "(555) 123-4567",
    address: "456 Business Ave, Suite 100, Los Angeles, CA 90028",
  },
  ownershipType: "Single Owner",
  taxInfo: {
    id: "TAX-2024-001",
    history: [
      { date: "2024-01-15", amount: 12500, status: "paid" },
      { date: "2023-07-15", amount: 12500, status: "paid" },
    ],
  },
  physical: {
    size: 45000,
    units: 24,
    yearBuilt: 2015,
    renovations: [
      {
        date: "2023-06",
        description: "HVAC System Upgrade",
        cost: 75000,
      },
    ],
    utilities: {
      electric: "SO-123456",
      water: "WA-789012",
      gas: "GA-345678",
      internet: "FI-901234",
    },
  },
  financial: {
    rent: 2500,
    leases: [
      {
        tenantName: "Alice Johnson",
        startDate: "2023-01-01",
        endDate: "2024-12-31",
        amount: 2500,
      },
    ],
    expenses: [
      { category: "Maintenance", monthly: 2000, annual: 24000 },
      { category: "Insurance", monthly: 1000, annual: 12000 },
    ],
    revenue: {
      rental: 60000,
      other: 5000,
    },
    mortgage: {
      lender: "First National Bank",
      amount: 2000000,
      term: 30,
      rate: 3.5,
    },
  },
};

const PropertyDetails = ({
  property = defaultProperty,
}: PropertyDetailsProps) => {
  const statusColors = {
    occupied: "bg-green-100 text-green-800",
    vacant: "bg-blue-100 text-blue-800",
    maintenance: "bg-yellow-100 text-yellow-800",
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">{property.name}</h1>
          <p className="text-gray-500">{property.address.street}</p>
        </div>
        <Badge
          className={`${statusColors[property.status]}`}
          variant="secondary"
        >
          {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
        </Badge>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 gap-4">
        {property.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Property ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg"
          />
        ))}
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid grid-cols-4 lg:grid-cols-8 h-auto">
          <TabsTrigger value="general" className="flex gap-2">
            <Building2 className="h-4 w-4" /> General
          </TabsTrigger>
          <TabsTrigger value="owner" className="flex gap-2">
            <User className="h-4 w-4" /> Owner
          </TabsTrigger>
          <TabsTrigger value="financial" className="flex gap-2">
            <DollarSign className="h-4 w-4" /> Financial
          </TabsTrigger>
          <TabsTrigger value="physical" className="flex gap-2">
            <Warehouse className="h-4 w-4" /> Physical
          </TabsTrigger>

          <TabsTrigger value="documents" className="flex gap-2">
            <FileText className="h-4 w-4" /> Documents
          </TabsTrigger>
          <TabsTrigger value="utilities" className="flex gap-2">
            <Plug className="h-4 w-4" /> Utilities
          </TabsTrigger>
          <TabsTrigger value="legal" className="flex gap-2">
            <Shield className="h-4 w-4" /> Legal
          </TabsTrigger>
        </TabsList>

        <ScrollArea className="h-[600px] w-full rounded-md border p-4 mt-4">
          <TabsContent value="general">
            <Card>
              <CardHeader className="text-lg font-semibold">
                General Information
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium">Property Type</h3>
                    <p>{property.type}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p>
                      {property.address.street}, {property.address.city},{" "}
                      {property.address.state} {property.address.postalCode}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">Description</h3>
                    <p>{property.description}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p>
                      Lat: {property.location.latitude}, Long:{" "}
                      {property.location.longitude}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="owner">
            <Card>
              <CardHeader className="text-lg font-semibold">
                Owner Information
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium">Owner Name</h3>
                    <p>{property.owner.name}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Contact Information</h3>
                    <p>Email: {property.owner.email}</p>
                    <p>Phone: {property.owner.phone}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p>{property.owner.address}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Ownership Type</h3>
                    <p>{property.ownershipType}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financial">
            <Card>
              <CardHeader className="text-lg font-semibold">
                Financial Information
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium">Monthly Rent</h3>
                    <p>${property.financial.rent.toLocaleString()}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Annual Revenue</h3>
                    <p>
                      $
                      {(
                        property.financial.revenue.rental +
                        property.financial.revenue.other
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Current Leases</h3>
                  <div className="space-y-2">
                    {property.financial.leases.map((lease, index) => (
                      <div
                        key={index}
                        className="p-3 border rounded-lg flex justify-between items-center"
                      >
                        <div>
                          <p className="font-medium">{lease.tenantName}</p>
                          <p className="text-sm text-gray-500">
                            {new Date(lease.startDate).toLocaleDateString()} -{" "}
                            {new Date(lease.endDate).toLocaleDateString()}
                          </p>
                        </div>
                        <p className="font-medium">
                          ${lease.amount.toLocaleString()}/month
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {property.financial.mortgage && (
                  <div>
                    <h3 className="font-medium mb-2">Mortgage Details</h3>
                    <div className="grid grid-cols-2 gap-4 p-3 border rounded-lg">
                      <div>
                        <p className="text-sm text-gray-500">Lender</p>
                        <p>{property.financial.mortgage.lender}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Amount</p>
                        <p>
                          ${property.financial.mortgage.amount.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Term</p>
                        <p>{property.financial.mortgage.term} years</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Interest Rate</p>
                        <p>{property.financial.mortgage.rate}%</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Add other tab contents similarly */}
        </ScrollArea>
      </Tabs>
    </div>
  );
};

export default PropertyDetails;

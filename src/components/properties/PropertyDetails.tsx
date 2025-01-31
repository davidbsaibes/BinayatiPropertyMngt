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
    documents: Array<{
      id: string;
      name: string;
      type: string;
      uploadDate: string;
      size: string;
      category: string;
      status: string;
    }>;
    utilities: {
      accounts: Array<{
        service: string;
        provider: string;
        accountNumber: string;
        billingCycle: string;
        averageMonthlyBill: number;
      }>;
      meters: Array<{
        type: string;
        number: string;
        location: string;
        lastReading: string;
        nextReading: string;
      }>;
      contracts: Array<{
        provider: string;
        service: string;
        startDate: string;
        endDate: string;
        terms: string;
      }>;
    };
    legal: {
      permits: Array<{
        type: string;
        number: string;
        issueDate: string;
        expiryDate: string;
        status: string;
      }>;
      certificates: Array<{
        type: string;
        number: string;
        issueDate: string;
        expiryDate: string;
        issuingAuthority: string;
      }>;
      insurance: Array<{
        type: string;
        provider: string;
        policyNumber: string;
        coverage: number;
        startDate: string;
        endDate: string;
      }>;
      contracts: Array<{
        type: string;
        party: string;
        startDate: string;
        endDate: string;
        value: number;
        status: string;
      }>;
    };
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
  documents: [
    {
      id: "DOC1",
      name: "Building Permit.pdf",
      type: "Permit",
      uploadDate: "2024-01-15",
      size: "2.5 MB",
      category: "Legal",
      status: "Active",
    },
    {
      id: "DOC2",
      name: "Insurance Policy.pdf",
      type: "Insurance",
      uploadDate: "2024-02-01",
      size: "1.8 MB",
      category: "Insurance",
      status: "Active",
    },
    {
      id: "DOC3",
      name: "Maintenance Contract.pdf",
      type: "Contract",
      uploadDate: "2024-03-10",
      size: "3.2 MB",
      category: "Maintenance",
      status: "Under Review",
    },
  ],
  utilities: {
    accounts: [
      {
        service: "Electricity",
        provider: "Power Corp",
        accountNumber: "ELEC-123456",
        billingCycle: "Monthly",
        averageMonthlyBill: 5000,
      },
      {
        service: "Water",
        provider: "City Water",
        accountNumber: "WAT-789012",
        billingCycle: "Bi-monthly",
        averageMonthlyBill: 2000,
      },
    ],
    meters: [
      {
        type: "Electric",
        number: "E-12345",
        location: "Main Building Basement",
        lastReading: "2024-03-15",
        nextReading: "2024-04-15",
      },
      {
        type: "Water",
        number: "W-67890",
        location: "Utility Room",
        lastReading: "2024-03-01",
        nextReading: "2024-05-01",
      },
    ],
    contracts: [
      {
        provider: "Power Corp",
        service: "Electricity",
        startDate: "2024-01-01",
        endDate: "2024-12-31",
        terms: "Fixed rate contract at $0.12/kWh",
      },
    ],
  },
  legal: {
    permits: [
      {
        type: "Building Permit",
        number: "BP-2024-001",
        issueDate: "2024-01-01",
        expiryDate: "2024-12-31",
        status: "Active",
      },
      {
        type: "Fire Safety",
        number: "FS-2024-002",
        issueDate: "2024-02-15",
        expiryDate: "2025-02-14",
        status: "Active",
      },
    ],
    certificates: [
      {
        type: "Safety Certificate",
        number: "SC-2024-001",
        issueDate: "2024-01-01",
        expiryDate: "2024-12-31",
        issuingAuthority: "City Safety Department",
      },
    ],
    insurance: [
      {
        type: "Property Insurance",
        provider: "SafeGuard Insurance",
        policyNumber: "POL-123456",
        coverage: 5000000,
        startDate: "2024-01-01",
        endDate: "2024-12-31",
      },
      {
        type: "Liability Insurance",
        provider: "SecureLife Corp",
        policyNumber: "POL-789012",
        coverage: 2000000,
        startDate: "2024-01-01",
        endDate: "2024-12-31",
      },
    ],
    contracts: [
      {
        type: "Maintenance",
        party: "BuildingCare Services",
        startDate: "2024-01-01",
        endDate: "2024-12-31",
        value: 60000,
        status: "Active",
      },
    ],
  },
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
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
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
      {
        date: "2022-08",
        description: "Exterior Painting",
        cost: 35000,
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
      {
        tenantName: "Bob Wilson",
        startDate: "2023-03-01",
        endDate: "2024-02-29",
        amount: 2600,
      },
    ],
    expenses: [
      { category: "Maintenance", monthly: 2000, annual: 24000 },
      { category: "Insurance", monthly: 1000, annual: 12000 },
      { category: "Property Tax", monthly: 1500, annual: 18000 },
      { category: "Utilities", monthly: 3000, annual: 36000 },
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
    <div className="w-full h-full p-6 space-y-6">
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

                <div>
                  <h3 className="font-medium mb-2">Monthly Expenses</h3>
                  <div className="space-y-2">
                    {property.financial.expenses.map((expense, index) => (
                      <div
                        key={index}
                        className="p-3 border rounded-lg flex justify-between items-center"
                      >
                        <p className="font-medium">{expense.category}</p>
                        <div className="text-right">
                          <p className="font-medium">
                            ${expense.monthly.toLocaleString()}/month
                          </p>
                          <p className="text-sm text-gray-500">
                            ${expense.annual.toLocaleString()}/year
                          </p>
                        </div>
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

          <TabsContent value="physical">
            <Card>
              <CardHeader className="text-lg font-semibold">
                Physical Information
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <h3 className="font-medium">Total Size</h3>
                    <p>{property.physical.size.toLocaleString()} sqft</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Number of Units</h3>
                    <p>{property.physical.units} units</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Year Built</h3>
                    <p>{property.physical.yearBuilt}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Recent Renovations</h3>
                  <div className="space-y-2">
                    {property.physical.renovations.map((renovation, index) => (
                      <div
                        key={index}
                        className="p-3 border rounded-lg flex justify-between items-center"
                      >
                        <div>
                          <p className="font-medium">
                            {renovation.description}
                          </p>
                          <p className="text-sm text-gray-500">
                            Date: {renovation.date}
                          </p>
                        </div>
                        <p className="font-medium">
                          ${renovation.cost.toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Utility Accounts</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 border rounded-lg">
                      <p className="text-sm text-gray-500">Electric</p>
                      <p className="font-medium">
                        {property.physical.utilities.electric}
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="text-sm text-gray-500">Water</p>
                      <p className="font-medium">
                        {property.physical.utilities.water}
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="text-sm text-gray-500">Gas</p>
                      <p className="font-medium">
                        {property.physical.utilities.gas}
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="text-sm text-gray-500">Internet</p>
                      <p className="font-medium">
                        {property.physical.utilities.internet}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents">
            <Card>
              <CardHeader className="text-lg font-semibold">
                Documents
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {property.documents.map((doc) => (
                    <div
                      key={doc.id}
                      className="p-4 border rounded-lg flex items-center justify-between"
                    >
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <div className="flex gap-4 text-sm text-gray-500">
                          <p>Type: {doc.type}</p>
                          <p>Category: {doc.category}</p>
                          <p>Size: {doc.size}</p>
                        </div>
                        <p className="text-sm text-gray-500">
                          Uploaded:{" "}
                          {new Date(doc.uploadDate).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge variant="secondary">{doc.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="utilities">
            <Card>
              <CardHeader className="text-lg font-semibold">
                Utility Management
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Utility Accounts</h3>
                  <div className="space-y-3">
                    {property.utilities.accounts.map((account, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">{account.service}</p>
                            <p className="text-sm text-gray-500">
                              {account.provider}
                            </p>
                          </div>
                          <p className="font-medium">
                            ${account.averageMonthlyBill.toLocaleString()}/month
                          </p>
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                          <p>Account: {account.accountNumber}</p>
                          <p>Billing Cycle: {account.billingCycle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Meters</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {property.utilities.meters.map((meter, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <p className="font-medium">{meter.type}</p>
                        <p className="text-sm">Number: {meter.number}</p>
                        <p className="text-sm text-gray-500">
                          Location: {meter.location}
                        </p>
                        <div className="mt-2 text-sm">
                          <p>Last Reading: {meter.lastReading}</p>
                          <p>Next Reading: {meter.nextReading}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Service Contracts</h3>
                  <div className="space-y-3">
                    {property.utilities.contracts.map((contract, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between">
                          <p className="font-medium">{contract.service}</p>
                          <p className="text-sm">{contract.provider}</p>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                          {new Date(contract.startDate).toLocaleDateString()} -
                          {new Date(contract.endDate).toLocaleDateString()}
                        </p>
                        <p className="text-sm mt-1">{contract.terms}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="legal">
            <Card>
              <CardHeader className="text-lg font-semibold">
                Legal Information
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Permits & Licenses</h3>
                  <div className="space-y-3">
                    {property.legal.permits.map((permit, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">{permit.type}</p>
                            <p className="text-sm">Number: {permit.number}</p>
                          </div>
                          <Badge variant="secondary">{permit.status}</Badge>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                          Valid:{" "}
                          {new Date(permit.issueDate).toLocaleDateString()} -
                          {new Date(permit.expiryDate).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Insurance Policies</h3>
                  <div className="space-y-3">
                    {property.legal.insurance.map((policy, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">{policy.type}</p>
                            <p className="text-sm">{policy.provider}</p>
                          </div>
                          <p className="font-medium">
                            ${policy.coverage.toLocaleString()}
                          </p>
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                          <p>Policy: {policy.policyNumber}</p>
                          <p>
                            Valid:{" "}
                            {new Date(policy.startDate).toLocaleDateString()} -
                            {new Date(policy.endDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Service Contracts</h3>
                  <div className="space-y-3">
                    {property.legal.contracts.map((contract, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">{contract.type}</p>
                            <p className="text-sm">{contract.party}</p>
                          </div>
                          <Badge variant="secondary">{contract.status}</Badge>
                        </div>
                        <div className="mt-2 text-sm">
                          <p className="text-gray-500">
                            {new Date(contract.startDate).toLocaleDateString()}{" "}
                            -{new Date(contract.endDate).toLocaleDateString()}
                          </p>
                          <p className="font-medium mt-1">
                            Value: ${contract.value.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
};

export default PropertyDetails;

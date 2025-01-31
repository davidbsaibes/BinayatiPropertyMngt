import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import Breadcrumb from "../common/Breadcrumb";
import {
  DollarSign,
  User,
  Calendar,
  FileText,
  CreditCard,
  Receipt,
  Download,
} from "lucide-react";

interface PaymentDetails {
  id: string;
  tenant: {
    name: string;
    email: string;
    unit: string;
  };
  amount: number;
  type: "rent" | "deposit" | "fee" | "utility";
  status: "paid" | "pending" | "overdue" | "failed";
  dueDate: string;
  paidDate?: string;
  paymentMethod?: {
    type: string;
    last4?: string;
    expiryDate?: string;
  };
  invoice: {
    number: string;
    items: Array<{
      description: string;
      amount: number;
    }>;
  };
  notes?: string;
}

const defaultPayment: PaymentDetails = {
  id: "P1",
  tenant: {
    name: "John Smith",
    email: "john@example.com",
    unit: "3B",
  },
  amount: 2500,
  type: "rent",
  status: "paid",
  dueDate: "2024-04-01",
  paidDate: "2024-03-29",
  paymentMethod: {
    type: "Credit Card",
    last4: "4242",
    expiryDate: "12/25",
  },
  invoice: {
    number: "INV-2024-001",
    items: [
      { description: "Monthly Rent - April 2024", amount: 2300 },
      { description: "Utility Fee", amount: 200 },
    ],
  },
  notes: "Payment received on time",
};

const PaymentDetails = () => {
  const { id } = useParams();
  const payment = defaultPayment; // In real app, fetch based on id

  const statusColors = {
    paid: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    overdue: "bg-red-100 text-red-800",
    failed: "bg-gray-100 text-gray-800",
  };

  const typeColors = {
    rent: "bg-blue-100 text-blue-800",
    deposit: "bg-purple-100 text-purple-800",
    fee: "bg-orange-100 text-orange-800",
    utility: "bg-cyan-100 text-cyan-800",
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/" },
          { label: "Payments", href: "/payments" },
          { label: `Payment ${payment.id}` },
        ]}
      />

      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">Payment Details</h1>
            <Badge variant="outline">{payment.id}</Badge>
          </div>
          <p className="text-gray-500 mt-1">{payment.invoice.number}</p>
        </div>
        <div className="flex gap-2">
          <Badge className={typeColors[payment.type]} variant="secondary">
            {payment.type.charAt(0).toUpperCase() + payment.type.slice(1)}
          </Badge>
          <Badge className={statusColors[payment.status]} variant="secondary">
            {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="details" className="w-full">
        <TabsList className="grid grid-cols-3 lg:grid-cols-6 h-auto">
          <TabsTrigger value="details" className="flex gap-2">
            <DollarSign className="h-4 w-4" /> Details
          </TabsTrigger>
          <TabsTrigger value="tenant" className="flex gap-2">
            <User className="h-4 w-4" /> Tenant
          </TabsTrigger>
          <TabsTrigger value="schedule" className="flex gap-2">
            <Calendar className="h-4 w-4" /> Schedule
          </TabsTrigger>
          <TabsTrigger value="method" className="flex gap-2">
            <CreditCard className="h-4 w-4" /> Payment Method
          </TabsTrigger>
          <TabsTrigger value="invoice" className="flex gap-2">
            <Receipt className="h-4 w-4" /> Invoice
          </TabsTrigger>
          <TabsTrigger value="documents" className="flex gap-2">
            <FileText className="h-4 w-4" /> Documents
          </TabsTrigger>
        </TabsList>

        <ScrollArea className="h-[600px] w-full rounded-md border p-4 mt-4">
          <TabsContent value="details">
            <Card>
              <CardHeader className="text-lg font-semibold">
                Payment Information
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium">Amount</h3>
                    <p className="text-2xl font-bold">
                      ${payment.amount.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">Status</h3>
                    <Badge
                      className={statusColors[payment.status]}
                      variant="secondary"
                    >
                      {payment.status.charAt(0).toUpperCase() +
                        payment.status.slice(1)}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-medium">Due Date</h3>
                    <p className="text-gray-600">
                      {new Date(payment.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                  {payment.paidDate && (
                    <div>
                      <h3 className="font-medium">Paid Date</h3>
                      <p className="text-gray-600">
                        {new Date(payment.paidDate).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="invoice">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="text-lg font-semibold">Invoice Details</div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="h-4 w-4" /> Download Invoice
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="space-y-4">
                    {payment.invoice.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-600">
                          {item.description}
                        </span>
                        <span className="font-medium">
                          ${item.amount.toLocaleString()}
                        </span>
                      </div>
                    ))}
                    <div className="border-t pt-4 flex justify-between items-center font-bold">
                      <span>Total</span>
                      <span>${payment.amount.toLocaleString()}</span>
                    </div>
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

export default PaymentDetails;

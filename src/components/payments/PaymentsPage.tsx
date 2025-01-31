import React from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Filter } from "lucide-react";
import Breadcrumb from "../common/Breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Payment {
  id: string;
  tenant: string;
  unit: string;
  amount: number;
  type: "rent" | "deposit" | "fee" | "utility";
  status: "paid" | "pending" | "overdue" | "failed";
  dueDate: string;
  paidDate?: string;
}

const defaultPayments: Payment[] = [
  {
    id: "P1",
    tenant: "John Smith",
    unit: "3B",
    amount: 2500,
    type: "rent",
    status: "paid",
    dueDate: "2024-04-01",
    paidDate: "2024-03-29",
  },
  {
    id: "P2",
    tenant: "Sarah Johnson",
    unit: "5A",
    amount: 3000,
    type: "rent",
    status: "pending",
    dueDate: "2024-04-01",
  },
  {
    id: "P3",
    tenant: "Michael Brown",
    unit: "2C",
    amount: 2200,
    type: "deposit",
    status: "overdue",
    dueDate: "2024-03-01",
  },
];

const PaymentsPage = () => {
  const navigate = useNavigate();

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
    <div className="w-full h-full p-6 space-y-6">
      <Breadcrumb
        items={[{ label: "Dashboard", href: "/" }, { label: "Payments" }]}
      />

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Payments</h1>
        <Button onClick={() => navigate("/payments/new")}>
          <Plus className="h-4 w-4 mr-2" /> Record Payment
        </Button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search payments..." className="pl-10" />
          </div>
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="rent">Rent</SelectItem>
                <SelectItem value="deposit">Deposit</SelectItem>
                <SelectItem value="fee">Fee</SelectItem>
                <SelectItem value="utility">Utility</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Tenant</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Paid Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {defaultPayments.map((payment) => (
              <TableRow
                key={payment.id}
                className="cursor-pointer hover:bg-gray-50"
                onClick={() => navigate(`/payments/${payment.id}`)}
              >
                <TableCell className="font-medium">{payment.id}</TableCell>
                <TableCell>{payment.tenant}</TableCell>
                <TableCell>{payment.unit}</TableCell>
                <TableCell>${payment.amount.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={typeColors[payment.type]}
                  >
                    {payment.type.charAt(0).toUpperCase() +
                      payment.type.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={statusColors[payment.status]}
                  >
                    {payment.status.charAt(0).toUpperCase() +
                      payment.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>
                  {new Date(payment.dueDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {payment.paidDate
                    ? new Date(payment.paidDate).toLocaleDateString()
                    : "-"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PaymentsPage;

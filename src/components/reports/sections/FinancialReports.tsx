import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const FinancialReports = () => {
  const financialData = {
    revenue: [
      { month: "Jan", amount: 45000 },
      { month: "Feb", amount: 48000 },
      { month: "Mar", amount: 52000 },
      { month: "Apr", amount: 51000 },
      { month: "May", amount: 54000 },
      { month: "Jun", amount: 58000 },
    ],
    expenses: [
      { category: "Maintenance", amount: 15000 },
      { category: "Utilities", amount: 8000 },
      { category: "Insurance", amount: 5000 },
      { category: "Staff", amount: 12000 },
      { category: "Marketing", amount: 3000 },
    ],
    rentCollection: {
      collected: 95000,
      pending: 5000,
      overdue: 2000,
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="font-semibold">Income Statement</h3>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {financialData.revenue.map((item) => (
              <div
                key={item.month}
                className="flex justify-between items-center"
              >
                <span>{item.month}</span>
                <span>${item.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="font-semibold">Expense Breakdown</h3>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {financialData.expenses.map((item) => (
              <div
                key={item.category}
                className="flex justify-between items-center"
              >
                <span>{item.category}</span>
                <span>${item.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="font-semibold">Rent Collection Status</h3>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Collected</span>
              <span className="text-green-600">
                ${financialData.rentCollection.collected.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Pending</span>
              <span className="text-yellow-600">
                ${financialData.rentCollection.pending.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Overdue</span>
              <span className="text-red-600">
                ${financialData.rentCollection.overdue.toLocaleString()}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialReports;

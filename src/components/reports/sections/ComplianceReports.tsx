import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";

const ComplianceReports = () => {
  const complianceData = {
    inspections: [
      {
        type: "Fire Safety",
        lastInspection: "2024-02-15",
        nextDue: "2024-08-15",
        status: "passed",
      },
      {
        type: "Building Code",
        lastInspection: "2024-01-10",
        nextDue: "2024-07-10",
        status: "pending",
      },
      {
        type: "Health & Safety",
        lastInspection: "2024-03-01",
        nextDue: "2024-09-01",
        status: "passed",
      },
    ],
    insurance: [
      {
        type: "Property Insurance",
        provider: "SafeGuard Insurance",
        expiry: "2024-12-31",
        coverage: 2000000,
      },
      {
        type: "Liability Insurance",
        provider: "SecureLife Corp",
        expiry: "2024-12-31",
        coverage: 1000000,
      },
    ],
    certifications: [
      { name: "Building Permit", status: "active", expiry: "2024-12-31" },
      { name: "Business License", status: "active", expiry: "2024-06-30" },
      { name: "Safety Certificate", status: "renewal", expiry: "2024-05-15" },
    ],
  };

  const statusColors = {
    passed: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    failed: "bg-red-100 text-red-800",
    active: "bg-green-100 text-green-800",
    renewal: "bg-yellow-100 text-yellow-800",
    expired: "bg-red-100 text-red-800",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="font-semibold">Inspection Schedule</h3>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {complianceData.inspections.map((inspection) => (
              <div
                key={inspection.type}
                className="p-2 bg-gray-50 rounded space-y-2"
              >
                <div className="flex justify-between items-center">
                  <p className="font-medium">{inspection.type}</p>
                  <Badge
                    variant="secondary"
                    className={
                      statusColors[
                        inspection.status as keyof typeof statusColors
                      ]
                    }
                  >
                    {inspection.status}
                  </Badge>
                </div>
                <div className="text-sm text-gray-500">
                  <p>
                    Last:{" "}
                    {new Date(inspection.lastInspection).toLocaleDateString()}
                  </p>
                  <p>
                    Next: {new Date(inspection.nextDue).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="font-semibold">Insurance Coverage</h3>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {complianceData.insurance.map((insurance) => (
              <div
                key={insurance.type}
                className="p-2 bg-gray-50 rounded space-y-2"
              >
                <p className="font-medium">{insurance.type}</p>
                <div className="text-sm text-gray-500">
                  <p>Provider: {insurance.provider}</p>
                  <p>Coverage: ${insurance.coverage.toLocaleString()}</p>
                  <p>
                    Expires: {new Date(insurance.expiry).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="font-semibold">Certifications</h3>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {complianceData.certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex justify-between items-center p-2 bg-gray-50 rounded"
              >
                <div>
                  <p className="font-medium">{cert.name}</p>
                  <p className="text-sm text-gray-500">
                    Expires: {new Date(cert.expiry).toLocaleDateString()}
                  </p>
                </div>
                <Badge
                  variant="secondary"
                  className={
                    statusColors[cert.status as keyof typeof statusColors]
                  }
                >
                  {cert.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComplianceReports;

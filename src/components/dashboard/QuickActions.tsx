import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Plus,
  UserPlus,
  WrenchIcon,
  MinusCircle,
  PlusCircle,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface QuickActionsProps {
  onAddProperty?: () => void;
  onAddTenant?: () => void;
  onCreateTicket?: () => void;
}

const QuickActions = ({
  onAddProperty = () => {},
  onAddTenant = () => {},
  onCreateTicket = () => {},
}: QuickActionsProps) => {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const saved = localStorage.getItem("quickActionsCollapsed");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("quickActionsCollapsed", JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  if (isCollapsed) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-8 right-4 sm:right-8 bg-white shadow-lg z-50"
        onClick={() => setIsCollapsed(false)}
      >
        <PlusCircle className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-8 right-4 sm:right-8 w-[280px] bg-white shadow-lg z-50">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Quick Actions</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(true)}
          >
            <MinusCircle className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-col gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="w-full justify-start"
                  onClick={onAddProperty}
                  variant="outline"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Property
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Create a new property listing</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="w-full justify-start"
                  onClick={onAddTenant}
                  variant="outline"
                >
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add New Tenant
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Create a new tenant application</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="w-full justify-start"
                  onClick={onCreateTicket}
                  variant="outline"
                >
                  <WrenchIcon className="mr-2 h-4 w-4" />
                  Create Maintenance Ticket
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Submit a new maintenance request</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;

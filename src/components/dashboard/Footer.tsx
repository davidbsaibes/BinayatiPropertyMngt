import React from "react";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-4 px-3 sm:px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <div className="text-sm text-gray-500">
          © 2024 PropManager. All rights reserved.
        </div>
        <div className="flex items-center gap-3 sm:gap-6 text-sm flex-wrap justify-center">
          <a href="#" className="text-gray-500 hover:text-gray-900">
            Terms of Service
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            Privacy Policy
          </a>
          <Button variant="ghost" size="sm" className="gap-2">
            <HelpCircle className="h-4 w-4" />
            Help & Support
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

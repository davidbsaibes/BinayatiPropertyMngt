import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Search, Globe, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
  notificationCount?: number;
  onNotificationsClick?: () => void;
  onProfileClick?: () => void;
  onLanguageChange?: (lang: string) => void;
}

const Header = ({
  user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
  },
  notificationCount = 3,
  onNotificationsClick = () => {},
  onProfileClick = () => {},
  onLanguageChange = () => {},
}: HeaderProps) => {
  return (
    <header className="bg-white border-b px-3 sm:px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="hidden sm:block flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search properties, tenants..."
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => onLanguageChange("en")}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onLanguageChange("es")}>
                Español
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onLanguageChange("fr")}>
                Français
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={onNotificationsClick}
          >
            <Bell className="h-5 w-5" />
            {notificationCount > 0 && (
              <Badge
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white"
                variant="secondary"
              >
                {notificationCount}
              </Badge>
            )}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 pl-2 pr-4"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-8 w-8 rounded-full"
                />
                <span className="hidden md:inline">{user.name}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;

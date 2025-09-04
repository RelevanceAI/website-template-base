import React from "react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import {
  BarChart3,
  Home,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";

const DashboardSidebar = ({ className }) => {
  const menuItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: BarChart3, label: "Analytics" },
    { icon: ShoppingCart, label: "Products" },
    { icon: Users, label: "Customers" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="h-screen flex-col bg-sidebar text-sidebar-foreground border-r hidden md:flex w-64">
      <div className="p-6">
        <h1 className="text-xl font-semibold">Admin Panel</h1>
      </div>
      <ScrollArea className="flex-1 py-2">
        <nav className="grid gap-1 px-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Button
                key={index}
                variant={item.active ? "default" : "ghost"}
                size="lg"
                className={`justify-start ${
                  item.active
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : ""
                }`}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.label}
              </Button>
            );
          })}
        </nav>
      </ScrollArea>
      <div className="mt-auto p-4 border-t">
        <div className="flex items-center gap-3">
          <img
            src="https://ui-avatars.com/api/?name=Admin+User"
            alt="Admin User"
            className="h-10 w-10 rounded-full"
          />
          <div>
            <p className="font-medium">Admin User</p>
            <p className="text-xs text-muted-foreground">admin@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar; 
import React from "react";
import Button from "./Button";
import { Clock2, LogOut } from "lucide-react";
import { modules } from "@/libs/modules";
import Link from "next/link";
import Favicon from "./Favicon";

const Sidebar = () => {
  return (
    <aside className="flex-1/5 bg-blue-100 p-4 flex flex-col h-dvh gap-4">
      <h1 className="flex gap-1 items-center mx-auto">
        <Favicon /> BelSalama
      </h1>
      <div className="flex-1">
        <div className="space-y-2">
          {modules.map((module) => (
            <Link
              className="bg-blue-200 hover:bg-blue-300 cursor-pointer py-2 px-4 rounded flex gap-2 items-center"
              key={module.name}
              href={module.url}
            >
              {module.icon} {module.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p>Dr. Abdelrahman</p>
        <Button variant="icon">
          <LogOut size={16} />
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;

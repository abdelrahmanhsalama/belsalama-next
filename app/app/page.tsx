import { modules } from "@/libs/modules";
import { Clock2, UserRound } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-dvh items-center justify-center bg-blue-50 font-sans">
      <div className="space-y-2">
        <h2 className="text-lg">
          Welcome to <strong>BelSalama</strong>!
        </h2>
        {modules.map((module) => (
          <Link
            className="bg-blue-200 hover:bg-blue-300 cursor-pointer py-4 px-8 rounded flex gap-2 items-center"
            key={module.name}
            href={module.url}
          >
            {module.icon} {module.cta}
          </Link>
        ))}
      </div>
    </div>
  );
}

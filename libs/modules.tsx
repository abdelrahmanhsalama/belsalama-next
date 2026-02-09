import { Clock2, UserRound } from "lucide-react";

export const modules = [
  {
    name: "Appointments",
    url: "/appointments",
    icon: <Clock2 size={18} />,
    cta: "Check your Appointments!",
  },
  {
    name: "Patients",
    url: "/patients",
    icon: <UserRound size={18} />,
    cta: "Check your Patient Files!",
  },
];

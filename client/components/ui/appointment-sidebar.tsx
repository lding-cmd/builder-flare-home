import {
  Calendar,
  ChevronDown,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { AppointmentCard } from "./appointment-card";

interface AppointmentSidebarProps {
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

export function AppointmentSidebar({
  collapsed = false,
  onToggleCollapse,
}: AppointmentSidebarProps) {
  const appointments = [
    {
      patientName: "Martinez, Roberto",
      time: "12:10 PM",
      doctor: "M. Danso",
      statuses: {
        preChart: "error" as const,
        note: "complete" as const,
        codes: "complete" as const,
        orders: "processing" as const,
        afterVisit: "processing" as const,
      },
      isExpanded: true,
    },
    {
      patientName: "Lempert, Maximillian",
      time: "12:40 PM",
      doctor: "M. Danso",
      statuses: {
        preChart: "complete" as const,
        note: "error" as const,
        codes: "processing" as const,
        orders: undefined,
        afterVisit: undefined,
      },
    },
    {
      patientName: "Bartoletti, Cheryl",
      time: "01:10 PM",
      doctor: "T. Pryor",
      statuses: {
        preChart: "complete" as const,
        note: undefined,
        codes: undefined,
        orders: undefined,
        afterVisit: undefined,
      },
    },
    {
      patientName: "Pratt, Leanne",
      time: "02:10 PM",
      doctor: "T. Pryor",
      statuses: {
        preChart: "complete" as const,
        note: undefined,
        codes: undefined,
        orders: undefined,
        afterVisit: undefined,
      },
    },
    {
      patientName: "Crouch, Michele",
      time: "02:40 PM",
      doctor: "T. Pryor",
      statuses: {
        preChart: "complete" as const,
        note: undefined,
        codes: undefined,
        orders: undefined,
        afterVisit: undefined,
      },
    },
    {
      patientName: "Brown, Jennifer",
      time: "03:40 PM",
      doctor: "T. Pryor",
      statuses: {
        preChart: "complete" as const,
        note: undefined,
        codes: undefined,
        orders: undefined,
        afterVisit: undefined,
      },
    },
    {
      patientName: "Lamar, Barry",
      time: "04:10 PM",
      doctor: "T. Pryor",
      statuses: {
        preChart: "complete" as const,
        note: undefined,
        codes: undefined,
        orders: undefined,
        afterVisit: undefined,
      },
    },
  ];

  if (collapsed) {
    return (
      <div className="w-[72px] h-full bg-core-slate-0 border-r border-core-slate-50 p-6 flex flex-col items-center gap-6">
        <button
          onClick={onToggleCollapse}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
          aria-label="Expand sidebar"
        >
          <ChevronsRight className="w-5 h-5 text-core-slate-900" />
        </button>
        <Calendar className="w-5 h-5 text-core-slate-900" />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-core-slate-0 border-r border-core-slate-50 p-4 xl:p-6 space-y-4 xl:space-y-6 overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-core-slate-900" />
          <div className="flex items-center gap-1">
            <span className="font-monument text-core-slate-900 text-base font-medium">
              June 7, 2025
            </span>
            <ChevronDown className="w-4 h-4 text-core-slate-900" />
          </div>
        </div>
        <button
          onClick={onToggleCollapse}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
          aria-label="Toggle sidebar"
        >
          <ChevronsLeft className="w-5 h-5 text-core-slate-900" />
        </button>
      </div>

      {/* Appointments List */}
      <div className="space-y-3">
        {appointments.map((appointment, index) => (
          <AppointmentCard
            key={index}
            patientName={appointment.patientName}
            time={appointment.time}
            doctor={appointment.doctor}
            statuses={appointment.statuses}
            isExpanded={appointment.isExpanded}
          />
        ))}
      </div>
    </div>
  );
}

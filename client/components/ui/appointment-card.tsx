import { StatusBadge } from "./status-badge";
import { 
  BarChart3, 
  FileText, 
  FileSpreadsheet, 
  FlaskConical, 
  Printer 
} from "lucide-react";

interface AppointmentCardProps {
  patientName: string;
  time: string;
  doctor: string;
  statuses: {
    preChart?: "error" | "complete" | "processing";
    note?: "error" | "complete" | "processing";
    codes?: "error" | "complete" | "processing";
    orders?: "error" | "complete" | "processing";
    afterVisit?: "error" | "complete" | "processing";
  };
  isExpanded?: boolean;
}

export function AppointmentCard({ 
  patientName, 
  time, 
  doctor, 
  statuses, 
  isExpanded = false 
}: AppointmentCardProps) {
  const taskItems = [
    {
      icon: BarChart3,
      label: "Pre-Chart Summary",
      status: statuses.preChart,
      iconColor: statuses.preChart === "error" ? "text-extended-sienna-700" : "text-black"
    },
    {
      icon: FileText,
      label: "Note",
      status: statuses.note,
      iconColor: "text-black"
    },
    {
      icon: FileSpreadsheet,
      label: "Codes",
      status: statuses.codes,
      iconColor: "text-black"
    },
    {
      icon: FlaskConical,
      label: "Orders",
      status: statuses.orders,
      iconColor: "text-black"
    },
    {
      icon: Printer,
      label: "After-Visit Summary",
      status: statuses.afterVisit,
      iconColor: "text-black"
    },
  ];

  if (!isExpanded) {
    return (
      <div className="bg-white border border-core-slate-100 rounded-lg p-4 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-monument font-medium text-black text-base">{patientName}</h3>
          <span className="font-monument text-black text-base">{time}</span>
        </div>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-1">
            {taskItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Icon
                  key={index}
                  className={`w-4 h-4 ${
                    item.status === "complete" ? "text-core-slate-700" :
                    item.status === "error" ? "text-extended-sienna-700" :
                    item.status === "processing" ? "text-extended-moss-700" :
                    "text-slate-300"
                  }`}
                />
              );
            })}
          </div>
          <span className="text-neutral-gray-700 text-sm font-monument">{doctor}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-core-slate-100 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-monument font-medium text-black text-base">{patientName}</h3>
          <span className="font-monument text-black text-base">{time}</span>
        </div>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-1">
            {taskItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Icon
                  key={index}
                  className={`w-4 h-4 ${
                    item.status === "complete" ? "text-core-slate-700" :
                    item.status === "error" ? "text-extended-sienna-700" :
                    item.status === "processing" ? "text-extended-moss-700" :
                    "text-slate-300"
                  }`}
                />
              );
            })}
          </div>
          <span className="text-neutral-gray-700 text-sm font-monument">{doctor}</span>
        </div>
      </div>

      {/* Expanded Task List */}
      <div className="border-t border-core-slate-100">
        {taskItems.map((item, index) => {
          const Icon = item.icon;
          const isHighlighted = item.label === "Note";
          
          return (
            <div
              key={index}
              className={`px-4 py-3 flex justify-between items-center ${
                isHighlighted ? "bg-neutral-beige-50" : ""
              } ${index < taskItems.length - 1 ? "border-b border-core-slate-100" : ""}`}
            >
              <div className="flex items-center gap-2">
                <Icon className={`w-4 h-4 ${item.iconColor}`} />
                <span className={`text-sm font-monument ${
                  item.label === "Note" ? "font-medium" : ""
                } text-black`}>
                  {item.label}
                </span>
              </div>
              {item.status && (
                <StatusBadge status={item.status}>
                  {item.status === "error" ? "Error" :
                   item.status === "complete" ? "Complete" :
                   "Processing"}
                </StatusBadge>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

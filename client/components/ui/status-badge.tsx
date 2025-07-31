import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "error" | "complete" | "processing";
  children: React.ReactNode;
}

export function StatusBadge({ status, children }: StatusBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center px-2.5 py-0.5 rounded-md text-xs font-monument",
        {
          "bg-extended-sienna-100 text-extended-sienna-700": status === "error",
          "bg-core-slate-100 text-core-slate-900": status === "complete",
          "bg-extended-moss-100 text-extended-moss-700":
            status === "processing",
        },
      )}
    >
      {children}
    </div>
  );
}

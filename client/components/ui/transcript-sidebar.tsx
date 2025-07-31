import { ChevronsLeft, MessageSquareQuote } from "lucide-react";

export function TranscriptSidebar() {
  return (
    <div className="w-[72px] h-full bg-core-slate-0 border-l border-core-slate-50 p-6 flex flex-col items-start gap-6">
      <ChevronsLeft className="w-5 h-5 text-core-slate-900" />
      <MessageSquareQuote className="w-5 h-5 text-core-slate-900" />
    </div>
  );
}

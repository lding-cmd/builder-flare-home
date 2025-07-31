import { ChevronsLeft, MessageSquareQuote, User } from "lucide-react";

interface TranscriptSidebarProps {
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

interface ConversationMessage {
  id: string;
  speaker: "doctor" | "patient";
  timestamp: string;
  message: string;
  opacity?: number;
}

const conversationData: ConversationMessage[] = [
  {
    id: "1",
    speaker: "doctor",
    timestamp: "00:19",
    message:
      "Good morning, Mr. Martinez. I'm Dr. Chen, the oncologist you've been referred to. It's nice to meet you.",
    opacity: 0.5,
  },
  {
    id: "2",
    speaker: "patient",
    timestamp: "00:22",
    message: "Nice to meet you too, Doctor. I appreciate you seeing me.",
  },
  {
    id: "3",
    speaker: "doctor",
    timestamp: "00:24",
    message:
      "Of course. I see from your referral that you've been experiencing some concerning symptoms that your primary care physician wanted us to evaluate. Before we dive into that, could you tell me a bit about your general health and any ongoing medical conditions?",
  },
  {
    id: "4",
    speaker: "patient",
    timestamp: "00:38",
    message:
      "Well, I've had high blood pressure for about five years now. I take amlodipine for it, but my primary doctor said my numbers have been creeping up lately. I've also been having these bad headaches for the past few months, and I'm tired all the time. My doctor did some blood work and said I have anemia – something about low iron.",
  },
  {
    id: "5",
    speaker: "doctor",
    timestamp: "00:54",
    message: "I see. And how often are you experiencing these headaches?",
  },
  {
    id: "6",
    speaker: "patient",
    timestamp: "00:58",
    message:
      "About three or four times a week. Sometimes they're so bad I can't get out of bed.",
  },
  {
    id: "7",
    speaker: "doctor",
    timestamp: "01:00",
    message:
      "I'm sorry to hear that. Are there any patterns you've noticed with the headaches? Anything that seems to trigger them?",
  },
  {
    id: "8",
    speaker: "patient",
    timestamp: "01:09",
    message:
      "I'm not really sure. Sometimes I notice it when I've done a lot of driving in the dark.",
  },
];

export function TranscriptSidebar({
  collapsed = true,
  onToggleCollapse,
}: TranscriptSidebarProps) {
  if (collapsed) {
    return (
      <div className="w-[72px] h-full bg-core-slate-0 border-l border-core-slate-50 p-6 flex flex-col items-center gap-6">
        <button
          onClick={onToggleCollapse}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
          aria-label="Expand transcript"
        >
          <ChevronsLeft className="w-5 h-5 text-core-slate-900" />
        </button>
        <MessageSquareQuote className="w-5 h-5 text-core-slate-900" />
      </div>
    );
  }

  return (
    <div className="w-[400px] h-full bg-core-slate-0 border-l border-core-slate-50 p-6 flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <button
          onClick={onToggleCollapse}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
          aria-label="Collapse transcript"
        >
          <ChevronsLeft className="w-5 h-5 text-core-slate-900 transform rotate-180 transition-transform duration-300" />
        </button>
        <div className="flex items-center gap-2">
          <span className="font-monument text-base font-medium text-core-slate-900">
            Transcript
          </span>
          <MessageSquareQuote className="w-5 h-5 text-core-slate-900" />
        </div>
      </div>

      {/* Conversation */}
      <div className="flex-1 bg-white border border-core-slate-50 rounded-lg p-6 space-y-4 overflow-y-auto">
        {conversationData.map((message) => (
          <div
            key={message.id}
            className={`flex gap-4 py-2 ${message.opacity ? "opacity-50" : ""}`}
          >
            {/* Avatar */}
            <div
              className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${
                message.speaker === "doctor" ? "bg-[#BDC95B]" : "bg-[#9391B8]"
              }`}
            >
              <User className="w-4 h-4 text-white" fill="white" />
            </div>

            {/* Message Content */}
            <div className="flex-1 space-y-1">
              <div className="text-base font-monument text-[#737373]">
                {message.timestamp}
              </div>
              <div className="text-base font-monument text-black leading-[22px]">
                {message.message}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

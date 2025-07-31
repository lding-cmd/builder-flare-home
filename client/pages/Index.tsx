import { useState } from "react";
import { BrowserMockup } from "@/components/ui/browser-mockup";
import { MainLayout } from "@/components/ui/main-layout";
import { AppointmentSidebar } from "@/components/ui/appointment-sidebar";
import { PatientContent } from "@/components/ui/patient-content";
import { TranscriptSidebar } from "@/components/ui/transcript-sidebar";

export default function Index() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [transcriptCollapsed, setTranscriptCollapsed] = useState(true);
  return (
    <div className="min-h-screen bg-gray-100 p-2 lg:p-4">
      <BrowserMockup>
        <MainLayout>
          <div className="relative flex h-[calc(100vh-200px)] overflow-hidden">
            {/* Appointment Sidebar - collapsible */}
            <div className={`flex-shrink-0 transition-all duration-300 ${
              sidebarCollapsed ? 'w-[72px]' : 'w-80 lg:w-[360px]'
            }`}>
              <AppointmentSidebar
                collapsed={sidebarCollapsed}
                onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
              />
            </div>



            {/* Main Content - takes remaining space */}
            <div className="flex-1">
              <PatientContent />
            </div>

            {/* Transcript Sidebar - collapsible on right side */}
            <div className="hidden lg:block flex-shrink-0">
              <TranscriptSidebar
                collapsed={transcriptCollapsed}
                onToggleCollapse={() => setTranscriptCollapsed(!transcriptCollapsed)}
              />
            </div>
          </div>
        </MainLayout>
      </BrowserMockup>
    </div>
  );
}

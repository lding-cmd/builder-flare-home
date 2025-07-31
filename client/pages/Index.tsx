import { useState } from "react";
import { BrowserMockup } from "@/components/ui/browser-mockup";
import { MainLayout } from "@/components/ui/main-layout";
import { AppointmentSidebar } from "@/components/ui/appointment-sidebar";
import { PatientContent } from "@/components/ui/patient-content";
import { TranscriptSidebar } from "@/components/ui/transcript-sidebar";

export default function Index() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100 p-2 lg:p-4">
      <BrowserMockup>
        <MainLayout>
          <div className="relative flex h-[calc(100vh-200px)] overflow-hidden">
            {/* Appointment Sidebar - collapsible */}
            <div className={`flex-shrink-0 transition-all duration-300 ${
              sidebarCollapsed ? 'w-0' : 'w-80 lg:w-[360px]'
            }`}>
              <AppointmentSidebar
                collapsed={sidebarCollapsed}
                onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
              />
            </div>

            {/* Expand button when sidebar is collapsed */}
            {sidebarCollapsed && (
              <div className="absolute top-4 left-4 z-10">
                <button
                  onClick={() => setSidebarCollapsed(false)}
                  className="bg-core-slate-700 text-white p-2 rounded-md shadow-lg hover:bg-core-slate-900 transition-colors"
                  aria-label="Expand sidebar"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}

            {/* Main Content - takes remaining space */}
            <div className="flex-1">
              <PatientContent />
            </div>

            {/* Transcript Sidebar - hidden on mobile, visible on desktop */}
            <div className="hidden xl:block flex-shrink-0">
              <TranscriptSidebar />
            </div>
          </div>
        </MainLayout>
      </BrowserMockup>
    </div>
  );
}

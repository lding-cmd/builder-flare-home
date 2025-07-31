import { BrowserMockup } from "@/components/ui/browser-mockup";
import { MainLayout } from "@/components/ui/main-layout";
import { AppointmentSidebar } from "@/components/ui/appointment-sidebar";
import { PatientContent } from "@/components/ui/patient-content";
import { TranscriptSidebar } from "@/components/ui/transcript-sidebar";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-100 p-2 lg:p-4">
      <BrowserMockup>
        <MainLayout>
          <div className="flex h-[calc(100vh-200px)] overflow-hidden">
            {/* Desktop: Show all panels */}
            <div className="hidden xl:block">
              <AppointmentSidebar />
            </div>

            {/* Mobile/Tablet: Stack vertically */}
            <div className="flex flex-col xl:hidden w-full">
              <div className="h-1/3 overflow-y-auto border-b">
                <AppointmentSidebar />
              </div>
              <div className="flex-1 overflow-y-auto">
                <PatientContent />
              </div>
            </div>

            {/* Desktop: Main content */}
            <div className="hidden xl:block flex-1">
              <PatientContent />
            </div>

            {/* Desktop: Transcript sidebar */}
            <div className="hidden xl:block">
              <TranscriptSidebar />
            </div>
          </div>
        </MainLayout>
      </BrowserMockup>
    </div>
  );
}

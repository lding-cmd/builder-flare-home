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
          <div className="relative flex h-[calc(100vh-200px)] overflow-hidden">
            {/* Desktop: Show all panels */}
            <div className="hidden xl:block">
              <AppointmentSidebar />
            </div>

            {/* Mobile/Tablet: Main content takes full width */}
            <div className="flex-1 xl:hidden">
              <PatientContent />
            </div>

            {/* Mobile/Tablet: Overlay sidebar */}
            <div className="absolute top-0 left-0 w-80 h-full bg-white shadow-lg z-10 xl:hidden">
              <AppointmentSidebar />
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

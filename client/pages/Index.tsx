import { BrowserMockup } from "@/components/ui/browser-mockup";
import { MainLayout } from "@/components/ui/main-layout";
import { AppointmentSidebar } from "@/components/ui/appointment-sidebar";
import { PatientContent } from "@/components/ui/patient-content";
import { TranscriptSidebar } from "@/components/ui/transcript-sidebar";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <BrowserMockup>
        <MainLayout>
          <div className="flex h-[calc(100vh-200px)]">
            <AppointmentSidebar />
            <PatientContent />
            <TranscriptSidebar />
          </div>
        </MainLayout>
      </BrowserMockup>
    </div>
  );
}

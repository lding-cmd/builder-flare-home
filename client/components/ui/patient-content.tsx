import {
  FileText,
  MessageCircleWarning,
  Copy,
  MoreVertical,
} from "lucide-react";
import { Button } from "./button";

export function PatientContent() {
  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Patient Info Header */}
      <div className="px-4 lg:px-6 py-6 lg:py-9 bg-white border-b border-core-slate-50">
        <div className="max-w-[750px] mx-auto space-y-1">
          <h1 className="font-monument text-2xl font-medium text-black">
            Martinez, Roberto
          </h1>
          <p className="font-monument text-base text-black">
            Male | DOB: 5/23/1975 | MRN: 76429315 | New Consult
          </p>
        </div>
      </div>

      {/* Artifact Label */}
      <div className="px-4 lg:px-6 py-3 bg-neutral-beige-50 border-b border-core-slate-50">
        <div className="max-w-[750px] mx-auto flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-black" />
            <span className="font-monument text-base font-medium text-black">
              Note
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Button
              variant="outline"
              size="sm"
              className="h-9 px-3 sm:px-4 gap-2 border-neutral-beige-100 text-xs sm:text-sm"
            >
              <MessageCircleWarning className="w-4 h-4" />
              <span className="hidden sm:inline">Share feedback</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-9 px-3 sm:px-4 gap-2 border-neutral-beige-100 text-xs sm:text-sm"
            >
              <Copy className="w-4 h-4" />
              <span className="hidden sm:inline">Copy text</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-9 w-9 p-0 border-neutral-beige-100"
            >
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 lg:px-6 py-6 lg:py-9 bg-white overflow-y-auto">
        <div className="max-w-[750px] mx-auto space-y-6 lg:space-y-9">
          {/* Subjective Section */}
          <div className="space-y-6">
            <h2 className="font-monument text-xl font-medium text-black">
              Subjective
            </h2>
            <p className="font-monument text-base text-black leading-[22px]">
              50-year-old male with stage IIA adenocarcinoma of the lung
              (diagnosed February 2025) presents for consult after completing
              his first cycle of adjuvant chemotherapy (carboplatin/paclitaxel).
              Patient reports mild to moderate fatigue (4/10) that is manageable
              and improving compared to immediately post-treatment. He denies
              shortness of breath, chest pain, or hemoptysis. Patient notes some
              hair thinning but no complete alopecia. He reports intermittent
              mild nausea (2/10) that responds well to ondansetron. Patient
              mentions occasional tingling in his fingertips (1/10) that doesn't
              interfere with daily activities like writing or using tools. Sleep
              has been good with no night sweats. Appetite remains strong with
              stable weight. He continues to abstain from smoking since
              diagnosis and reports good adherence to prescribed medications.
            </p>
          </div>

          {/* Objective Section */}
          <div className="space-y-6">
            <h2 className="font-monument text-xl font-medium text-black">
              Objective
            </h2>
            <div className="font-monument text-base text-black leading-[22px] whitespace-pre-line">
              {`Vitals: BP 132/84, HR 78, RR 18, Temp 98.4°F, O2 sat 96% on RA, Weight 168 lbs (stable from baseline)

Physical Examination:

General: Well-appearing, alert and oriented, in no acute distress
HEENT: Mucous membranes moist, no oral ulcerations, mild hair thinning noted
Cardiovascular: Regular rate and rhythm, no murmurs, rubs, or gallops
Respiratory: Clear to auscultation bilaterally, no wheezes, rhonchi, or crackles, good air movement
Abdomen: Soft, non-tender, non-distended, normal bowel sounds
Extremities: No edema, no clubbing, sensation intact to light touch
Skin: No rash, mild palmar erythema
Neurological: Alert and oriented x3, cranial nerves II-XII intact, 5/5 strength throughout, minimal decreased sensation to vibration in fingertips bilaterally
Lymph nodes: No palpable cervical, supraclavicular, or axillary lymphadenopathy

Laboratory Results (May 13, 2025):

WBC: 4.8 K/μL
Hgb: 12.1 g/dL
Plt: 178 K/μL
ANC: 2.9 K/μL
AST/ALT: 34/28 U/L
Creatinine: 1.0 mg/dL
BUN: 18 mg/dL
Tumor markers: CEA: 2.8 ng/mL (within normal limits)`}
            </div>
          </div>

          {/* Assessment & Plan */}
          <div className="space-y-6">
            <h2 className="font-monument text-xl font-medium text-black">
              Assessment & Plan
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-monument text-lg font-medium text-black mb-4">
                  1. Stage IIA Adenocarcinoma of the Lung - T1N1M0
                </h3>
                <div className="font-monument text-base text-black leading-[22px] space-y-4">
                  <p>
                    Patient is tolerating first cycle of adjuvant chemotherapy well with expected mild side effects. Current regimen of carboplatin/paclitaxel is appropriate for his staging and performance status.
                  </p>
                  <p className="font-medium">Plan:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Continue current chemotherapy regimen - carboplatin AUC 6 and paclitaxel 200 mg/m² every 3 weeks</li>
                    <li>Cycle 2 scheduled for May 27, 2025</li>
                    <li>Pre-medication with dexamethasone, diphenhydramine, and H2 blocker to prevent hypersensitivity reactions</li>
                    <li>Monitor CBC with differential before each cycle</li>
                    <li>Comprehensive metabolic panel before each cycle</li>
                    <li>Plan for 4 total cycles of adjuvant therapy</li>
                    <li>Restaging CT chest/abdomen/pelvis after completion of chemotherapy</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-monument text-lg font-medium text-black mb-4">
                  2. Chemotherapy-Related Fatigue
                </h3>
                <div className="font-monument text-base text-black leading-[22px] space-y-4">
                  <p>
                    Mild to moderate fatigue is expected with current regimen. Patient reports manageable symptoms that are improving between cycles.
                  </p>
                  <p className="font-medium">Plan:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Continue current activity level as tolerated</li>
                    <li>Encourage light exercise such as walking 20-30 minutes daily</li>
                    <li>Adequate rest and sleep hygiene</li>
                    <li>Monitor hemoglobin levels - currently stable at 12.1 g/dL</li>
                    <li>Consider erythropoiesis-stimulating agents if Hgb drops below 10 g/dL</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-monument text-lg font-medium text-black mb-4">
                  3. Peripheral Neuropathy (Grade 1)
                </h3>
                <div className="font-monument text-base text-black leading-[22px] space-y-4">
                  <p>
                    Minimal sensory neuropathy in fingertips consistent with paclitaxel-induced peripheral neuropathy. Currently Grade 1 and not interfering with activities of daily living.
                  </p>
                  <p className="font-medium">Plan:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Monitor closely with each visit using neuropathy assessment scale</li>
                    <li>Patient education on neuropathy precautions</li>
                    <li>Consider dose reduction if progresses to Grade 2 or higher</li>
                    <li>Gabapentin 300mg TID if symptoms worsen</li>
                    <li>Occupational therapy referral if functional impairment develops</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-monument text-lg font-medium text-black mb-4">
                  4. Nausea (Well-Controlled)
                </h3>
                <div className="font-monument text-base text-black leading-[22px] space-y-4">
                  <p>
                    Minimal nausea well-controlled with current antiemetic regimen. Patient reports good oral intake and stable weight.
                  </p>
                  <p className="font-medium">Plan:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Continue ondansetron 8mg PO q8h PRN nausea</li>
                    <li>Add prochlorperazine 10mg PO q6h PRN for breakthrough nausea</li>
                    <li>Dietary counseling - small frequent meals, avoid strong odors</li>
                    <li>Monitor weight and nutritional status</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-monument text-lg font-medium text-black mb-4">
                  5. Tobacco Cessation (Maintained)
                </h3>
                <div className="font-monument text-base text-black leading-[22px] space-y-4">
                  <p>
                    Patient continues to maintain tobacco cessation since diagnosis. This is crucial for treatment efficacy and overall prognosis.
                  </p>
                  <p className="font-medium">Plan:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Congratulate patient on continued abstinence</li>
                    <li>Continue behavioral support and counseling</li>
                    <li>Nicotine replacement therapy available if needed</li>
                    <li>Refer to tobacco cessation program if cravings increase</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Family History */}
          <div className="space-y-6">
            <h2 className="font-monument text-xl font-medium text-black">
              Family History
            </h2>
            <div className="font-monument text-base text-black leading-[22px]">
              <p className="mb-4">
                Paternal grandfather died of lung cancer at age 72 (heavy smoker for 40+ years). Father deceased at age 81 from myocardial infarction, had history of hypertension and diabetes mellitus type 2, former smoker who quit at age 45. Mother living at age 89, has osteoporosis and mild cognitive impairment, never smoked.
              </p>
              <p className="mb-4">
                Maternal grandmother died of breast cancer at age 67, no known BRCA mutations in family. Two brothers: older brother age 70 with hypertension and hyperlipidemia, former smoker; younger brother age 64 with no known medical issues, never smoked. One sister age 61 with hypothyroidism and osteoarthritis.
              </p>
              <p className="mb-4">
                No known family history of other malignancies, genetic cancer syndromes, or significant hereditary conditions. Patient reports extensive smoking history in paternal family members including paternal uncle who died of emphysema at age 68.
              </p>
              <p className="font-medium">
                Relevant family history includes lung cancer (paternal grandfather) and breast cancer (maternal grandmother), with significant tobacco exposure in paternal lineage correlating with patient's own former tobacco use.
              </p>
            </div>
          </div>

          {/* Social History */}
          <div className="space-y-6">
            <h2 className="font-monument text-xl font-medium text-black">
              Social History
            </h2>
            <div className="font-monument text-base text-black leading-[22px] space-y-4">
              <p>
                <span className="font-medium">Tobacco:</span> Former smoker with 30 pack-year history (1 pack per day for 30 years). Quit smoking immediately upon diagnosis in February 2025. Previously attempted to quit multiple times over the past decade but was unsuccessful until cancer diagnosis provided strong motivation.
              </p>
              <p>
                <span className="font-medium">Alcohol:</span> Social drinker, 2-3 beers per week, no history of alcohol abuse or dependence. Has reduced intake since starting chemotherapy due to decreased appetite and nausea concerns.
              </p>
              <p>
                <span className="font-medium">Occupation:</span> Retired construction foreman as of 2020. Worked in construction for 35 years with potential asbestos exposure in older buildings during the 1980s and 1990s. Always used appropriate PPE when available, but acknowledges inconsistent use in earlier career.
              </p>
              <p>
                <span className="font-medium">Living situation:</span> Lives with wife of 28 years in single-story home. Two adult children live nearby and provide strong support system. Wife accompanies patient to all appointments and assists with medication management.
              </p>
              <p>
                <span className="font-medium">Exercise:</span> Previously active with regular walking and weekend hiking. Currently maintaining light activity as tolerated during treatment. Plans to return to more vigorous exercise after completion of chemotherapy.
              </p>
              <p>
                <span className="font-medium">Diet:</span> Generally healthy diet with increased focus on nutrition since diagnosis. Working with nutritionist to maintain adequate protein intake during treatment. No significant dietary restrictions.
              </p>
            </div>
          </div>

          {/* Medications */}
          <div className="space-y-6">
            <h2 className="font-monument text-xl font-medium text-black">
              Current Medications
            </h2>
            <div className="font-monument text-base text-black leading-[22px]">
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-medium">Amlodipine 10mg PO daily</p>
                  <p className="text-sm text-gray-600">For hypertension - increased from 5mg due to rising BP</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-medium">Ondansetron 8mg PO q8h PRN</p>
                  <p className="text-sm text-gray-600">For chemotherapy-induced nausea and vomiting</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-medium">Prochlorperazine 10mg PO q6h PRN</p>
                  <p className="text-sm text-gray-600">For breakthrough nausea</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-medium">Ferrous sulfate 325mg PO BID</p>
                  <p className="text-sm text-gray-600">For iron deficiency anemia</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-medium">Omeprazole 20mg PO daily</p>
                  <p className="text-sm text-gray-600">For GI protection during treatment</p>
                </div>
                <div className="border-l-4 border-gray-500 pl-4">
                  <p className="font-medium">Multivitamin 1 tablet PO daily</p>
                  <p className="text-sm text-gray-600">Nutritional support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Follow-up Plan */}
          <div className="space-y-6">
            <h2 className="font-monument text-xl font-medium text-black">
              Follow-up Plan
            </h2>
            <div className="font-monument text-base text-black leading-[22px] space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-medium text-blue-900 mb-2">Next Appointment:</p>
                <p className="text-blue-800">May 27, 2025 at 10:00 AM - Cycle 2 of chemotherapy</p>
                <p className="text-blue-800">Pre-treatment labs to be drawn May 26, 2025</p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium">Monitoring Schedule:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>CBC with differential before each cycle</li>
                  <li>Comprehensive metabolic panel before each cycle</li>
                  <li>Neuropathy assessment at each visit</li>
                  <li>Performance status evaluation</li>
                  <li>Weight and nutritional assessment</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">Patient Education Provided:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Signs and symptoms of infection to report immediately</li>
                  <li>When to contact oncology team (fever >100.4°F, severe nausea/vomiting, numbness/tingling progression)</li>
                  <li>Importance of maintaining adequate hydration and nutrition</li>
                  <li>Activity recommendations and restrictions</li>
                  <li>Medication compliance and side effect management</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="font-medium text-yellow-900 mb-2">Emergency Contact Instructions:</p>
                <p className="text-yellow-800">Call oncology triage line at (555) 123-4567 for any concerning symptoms. After hours, call main hospital number and ask for oncology resident on call.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

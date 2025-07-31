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
          {/* Chief Complaint */}
          <div className="space-y-6">
            <h2 className="font-monument text-xl font-medium text-black">
              Chief Complaint
            </h2>
            <p className="font-monument text-base text-black leading-[22px]">
              "Follow-up for lung cancer treatment and side effects from chemotherapy."
            </p>
          </div>

          {/* History of Present Illness */}
          <div className="space-y-6">
            <h2 className="font-monument text-xl font-medium text-black">
              History of Present Illness
            </h2>
            <div className="font-monument text-base text-black leading-[22px] space-y-4">
              <p>
                Mr. Martinez is a 50-year-old male with a recent diagnosis of stage IIA adenocarcinoma of the lung (T1N1M0) who presents today for his first follow-up visit after completing cycle 1 of adjuvant chemotherapy with carboplatin and paclitaxel. He was diagnosed in February 2025 following a routine chest X-ray that revealed a suspicious nodule in the right upper lobe.
              </p>
              <p>
                The patient underwent a right upper lobectomy with mediastinal lymph node dissection on March 15, 2025, performed by Dr. Sarah Chen. Pathology confirmed moderately differentiated adenocarcinoma with involvement of one hilar lymph node (N1). Surgical margins were clear. Post-operative recovery was uncomplicated, and he was discharged home on post-operative day 3.
              </p>
              <p>
                He began adjuvant chemotherapy on April 22, 2025, with carboplatin AUC 6 and paclitaxel 200 mg/m² administered every 21 days. The treatment was well-tolerated initially, though he developed expected side effects over the following weeks.
              </p>
              <p>
                Currently, the patient reports mild to moderate fatigue (4/10 on fatigue scale) that has been gradually improving since the nadir period around day 7-10 post-treatment. He describes the fatigue as manageable and notes that it doesn't prevent him from performing activities of daily living, though he does require more rest periods throughout the day.
              </p>
              <p>
                He denies any respiratory symptoms including shortness of breath, chest pain, or hemoptysis. No fever, chills, or night sweats. He has noticed some hair thinning, particularly on his scalp, but reports no complete alopecia at this time.
              </p>
              <p>
                The patient experiences intermittent mild nausea (2/10) that typically occurs 2-3 days post-treatment and responds well to ondansetron. He has maintained good oral intake and reports stable appetite with no significant weight loss.
              </p>
              <p>
                Of note, he has developed mild peripheral neuropathy manifesting as occasional tingling in his fingertips bilaterally (1/10 severity). This does not interfere with fine motor activities such as writing, typing, or using tools. He denies any numbness in his feet or difficulty with balance.
              </p>
              <p>
                Sleep patterns have remained normal with 7-8 hours of sleep nightly. He continues to abstain from tobacco use since his diagnosis and reports good adherence to all prescribed medications. His wife has been very supportive and helps monitor his symptoms and medication schedule.
              </p>
            </div>
          </div>

          {/* Past Medical History */}
          <div className="space-y-6">
            <h2 className="font-monument text-xl font-medium text-black">
              Past Medical History
            </h2>
            <div className="font-monument text-base text-black leading-[22px] space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-medium text-blue-900 mb-2">Oncologic History:</p>
                <ul className="text-blue-800 space-y-1">
                  <li>• Stage IIA adenocarcinoma of right upper lobe (T1N1M0) - diagnosed February 2025</li>
                  <li>• Right upper lobectomy with mediastinal lymph node dissection - March 15, 2025</li>
                  <li>• Currently on adjuvant chemotherapy (carboplatin/paclitaxel) - started April 22, 2025</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <p><span className="font-medium">Hypertension:</span> Diagnosed 2020, initially well-controlled on amlodipine 5mg daily. Recent blood pressure readings have been elevated (130s-140s systolic), likely related to stress from cancer diagnosis and treatment. Dose increased to 10mg daily in April 2025.</p>
                
                <p><span className="font-medium">Iron deficiency anemia:</span> Diagnosed March 2025 during pre-operative workup. Hemoglobin was 10.8 g/dL at diagnosis. Started on ferrous sulfate supplementation. Current hemoglobin stable at 12.1 g/dL.</p>
                
                <p><span className="font-medium">Gastroesophageal reflux disease:</span> Mild symptoms for several years, managed with lifestyle modifications. Started omeprazole during chemotherapy for GI protection.</p>
                
                <p><span className="font-medium">Benign prostatic hyperplasia:</span> Mild symptoms, managed conservatively. No urinary retention or significant obstructive symptoms.</p>
                
                <p><span className="font-medium">Osteoarthritis:</span> Bilateral knees, mild symptoms managed with occasional ibuprofen (discontinued during chemotherapy) and physical therapy.</p>
              </div>
            </div>
          </div>

          {/* Surgical History */}
          <div className="space-y-6">
            <h2 className="font-monument text-xl font-medium text-black">
              Surgical History
            </h2>
            <div className="font-monument text-base text-black leading-[22px] space-y-3">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-medium text-green-900 mb-2">March 15, 2025 - Right Upper Lobectomy</p>
                <p className="text-green-800">Video-assisted thoracoscopic surgery (VATS) right upper lobectomy with mediastinal lymph node dissection. Performed by Dr. Sarah Chen. Uncomplicated post-operative course, discharged POD #3.</p>
              </div>
              
              <p><span className="font-medium">1998:</span> Appendectomy - uncomplicated laparoscopic procedure</p>
              <p><span className="font-medium">2010:</span> Arthroscopic meniscus repair, right knee - good outcome with full recovery</p>
              <p><span className="font-medium">2018:</span> Colonoscopy with polypectomy - two small adenomatous polyps removed, benign pathology</p>
            </div>
          </div>

          {/* Subjective Section */}
          <div className="space-y-6">
            <h2 className="font-monument text-xl font-medium text-black">
              Review of Systems
            </h2>
            <div className="font-monument text-base text-black leading-[22px] space-y-4">
              <p><span className="font-medium">Constitutional:</span> Mild fatigue as described above. No fever, chills, night sweats, or unintentional weight loss. Appetite remains good.</p>
              
              <p><span className="font-medium">HEENT:</span> No vision changes, hearing loss, or tinnitus. Mild hair thinning noted. No oral ulcers or dental problems. No sinus congestion or sore throat.</p>
              
              <p><span className="font-medium">Cardiovascular:</span> No chest pain, palpitations, or edema. No orthopnea or paroxysmal nocturnal dyspnea.</p>
              
              <p><span className="font-medium">Respiratory:</span> No shortness of breath, cough, or hemoptysis. No wheezing or chest tightness.</p>
              
              <p><span className="font-medium">Gastrointestinal:</span> Mild intermittent nausea as described. No vomiting, diarrhea, or constipation. No abdominal pain or changes in bowel habits.</p>
              
              <p><span className="font-medium">Genitourinary:</span> No dysuria, frequency, or hematuria. Mild BPH symptoms unchanged.</p>
              
              <p><span className="font-medium">Musculoskeletal:</span> Baseline knee arthritis unchanged. No new joint pain or muscle weakness.</p>
              
              <p><span className="font-medium">Neurological:</span> Mild fingertip tingling as described. No headaches, dizziness, or balance problems. No weakness or coordination issues.</p>
              
              <p><span className="font-medium">Dermatologic:</span> No rash, skin changes, or unusual lesions. Mild palmar erythema noted.</p>
              
              <p><span className="font-medium">Psychiatric:</span> Mood is stable. Some anxiety related to cancer diagnosis but manageable. Good family support system.</p>
            </div>
          </div>

          {/* Objective Section */}
          <div className="space-y-6">
            <h2 className="font-monument text-xl font-medium text-black">
              Objective
            </h2>
            <div className="font-monument text-base text-black leading-[22px] space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Vital Signs:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>BP: 132/84 mmHg</div>
                  <div>HR: 78 bpm</div>
                  <div>RR: 18/min</div>
                  <div>Temp: 98.4°F</div>
                  <div>O2 Sat: 96% RA</div>
                  <div>Weight: 168 lbs</div>
                  <div>Height: 5'10"</div>
                  <div>BMI: 24.1</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-lg">Physical Examination:</h3>
                
                <div className="space-y-3">
                  <p><span className="font-medium">General:</span> Well-appearing, alert and oriented male in no acute distress. Appears stated age. Good eye contact and appropriate affect.</p>
                  
                  <p><span className="font-medium">HEENT:</span> Normocephalic, atraumatic. Pupils equal, round, reactive to light. Extraocular movements intact. Mucous membranes moist, no oral ulcerations or thrush. Mild diffuse hair thinning noted on scalp. No cervical lymphadenopathy.</p>
                  
                  <p><span className="font-medium">Cardiovascular:</span> Regular rate and rhythm. Normal S1 and S2. No murmurs, rubs, or gallops. No jugular venous distension. Peripheral pulses 2+ bilaterally.</p>
                  
                  <p><span className="font-medium">Respiratory:</span> Clear to auscultation bilaterally. No wheezes, rhonchi, or crackles. Good air movement throughout. No use of accessory muscles. Well-healed thoracotomy scar on right chest.</p>
                  
                  <p><span className="font-medium">Abdomen:</span> Soft, non-tender, non-distended. Normal bowel sounds in all quadrants. No hepatosplenomegaly or masses palpated. No supraclavicular or inguinal lymphadenopathy.</p>
                  
                  <p><span className="font-medium">Extremities:</span> No edema, cyanosis, or clubbing. No calf tenderness. Capillary refill less than 2 seconds. Sensation intact to light touch throughout.</p>
                  
                  <p><span className="font-medium">Skin:</span> No rash or unusual lesions. Mild palmar erythema noted bilaterally. Skin warm and dry. No petechiae or ecchymoses.</p>
                  
                  <p><span className="font-medium">Neurological:</span> Alert and oriented to person, place, and time. Cranial nerves II-XII grossly intact. Motor strength 5/5 throughout all extremities. Deep tendon reflexes 2+ and symmetric. Minimal decreased sensation to vibration in fingertips bilaterally, otherwise sensation intact. Gait steady and coordinated.</p>
                  
                  <p><span className="font-medium">Lymphatic:</span> No palpable cervical, supraclavicular, axillary, or inguinal lymphadenopathy.</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="font-medium text-yellow-900 mb-3">Laboratory Results (May 13, 2025):</p>
                <div className="text-yellow-800 space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">Complete Blood Count:</p>
                      <ul className="ml-4 space-y-1 text-sm">
                        <li>WBC: 4.8 K/μL (4.0-11.0)</li>
                        <li>Hemoglobin: 12.1 g/dL (13.5-17.5)</li>
                        <li>Hematocrit: 36.2% (41-53)</li>
                        <li>Platelets: 178 K/μL (150-450)</li>
                        <li>ANC: 2.9 K/μL (1.8-7.8)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Comprehensive Metabolic Panel:</p>
                      <ul className="ml-4 space-y-1 text-sm">
                        <li>Sodium: 140 mEq/L (136-145)</li>
                        <li>Potassium: 4.2 mEq/L (3.5-5.1)</li>
                        <li>Chloride: 102 mEq/L (98-107)</li>
                        <li>CO2: 24 mEq/L (22-29)</li>
                        <li>BUN: 18 mg/dL (7-20)</li>
                        <li>Creatinine: 1.0 mg/dL (0.7-1.3)</li>
                        <li>Glucose: 95 mg/dL (70-99)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium">Liver Function Tests:</p>
                    <ul className="ml-4 space-y-1 text-sm">
                      <li>AST: 34 U/L (10-40)</li>
                      <li>ALT: 28 U/L (7-56)</li>
                      <li>Total Bilirubin: 0.8 mg/dL (0.3-1.2)</li>
                      <li>Alkaline Phosphatase: 78 U/L (44-147)</li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium">Tumor Markers:</p>
                    <ul className="ml-4 space-y-1 text-sm">
                      <li>CEA: 2.8 ng/mL (0-3.0) - within normal limits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Assessment & Plan */}
          <div className="space-y-6">
            <h2 className="font-monument text-xl font-medium text-black">
              Assessment & Plan
            </h2>
            <div className="space-y-8">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-monument text-lg font-medium text-blue-900 mb-4">
                  1. Stage IIA Adenocarcinoma of the Lung - T1N1M0
                </h3>
                <div className="font-monument text-base text-blue-800 leading-[22px] space-y-4">
                  <p>
                    Patient is tolerating first cycle of adjuvant chemotherapy well with expected mild side effects. Current regimen of carboplatin/paclitaxel is appropriate for his staging and performance status. ECOG performance status remains 0-1.
                  </p>
                  <p className="font-medium">Plan:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Continue current chemotherapy regimen - carboplatin AUC 6 and paclitaxel 200 mg/m² every 3 weeks</li>
                    <li>Cycle 2 scheduled for May 27, 2025 at 10:00 AM</li>
                    <li>Pre-medication protocol: dexamethasone 12mg IV, diphenhydramine 50mg IV, and famotidine 20mg IV to prevent hypersensitivity reactions</li>
                    <li>Monitor CBC with differential and CMP before each cycle</li>
                    <li>Plan for 4 total cycles of adjuvant therapy (standard of care)</li>
                    <li>Restaging CT chest/abdomen/pelvis 4-6 weeks after completion of chemotherapy</li>
                    <li>Consider PET scan if any concerning findings on restaging CT</li>
                    <li>Long-term surveillance plan: CT chest every 6 months for first 2 years, then annually</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-monument text-lg font-medium text-orange-900 mb-4">
                  2. Chemotherapy-Related Fatigue (Grade 2)
                </h3>
                <div className="font-monument text-base text-orange-800 leading-[22px] space-y-4">
                  <p>
                    Mild to moderate fatigue is expected with current regimen. Patient reports manageable symptoms that are improving between cycles. Fatigue pattern is consistent with expected nadir around days 7-10 post-treatment.
                  </p>
                  <p className="font-medium">Plan:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Continue current activity level as tolerated - encourage gradual increase</li>
                    <li>Light exercise program: walking 20-30 minutes daily, avoid strenuous activity during nadir period</li>
                    <li>Sleep hygiene counseling - maintain regular sleep schedule, 7-8 hours nightly</li>
                    <li>Monitor hemoglobin levels closely - currently 12.1 g/dL, stable but below normal range</li>
                    <li>Consider erythropoiesis-stimulating agents if Hgb drops below 10 g/dL or symptomatic anemia develops</li>
                    <li>Nutritional counseling - ensure adequate protein intake (1.2-1.5 g/kg/day)</li>
                    <li>Energy conservation techniques education</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-monument text-lg font-medium text-purple-900 mb-4">
                  3. Peripheral Neuropathy (Grade 1)
                </h3>
                <div className="font-monument text-base text-purple-800 leading-[22px] space-y-4">
                  <p>
                    Minimal sensory neuropathy in fingertips consistent with paclitaxel-induced peripheral neuropathy. Currently Grade 1 (mild symptoms, not interfering with function) and not interfering with activities of daily living. This is an expected side effect that requires close monitoring.
                  </p>
                  <p className="font-medium">Plan:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Monitor closely with each visit using CTCAE neuropathy grading scale</li>
                    <li>Patient education on neuropathy precautions - avoid extreme temperatures, wear protective gloves</li>
                    <li>Consider 20% dose reduction of paclitaxel if progresses to Grade 2 (moderate symptoms limiting instrumental ADLs)</li>
                    <li>Hold paclitaxel if Grade 3 or higher neuropathy develops</li>
                    <li>Gabapentin 300mg TID available if symptoms worsen or become painful</li>
                    <li>Occupational therapy referral if functional impairment develops</li>
                    <li>Consider switching to carboplatin/pemetrexed if neuropathy becomes dose-limiting</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="font-monument text-lg font-medium text-green-900 mb-4">
                  4. Chemotherapy-Induced Nausea and Vomiting (Well-Controlled)
                </h3>
                <div className="font-monument text-base text-green-800 leading-[22px] space-y-4">
                  <p>
                    Minimal nausea well-controlled with current antiemetic regimen. Patient reports good oral intake and stable weight. Current regimen appears adequate for his emetogenic risk level.
                  </p>
                  <p className="font-medium">Plan:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Continue ondansetron 8mg PO q8h PRN nausea (maximum 24mg/day)</li>
                    <li>Add prochlorperazine 10mg PO q6h PRN for breakthrough nausea</li>
                    <li>Consider adding dexamethasone 4mg PO daily x3 days post-chemotherapy if nausea worsens</li>
                    <li>Dietary counseling - small frequent meals, avoid strong odors, stay hydrated</li>
                    <li>Monitor weight and nutritional status at each visit</li>
                    <li>Consider metoclopramide if delayed nausea becomes problematic</li>
                    <li>Patient education on when to contact team for severe nausea/vomiting</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="font-monument text-lg font-medium text-red-900 mb-4">
                  5. Hypertension (Suboptimally Controlled)
                </h3>
                <div className="font-monument text-base text-red-800 leading-[22px] space-y-4">
                  <p>
                    Blood pressure elevated at 132/84 mmHg despite recent increase in amlodipine dose. Likely multifactorial including stress from cancer diagnosis, treatment effects, and possible underlying progression of hypertensive disease.
                  </p>
                  <p className="font-medium">Plan:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Continue amlodipine 10mg daily - recently increased from 5mg</li>
                    <li>Home blood pressure monitoring - check 2-3 times weekly, log readings</li>
                    <li>Consider adding ACE inhibitor or ARB if BP remains elevated >130/80</li>
                    <li>Lifestyle modifications - low sodium diet (<2g/day), regular exercise as tolerated</li>
                    <li>Stress management techniques and counseling resources</li>
                    <li>Monitor for drug interactions with chemotherapy agents</li>
                    <li>Recheck BP at next visit and adjust medications as needed</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
                <h3 className="font-monument text-lg font-medium text-gray-900 mb-4">
                  6. Iron Deficiency Anemia (Improving)
                </h3>
                <div className="font-monument text-base text-gray-800 leading-[22px] space-y-4">
                  <p>
                    Hemoglobin improved from 10.8 g/dL at diagnosis to current 12.1 g/dL with iron supplementation. Still below normal range for males but trending in right direction. Need to monitor closely during chemotherapy.
                  </p>
                  <p className="font-medium">Plan:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Continue ferrous sulfate 325mg PO BID with vitamin C for enhanced absorption</li>
                    <li>Monitor CBC before each chemotherapy cycle</li>
                    <li>Consider IV iron if oral supplementation becomes inadequate</li>
                    <li>Evaluate for occult GI bleeding if anemia worsens</li>
                    <li>Goal hemoglobin >11 g/dL during treatment</li>
                    <li>Patient education on iron-rich foods and absorption enhancers/inhibitors</li>
                  </ul>
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
                <h3 className="font-monument text-lg font-medium text-teal-900 mb-4">
                  7. Tobacco Cessation (Successfully Maintained)
                </h3>
                <div className="font-monument text-base text-teal-800 leading-[22px] space-y-4">
                  <p>
                    Patient continues to maintain complete tobacco cessation since diagnosis in February 2025. This is crucial for treatment efficacy, wound healing, and overall prognosis. 30 pack-year history prior to cessation.
                  </p>
                  <p className="font-medium">Plan:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Congratulate patient on continued abstinence - 3 months smoke-free</li>
                    <li>Continue behavioral support and positive reinforcement</li>
                    <li>Nicotine replacement therapy available if cravings increase during treatment stress</li>
                    <li>Refer to tobacco cessation program if needed for additional support</li>
                    <li>Discuss long-term benefits: improved treatment response, reduced surgical complications, better overall survival</li>
                    <li>Address any concerns about weight gain or stress management without tobacco</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Current Medications */}
          <div className="space-y-6">
            <h2 className="font-monument text-xl font-medium text-black">
              Current Medications
            </h2>
            <div className="font-monument text-base text-black leading-[22px]">
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="font-medium text-blue-900 mb-2">Chemotherapy Regimen:</p>
                  <div className="text-blue-800 space-y-2">
                    <p><span className="font-medium">Carboplatin AUC 6 IV</span> - Every 21 days x 4 cycles</p>
                    <p><span className="font-medium">Paclitaxel 200 mg/m² IV</span> - Every 21 days x 4 cycles</p>
                    <p className="text-sm">Next cycle: May 27, 2025</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded">
                    <p className="font-medium text-red-900">Amlodipine 10mg PO daily</p>
                    <p className="text-sm text-red-700">For hypertension - increased from 5mg due to rising BP</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-3 rounded">
                    <p className="font-medium text-green-900">Ondansetron 8mg PO q8h PRN</p>
                    <p className="text-sm text-green-700">For chemotherapy-induced nausea and vomiting</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-3 rounded">
                    <p className="font-medium text-green-900">Prochlorperazine 10mg PO q6h PRN</p>
                    <p className="text-sm text-green-700">For breakthrough nausea</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-3 rounded">
                    <p className="font-medium text-orange-900">Ferrous sulfate 325mg PO BID</p>
                    <p className="text-sm text-orange-700">For iron deficiency anemia - take with vitamin C</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-3 rounded">
                    <p className="font-medium text-purple-900">Omeprazole 20mg PO daily</p>
                    <p className="text-sm text-purple-700">For GI protection during treatment</p>
                  </div>
                  
                  <div className="border-l-4 border-gray-500 pl-4 bg-gray-50 p-3 rounded">
                    <p className="font-medium text-gray-900">Multivitamin 1 tablet PO daily</p>
                    <p className="text-sm text-gray-700">Nutritional support during treatment</p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <p className="font-medium text-yellow-900 mb-2">Pre-medication Protocol (Day of Chemotherapy):</p>
                  <div className="text-yellow-800 space-y-1 text-sm">
                    <p>• Dexamethasone 12mg IV - 30 minutes before chemotherapy</p>
                    <p>• Diphenhydramine 50mg IV - 30 minutes before chemotherapy</p>
                    <p>• Famotidine 20mg IV - 30 minutes before chemotherapy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Allergies */}
          <div className="space-y-6">
            <h2 className="font-monument text-xl font-medium text-black">
              Allergies
            </h2>
            <div className="font-monument text-base text-black leading-[22px]">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-medium text-red-900 mb-2">Drug Allergies:</p>
                <div className="text-red-800 space-y-2">
                  <p><span className="font-medium">Penicillin:</span> Rash and hives (childhood reaction, not recently tested)</p>
                  <p><span className="font-medium">Sulfa drugs:</span> GI upset and rash</p>
                </div>
              </div>
              <p className="mt-4"><span className="font-medium">Environmental:</span> Seasonal allergies (pollen) - managed with antihistamines as needed</p>
              <p><span className="font-medium">Food:</span> No known food allergies</p>
            </div>
          </div>

          {/* Family History */}
          <div className="space-y-6">
            <h2 className="font-monument text-xl font-medium text-black">
              Family History
            </h2>
            <div className="font-monument text-base text-black leading-[22px] space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-medium text-red-900 mb-2">Cancer History:</p>
                <div className="text-red-800 space-y-2">
                  <p><span className="font-medium">Paternal grandfather:</span> Lung cancer, died age 72 (heavy smoker 40+ years, 2+ packs/day)</p>
                  <p><span className="font-medium">Maternal grandmother:</span> Breast cancer, died age 67 (no known BRCA mutations tested in family)</p>
                  <p><span className="font-medium">Paternal uncle:</span> Prostate cancer, diagnosed age 68, currently in remission</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <p><span className="font-medium">Father:</span> Deceased age 81 from myocardial infarction. History of hypertension, diabetes mellitus type 2, and coronary artery disease. Former heavy smoker (quit age 45 after 25 pack-year history).</p>
                
                <p><span className="font-medium">Mother:</span> Living, age 89. Has osteoporosis, mild cognitive impairment, and hypertension. Never smoked tobacco. Generally good health for her age.</p>
                
                <p><span className="font-medium">Siblings:</span></p>
                <ul className="ml-6 space-y-2">
                  <li>• <span className="font-medium">Older brother (age 70):</span> Hypertension, hyperlipidemia, mild COPD. Former smoker (quit 10 years ago, 20 pack-year history).</li>
                  <li>• <span className="font-medium">Younger brother (age 64):</span> No known medical issues. Never smoked. Exercises regularly.</li>
                  <li>• <span className="font-medium">Sister (age 61):</span> Hypothyroidism, osteoarthritis, anxiety disorder. Never smoked.</li>
                </ul>
                
                <p><span className="font-medium">Children:</span></p>
                <ul className="ml-6 space-y-2">
                  <li>• <span className="font-medium">Son (age 28):</span> Healthy, no known medical issues. Never smoked.</li>
                  <li>• <span className="font-medium">Daughter (age 25):</span> Healthy, no known medical issues. Never smoked.</li>
                </ul>
                
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mt-4">
                  <p className="font-medium text-yellow-900 mb-2">Significant Family History Summary:</p>
                  <p className="text-yellow-800">Strong family history of tobacco-related malignancies (lung cancer) and cardiovascular disease in paternal lineage. Maternal side with breast cancer history. Heavy smoking patterns in multiple family members correlate with patient's own former tobacco use and current lung cancer diagnosis.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social History */}
          <div className="space-y-6">
            <h2 className="font-monument text-xl font-medium text-black">
              Social History
            </h2>
            <div className="font-monument text-base text-black leading-[22px] space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-medium text-red-900 mb-2">Tobacco History:</p>
                <div className="text-red-800 space-y-2">
                  <p><span className="font-medium">Former smoker:</span> 30 pack-year history (1 pack per day for 30 years, ages 20-50)</p>
                  <p><span className="font-medium">Quit date:</span> February 15, 2025 (immediately upon cancer diagnosis)</p>
                  <p><span className="font-medium">Previous quit attempts:</span> Multiple attempts over past decade, longest abstinence was 6 months in 2019</p>
                  <p><span className="font-medium">Current status:</span> 3 months smoke-free, strong motivation to remain abstinent</p>
                </div>
              </div>
              
              <p>
                <span className="font-medium">Alcohol:</span> Social drinker, typically 2-3 beers per week on weekends. No history of alcohol abuse, dependence, or binge drinking. Has reduced intake since starting chemotherapy due to decreased appetite and concerns about drug interactions. No history of drunk driving or alcohol-related legal issues.
              </p>
              
              <p>
                <span className="font-medium">Substance use:</span> Denies any illicit drug use, past or present. No history of prescription drug abuse. Occasional marijuana use in college (>25 years ago) but none since.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-medium text-blue-900 mb-2">Occupational History:</p>
                <div className="text-blue-800 space-y-2">
                  <p><span className="font-medium">Retired construction foreman (2020):</span> 35-year career in commercial construction</p>
                  <p><span className="font-medium">Potential exposures:</span> Asbestos in older buildings (1980s-1990s), silica dust, various construction chemicals</p>
                  <p><span className="font-medium">Safety practices:</span> Used PPE when available, but acknowledges inconsistent use in earlier career before safety regulations were strictly enforced</p>
                  <p><span className="font-medium">Work environment:</span> Primarily outdoor work, some indoor renovation projects</p>
                </div>
              </div>
              
              <p>
                <span className="font-medium">Living situation:</span> Lives with wife Maria of 28 years in single-story ranch home they own. Home is well-maintained with no known environmental hazards. Lives in suburban neighborhood with good air quality. No pets currently (had family dog until 2022).
              </p>
              
              <p>
                <span className="font-medium">Support system:</span> Excellent family support. Wife is very involved in care and attends all appointments. Two adult children live within 30 minutes and visit regularly. Son is an engineer, daughter is a teacher. Both children are very supportive and help with transportation and household tasks as needed.
              </p>
              
              <p>
                <span className="font-medium">Exercise and activity:</span> Previously very active with regular walking (3-4 miles, 4-5 times per week) and weekend hiking. Enjoyed fishing and camping. Currently maintaining light activity as tolerated during treatment - walking 1-2 miles daily. Plans to gradually return to more vigorous exercise after completion of chemotherapy.
              </p>
              
              <p>
                <span className="font-medium">Diet and nutrition:</span> Generally healthy diet with focus on lean proteins, vegetables, and whole grains. Wife does most of the cooking and has been researching nutrition during cancer treatment. Working with registered dietitian to maintain adequate protein intake (goal 1.2-1.5 g/kg/day). No significant dietary restrictions or food intolerances.
              </p>
              
              <p>
                <span className="font-medium">Financial and insurance:</span> Good insurance coverage through retirement benefits. Medicare with supplemental insurance. No significant financial hardship related to treatment. Able to afford medications and co-pays without difficulty.
              </p>
              
              <p>
                <span className="font-medium">Spiritual/religious:</span> Catholic faith, finds comfort in prayer and church community. Pastor and church members have been very supportive. Attends mass when feeling well enough.
              </p>
              
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-medium text-green-900 mb-2">Psychosocial Assessment:</p>
                <p className="text-green-800">Patient demonstrates good coping mechanisms and strong family support system. Some anxiety related to cancer diagnosis is normal and manageable. No signs of depression. Good understanding of diagnosis and treatment plan. Motivated to follow treatment recommendations.</p>
              </div>
            </div>
          </div>

          {/* Follow-up Plan */}
          <div className="space-y-6">
            <h2 className="font-monument text-xl font-medium text-black">
              Follow-up Plan
            </h2>
            <div className="font-monument text-base text-black leading-[22px] space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-medium text-blue-900 mb-2">Next Appointment:</p>
                <div className="text-blue-800 space-y-1">
                  <p><span className="font-medium">Date:</span> May 27, 2025 at 10:00 AM</p>
                  <p><span className="font-medium">Purpose:</span> Cycle 2 of chemotherapy (carboplatin/paclitaxel)</p>
                  <p><span className="font-medium">Location:</span> Infusion Center, 3rd Floor</p>
                  <p><span className="font-medium">Pre-treatment labs:</span> May 26, 2025 at 8:00 AM (CBC, CMP)</p>
                  <p><span className="font-medium">Estimated duration:</span> 4-5 hours including pre-medications</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Monitoring Schedule:</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">Before Each Cycle:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                        <li>CBC with differential (ANC must be ≥1.5, platelets ≥100)</li>
                        <li>Comprehensive metabolic panel (creatinine, liver function)</li>
                        <li>Performance status assessment (ECOG scale)</li>
                        <li>Toxicity evaluation using CTCAE criteria</li>
                        <li>Weight and vital signs</li>
                        <li>Neuropathy assessment (clinical examination)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-medium">Monthly During Treatment:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                        <li>Nutritional assessment and counseling</li>
                        <li>Psychosocial support evaluation</li>
                        <li>Medication adherence review</li>
                        <li>Symptom management optimization</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-medium">Post-Treatment (4-6 weeks after cycle 4):</p>
                      <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                        <li>Restaging CT chest/abdomen/pelvis with contrast</li>
                        <li>PET scan if indicated by CT findings</li>
                        <li>Pulmonary function tests</li>
                        <li>Comprehensive survivorship care plan</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-lg">Patient Education Provided:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <p className="font-medium text-yellow-900 mb-2">Infection Prevention:</p>
                    <ul className="text-yellow-800 text-sm space-y-1">
                      <li>• Hand hygiene importance</li>
                      <li>• Avoid crowds during nadir period</li>
                      <li>• Temperature monitoring</li>
                      <li>• When to call for fever >100.4°F</li>
                      <li>• Signs of infection to watch for</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <p className="font-medium text-red-900 mb-2">Emergency Symptoms:</p>
                    <ul className="text-red-800 text-sm space-y-1">
                      <li>• Fever >100.4°F</li>
                      <li>• Severe nausea/vomiting</li>
                      <li>• Difficulty breathing</li>
                      <li>• Chest pain</li>
                      <li>• Severe numbness/tingling</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <p className="font-medium text-green-900 mb-2">Nutrition & Hydration:</p>
                    <ul className="text-green-800 text-sm space-y-1">
                      <li>• Maintain adequate fluid intake</li>
                      <li>• High-protein diet recommendations</li>
                      <li>• Small, frequent meals</li>
                      <li>• Foods to avoid during treatment</li>
                      <li>• Supplement recommendations</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                    <p className="font-medium text-purple-900 mb-2">Activity & Exercise:</p>
                    <ul className="text-purple-800 text-sm space-y-1">
                      <li>• Safe exercise during treatment</li>
                      <li>• Activity modifications</li>
                      <li>• Fatigue management strategies</li>
                      <li>• When to rest vs. stay active</li>
                      <li>• Fall prevention measures</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-medium text-red-900 mb-2">Emergency Contact Instructions:</p>
                <div className="text-red-800 space-y-2">
                  <p><span className="font-medium">Business Hours (8 AM - 5 PM, Monday-Friday):</span></p>
                  <p>Call oncology clinic directly at (555) 123-4567</p>
                  
                  <p><span className="font-medium">After Hours, Weekends, and Holidays:</span></p>
                  <p>Call main hospital number (555) 987-6543 and ask for the oncology resident on call</p>
                  
                  <p><span className="font-medium">Life-Threatening Emergency:</span></p>
                  <p>Call 911 or go to nearest emergency department immediately</p>
                  
                  <p className="text-sm mt-3 font-medium">Always mention that you are a cancer patient receiving chemotherapy when seeking emergency care.</p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-medium text-blue-900 mb-2">Long-term Surveillance Plan:</p>
                <div className="text-blue-800 space-y-2 text-sm">
                  <p><span className="font-medium">Years 1-2:</span> CT chest every 6 months, clinic visits every 3 months</p>
                  <p><span className="font-medium">Years 3-5:</span> CT chest annually, clinic visits every 6 months</p>
                  <p><span className="font-medium">Beyond 5 years:</span> Annual CT chest, annual clinic visits</p>
                  <p><span className="font-medium">Ongoing:</span> Annual influenza vaccination, pneumococcal vaccination as indicated</p>
                </div>
              </div>
            </div>
          </div>

          {/* Provider Information */}
          <div className="space-y-6">
            <h2 className="font-monument text-xl font-medium text-black">
              Provider Information
            </h2>
            <div className="font-monument text-base text-black leading-[22px] space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Attending Physician:</p>
                    <p>Dr. Michael Chen, MD, PhD</p>
                    <p className="text-sm text-gray-600">Medical Oncology, Thoracic Oncology Specialist</p>
                    <p className="text-sm text-gray-600">Board Certified: Internal Medicine, Medical Oncology</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">Nurse Practitioner:</p>
                    <p>Sarah Johnson, NP</p>
                    <p className="text-sm text-gray-600">Oncology Certified Nurse Practitioner</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">Care Coordinator:</p>
                    <p>Lisa Rodriguez, RN, OCN</p>
                    <p className="text-sm text-gray-600">Oncology Certified Nurse</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">Date of Service:</p>
                    <p>May 13, 2025</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">Documentation Time:</p>
                    <p>45 minutes face-to-face patient encounter</p>
                    <p>15 minutes documentation and care coordination</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  );
}
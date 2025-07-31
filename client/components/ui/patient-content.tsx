export function PatientContent() {
  return (
    <div className="h-full bg-white overflow-y-auto">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-2xl font-monument font-bold text-black">
            Martinez, Roberto - Progress Note
          </h1>
          <p className="text-sm font-monument text-gray-600 mt-1">
            DOB: 03/15/1968 | MRN: 12345678 | Date: June 7, 2025
          </p>
        </div>

        {/* Chief Complaint */}
        <div className="space-y-3">
          <h2 className="text-lg font-monument font-semibold text-black">
            Chief Complaint
          </h2>
          <p className="text-base font-monument text-gray-800 leading-relaxed">
            "I'm here for my follow-up appointment. The headaches are still bothering me, and I'm feeling more tired than usual."
          </p>
        </div>

        {/* History of Present Illness */}
        <div className="space-y-3">
          <h2 className="text-lg font-monument font-semibold text-black">
            History of Present Illness
          </h2>
          <div className="space-y-3 text-base font-monument text-gray-800 leading-relaxed">
            <p>
              Mr. Martinez is a 57-year-old male with a history of stage IIA adenocarcinoma of the lung (T1bN1M0) diagnosed 8 months ago, currently receiving adjuvant chemotherapy. He presents today for routine follow-up during his treatment course.
            </p>
            <p>
              Patient reports persistent headaches occurring 3-4 times per week, described as bilateral, throbbing, moderate intensity (6/10), lasting 4-6 hours. Headaches are partially relieved with acetaminophen but have been increasing in frequency over the past month. No associated visual changes, nausea, or photophobia. Patient notes headaches seem worse with stress and lack of sleep.
            </p>
            <p>
              He continues to experience fatigue, rating it 7/10 on most days. Fatigue is worse in the afternoons and impacts his ability to perform usual activities. Sleep pattern shows difficulty falling asleep and frequent awakening. Appetite has decreased slightly but maintains adequate oral intake.
            </p>
            <p>
              Patient completed cycle 3 of adjuvant carboplatin/paclitaxel 2 weeks ago. Reports mild nausea controlled with ondansetron, and mild peripheral neuropathy in fingertips (grade 1). No fever, chills, or signs of infection. Last CBC showed mild neutropenia (ANC 1200).
            </p>
          </div>
        </div>

        {/* Past Medical History */}
        <div className="space-y-3">
          <h2 className="text-lg font-monument font-semibold text-black">
            Past Medical History
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-monument font-medium text-red-800 mb-2">Oncologic History</h3>
            <ul className="space-y-1 text-sm font-monument text-red-700">
              <li>• Stage IIA Adenocarcinoma, Left Upper Lobe (T1bN1M0) - Diagnosed October 2024</li>
              <li>• Left upper lobectomy with mediastinal lymph node dissection - November 2024</li>
              <li>• Currently on adjuvant carboplatin/paclitaxel (cycle 3 of 4 completed)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-monument font-medium text-gray-800">Other Medical History</h3>
            <ul className="space-y-1 text-base font-monument text-gray-700">
              <li>• Hypertension (2019) - well controlled on amlodipine</li>
              <li>• Iron deficiency anemia (2024) - likely related to chemotherapy</li>
              <li>• Gastroesophageal reflux disease (2020)</li>
              <li>• Hyperlipidemia (2021)</li>
              <li>• Former tobacco use disorder - quit 10 months ago</li>
            </ul>
          </div>
        </div>

        {/* Surgical History */}
        <div className="space-y-3">
          <h2 className="text-lg font-monument font-semibold text-black">
            Surgical History
          </h2>
          <ul className="space-y-2 text-base font-monument text-gray-700">
            <li>• Left upper lobectomy with mediastinal lymph node dissection (11/15/2024)</li>
            <li>• Port-a-cath placement (11/28/2024)</li>
            <li>• Appendectomy (1995)</li>
            <li>• Tonsillectomy (childhood)</li>
          </ul>
        </div>

        {/* Allergies */}
        <div className="space-y-3">
          <h2 className="text-lg font-monument font-semibold text-black">
            Allergies
          </h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <ul className="space-y-1 text-base font-monument text-yellow-800">
              <li>• Penicillin - rash, hives</li>
              <li>• Sulfa drugs - GI upset</li>
              <li>• Environmental: pollen, dust mites</li>
              <li>• NKDA to contrast agents</li>
            </ul>
          </div>
        </div>

        {/* Review of Systems */}
        <div className="space-y-3">
          <h2 className="text-lg font-monument font-semibold text-black">
            Review of Systems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-monument font-medium text-gray-800">Constitutional</h3>
              <p className="text-sm font-monument text-gray-700">Fatigue, mild weight loss (5 lbs over 2 months), no fever or chills</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-monument font-medium text-gray-800">HEENT</h3>
              <p className="text-sm font-monument text-gray-700">Headaches as described, no vision changes, no hearing loss</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-monument font-medium text-gray-800">Cardiovascular</h3>
              <p className="text-sm font-monument text-gray-700">No chest pain, palpitations, or shortness of breath</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-monument font-medium text-gray-800">Respiratory</h3>
              <p className="text-sm font-monument text-gray-700">Mild occasional cough, no dyspnea at rest</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-monument font-medium text-gray-800">Gastrointestinal</h3>
              <p className="text-sm font-monument text-gray-700">Mild nausea controlled with medication, no vomiting or diarrhea</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-monument font-medium text-gray-800">Neurological</h3>
              <p className="text-sm font-monument text-gray-700">Mild peripheral neuropathy in fingertips, no weakness or balance issues</p>
            </div>
          </div>
        </div>

        {/* Objective */}
        <div className="space-y-4">
          <h2 className="text-lg font-monument font-semibold text-black">
            Objective
          </h2>
          
          {/* Vital Signs */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-monument font-medium text-blue-800 mb-3">Vital Signs</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-monument">
              <div>
                <span className="text-blue-700 font-medium">BP:</span>
                <span className="text-blue-800 ml-1">142/88 mmHg</span>
              </div>
              <div>
                <span className="text-blue-700 font-medium">HR:</span>
                <span className="text-blue-800 ml-1">78 bpm</span>
              </div>
              <div>
                <span className="text-blue-700 font-medium">Temp:</span>
                <span className="text-blue-800 ml-1">98.6°F</span>
              </div>
              <div>
                <span className="text-blue-700 font-medium">O2 Sat:</span>
                <span className="text-blue-800 ml-1">97% RA</span>
              </div>
              <div>
                <span className="text-blue-700 font-medium">Weight:</span>
                <span className="text-blue-800 ml-1">165 lbs</span>
              </div>
              <div>
                <span className="text-blue-700 font-medium">Height:</span>
                <span className="text-blue-800 ml-1">5'8"</span>
              </div>
              <div>
                <span className="text-blue-700 font-medium">BMI:</span>
                <span className="text-blue-800 ml-1">25.1</span>
              </div>
              <div>
                <span className="text-blue-700 font-medium">ECOG:</span>
                <span className="text-blue-800 ml-1">1</span>
              </div>
            </div>
          </div>

          {/* Physical Exam */}
          <div className="space-y-3">
            <h3 className="font-monument font-medium text-gray-800">Physical Examination</h3>
            <div className="space-y-3 text-base font-monument text-gray-700">
              <p><strong>General:</strong> Alert, oriented x3, appears mildly fatigued but in no acute distress</p>
              <p><strong>HEENT:</strong> PERRL, EOMI, no papilledema, oropharynx clear</p>
              <p><strong>Neck:</strong> Supple, no lymphadenopathy, no JVD</p>
              <p><strong>Cardiovascular:</strong> RRR, no murmurs, rubs, or gallops</p>
              <p><strong>Pulmonary:</strong> Clear to auscultation bilaterally, well-healed thoracotomy scar</p>
              <p><strong>Abdomen:</strong> Soft, non-tender, non-distended, normal bowel sounds</p>
              <p><strong>Extremities:</strong> No edema, mild decreased sensation to light touch in fingertips bilaterally</p>
              <p><strong>Neurological:</strong> CN II-XII intact, strength 5/5 throughout, reflexes 2+ symmetric</p>
              <p><strong>Port:</strong> Right chest port site clean, dry, intact, no erythema or tenderness</p>
            </div>
          </div>

          {/* Lab Results */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-monument font-medium text-green-800 mb-3">Recent Laboratory Results (6/5/2025)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-monument">
              <div className="space-y-1">
                <p><span className="text-green-700 font-medium">WBC:</span> <span className="text-green-800">3.8 K/uL</span> <span className="text-red-600">(L)</span></p>
                <p><span className="text-green-700 font-medium">ANC:</span> <span className="text-green-800">1.2 K/uL</span> <span className="text-red-600">(L)</span></p>
                <p><span className="text-green-700 font-medium">Hgb:</span> <span className="text-green-800">10.2 g/dL</span> <span className="text-red-600">(L)</span></p>
                <p><span className="text-green-700 font-medium">Hct:</span> <span className="text-green-800">30.8%</span> <span className="text-red-600">(L)</span></p>
                <p><span className="text-green-700 font-medium">Platelets:</span> <span className="text-green-800">185 K/uL</span></p>
              </div>
              <div className="space-y-1">
                <p><span className="text-green-700 font-medium">Creatinine:</span> <span className="text-green-800">0.9 mg/dL</span></p>
                <p><span className="text-green-700 font-medium">BUN:</span> <span className="text-green-800">18 mg/dL</span></p>
                <p><span className="text-green-700 font-medium">ALT:</span> <span className="text-green-800">28 U/L</span></p>
                <p><span className="text-green-700 font-medium">AST:</span> <span className="text-green-800">32 U/L</span></p>
                <p><span className="text-green-700 font-medium">Total Bili:</span> <span className="text-green-800">0.8 mg/dL</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Assessment and Plan */}
        <div className="space-y-4">
          <h2 className="text-lg font-monument font-semibold text-black">
            Assessment and Plan
          </h2>
          
          <div className="space-y-4">
            {/* Problem 1 */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-monument font-medium text-gray-800 mb-2">
                1. Stage IIA Adenocarcinoma of Left Upper Lobe - On adjuvant chemotherapy
              </h3>
              <p className="text-sm font-monument text-gray-700 mb-2">
                Patient is tolerating adjuvant carboplatin/paclitaxel reasonably well. Completed 3 of 4 planned cycles.
              </p>
              <ul className="text-sm font-monument text-gray-700 space-y-1 ml-4">
                <li>• Continue current regimen, cycle 4 scheduled for 6/21/2025</li>
                <li>• Monitor CBC prior to next cycle</li>
                <li>• Consider growth factor support if ANC remains low</li>
                <li>• Surveillance CT chest/abdomen/pelvis in 3 months post-completion</li>
              </ul>
            </div>

            {/* Problem 2 */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-monument font-medium text-gray-800 mb-2">
                2. Chemotherapy-related fatigue
              </h3>
              <p className="text-sm font-monument text-gray-700 mb-2">
                Moderate fatigue impacting quality of life, likely multifactorial.
              </p>
              <ul className="text-sm font-monument text-gray-700 space-y-1 ml-4">
                <li>• Continue iron supplementation for anemia</li>
                <li>• Encourage light exercise as tolerated</li>
                <li>• Sleep hygiene counseling provided</li>
                <li>• Consider methylphenidate if fatigue persists post-chemotherapy</li>
              </ul>
            </div>

            {/* Problem 3 */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-monument font-medium text-gray-800 mb-2">
                3. Headaches - Likely tension-type, possibly related to stress/treatment
              </h3>
              <p className="text-sm font-monument text-gray-700 mb-2">
                Increasing frequency concerning, but no red flag symptoms.
              </p>
              <ul className="text-sm font-monument text-gray-700 space-y-1 ml-4">
                <li>• Trial of sumatriptan 50mg for acute episodes</li>
                <li>• Headache diary to identify triggers</li>
                <li>• Consider neurology referral if no improvement in 4 weeks</li>
                <li>• MRI brain if pattern changes or neurologic symptoms develop</li>
              </ul>
            </div>

            {/* Problem 4 */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-monument font-medium text-gray-800 mb-2">
                4. Peripheral neuropathy, grade 1 - Paclitaxel-induced
              </h3>
              <p className="text-sm font-monument text-gray-700 mb-2">
                Mild sensory neuropathy in fingertips, not interfering with function.
              </p>
              <ul className="text-sm font-monument text-gray-700 space-y-1 ml-4">
                <li>• Continue current paclitaxel dose</li>
                <li>• Monitor for progression</li>
                <li>• Consider dose reduction if progresses to grade 2</li>
                <li>• Gabapentin 300mg TID if symptoms worsen</li>
              </ul>
            </div>

            {/* Problem 5 */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-monument font-medium text-gray-800 mb-2">
                5. Hypertension - Suboptimal control
              </h3>
              <p className="text-sm font-monument text-gray-700 mb-2">
                BP elevated today, may be related to stress or pain.
              </p>
              <ul className="text-sm font-monument text-gray-700 space-y-1 ml-4">
                <li>• Increase amlodipine to 10mg daily</li>
                <li>• Home BP monitoring</li>
                <li>• Recheck in 2 weeks</li>
                <li>• Consider ACE inhibitor if not controlled</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Current Medications */}
        <div className="space-y-3">
          <h2 className="text-lg font-monument font-semibold text-black">
            Current Medications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="border-l-4 border-blue-500 bg-blue-50 p-3">
              <p className="font-monument font-medium text-blue-800">Amlodipine 5mg daily</p>
              <p className="text-sm font-monument text-blue-700">For hypertension</p>
            </div>
            <div className="border-l-4 border-green-500 bg-green-50 p-3">
              <p className="font-monument font-medium text-green-800">Ferrous sulfate 325mg BID</p>
              <p className="text-sm font-monument text-green-700">For iron deficiency anemia</p>
            </div>
            <div className="border-l-4 border-purple-500 bg-purple-50 p-3">
              <p className="font-monument font-medium text-purple-800">Ondansetron 8mg q8h PRN</p>
              <p className="text-sm font-monument text-purple-700">For nausea</p>
            </div>
            <div className="border-l-4 border-orange-500 bg-orange-50 p-3">
              <p className="font-monument font-medium text-orange-800">Omeprazole 20mg daily</p>
              <p className="text-sm font-monument text-orange-700">For GERD</p>
            </div>
            <div className="border-l-4 border-red-500 bg-red-50 p-3">
              <p className="font-monument font-medium text-red-800">Carboplatin/Paclitaxel</p>
              <p className="text-sm font-monument text-red-700">Adjuvant chemotherapy (cycle 3/4 complete)</p>
            </div>
            <div className="border-l-4 border-gray-500 bg-gray-50 p-3">
              <p className="font-monument font-medium text-gray-800">Acetaminophen 650mg q6h PRN</p>
              <p className="text-sm font-monument text-gray-700">For headaches</p>
            </div>
          </div>
        </div>

        {/* Family History */}
        <div className="space-y-3">
          <h2 className="text-lg font-monument font-semibold text-black">
            Family History
          </h2>
          <div className="space-y-2 text-base font-monument text-gray-700">
            <p><strong>Father:</strong> Deceased at age 72 from lung cancer (30 pack-year smoking history)</p>
            <p><strong>Mother:</strong> Age 78, alive, history of breast cancer at age 65, hypertension, diabetes</p>
            <p><strong>Brother:</strong> Age 54, healthy, no known malignancies</p>
            <p><strong>Sister:</strong> Age 52, history of cervical cancer, treated successfully</p>
            <p><strong>Paternal grandfather:</strong> Deceased, lung cancer</p>
            <p><strong>Maternal grandmother:</strong> Deceased, breast cancer</p>
          </div>
        </div>

        {/* Social History */}
        <div className="space-y-3">
          <h2 className="text-lg font-monument font-semibold text-black">
            Social History
          </h2>
          <div className="space-y-3">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-monument font-medium text-gray-800 mb-2">Tobacco Use</h3>
              <p className="text-sm font-monument text-gray-700">
                Former smoker, 25 pack-year history (1 PPD x 25 years). Quit 10 months ago upon diagnosis. 
                Using nicotine replacement therapy successfully.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-monument font-medium text-gray-800 mb-1">Occupation</h3>
                <p className="text-sm font-monument text-gray-700">Construction foreman for 30 years, potential asbestos exposure in older buildings</p>
              </div>
              <div>
                <h3 className="font-monument font-medium text-gray-800 mb-1">Alcohol</h3>
                <p className="text-sm font-monument text-gray-700">Social drinker, 2-3 beers per week, no history of abuse</p>
              </div>
              <div>
                <h3 className="font-monument font-medium text-gray-800 mb-1">Living Situation</h3>
                <p className="text-sm font-monument text-gray-700">Lives with wife of 32 years, two adult children nearby, strong support system</p>
              </div>
              <div>
                <h3 className="font-monument font-medium text-gray-800 mb-1">Exercise</h3>
                <p className="text-sm font-monument text-gray-700">Previously active, now limited by fatigue. Walking 15-20 minutes daily as tolerated</p>
              </div>
            </div>
          </div>
        </div>

        {/* Follow-up Plan */}
        <div className="space-y-3">
          <h2 className="text-lg font-monument font-semibold text-black">
            Follow-up Plan
          </h2>
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <div className="space-y-3">
              <div>
                <h3 className="font-monument font-medium text-indigo-800 mb-1">Next Appointments</h3>
                <ul className="text-sm font-monument text-indigo-700 space-y-1">
                  <li>• Oncology follow-up: June 21, 2025 (Cycle 4 chemotherapy)</li>
                  <li>• Lab draw: June 19, 2025 (Pre-chemo CBC/CMP)</li>
                  <li>• Primary care: June 14, 2025 (BP recheck)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-monument font-medium text-indigo-800 mb-1">Monitoring</h3>
                <ul className="text-sm font-monument text-indigo-700 space-y-1">
                  <li>• Weekly CBC during treatment</li>
                  <li>• Home blood pressure monitoring</li>
                  <li>• Headache diary</li>
                  <li>• Weight monitoring</li>
                </ul>
              </div>
              <div>
                <h3 className="font-monument font-medium text-indigo-800 mb-1">Patient Education</h3>
                <ul className="text-sm font-monument text-indigo-700 space-y-1">
                  <li>• Signs/symptoms of infection to report</li>
                  <li>• When to hold medications</li>
                  <li>• Importance of medication compliance</li>
                  <li>• Nutrition counseling resources provided</li>
                </ul>
              </div>
              <div>
                <h3 className="font-monument font-medium text-indigo-800 mb-1">Emergency Contact</h3>
                <p className="text-sm font-monument text-indigo-700">
                  24/7 oncology triage line: (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Provider Information */}
        <div className="border-t border-gray-200 pt-4 mt-8">
          <div className="text-sm font-monument text-gray-600 space-y-1">
            <p><strong>Provider:</strong> Dr. Sarah Chen, MD - Medical Oncology</p>
            <p><strong>Date/Time:</strong> June 7, 2025 at 12:10 PM</p>
            <p><strong>Duration:</strong> 45 minutes</p>
            <p><strong>Note Status:</strong> Signed and finalized</p>
          </div>
        </div>
      </div>
    </div>
  );
}
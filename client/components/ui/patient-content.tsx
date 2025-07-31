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

          {/* Assessment & Plan - placeholder for continuation */}
          <div className="space-y-6">
            <h2 className="font-inter text-xl font-semibold text-black">
              Family History
            </h2>
            <div className="font-inter text-[15px] text-black leading-[21px] underline">
              Paternal grandfather died of lung cancer at age 72 (heavy smoker).
              Father deceased at age 81 from myocardial infarction, had history
              of hypertension and diabetes mellitus type 2. Mother living at age
              89, has osteoporosis and mild cognitive impairment. Maternal
              grandmother died of breast cancer at age 67. Two brothers: older
              brother age 70 with hypertension and hyperlipidemia, younger
              brother age 64 with no known medical issues. One sister age 61
              with hypothyroidism. No known family history of other
              malignancies, genetic cancer syndromes, or significant hereditary
              conditions. Patient reports extensive smoking history in paternal
              family members including father (quit at age 45) and paternal
              uncle who died of emphysema. This family history includes:
              Relevant cancer history (paternal grandfather's lung cancer,
              maternal grandmother's breast cancer) Common age-related
              conditions consistent with his demographic Smoking history in the
              family that correlates with his own tobacco use Mix of living and
              deceased relatives with realistic ages Common chronic conditions
              (hypertension, diabetes, thyroid disease) No overly concerning
              hereditary cancer patterns that would change his management Retry
              Claude can make mistakes. Please double-check responses.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

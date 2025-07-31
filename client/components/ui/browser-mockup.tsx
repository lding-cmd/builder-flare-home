import { ArrowLeft, ArrowRight, RotateCcw, Home, Star, Lock, Plus, X } from "lucide-react";

export function BrowserMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-white rounded-t-lg shadow-sm">
      {/* Browser Controls */}
      <div className="h-[42px] bg-[#DEE1E6] rounded-t-lg flex items-center px-3 justify-between">
        {/* Traffic Lights */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF6058] border border-[#E14942]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFC130] border border-[#E1A325]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27CA40] border border-[#3EAF3F]"></div>
        </div>

        {/* Tab */}
        <div className="flex items-center">
          <div className="bg-white rounded-t-lg px-4 py-2 flex items-center gap-2 border-l border-r border-t border-gray-200">
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.75014 10.4863C9.67747 10.4863 9.60021 10.5239 9.54018 10.585C9.48026 10.646 9.4426 10.7249 9.44252 10.7998C9.44252 10.8747 9.48029 10.9536 9.54018 11.0147C9.60022 11.0758 9.67743 11.1133 9.75014 11.1133C9.84554 11.1133 9.9209 11.0811 9.97279 11.0283C10.0248 10.9754 10.0568 10.8978 10.0568 10.7998C10.0566 10.6118 9.90341 10.4864 9.75014 10.4863ZM11.5714 1.01857L11.6203 1.02931L10.9777 3.86525L10.9767 3.86427C10.9037 4.27072 10.5853 4.63634 10.1574 4.76174V9.82131C10.4354 9.9267 10.633 10.1357 10.7501 10.3809L10.797 10.4922L10.798 10.4932C10.9849 11.064 10.6854 11.6744 10.1232 11.8653C9.56057 12.0562 8.9607 11.7508 8.77357 11.1797C8.59052 10.6206 8.87414 10.0239 9.4142 9.82033V4.79689C8.98716 4.63923 8.63104 4.2727 8.55775 3.82717L8.0226 1.02931C7.9918 0.905289 7.9038 0.849627 7.82143 0.849627C7.77789 0.849627 7.72565 0.864952 7.68568 0.894548C7.64699 0.923231 7.62123 0.964461 7.62123 1.01857V1.02345L6.72865 8.95119L6.72768 8.95217C6.65797 9.449 6.2622 9.88136 5.77943 9.96486L5.68178 9.97756C5.08315 10.0157 4.52481 9.55891 4.45033 8.91506V8.91408L3.87904 3.13185L3.87807 3.12697H3.87904C3.87884 2.94188 3.72742 2.81349 3.53529 2.81349C3.38158 2.81372 3.22351 2.94103 3.19154 3.09865L3.19252 3.09963L2.69252 5.93556L2.69154 5.93654C2.57994 6.54195 2.02414 6.99499 1.42885 6.99513H0.0216217V6.24123H1.39272C1.65775 6.24123 1.88192 6.07371 1.9142 5.81252L1.91518 5.80959L2.41518 2.97365V2.97072C2.52591 2.4822 2.89752 2.09834 3.35268 2.05959H3.35365C3.91568 2.02382 4.40944 2.42317 4.53041 2.97267L4.54994 3.08498V3.08595L5.12123 8.86623L5.13881 8.95021C5.19467 9.13747 5.34235 9.25863 5.53529 9.25881C5.71932 9.25881 5.8807 9.1016 5.9142 8.90334L6.84291 0.975603C6.88118 0.555608 7.18216 0.211208 7.59682 0.133806V0.13283C8.09314 0.0247356 8.55405 0.323504 8.70229 0.800798L8.72768 0.898455V0.899431L9.26283 3.69631C9.33142 3.90368 9.46269 4.06289 9.64857 4.09572C9.90999 4.12899 10.1709 3.9626 10.2365 3.69826L10.88 0.861345C10.9568 0.402284 11.3341 0.0959098 11.7853 0.0957203H11.8576C12.2871 0.0958929 12.6292 0.361628 12.7579 0.759783L12.799 0.938494L12.7999 0.93947L13.7287 8.90334H13.7277C13.7606 9.09971 13.8882 9.2272 14.0802 9.25978H14.0792C14.2978 9.29123 14.4892 9.13297 14.5216 8.90236L15.3078 2.86623V2.86427C15.3828 2.4443 15.6841 2.13624 16.0978 2.05959C16.6257 1.94521 17.1166 2.29188 17.1925 2.82814L17.6925 5.8467C17.7248 6.04336 17.8848 6.2051 18.1076 6.2051H19.7999V6.959H18.0714C17.5102 6.959 17.0267 6.54072 16.9152 5.97365V5.9717L16.4152 2.95412H16.4142C16.3828 2.83194 16.2958 2.77736 16.214 2.77736C16.0948 2.7775 16.0139 2.86798 16.0138 2.94533V2.95217L15.2277 8.98439L15.2287 8.98537C15.191 9.5214 14.7766 9.901 14.257 9.97658H14.256C13.6202 10.0527 13.0609 9.59568 12.9865 8.95119L12.0578 1.03127C12.0424 0.986239 12.0126 0.939993 11.9747 0.905291C11.9358 0.869685 11.8943 0.849771 11.8576 0.849627H11.7853C11.7428 0.849721 11.7018 0.864661 11.672 0.891619C11.6429 0.917935 11.6212 0.959101 11.6212 1.01857V1.02931L11.5714 1.01857Z" fill="#126DEC" stroke="white" strokeWidth="0.1"/>
            </svg>
            <span className="text-sm font-sf-pro text-gray-700">DeepScribe</span>
            <X className="w-4 h-4 text-gray-500" />
          </div>
          <Plus className="w-5 h-5 text-gray-600 ml-2" />
        </div>

        <div className="w-12"></div> {/* Spacer for balance */}
      </div>

      {/* URL Bar */}
      <div className="h-[38px] bg-white border-b border-gray-200 flex items-center px-3 shadow-[inset_0_-1px_0_0_#DADCE0]">
        {/* Navigation Buttons */}
        <div className="flex items-center gap-4 mr-4">
          <ArrowLeft className="w-4 h-4 text-gray-500" />
          <ArrowRight className="w-4 h-4 text-gray-300" />
          <RotateCcw className="w-4 h-4 text-gray-500" />
          <Home className="w-4 h-4 text-gray-500" />
        </div>

        {/* URL Input */}
        <div className="flex-1 max-w-4xl mx-4">
          <div className="bg-gray-100 rounded-full px-3 py-1 flex items-center">
            <Lock className="w-3 h-3 text-gray-500 mr-2" />
            <span className="text-sm font-sf-pro text-gray-800">deepscribe.ai</span>
            <span className="text-sm font-sf-pro text-gray-500">/schedule</span>
            <Star className="w-4 h-4 text-gray-500 ml-auto" />
          </div>
        </div>

        {/* Profile */}
        <div className="w-6 h-6 rounded-full bg-gray-400 ml-4"></div>
      </div>

      {/* Content */}
      {children}
    </div>
  );
}

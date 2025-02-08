import React, { memo, useContext, useEffect, useState } from "react";
import UserInfo from "@/components/PersonalInfo/UserInfo";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experiences/Experience";
import ResumePreview from "@/components/ResumePreview";
import ResumeContextProvider, { ResumeContext } from "@/contexts/ResumeContext";
import { Button } from "@/components/ui/button";
import Skills from "@/components/Skills/Skills";
import { Toast } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";

function Resume() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <ResumeContextProvider>
      <div className="container-fluid mx-auto p-4 bg-dark-a0 text-custom-white min-h-screen content-center  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className=" p-6 rounded-lg ">
            <div className="flex justify-between pb-5">
              <Button
                onClick={prevStep}
                disabled={currentStep === 1}
                className=" hover:bg-opacity-90 transition-colors border  text-light-a0  bg-surface-a10 hover:bg-surface-a20 hover:text-primary-a20 "
              >
                Previous
              </Button>
              <Button
                onClick={nextStep}
                disabled={currentStep === 4}
                className=" hover:bg-opacity-90 transition-colors border  text-light-a0  bg-surface-a10 hover:bg-surface-a20 hover:text-primary-a20 "
              >
                Next
              </Button>
            </div>
            {currentStep === 1 && <UserInfo />}
            {currentStep === 2 && <Experience />}
            {currentStep === 3 && <Education />}
            {currentStep === 4 && <Skills />}
          </div>
          <div className="bg-white p-0 md:p-3 w-full h-full min-h-screen">
            <ResumePreview />
          </div>
        </div>
      </div>
      <Toaster />
    </ResumeContextProvider>
  );
}
export default memo(Resume);

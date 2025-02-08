import React, { memo, useContext, useEffect } from "react";
import PersonalInfoBody from "./PersonalInfo/PersonalInfoBody";
import { Separator } from "./ui/separator";
import { ResumeContext } from "@/contexts/ResumeContext";
import ExperienceBody from "./Experiences/ExperienceBody";
import EducationBody from "./Education/EducationBody";
import SkillsBody from "./Skills/SkillsBody";
import { AuthContext } from "@/contexts/AuthContext";
import { useParams } from "react-router-dom";

const ResumePreview = () => {
  const { resumeData, fetchData } = useContext(ResumeContext);
  const { userId } = useContext(AuthContext);
  const { ResumeId } = useParams();

  useEffect(() => {
    fetchData(userId, ResumeId);
  }, [userId, ResumeId]);

  return (
    <div>
      <div id="resume-preview" className="bg-white p-6 rounded-xl ">
        <PersonalInfoBody resumeData={resumeData} />
        <Separator className="my-4 bg-gray-600" />
        <ExperienceBody resumeData={resumeData} />
        <Separator className="my-4 bg-gray-600" />
        <EducationBody resumeData={resumeData} />
        <Separator className="my-4 bg-gray-600" />
        <SkillsBody resumeData={resumeData} />
      </div>
    </div>
  );
};

export default memo(ResumePreview);

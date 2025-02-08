import useResume from "@/Hooks/useResume";
import React, { useState, createContext, useMemo, useEffect } from "react";

export const ResumeContext = createContext();

export default function ResumeContextProvider({ children }) {
  const ResumeData = {
    PersonalInfos: {
      FullName: "",
      position: "",
      Email: "",
      PhoneNumber: "",
      Address: "",
      LinkedIn: "",
      Summary: "",
    },
    Educations: {
      University: "",
      Degree: "",
      GraduationYear: "",
      location: "",
    },
    Skills: [],
    Experiences: [],
  };
  const [resumeData, setResumeData] = useState(ResumeData);
  const { fetchData, resumeDataFetched } = useResume();

  useEffect(() => {
    if (resumeDataFetched) {
      setResumeData((prevData) => ({
        ...prevData,
        PersonalInfos: resumeDataFetched.personalInfo || prevData.PersonalInfos,
        Educations: resumeDataFetched.education || prevData.Educations,
        Skills: resumeDataFetched.skills || prevData.Skills,
        Experiences: resumeDataFetched.experiences || prevData.Experiences,
      }));
    }
  }, [resumeDataFetched]);

  const Values = useMemo(() => {
    return {
      resumeData,
      setResumeData,
      fetchData,
    };
  }, [resumeData, setResumeData, fetchData]);

  return (
    <ResumeContext.Provider value={Values}>{children}</ResumeContext.Provider>
  );
}

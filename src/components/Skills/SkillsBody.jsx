import React from "react";

export default function SkillsBody({ resumeData, resumeDataFetched }) {
  const skills = resumeData?.Skills || resumeDataFetched?.skills;

  return (
    <div className="max-w-full  sm:max-w-3xl  p-2 ">
      <h2 className="text-xl sm:text-2xl font-semibold">Skills</h2>
      <ul className="list-disc pl-5 text-gray-800 space-y-3">
        {skills?.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

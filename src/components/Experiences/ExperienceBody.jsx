import React, { useEffect } from "react";

export default function ExperienceBody({ resumeData }) {
  const experiences = resumeData?.Experiences;

  return (
    <div className="max-w-full bg-white sm:max-w-3xl  p-2 rounded-2xl">
      {experiences?.map((exp, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold">
            {exp.JobTitle || "Job Title"}, {exp.Company}
          </h2>
          <div className="text-gray-700 mt-2 mb-6 flex flex-col sm:flex-row justify-between">
            <span>{exp.Duration}</span>
            <span>{exp.Location}</span>
          </div>
          <ul className="list-disc pl-5 text-gray-800 space-y-3">
            <li>{exp.ProjectDetails}</li>
            <ul className="list-[circle] pl-5 mt-2 space-y-2">
              <li>{exp.Challenges}</li>
            </ul>
          </ul>
        </div>
      ))}
    </div>
  );
}

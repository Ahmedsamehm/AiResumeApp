import React from "react";

export default function EducationBody({ resumeData }) {
  return (
    <div className="bg-white ">
      <h2 className="text-lg font-semibold mb-4">EDUCATION</h2>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between">
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <h3 className="text-base font-semibold">
              {resumeData?.Educations?.University || "abc"}
            </h3>
            <p className="text-sm text-gray-600 sm:ml-2">
              (
              {resumeData?.Educations?.Degree ||
                "Second Degree or Certification"}
              )
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-end sm:items-center">
            <p className="text-sm">
              {resumeData?.Educations?.Location || "San Francisco, CA"}
            </p>
            <p className="text-sm mt-1 sm:mt-0 sm:ml-2">
              {resumeData?.Educations?.GraduationYear || "2007-2011"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Separator } from "../ui/separator";

export default function PersonalInfoBody({ resumeData }) {
  return (
    <>
      <div className="text-center bg-white">
        <h1 className="text-3xl font-semibold">
          {resumeData?.PersonalInfos?.FullName || "John Doe"}
        </h1>
        <p className="text-gray-600">
          {resumeData.PersonalInfos?.position || "Software Engineer"}
        </p>
        <span className="mb-2 block">
          {resumeData.PersonalInfos?.Address || "San Francisco, CA"}
        </span>
      </div>
      <div className="flex justify-between items-center ">
        <div className="flex  flex-col space-y-1 ">
          <span>
            {resumeData?.PersonalInfos?.PhoneNumber || "123-456-7890"}
          </span>
          <a className="text-sm" target="_blank" rel="noopener noreferrer">
            <span>
              {resumeData?.PersonalInfos?.LinkedIn || "linkedin.com/johndoe"}
            </span>
          </a>
        </div>
        <span>{resumeData?.PersonalInfos?.Email || "johndoe@ex.com"}</span>
      </div>
      <Separator className="my-4  bg-gray-600" />
      <div className="">
        <span>
          {resumeData?.PersonalInfos?.Summary || "Lorem ipsum dolor sit amet"}
        </span>
      </div>
    </>
  );
}

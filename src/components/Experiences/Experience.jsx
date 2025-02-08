import { Label } from "@radix-ui/react-label";
import React, { memo, useContext, useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useFormik } from "formik";

import { AuthContext } from "@/contexts/AuthContext";
import { useParams } from "react-router-dom";

import { CreateDocContext } from "@/contexts/CreateDocContext";
import { ResumeContext } from "@/contexts/ResumeContext";

import { Textarea } from "../ui/textarea";
import SheetMenu from "../SheetMenu";
import BtnAdd from "../btnAdd";
import FormField from "../FormField";

function Experience() {
  const { userId } = useContext(AuthContext);
  const { ResumeId } = useParams();
  const { addDocument } = useContext(CreateDocContext);
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const formik = useFormik({
    initialValues: {
      JobTitle: "",
      Company: "",
      Duration: "",
      Location: "",
      ProjectDetails: "",
      Challenges: "",
    },
    onSubmit: async (values) => {
      const updatedExperiences = [...resumeData?.Experiences, values];
      setResumeData((prevData) => ({
        ...prevData,
        Experiences: updatedExperiences,
      }));

      await addDocument(
        userId,
        "Experiences",
        "userInfo",
        { Experiences: updatedExperiences },
        ResumeId
      );

      formik.resetForm();
    },
  });

  const handleRemoveExperience = async (index) => {
    // Remove the experience at the specified index
    const updatedExperiences = resumeData.Experiences.filter(
      (_, i) => i !== index
    );
    setResumeData((prevData) => ({
      ...prevData,
      Experiences: updatedExperiences,
    }));

    await addDocument(
      userId,
      "Experiences",
      "userInfo",
      { Experiences: updatedExperiences },
      ResumeId
    );
  };

  return (
    <div className="space-y-6">
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-4 bg-surface-a10 rounded-lg p-5"
      >
        <h1 className="text-xl font-semibold text-primary-a50">Experience</h1>
        <FormField
          label="Job Title"
          id="jobTitle"
          type="text"
          placeholder="Enter your job title"
          fieldProps={formik.getFieldProps("JobTitle")}
        />
        <FormField
          label="Company"
          id="company"
          type="text"
          placeholder="Enter your company"
          fieldProps={formik.getFieldProps("Company")}
          autoComplete="company"
        />
        <FormField
          label="Duration"
          id="duration"
          type="text"
          placeholder="Enter the duration (e.g., 2019 - 2021)"
          fieldProps={formik.getFieldProps("Duration")}
        />
        <FormField
          label="Location"
          id="location"
          type="text"
          placeholder="Enter the location"
          fieldProps={formik.getFieldProps("Location")}
        />
        <div className="relative">
          <Label htmlFor="ProjectDetails" className=" text-primary-a50">
            Project Details
          </Label>
          <Textarea
            id="ProjectDetails"
            type="text"
            {...formik.getFieldProps("ProjectDetails")}
          />
          <SheetMenu />
        </div>

        <div>
          <Label htmlFor="Challenges" className=" text-primary-a50">
            Challenges
          </Label>
          <Textarea
            id="Challenges"
            type="text"
            {...formik.getFieldProps("Challenges")}
          />
        </div>
        <BtnAdd disabled={formik.isSubmitting} />
      </form>

      <div className="space-y-4 bg-surface-a10 rounded-lg p-5 text-primary-a50">
        <h2 className="text-lg font-semibold">Experience List</h2>
        {resumeData?.Experiences?.map((exp, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded-md shadow-sm flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{exp.JobTitle}</p>
              <p>{exp.Company}</p>
              <p>{exp.Duration}</p>
              <p>{exp.Location}</p>
            </div>
            <Button
              onClick={() => handleRemoveExperience(index)}
              className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(Experience);

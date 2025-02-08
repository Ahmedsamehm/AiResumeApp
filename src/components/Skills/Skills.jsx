import { Label } from "@radix-ui/react-label";
import React, { memo, useContext } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useFormik } from "formik";

import { AuthContext } from "@/contexts/AuthContext";
import { useParams } from "react-router-dom";

import { CreateDocContext } from "@/contexts/CreateDocContext";
import { ResumeContext } from "@/contexts/ResumeContext";
import useDownloadResume from "@/Hooks/useDownloadResume";
import BtnAdd from "../btnAdd";
import FormField from "../FormField";

function Skills() {
  const { userId } = useContext(AuthContext);
  const { ResumeId } = useParams();
  const { addDocument } = useContext(CreateDocContext);
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const { exportToPDF } = useDownloadResume();
  const formik = useFormik({
    initialValues: {
      skill: "",
    },
    onSubmit: async (values) => {
      const currentSkills = resumeData?.Skills;

      // Add the new skill to resumeData.Skills
      const updatedSkills = [...currentSkills, values.skill];
      setResumeData((prevData) => ({
        ...prevData,
        Skills: updatedSkills,
      }));

      // Save the updated skills to Firestore
      await addDocument(
        userId,
        "Skills",
        "userInfo",
        { Skills: updatedSkills },
        ResumeId
      );

      // Reset the form
      formik.resetForm();
    },
  });

  const handleRemoveSkill = async (index) => {
    // Ensure resumeData.Skills is an array
    const currentSkills = Array.isArray(resumeData?.Skills)
      ? resumeData.Skills
      : [];

    // Remove the skill at the specified index
    const updatedSkills = currentSkills.filter((_, i) => i !== index);
    setResumeData((prevData) => ({
      ...prevData,
      Skills: updatedSkills,
    }));

    await addDocument(
      userId,
      "Skills",
      "userInfo",
      { Skills: updatedSkills },
      ResumeId
    );
  };

  return (
    <div className="space-y-6">
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-4 bg-surface-a10 rounded-lg p-5"
      >
        <h1 className="text-xl font-semibold text-primary-a50">Skills</h1>
        <FormField
          label="Skill"
          id="skill"
          type="text"
          placeholder="Enter your skill"
          fieldProps={formik.getFieldProps("skill")}
        />
        <BtnAdd disabled={formik.isSubmitting} />
        <Button
          type="button"
          onClick={exportToPDF}
          className="hover:bg-opacity-90 transition-colors border text-light-a0 bg-surface-a10 hover:bg-surface-a20 hover:text-primary-a20"
        >
          Download PDF
        </Button>
      </form>

      <div className="space-y-4 text-primary-a50 bg-surface-a10 rounded-lg p-5">
        <h2 className="text-lg font-semibold">Skills List</h2>
        {resumeData?.Skills?.map((skill, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded-md shadow-sm flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{skill}</p>
            </div>
            <Button
              onClick={() => handleRemoveSkill(index)}
              className="border-primary-a10 hover:bg-opacity-90 transition-colors border text-light-a0 bg-surface-a10 hover:bg-surface-a20 hover:text-primary-a20"
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(Skills);

import { Label } from "@radix-ui/react-label";
import React, { useContext, useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { AuthContext } from "@/contexts/AuthContext";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { CreateDocContext } from "@/contexts/CreateDocContext";
import { ResumeContext } from "@/contexts/ResumeContext";
import BtnAdd from "../btnAdd";
import FormField from "../FormField";

export default function Education() {
  const { userId } = useContext(AuthContext);
  const { ResumeId } = useParams();
  const { addDocument } = useContext(CreateDocContext);
  const { setResumeData, resumeData } = useContext(ResumeContext);
  const formik = useFormik({
    initialValues: resumeData?.Educations,
    onSubmit: (values) => {
      addDocument(userId, "education", "userInfo", values, ResumeId);
    },
  });
  useEffect(() => {
    setResumeData((prevData) => ({
      ...prevData,
      Educations: formik?.values,
    }));
  }, [setResumeData, formik?.values]);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-4 bg-surface-a10 rounded-lg p-5"
    >
      <h1 className="text-xl font-semibold text-primary-a50">Education</h1>
      <FormField
        label="School/University"
        id="university"
        type="text"
        placeholder="Enter your school/university"
        fieldProps={formik.getFieldProps("University")}
      />
      <FormField
        label="Degree"
        id="degree"
        type="text"
        placeholder="Enter your degree"
        fieldProps={formik.getFieldProps("Degree")}
      />
      <FormField
        label="Location"
        id="location"
        type="text"
        placeholder="Enter your location"
        fieldProps={formik.getFieldProps("Location")}
      />
      <FormField
        label="Graduation Year"
        id="graduationYear"
        type="number"
        placeholder="Enter your graduation year"
        fieldProps={formik.getFieldProps("GraduationYear")}
      />
      <BtnAdd disabled={formik.isSubmitting} />
    </form>
  );
}

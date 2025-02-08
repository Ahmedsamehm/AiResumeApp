import { Label } from "@radix-ui/react-label";
import React, { memo, useContext, useEffect } from "react";

import { useFormik } from "formik";
import { AuthContext } from "@/contexts/AuthContext";
import { CreateDocContext } from "@/contexts/CreateDocContext";
import { useParams } from "react-router-dom";
import { ResumeContext } from "@/contexts/ResumeContext";
import { Textarea } from "../ui/textarea";
import SheetMenu from "../SheetMenu";

import { useState } from "react";

import BtnAdd from "../btnAdd";
import FormField from "../FormField";

function UserInfo() {
  const { userId } = useContext(AuthContext);
  const { addDocument } = useContext(CreateDocContext);
  const { ResumeId } = useParams();
  const { setResumeData, resumeData } = useContext(ResumeContext);

  const [response, setResponse] = useState("");
  const formik = useFormik({
    initialValues: resumeData?.PersonalInfos,
    onSubmit: async (values) => {
      const userInfo = {
        FullName: values.FullName,
        position: values.position,
        Email: values.Email,
        PhoneNumber: values.PhoneNumber,
        Address: values.Address,
        LinkedIn: values.LinkedIn,
        Summary: values.Summary,
      };

      await addDocument(userId, "PersonalInfo", "userInfo", userInfo, ResumeId);
    },
  });

  useEffect(() => {
    setResumeData((prevData) => ({
      ...prevData,
      PersonalInfos: formik?.values,
    }));
  }, [setResumeData, formik?.values]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-4 bg-surface-a10 rounded-lg p-5 w-full max-w-4xl mx-auto"
    >
      <h1 className="text-xl md:text-2xl font-semibold text-primary-a50">
        Personal Information
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Full Name"
          id="fullName"
          type="text"
          placeholder="Enter your full name"
          fieldProps={formik.getFieldProps("FullName")}
          autoComplete="name"
        />
        <FormField
          label="Position"
          id="position"
          type="text"
          placeholder="Enter your position"
          fieldProps={formik.getFieldProps("Position")}
          autoComplete="organization-title"
        />
        <FormField
          label="Email"
          id="email"
          type="email"
          placeholder="Enter your email"
          fieldProps={formik.getFieldProps("Email")}
          autoComplete="email"
        />
        <FormField
          label="Phone Number"
          id="phoneNumber"
          type="tel"
          placeholder="Enter your phone number"
          fieldProps={formik.getFieldProps("PhoneNumber")}
          autoComplete="tel"
        />
        <FormField
          label="Address"
          id="address"
          type="text"
          placeholder="Enter your address"
          fieldProps={formik.getFieldProps("Address")}
          autoComplete="street-address"
        />
        <FormField
          label="LinkedIn"
          id="linkedin"
          type="text"
          placeholder="Enter your LinkedIn"
          fieldProps={formik.getFieldProps("LinkedIn")}
          autoComplete="url"
        />
      </div>
      <div>
        <Label
          htmlFor="summary"
          className="block text-sm font-medium text-primary-a50"
        >
          Summary
        </Label>
        <div className="relative z-50">
          <Textarea
            id="summary"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm min-h-[150px]"
            placeholder="Enter your summary"
            {...formik.getFieldProps("Summary")}
            autoComplete="off"
          />
          <SheetMenu />
        </div>
      </div>
      <BtnAdd disabled={formik.isSubmitting} />
    </form>
  );
}
export default memo(UserInfo);

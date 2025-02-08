import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function FormField({
  label,
  id,
  type,
  placeholder,
  fieldProps,
}) {
  return (
    <div>
      <Label
        htmlFor={id}
        className="block text-sm font-medium text-primary-a50"
      >
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        placeholder={placeholder}
        {...fieldProps}
      />
    </div>
  );
}

import { LoaderCircle } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-dark-a0 ">
      <LoaderCircle size={40} className="animate-spin text-primary-a50" />
    </div>
  );
}

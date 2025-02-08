import LoginForm from "@/components/LoginForm";
import { Link } from "react-router-dom"; // استيراد Link من React Router
import React from "react";

export default function Login() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}

import React, { useContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { AuthContext } from "@/contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom"; // استيراد useNavigate
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginForm() {
  const { handleLogin, handleGoogleLogin, error } = useContext(AuthContext);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleLogin(values.email, values.password);
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              ) : null}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                required
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red-500 text-sm">{formik.errors.password}</p>
              ) : null}
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}{" "}
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button
              onClick={handleGoogleLogin}
              variant="outline"
              className="w-full"
            >
              Login with Google
            </Button>
            <Link to="/register">
              <p className="text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <span className="underline">Register</span>
              </p>
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

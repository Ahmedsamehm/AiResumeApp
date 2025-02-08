import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className=" container-fluid mx-auto py-10 bg-custom-dark-blue text-custom-white min-h-screen bg-dark-a0  text-light-a0 ">
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="max-w-md text-center">
          <h1 className="text-5xl font-bold leading-tight text-primary-a50 ">
            Create Resume With AI Now
          </h1>
          <p className="mt-4 text-lg text-custom-light-gray">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
            sapiente.
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-8   transition-colors duration-300 ease-in-out bg-primary-a20 text-dark-a0  hover:bg-primary-a50 "
          >
            <Link to="/DashBoard" className=" ">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

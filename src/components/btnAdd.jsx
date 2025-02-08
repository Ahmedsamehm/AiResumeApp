import { useToast } from "@/Hooks/use-toast";
import React from "react";
import { Button } from "./ui/button";

export default function BtnAdd({ disabled }) {
  const { toast } = useToast();
  return (
    <Button
      type="submit"
      onClick={() => {
        toast({
          description: "Saved Successfully",
          duration: 1000,
          variant: "success",
          className: "bg-surface-a10 text-light-a0",
        });
      }}
      className="w-full border-primary-a10 hover:bg-opacity-90 transition-colors border  text-light-a0  bg-surface-a10 hover:bg-surface-a20 hover:text-primary-a20"
      disabled={disabled}
    >
      Save
    </Button>
  );
}

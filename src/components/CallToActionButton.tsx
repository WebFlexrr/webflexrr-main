import { Phone } from "lucide-react";
import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { Button } from "./ui/button";

export const CallToActionButton = () => {
  return (
    <Button className="gap-5 rounded-2xl border border-secondary bg-linear-to-r from-primary text-white to-secondary px-5 py-6 font-space-grotesk text-lg">
      Book A Friendly call{" "}
      <div className="flex items-center justify-center rounded-md border border-white p-2">
        <CiLocationArrow1 className="fill-white text-lg" />
      </div>
    </Button>
  );
};

export const ContactUsButton = () => {
  return (
    <Button className="bg-linear-to-r gap-5 rounded-2xl border border-secondary  from-primary text-white to-secondary font-space-grotesk text-base">
      <Phone size={24} />
      Contact US
    </Button>
  );
};

import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Feature = ({ feature }) => {
  return (
    <div className="flex items-center gap-2">
      <CheckCircleIcon className="w- h-4  text-green-600"></CheckCircleIcon>

      <span>{feature}</span>
    </div>
  );
};

export default Feature;

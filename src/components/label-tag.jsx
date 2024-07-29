import React from "react";

const LabelTag = ({ label = "About" }) => {
  return (
    <span className="px-5 py-1 text-center text-gray-600 bg-gray-200 dark:bg-gray-600 dark:text-gray-200 rounded-xl">
      {label}
    </span>
  );
};

export default LabelTag;

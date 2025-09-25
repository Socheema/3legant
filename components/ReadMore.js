"use client";
import { useState } from "react";

function ReadMore({ text, maxLength = 100 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  return (
    <p>
      {isExpanded ? text : `${text.slice(0, maxLength)}...`}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="ml-2 text-blue-600 hover:underline"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </p>
  );
}

export default ReadMore;

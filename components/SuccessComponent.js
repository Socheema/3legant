"use client";
import React from "react";
import { useEffect } from "react";

function SuccessMessage({ message, clearMessage }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      clearMessage();
    }, 3000);

    return () => clearTimeout(timer);
  }, [clearMessage]);

  return (
    <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-300 z-1000">
  {message}
    </div>
  );
}

export default SuccessMessage;

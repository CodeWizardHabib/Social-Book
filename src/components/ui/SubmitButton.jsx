import React from "react";
import "./SubmitButton.css";
export default function SubmitButton({ submitText }) {
  return (
    <button className="submit-button" type="submit">
      {submitText}
    </button>
  );
}

// src/pages/Contact.jsx
import { createElement } from "react";

function ContactLink({ href, label, value, external }) {
  return createElement(
    "a",
    {
      href,
      target: external ? "_blank" : undefined,
      rel: external ? "noopener noreferrer" : undefined,
      className:
        "flex items-center justify-between border border-gray-200 rounded-2xl px-5 py-4 text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors focus:outline-none",
    },
    createElement(
      "span",
      { className: "flex flex-col" },
      createElement("span", { className: "text-gray-400 text-xs mb-1" }, label),
      createElement("span", null, value)
    ),
    createElement("span", { className: "text-gray-400" }, "\u2197")
  );
}

export default function Contact() {
  return (
    <div className="w-full flex flex-col items-center px-10">
      <div className="w-full max-w-2xl mx-auto font-mono">
        <p className="text-sm text-gray-400 mb-2">CONTACT</p>
        <div className="space-y-3">
          <ContactLink
            href="mailto:preciaan@bc.edu"
            label="Email"
            value="preciaan@bc.edu"
          />
          <ContactLink
            href="https://instagram.com/mr.ap123"
            label="Instagram"
            value="@mr.ap123"
            external
          />
        </div>
        <p className="text-gray-400 text-xs mt-10">
          Based between San Ysidro, California and Boston,  Massachusetts.
        </p>
      </div>
    </div>
  );
}
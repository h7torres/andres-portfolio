// src/pages/Contact.jsx
import { createElement } from "react";

function InlineLink({ href, children, external }) {
  return createElement(
    "a",
    {
      href,
      target: external ? "_blank" : undefined,
      rel: external ? "noopener noreferrer" : undefined,
      className: "underline hover:text-gray-500 transition-colors",
    },
    children
  );
}

export default function Contact() {
  return (
    <div className="w-full flex flex-col items-center px-10">
      <div className="w-full max-w-2xl mx-auto font-mono text-center">
        <p className="text-sm text-gray-400 mb-2">CONTACT</p>
        <p className="text-gray-700 text-sm mb-8">
          For collaborations, commissions, press, or just to talk about the work
          &mdash; reach out below.
        </p>
        <div className="space-y-2 text-gray-700 text-sm">
          <p><InlineLink href="mailto:preciaan@bc.edu">Email</InlineLink></p>
          <p><InlineLink href="https://instagram.com/mr.ap123" external>Instagram</InlineLink></p>
        </div>
        <p className="text-gray-400 text-xs mt-10">
          Based between San Ysidro, California and Boston, Massachusetts.
        </p>
      </div>
    </div>
  );
}
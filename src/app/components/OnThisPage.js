// components/OnThisPage.js

import React from "react";

const OnThisPage = ({ sections }) => {
  return (
    <div className="sticky top-0">
      <h3 className="text-xl font-semibold">On This Page</h3>
      <ul className="list-disc pl-4 mt-2">
        {sections.map((section, index) => (
          <li key={index}>
            <a
              href={`#${section.id}`}
              className="text-blue-500 hover:underline"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;

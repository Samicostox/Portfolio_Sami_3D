import React from "react";
import { TracingBeam } from "./Beams/tracing-beam.tsx";
import { Reveal } from "./Hero_Text.jsx";
import { RoundedSlideButton } from "./Buttons/button.jsx";
import { Github } from "./Buttons/github.jsx";

const ProjectTemplate = ({ content }) => {
  return (
    <div className="py-40">
    <TracingBeam className="px-6 ">
      <div className="max-w-3xl mx-auto antialiased pt-4 relative">
        {content.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <Reveal>
              <p className="text-4xl mb-4 font-black md:pl-0 pl-6">
                {item.title}
              </p>
            </Reveal>
            {index === 0 && (
              <div className="md:pl-0 pl-6">
                {item.tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className={`${tag.color} border border-white rounded px-2 py-1 mb-2 mr-4 text-sm font-medium text-gray-600 hover:bg-gray-100 inline-block`}
                  >
                    <div className="flex items-center border-white">
                      <span className="mr-1">{tag.icon}</span>
                      <span className="font-alliance">{tag.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="text-sm prose prose-sm dark:prose-invert mt-2 md:pl-0 pl-6">
              {item.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {index === 0 && (
                <div className="flex space-x-4 mb-4 -mt-4 ">
                  <RoundedSlideButton   link = { item.Website }/>
                  <Github link = { item.Github }/>
                </div>
              )}
            </div>
            <div className="text-base md:pl-0 pl-6">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
    </div>
  );
};

export default ProjectTemplate;

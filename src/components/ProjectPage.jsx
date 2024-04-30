"use client";
import React from "react";



import { TracingBeam } from "./Beams/tracing-beam.tsx";
import { Reveal } from "./Hero_Text.jsx";

export function TracingBeamDemo() {
  return (
   
    <TracingBeam className="px-6 ">
      <div className="max-w-3xl mx-auto antialiased pt-4 relative">
      

        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
           
           
            <Reveal>
            <p className="text-4xl mb-4 font-black md:pl-0 pl-6">
              {item.title}
            </p>
            </Reveal>
            <div className="md:pl-0 pl-6">
            {item.tags.map((tag, idx) => (
                              <div
                                key={idx}
                                className={`${tag.color} border border-white rounded px-2 py-1 mb-2 mr-4 text-sm font-medium text-gray-600 hover:bg-gray-100 inline-block `}
                              >
                                <div className="flex items-center border-white ">
                                  <span className="mr-1">{tag.icon}</span>
                                  <span className="font-alliance">
                                    {tag.text}
                                  </span>
                                </div>
                              </div>
                            ))}

</div>
                         

            <div className="text-sm  prose prose-sm dark:prose-invert mt-2 md:pl-0 pl-6">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              <div className="text-base">
              {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>

  );
}

const dummyContent = [
  {
    title: "Technical Document Generation",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
    badge: "React",
    image:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1714398118/723shots_so_dmpl1r.png",
      tags: [
        {
          text: "Web App",
          color: "bg-red-100",
          bordercolor: "bg-red-300",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695583481/monitor_ewewup.png"
              alt="Web App Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "React",
          color: "bg-blue-100",
          bordercolor: "bg-blue-300",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695503515/react_y3ribl.svg"
              alt="React Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Django",
          color: "bg-green-100",
          bordercolor: "bg-green-300",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695503370/django-icon_rxmwzx.svg"
              alt="Django Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Figma",
          color: "bg-orange-100",
          bordercolor: "bg-orange-300",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696322228/figma_joejhn.svg"
              alt="Figma Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Heroku",
          color: "bg-purple-200",
          bordercolor: "bg-purple-400",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696322208/heroku-icon_t8pyfm.svg"
              alt="Heroku Icon"
              className="h-4 w-4"
            />
          ),
        },
      ],
  },
  {
    title: "Technical Document Generation ",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: [
        {
          text: "Web App",
          color: "bg-red-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695583481/monitor_ewewup.png"
              alt="Web App Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "React",
          color: "bg-blue-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695503515/react_y3ribl.svg"
              alt="React Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Django",
          color: "bg-green-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695503370/django-icon_rxmwzx.svg"
              alt="Django Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Figma",
          color: "bg-orange-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696322228/figma_joejhn.svg"
              alt="Figma Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Heroku",
          color: "bg-purple-200",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696322208/heroku-icon_t8pyfm.svg"
              alt="Heroku Icon"
              className="h-4 w-4"
            />
          ),
        },
      ],
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: [
        {
          text: "Web App",
          color: "bg-red-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695583481/monitor_ewewup.png"
              alt="Web App Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "React",
          color: "bg-blue-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695503515/react_y3ribl.svg"
              alt="React Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Django",
          color: "bg-green-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695503370/django-icon_rxmwzx.svg"
              alt="Django Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Figma",
          color: "bg-orange-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696322228/figma_joejhn.svg"
              alt="Figma Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Heroku",
          color: "bg-purple-200",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696322208/heroku-icon_t8pyfm.svg"
              alt="Heroku Icon"
              className="h-4 w-4"
            />
          ),
        },
      ],
  },
];

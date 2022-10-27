import * as React from 'react';
import { IconCodeCircle, IconBracketsContain, IconBooks, IconMessage2Code, IconBracketsContainStart, IconBook  } from '@tabler/icons';

const sectionData = [
  {
    id: "about-summary",
    title: "Summary",
    text: "I love figuring out how things work, looking at all the individual parts and seeing how it's all put back together. I take this style of understanding and use it where I can. Whether it's keeping things nice and organized, or figuring out the source of a problem. In other parts I focus in on the details and strive to keep things clear and accurate, for readable code and efficient communication",
    icons: {
      key: <IconBracketsContain />,
      header: <IconBracketsContainStart />,
    },
    selected: true,
  },
  {
    id: "about-skills",
    title: "Skills",
    text: "I enjoy learning new languages and frameworks. My approach to adapting quickly is to focus on using the broad concepts and principles, to guide my work rather than syntax. Starting with C++ I've learned: C#, Javascript, PHP, .Net, React, Laravel, SQL server, MySQL, and more.",
    icons: {
      key: <IconCodeCircle />,
      header: <IconMessage2Code />,
    },
    selected: false,
  },
  {
    id: "about-me",
    title: "Interests",
    text: "Outside of programing you can usually find me preparing to DM my next Dungeons and Dragons session, or trying out the latest metriodvania to come out on Steam.",
    icons: {
      key: <IconBooks />,
      header: <IconBook />,
    },
    selected: false,
  },
];

export default function About() {
  const [sections, setSections] = React.useState(sectionData);

  function updateSelection(id) {
    const updatedSections = [...sections];

    const currentPos = updatedSections.findIndex((section) => (section.selected == true));
    updatedSections[currentPos].selected = false;

    const targetPos = sections.findIndex((section) => (section.id == id));
    updatedSections[targetPos].selected = true;

    setSections(updatedSections);
  }



  return (
    <div className="bg-neutral-900">
      <div className="mx-auto max-w-7xl lg:py-30 md:py-20 sm:py-15 py-10">
        <div className="">
          <div className="mb-10 mx-5">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mt-3 text-base sm:text-lg md:text-xl text-neutral-500">
                I'm a Generalist Programer / Software Developer from Winnipeg, Canada.
              </p>
          </div>
          <div className="flex md:flex-row flex-col justify-center md:space-x-10">
            <div className="p-5">
              <ul className="flex md:flex-col flex-row justify-center items-start">
                {sections.map((section) => (
                  <li key={section.id}>
                    <div className={"md:my-3 mx-3 " + (section.selected ? "text-cyan-200" : "text-neutral-500")}>
                      <button className="flex" onClick={() => updateSelection(section.id)} title={section.title}>
                        <span className="">{section.icons.key}</span><span className="ml-3 lg:block hidden">{section.title}</span>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:max-w-2xl md:max-w-xl max-w-sm m-auto">
              <div className="xl:px-96 lg:px-80 lg:py-36 md:px-72 md:py-40 sm:px-44 sm:py-44 px-36 py-52 relative">
                {sections.map((section) => (
                  <Section {...section} key={section.id}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Section(props) {
  return (
    <div className="absolute inset-5">
      <div className={"transition-opacity ease-in-out duration-300 " + (props.selected ? "opacity-100 " : "opacity-0")} aria-hidden={!props.selected}>
        <div className="relative rounded  outline outline-offset-4 outline-4 bg-slate-900 outline-cyan-700 text-neutral-300">
          <div className="p-5 space-y-4">
            <div>
              <h3 className="text-cyan-100 flex  items-center text-xl">
                <span className="mr-3 text-cyan-300">{props.icons.header}</span>{props.title}
              </h3>
            </div>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
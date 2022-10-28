import * as React from 'react';
import { IconCodeCircle, IconBracketsContain, IconBooks, IconMessage2Code, IconBracketsContainStart, IconBook  } from '@tabler/icons';

const sectionData = [
  {
    id: "about-summary",
    title: "Summary",
    text: "I love figuring out how things work, looking at all the individual parts and seeing how it's all put back together. I take this style of understanding and use it where I can. Whether it\'s keeping things nice and organized, or figuring out the source of a problem. In other parts I focus in on the details and strive to keep things clear and accurate, for readable code and efficient communication",
    icons: {
      key: <IconBracketsContain aria-label="Summary" />,
      header: <IconBracketsContainStart aria-hidden="true"/>,
    },
    selected: true,
  },
  {
    id: "about-skills",
    title: "Skills",
    text: "I enjoy learning new languages and frameworks. My approach to adapting quickly is to focus on using the broad concepts and principles, to guide my work rather than syntax. Starting with C++ I\'ve learned: C#, Javascript, PHP, .Net, React, Laravel, SQL server, MySQL, and more.",
    icons: {
      key: <IconCodeCircle aria-label="Skills"/>,
      header: <IconMessage2Code aria-hidden="true"/>,
    },
    selected: false,
  },
  {
    id: "about-me",
    title: "Interests",
    text: "Outside of programing you can usually find me preparing to DM my next Dungeons and Dragons session, or trying out the latest metriodvania to come out on Steam.",
    icons: {
      key: <IconBooks aria-label="Interests"/>,
      header: <IconBook aria-label="true"/>,
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
        <div className="mb-10 mx-5">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-neutral-400 contrast-more:text-neutral-200">
              I&apos;m a Generalist Programer / Software Developer from Winnipeg, Canada.
            </p>
        </div>
        <div className="flex md:flex-row flex-col justify-center md:space-x-10">
          <div className="p-5">
            <ul className="flex md:flex-col flex-row justify-center items-start">
              {sections.map((section) => (
                <li key={section.id}>
                  <div className={"md:my-3 mx-3 " + (section.selected ? "text-cyan-200 contrast-more:text-cyan-300" : "text-neutral-400 contrast-more:text-neutral-200")}>
                    <button className="flex transition-transform ease-in-out duration-150 hover:scale-125 focus:scale-125" onClick={() => updateSelection(section.id)} title={section.title}>
                      <span>{section.icons.key}</span><span className="ml-3 lg:block hidden" aria-hidden="true">{section.title}</span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:max-w-2xl md:max-w-xl sm:max-w-lg max-w-sm m-auto">
            <div className="xl:px-96 xl:py-24 lg:px-80 lg:py-28 md:px-72 md:py-32 sm:px-64 sm:py-36 px-36 py-52 relative">
              {sections.map((section) => (
                <Section {...section} key={section.id}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Section(props) {
  return (
    <div className="absolute inset-0 w-full">
      <div className={"transition-opacity ease-in-out duration-300 " + (props.selected ? "opacity-100 " : "opacity-0")}>
        <div className="relative rounded-lg border-4 border-solid bg-slate-900 border-cyan-700 text-neutral-300">
          <div className="p-5 space-y-4">
            <h3 className="text-cyan-100 flex  items-center text-xl">
              <span className="mr-3 text-cyan-300" aria-hidden="true">{props.icons.header}</span>{props.title}
            </h3>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
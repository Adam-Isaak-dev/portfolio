import { IconSourceCode, IconExternalLink  } from '@tabler/icons';

const projects = [
  {
    name: "Portfolio Website",
    codebase: false,
    url: false,
    description: "This website itself. I designed this site to make it easy to add content without much hassle. Additionally I focused on making the site look visual appealing by leveraging Tailwind and CSS animations.",
    tags: ["Next.js", "React", "Tailwind CSS", "CSS", "HTML", "Javascript"]
  },
  {
    name: "Coding Challenges",
    codebase: "https://github.com/Adam-Isaak-dev/coding-challenges",
    url: false,
    description: "A collection of coding challenges I've worked focusing on algorithmic thinking and how to optimize code for the most efficient results.",
    tags: ["Leetcode", "C++", "Algorithms", "Optimizing"],
  },
  {
    name: "Random Joke Generator",
    codebase: "https://github.com/Adam-Isaak-dev/random-joke-site",
    url: "https://random-joke-site.vercel.app/",
    description: "A simple website that lets you get random dad jokes from an API at the click of a button. Made for fun and because of my family's love for bad jokes.",
    tags: ["Next.js", "Material UI", "API"]
  },
];

export default function Projects(props) {


  return (
    <div className="bg-neutral-900" id="portfolio">
      <div className="mx-auto max-w-7xl lg:py-30 md:py-20 sm:py-15 py-10">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">My Work</h2>
            <p className="mt-3 text-xl text-neutral-400 contrast-more:text-neutral-200">
              A showcase of some of my favorite work
            </p>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {projects.map((project) => (
            <Project {...project} key={"project-" + project.name}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Project(props) {
  let codebase, url;
  if(props.codebase) {
    codebase = <a href={props.codebase} className="text-cyan-600 hover:text-cyan-300 focus:text-cyan-300 transition-transform duration-150 ease-in-out hover:scale-150 focus:scale-150" aria-label="Source Code"><IconSourceCode className="h-8 w-8 " aria-hidden={true}/></a>;
  }
  if(props.url) {
    url = <a href={props.url} className="text-cyan-600 hover:text-cyan-300 focus:text-cyan-300 transition-transform duration-150 ease-in-out hover:scale-150 focus:scale-150" aria-label="External Link"><IconExternalLink className="h-8 w-8" aria-hidden={true}/></a>;
  }   

  return (
    <div className="md:h-96 md:w-80 h-96 w-64 outline outline-4 outline-neutral-700 bg-neutral-800 p-5 m-5 flex flex-col items-start justify-between transition duration-150 ease-in-out hover:-translate-y-3 focus:-translate-y-3">
      <div className="pb-3">
        <h3 className="text-white md:text-xl text-lg font-semibold mb-4">{props.name}</h3>
        <p className="text-neutral-200 md:text-lg text-base">{props.description}</p>
        <ul className="flex flex-wrap justify-start text-gray-400 contrast-more:text-cyan-100 mt-5">
          {props.tags.map((tag) => (
            <li className="mr-3 mb-2" key={"tag-" + tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="py-1 w-full flex justify-end space-x-3">
        {codebase}
        {url}
      </div>
    </div>
);
}

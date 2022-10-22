import { CodeBracketSquareIcon, ArrowTopRightOnSquareIcon  } from '@heroicons/react/24/outline';

const projects = [
  {
    "name": "Random Joke Generator",
    "codebase": "https://github.com/Adam-Isaak-dev/random-joke-site",
    "url": "https://random-joke-site.vercel.app/",
    "description": "A simple website that lets you get random Dad jokes from an API at the click of a button. Made for fun and because of my family's love for bad jokes.",
    "tags": ["Next.js", "Material UI", "API"]
  }
];

export default function Projects(props) {


  return (
    <div className="bg-neutral-900">
      <div className="mx-auto max-w-7xl lg:py-30 md:py-20 sm:py-15 py-10">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">My Work</h2>
            <p className="mt-3 text-xl text-neutral-500">
            </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          {projects.map((project) => (
            <Project {...project} key={"project-" + project.name}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Project(props) {
  return (
    <div className="md:h-96 md:w-80 h-80 w-64 outline outline-4 outline-neutral-700 bg-neutral-800 p-5 flex flex-col items-start justify-between transition duration-150 ease-in-out hover:-translate-y-3">
      <div className="pb-3">
        <h3 className="text-white md:text-xl text-lg font-semibold mb-2">{props.name}</h3>
        <p className="text-neutral-200 md:text-lg text-base">{props.description}</p>
        <ul className="flex justify-start space-x-3 text-neutral-400 mt-5">
          {props.tags.map((tag) => (
            <li key={"tag-" + tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="py-1 w-full flex justify-end space-x-3">
        <a href={props.codebase}>
          <CodeBracketSquareIcon className="h-8 w-8 text-cyan-600 hover:text-cyan-300"/>
        </a>
        <a href={props.url}>
          <ArrowTopRightOnSquareIcon className="h-8 w-8 text-cyan-600 hover:text-cyan-300"/>
        </a>
      </div>
    </div>
);
}

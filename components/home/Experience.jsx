import * as React from 'react';
import { IconMapPin, IconExternalLink, IconCaretDown, IconCaretUp } from '@tabler/icons';

const jobs = [
  {
    title: "Lead Developer - Rally\xa0the\xa0Locals",
    start: "December\xa02021",
    end: "April\xa02022",
    location: "Remote (Winnipeg, Canada)",
    description: "Led the entire site development process and maintenance for the business. Key responsibilities were: managing a 5 person team, developing new site features (external API integrations, new dashboard options), connecting to Jira Cloud infrastructure though their RESTful API to dynamically pull data to our site, ensuring the site's infrastructure through regular server checks.",
    tags: ["Laravel", "PHP", "Javascript", "HTML", "CSS", "Jira Cloud"],
    url: "https://rallythelocals.com/",
    link: "rallythelocals.com",
  },
  {
    title: "Developer - Rally\xa0the\xa0Locals",
    start: "July\xa02021",
    end: "November\xa02021",
    location: "Remote (Winnipeg, Canada)",
    description: "Diligently worked at improving all facets of the site through the whole technology stack, including: developing a major site feature in the form of a external API integration with Facebook's Graph API, creating a sign-up experience that gathered the users interests and preferences.",
    tags: ["Laravel", "PHP", "RESTful API's", "Javascript", "HTML", "CSS"],
    url: "https://rallythelocals.com/",
    link: "rallythelocals.com",
  }
];
const education = [
  {
    title: "Software Development Diploma",
    start: "August\xa02020",
    end: "June\xa02021",
    location: "Manitoba Institute of Trades and Technology",
    description: "Learned the fundamentals of full stack development from front-end to back-end, across a wide number of different tools and techniques. Then throughout the year put those lessons into practice with a team regularly through group projects.",
    tags: [ "HTML", "CSS", "Javascript", "React", "C#", ".Net", "git", "Technical Writing"],
    url: false,
    link: false,
  },
  {
    title: "Computer Science Classes",
    start: "2017",
    end: "2020",
    location: "Dakota Collegiate",
    description: "Covered the core principles and concepts behind programing and computer science through C++, such as OOP and algorithmic thinking. Culminating in independently learning C# and managing a team to create a point and click adventure game.",
    tags: [ "C++", "C#", "OOP"],
    url: false,
    link: false,
  }
];


export default function Experience() {
  return (
    <div className="bg-neutral-900">
      <div className="mx-auto max-w-7xl lg:py-30 md:py-20 sm:py-15 py-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">How I Got Here</h2>
        </div>
        <div className="w-full">
          <div  className="px-5 mb-5">
            <h3 className="text-2xl w-full text-neutral-400 contrast-more:text-neutral-200 text-center">Professional Experience</h3>
          </div>
          <div className="flex flex-col justify-center items-center lg:max-w-3xl md:max-w-2xl sm:max-w-lg max-w-md mx-auto">
            <div className="min-w-full space-y-5">
              {jobs.map((job) => (
                <Entry {...job} key={"job-" + job.title}/>
              ))}
            </div>
          </div>
          <div  className="px-5 mb-5 mt-12">
            <h3 className="text-2xl w-full text-neutral-400 contrast-more:text-neutral-200 text-center">Education</h3>
          </div>
          <div className="flex flex-col justify-center items-center lg:max-w-3xl md:max-w-2xl sm:max-w-lg max-w-md mx-auto">
            <div className="min-w-full space-y-5">
              {education.map((entry) => (
                <Entry {...entry} key={"entry-" + entry.title}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Entry(props) {
  const [open, setOpen] = React.useState(false);

  function handleClick(e) {
    e.preventDefault();
    setOpen(!open);
  }

  return (
    <div className="md:w-4xl rounded-xl mx-2">
      <div className="rounded-xl lg:h-12 md:h-14 h-20 sm:px-10 px-5  bg-cyan-400 relative flex items-center justify-between " onClick={(e) => handleClick(e)}>
        <span className="sm:text-xl text-lg font-bold">{props.title}</span>
        <span className="sm:text-lg text-base font-semibold text-right">{props.start} - {props.end}</span>
        <button className="absolute -bottom-3 left-1/2 rounded-full p-0.5 bg-cyan-600 transition-transform duration-150 ease-in-out hover:scale-125 focus:scale-125" aria-hidden="true">
          {open ? <IconCaretUp className="h-6 w-6 text-cyan-100"/> : <IconCaretDown className="h-6 w-6 text-cyan-100"/> }
        </button>
      </div>
      <div className="bg-slate-900 rounded-xl">
        <div className={(open ? "opacity-100 max-h-128" : "opacity-0 max-h-0") + " transition-all ease-in-out duration-300 overflow-hidden"} id={"background-" + props.title}>
          <div className="space-y-5 p-5">
            <div className="flex space-x-3 items-center">
              <IconMapPin className="h-6 w-6 text-cyan-500"/>
              <span className="text-neutral-400">{props.location}</span>
            </div>
            <p className="text-lg text-neutral-200">
              {props.description}
            </p>
            <ul className="flex flex-wrap text-neutral-400">
              {props.tags.map((tag) => (
                <li className="rounded-full mr-3 px-3 py-1 mt-1 bg-slate-800" key={"tag-" + tag}>{tag}</li>
              ))}
            </ul>
            {!props.link ? " ": 
              <a className="flex space-x-3 justify-end items-center" href={props.url} target="_blank">
                <span className="text-neutral-400">{props.link}</span><IconExternalLink className="h-6 w-6 text-cyan-500"/>
              </a>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
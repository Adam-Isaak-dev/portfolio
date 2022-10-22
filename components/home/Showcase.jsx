import { Html5PlainIcon, Css3PlainIcon, BootstrapPlainIcon, TailwindcssPlainIcon, JavascriptPlainIcon, ReactOriginalIcon, MaterialuiPlainIcon, NextjsOriginalIcon, CplusplusPlainIcon, CsharpPlainIcon, MicrosoftsqlserverPlainIcon, DotNetPlainIcon, PhpPlainIcon, LaravelPlainIcon, MysqlPlainIcon, GitPlainIcon, BashPlainIcon } from 'react-devicons';

const panels = [
 {
  title: "Front End",
  text: "Experienced in HTML, CSS, JS, and frameworks like React, and Next.js.",
 },
 {
  title: "Back End",
  text: "Skilled in OOP and Functional paradigms: C#, PHP, C++, though .Net and Laravel.",
 },
 {
  title: "API's",
  text: "Adept at utilizing like Facebook's Graph API and Atlassian's REST Jira API's.",
 }
];
const logos = [
  {
    text: "HTML 5",
    icon: <Html5PlainIcon size="3rem"/>
  },
  {
    text: "CSS 3",
    icon: <Css3PlainIcon size="3rem"/>
  },
  {
    text: "Javascript",
    icon: <JavascriptPlainIcon size="3rem"/>
  },
  {
    text: "Bootstrap",
    icon: <BootstrapPlainIcon size="3rem"/>
  },
  {
    text: "Tailwind  CSS",
    icon: <TailwindcssPlainIcon size="3rem"/>
  },
  {
    text: "React",
    icon: <ReactOriginalIcon size="3rem"/>
  },
  {
    text: "Material UI",
    icon: <MaterialuiPlainIcon size="3rem"/>
  },
  {
    text: "Next.js",
    icon: <NextjsOriginalIcon size="3rem"/>
  },
  {
    text: "C++",
    icon: <CplusplusPlainIcon size="3rem"/>
  },
  {
    text: "C#",
    icon: <CsharpPlainIcon size="3rem"/>
  },
  {
    text: ".Net",
    icon: <DotNetPlainIcon size="3rem"/>
  },
  {
    text: "SQL Server",
    icon: <MicrosoftsqlserverPlainIcon size="3rem"/>
  },
  {
    text: "PHP",
    icon: <PhpPlainIcon size="3rem"/>
  },
  {
    text: "Laravel",
    icon: <LaravelPlainIcon size="3rem"/>
  },
  {
    text: "MySQL",
    icon: <MysqlPlainIcon size="3rem"/>
  },
  {
    text: "Git",
    icon: <GitPlainIcon size="3rem"/>
  },
  {
    text: "Bash",
    icon: <BashPlainIcon size="3rem"/>
  },
];



export default function Showcase(props) {
  return (
    <div className="bg-neutral-900">
      <div className="mx-auto max-w-7xl lg:py-30 md:py-20 sm:py-15 py-10 flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">What I Do</h2>
          <p className="mt-3 text-xl text-neutral-500">
            Disciplined across the board in a wide variety of tools.
          </p>
        </div>
        <div className="my-6 h-20 md:max-w-2xl max-w-full flex items-center overflow-hidden bg-slate-900 md:rounded border-x-4 border-neutral-500 outline outline-cyan-900 outline-offset-4 outline-4 motion-reduce:hidden">
          <div className="flex">
            <div className="flex animate-scroll-loop-left">
              {logos.map((logo) => (
                <Logo {...logo} key={"logo-" + logo.text + "-1"}/>
              ))}
            </div>
            <div className="flex animate-scroll-loop-left">
              {logos.map((logo) => (
                <Logo {...logo} key={"logo-" + logo.text + "-2"}/>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap max-w-6xl justify-around items-center">
          {panels.map((panel) => (
            <Panel {...panel} key={"panel-" + panel.title}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Logo(props) {
  return (
    <div className="mx-3">
      <div title={props.text}>
        {props.icon}
      </div>
    </div>
  );
}

export function Panel(props) {
  return (
    <div className="sm:w-80 sm:h-80 w-64 h-64 mt-5 mx-3 bg-neutral-800 border-solid border-4 border-neutral-700 transition duration-150 ease-in-out hover:-translate-y-5">
      <h3 className="sm:text-3xl text-2xl font-bold text-center text-white py-3">{props.title}</h3>
      <div className="border-l-4 border-solid border-neutral-500 mx-5">
        <p className="px-5 sm:py-5 py-2 sm:text-xl text-lg font-mono font-medium text-neutral-300">{props.text}</p>
      </div>
    </div>
  );
}
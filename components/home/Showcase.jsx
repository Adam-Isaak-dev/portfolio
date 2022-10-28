import { Html5PlainIcon, Css3PlainIcon, BootstrapPlainIcon, TailwindcssPlainIcon, JavascriptPlainIcon, ReactOriginalIcon, MaterialuiPlainIcon, NextjsOriginalIcon, CplusplusPlainIcon, CsharpPlainIcon, MicrosoftsqlserverPlainIcon, DotNetPlainIcon, PhpPlainIcon, LaravelPlainIcon, MysqlPlainIcon, GitPlainIcon, BashPlainIcon } from 'react-devicons';

const logos = [
  {
    text: "HTML 5",
    icon: <Html5PlainIcon size="3rem" aria-label="HTML 5 logo"/>
  },
  {
    text: "CSS 3",
    icon: <Css3PlainIcon size="3rem" aria-label="CSS 3 logo"/>
  },
  {
    text: "Javascript",
    icon: <JavascriptPlainIcon size="3rem" aria-label="Javascript logo"/>
  },
  {
    text: "Bootstrap",
    icon: <BootstrapPlainIcon size="3rem" aria-label="Bootstrap Logo"/>
  },
  {
    text: "Tailwind  CSS",
    icon: <TailwindcssPlainIcon size="3rem" aria-label="Tailwind CSS logo"/>
  },
  {
    text: "React",
    icon: <ReactOriginalIcon size="3rem" aria-label="React logo"/>
  },
  {
    text: "Material UI",
    icon: <MaterialuiPlainIcon size="3rem" aria-label="Material UI logo"/>
  },
  {
    text: "Next.js",
    icon: <NextjsOriginalIcon size="3rem" aria-label="Next.js logo"/>
  },
  {
    text: "C++",
    icon: <CplusplusPlainIcon size="3rem" aria-label="C plus plus logo"/>
  },
  {
    text: "C#",
    icon: <CsharpPlainIcon size="3rem" aria-label="C sharp logo"/>
  },
  {
    text: ".Net",
    icon: <DotNetPlainIcon size="3rem" aria-label="dot net logo"/>
  },
  {
    text: "SQL Server",
    icon: <MicrosoftsqlserverPlainIcon size="3rem" aria-label="SQL server logo"/>
  },
  {
    text: "PHP",
    icon: <PhpPlainIcon size="3rem" aria-label="PHP logo"/>
  },
  {
    text: "Laravel",
    icon: <LaravelPlainIcon size="3rem" aria-label="Laravel logo"/>
  },
  {
    text: "MySQL",
    icon: <MysqlPlainIcon size="3rem" aria-label="MySQL logo"/>
  },
  {
    text: "Git",
    icon: <GitPlainIcon size="3rem" aria-label="git logo"/>
  },
  {
    text: "Bash",
    icon: <BashPlainIcon size="3rem" aria-label="bash logo"/>
  },
];

export default function Showcase() {
  return (
    <div className="bg-neutral-900">
      <div className="mx-auto max-w-7xl lg:py-30 md:py-20 sm:py-15 py-10 flex flex-col justify-center items-center">
        <div className="mb-8 w-full px-5 text-center">
          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">&lt;/ What I&apos;ve Used /&gt;</h3>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-neutral-400 contrast-more:text-neutral-200">
            A showcase of what languages, frameworks, and tools I&apos;ve used thus far...
          </p>
        </div>
        <div className="h-20 xl:max-w-6xl lg:max-w-4xl md:max-w-2xl max-w-full flex items-center motion-safe:overflow-hidden motion-reduce:overflow-scroll bg-slate-900 md:rounded outline outline-cyan-900 outline-offset-4 outline-4">
          <div className="flex">
            <div className="flex motion-safe:animate-scroll-loop-left">
              {logos.map((logo) => (
                <Logo {...logo} key={"logo-" + logo.text + "-1"}/>
              ))}
            </div>
            <div className="flex animate-scroll-loop-left motion-reduce:hidden">
              {logos.map((logo) => (
                <Logo {...logo} key={"logo-" + logo.text + "-2"}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Logo(props) {
  return (
    <div className="mx-3" title={props.text}>
      {props.icon}
    </div>
  );
}
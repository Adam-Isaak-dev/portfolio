import { Html5PlainIcon, Css3PlainIcon, BootstrapPlainIcon, TailwindcssPlainIcon, JavascriptPlainIcon, ReactOriginalIcon, MaterialuiPlainIcon, NextjsOriginalIcon, CplusplusPlainIcon, CsharpPlainIcon, MicrosoftsqlserverPlainIcon, DotNetPlainIcon, PhpPlainIcon, LaravelPlainIcon, MysqlPlainIcon, GitPlainIcon, BashPlainIcon } from 'react-devicons';

const logos = [
  {
    text: "HTML 5",
    icon: <Html5PlainIcon size="3rem" aria-hidden="true"/>
  },
  {
    text: "CSS 3",
    icon: <Css3PlainIcon size="3rem" aria-hidden="true"/>
  },
  {
    text: "Javascript",
    icon: <JavascriptPlainIcon size="3rem" aria-hidden="true"/>
  },
  {
    text: "Bootstrap",
    icon: <BootstrapPlainIcon size="3rem" aria-hidden="true"/>
  },
  {
    text: "Tailwind  CSS",
    icon: <TailwindcssPlainIcon size="3rem" aria-hidden="true"/>
  },
  {
    text: "React",
    icon: <ReactOriginalIcon size="3rem" aria-hidden="true"/>
  },
  {
    text: "Material UI",
    icon: <MaterialuiPlainIcon size="3rem" aria-hidden="true"/>
  },
  {
    text: "Next.js",
    icon: <NextjsOriginalIcon size="3rem" aria-hidden="true"/>
  },
  {
    text: "C++",
    icon: <CplusplusPlainIcon size="3rem" aria-hidden="true"/>
  },
  {
    text: "C#",
    icon: <CsharpPlainIcon size="3rem" aria-hidden="true"/>
  },
  {
    text: ".Net",
    icon: <DotNetPlainIcon size="3rem" aria-hidden="true"/>
  },
  {
    text: "SQL Server",
    icon: <MicrosoftsqlserverPlainIcon size="3rem" aria-hidden="true"/>
  },
  {
    text: "PHP",
    icon: <PhpPlainIcon size="3rem" aria-hidden="true"/>
  },
  {
    text: "Laravel",
    icon: <LaravelPlainIcon size="3rem" aria-hidden="true"/>
  },
  {
    text: "MySQL",
    icon: <MysqlPlainIcon size="3rem" aria-hidden="true"/>
  },
  {
    text: "Git",
    icon: <GitPlainIcon size="3rem" aria-hidden="true"/>
  },
  {
    text: "Bash",
    icon: <BashPlainIcon size="3rem" aria-hidden="true"/>
  },
];

export default function Showcase() {
  return (
    <div className="bg-neutral-900">
      <div className="mx-auto max-w-7xl lg:py-30 md:py-20 sm:py-15 py-10 flex flex-col justify-center items-center">
        <div className="mb-8 w-full px-5 text-center">
          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">&lt;/ What I've Used /&gt;</h3>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-neutral-400 contrast-more:text-neutral-200">
            A showcase of what languages, frameworks, and tools I've used thus far...
          </p>
        </div>
        <div className="h-20 xl:max-w-6xl lg:max-w-4xl md:max-w-2xl max-w-full flex items-center overflow-hidden bg-slate-900 md:rounded outline outline-cyan-900 outline-offset-4 outline-4 motion-reduce:hidden">
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
      </div>
    </div>
  );
}

export function Logo(props) {
  return (
    <div className="mx-3" title={props.text} aria-label={props.text}>
      {props.icon}
    </div>
  );
}
import { Html5PlainIcon, Css3PlainIcon, BootstrapPlainIcon, TailwindcssPlainIcon, JavascriptPlainIcon, ReactOriginalIcon, MaterialuiPlainIcon, NextjsOriginalIcon, CplusplusPlainIcon, CsharpPlainIcon, MicrosoftsqlserverPlainIcon, DotNetPlainIcon, PhpPlainIcon, LaravelPlainIcon, MysqlPlainIcon, GitPlainIcon, BashPlainIcon } from 'react-devicons';

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

export default function Showcase() {
  return (
    <div className="bg-neutral-900">
      <div className="mx-auto max-w-7xl lg:py-30 md:py-20 sm:py-15 py-10 flex flex-col justify-center items-center">
        <div className="bg-neutral-700 h-1 w-1/2 rounded-full mb-2" />
        <div className="mb-8 w-full pl-5 text-center">
          <p className="mt-3 text-base sm:text-lg md:text-xl  text-neutral-300 ">
            &lt;/ What I've Used /&gt;
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
        <div className="bg-neutral-700 h-1 w-52 w-1/2 rounded-full mt-10" />
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
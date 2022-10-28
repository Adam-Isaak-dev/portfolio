import { IconUser, IconPencil, IconBulb} from '@tabler/icons';

const panels = [
 {
  title: "People First",
  text: "Design and approach solutions to be usable and readable to others, developer or user.",
  icon: <IconUser className="h-10 w-10" aria-label="User Icon"/>,
 },
 {
  title: "Technical",
  text: "From the top level down, ensure clarity and precision throughout to bring out the details.",
  icon: <IconPencil className="h-10 w-10" aria-label="Pencil Icon"/>,
 },
 {
  title: "Creative",
  text: "There's more than one way to solve a problem. Approach them openly to find the best solution.",
  icon: <IconBulb className="h-10 w-10" aria-label="Lightbulb Icon"/>,
 }
];

export default function Principles(props) {
  return (
    <div className="bg-neutral-900" >
      <div className="mx-auto max-w-7xl lg:py-30 md:py-20 sm:py-15 py-10 flex flex-col justify-center items-center" >
        <div className="text-center pt-36" id="about">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">My Approach</h2>
          <p className="mt-3 text-xl text-neutral-400 contrast-more:text-neutral-200 px-5">
            Always looking to learn and make something interesting with it.
          </p>
        </div>
        <div className="mt-3 flex flex-wrap xl:max-w-6xl lg:max-w-3xl justify-around items-center">
          {panels.map((panel) => (
            <Panel {...panel} key={"panel-" + panel.title}/>
          ))}
        </div>
      </div>
    </div>
  );
}



export function Panel(props) {
  return (
    <div className="sm:w-80 sm:h-80 w-64 h-88 mt-10 mx-3 bg-neutral-800 border-solid border-4 border-neutral-700 transition duration-150 ease-in-out hover:-translate-y-5 focus:-translate-y-5 relative flex flex-col justify-between">
      <h3 className="sm:text-3xl text-2xl font-bold text-center text-white py-3">{props.title}</h3>
      <div className="flex justify-center items-center text-cyan-200 py-2">
        {props.icon}
      </div>
      <div className="border-l-4 border-solid border-neutral-500 mx-5 mb-5">
        <p className="px-5 sm:py-5 py-2 md:text-xl sm:text-lg text-base font-mono font-medium text-neutral-300 contrast-more:text-neutral-100">{props.text}</p>
      </div>
    </div>
  );
}
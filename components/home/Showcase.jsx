const data = [
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
        <div className="mt-10 flex flex-wrap max-w-6xl justify-around items-center">
          {data.map((panel) => (
            <Panel {...panel}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Panel(props) {
  return (
    <div className="sm:w-80 sm:h-80 w-64 h-64 mt-5 mx-3 bg-neutral-800 border-solid border-4 border-neutral-700 transition duration-150 ease-in-out hover:-translate-y-5" key={"panel-" + props.title}>
      <h3 className="sm:text-3xl text-2xl font-bold text-center text-white py-3">{props.title}</h3>
      <div className="border-l-4 border-solid border-neutral-500 mx-5">
        <p className="px-5 sm:py-5 py-2 sm:text-xl text-lg font-mono font-medium text-neutral-300">{props.text}</p>
      </div>
    </div>
  );
}
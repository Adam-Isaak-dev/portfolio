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
        <div className="mt-10 flex flex-wrap max-w-6xl justify-around items-center space-x-5">
          <div class="w-80 h-80 mt-5 bg-neutral-800 border-solid border-4 border-neutral-700 transition duration-150 ease-in-out hover:-translate-y-5">
            <h3 className="text-3xl font-bold text-center text-white py-3">Front End</h3>
            <div className="border-l-4 border-solid border-neutral-500 mx-5">
              <p className="px-5 py-5 text-xl font-mono font-medium text-neutral-300">
                Experienced in HTML, CSS, JS, and frameworks like React, and Next.js
                </p>
            </div>
          </div>
          <div class="w-80 h-80 mt-5 bg-neutral-800 border-solid border-4 border-neutral-700 transition duration-150 ease-in-out hover:-translate-y-5">
            <h3 className="text-3xl font-bold text-center text-white py-3">Back End</h3>
            <div className="border-l-4 border-solid border-neutral-500 mx-5">
              <p className="px-5 py-5 text-xl font-mono font-medium text-neutral-300">
                Skilled in OOP and Functional paradigms: C#, PHP, C++, though .Net and Laravel
              </p>
            </div>
          </div>
          <div class="w-80 h-80 mt-5 bg-neutral-800 border-solid border-4 border-neutral-700 transition duration-150 ease-in-out hover:-translate-y-5">
            <h3 className="text-3xl font-bold text-center text-white py-3">API's</h3>
            <div className="border-l-4 border-solid border-neutral-500 mx-5">
              <p className="px-5 py-5 text-xl font-mono font-medium text-neutral-300">
                Adept at utilizing like Facebook's Graph API and Atlassian's REST Jira API's.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
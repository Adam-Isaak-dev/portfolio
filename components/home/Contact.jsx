export default function Contact(props) {
  return(
    <div className="bg-gradient-radial from-neutral-800 to-neutral-900" id="contact">
      <div className="mx-auto max-w-7xl lg:py-30 md:py-20 sm:py-15 sm:py-10 py-5 flex md:flex-row flex-col items-center">
        <div className="container px-5">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Contact</h2>
          <p className="mt-3 text-xl text-neutral-500">
            Want to get in touch? You can find me here:
          </p>
        </div>
        <div className="container flex flex-col justify-center md:items-end items-center space-y-5 py-6 px-4">
          {props.accounts.map((account) => (
            <a className="sm:w-96 w-72" href={account.url} key={account.name}>
              <button className={"flex w-full items-center justify-around rounded-md border border-transparent px-8 py-3 text-base font-medium md:py-4 md:px-10 md:text-lg " + account.colors}>
                <span className="w-6">{account.icon}</span>
                <span className="w-40">{account.name}</span>
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
import Link from 'next/link';

export default function HeroSection(props) {

  function handleClick(e) {
    e.preventDefault();

    document.getElementById(e.target.dataset.anchor).scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 to-neutral-900" id="hero">
      <div className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 pb-36">
        <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Greetings, I'm </span>
              <span className="block text-cyan-300 xl:inline">Adam</span>
            </h1>
            <p className="mt-3 text-2xl text-gray-300 contrast-more:text-gray-100">
              &lt;&nbsp;Software&nbsp;Developer&nbsp;&gt;
            </p>
            <p className="mt-3 text-base text-gray-400 contrast-more:text-gray-200 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl">
              Welcome to my little corner of the internet. This my website, feel free to stay a while and take a look around.
            </p>
            <div className="mt-5 sm:mt-8 flex justify-center items-center flex-col sm:flex-row  sm:space-y-0 space-y-3 sm:space-x-3 space-x-0">
              <div className="rounded-md shadow">
                <Link href="/#portfolio" scroll={false}>
                  <a onClick={(e) => handleClick(e)}>
                    <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-8 py-3 text-base font-medium text-white hover:bg-cyan-700 focus:bg-cyan-700 md:py-4 md:px-10 md:text-lg" data-anchor="portfolio">Projects</button>
                  </a>
                </Link>
              </div>
              <div className="rounded-md shadow">
                <Link href="/#contact" scroll={false}>
                  <a onClick={(e) => handleClick(e)}>
                    <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-100 px-8 py-3 text-base font-medium text-cyan-900 hover:bg-cyan-200 focus:bg-cyan-200 md:py-4 md:px-10 md:text-lg" data-anchor="contact">Get in Touch</button>
                  </a>
                </Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
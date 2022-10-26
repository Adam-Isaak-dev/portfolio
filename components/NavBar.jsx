import * as React from 'react';
import Link from 'next/link';
import { IconMenu2, IconX } from '@tabler/icons';

const navigation = [
  {name: 'Home', href: '/#home', anchor: "home"},
  {name: 'About', href: '/#about', anchor: "about"},
  {name: 'Portfolio', href: '/#portfolio', anchor: "portfolio"},
  {name: 'Contact', href: '/#contact', anchor: "contact"},
];

export default function NavBar(props) {
  const [open, setOpen] = React.useState(false);
  const [stuck, setStuck] = React.useState(false);
  const navItemWidth = `w-1/${navigation.length}`;

  function handleOpen() {
    setOpen(!open);
  }

  function handleClick(e) {
    if(e.target.dataset.anchor) {
      e.preventDefault();

      if(open) {
        setOpen(!open);
      }

      document.getElementById(e.target.dataset.anchor).scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  function handleScroll() {
    const hero = document.getElementById("hero");
    const rect = hero.getBoundingClientRect();
  
    setStuck(rect.bottom < 0);
  }

  React.useEffect(() => {
    document.addEventListener('scroll', handleScroll, true);
    return () => document.removeEventListener('scroll', handleScroll);
  })

  return (
    <nav className={"text-white border-cyan-800 border-solid transition-transform duration-500 ease-in-out " + (stuck ? "sticky top-0 bg-gradient-to-r from-gray-900 to-cyan-900 border-b-2 z-20 translate-y-0 shadow-2xl" : "bg-transparent border-b-0 -translate-y-20" )}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-0 lg:py-2">
        <div className="sm:h-16 h-12 relative flex flex-row items-center md:justify-between justify-start">
          <div className="block md:hidden mr-4 ">
            <div className="flex items-center">
              <button type="button" className="rounded-md text-neutral-300 hover:text-cyan-300 hover:outline-none hover:ring-2 hover:ring-cyan-500" onClick={(e) => handleOpen(e)}>
                <span className="sr-only">Open menu</span>
                {open ? <IconX className="h-6 w-6"/> : <IconMenu2 className="h-6 w-6"/>}
              </button>
            </div>
          </div>
          <div className="">
            <Link href="/#home" scroll={false}>
              <a className="cursor-pointer md:pb-2 sm:pb-1 hover:text-cyan-200 hover:border-b-4 border-cyan-500" onClick={(e) => handleClick(e)}>
                <span className="lg:text-5xl md:text-4xl sm:text-4xl text-2xl font-logo" data-anchor="home">	&gt;_&nbsp;Adam_Isaak&nbsp;-dev</span>
              </a>
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="relative flex items-center justify-between lg:space-x-8 space-x-4">
              {navigation.map((item) => (
                <li className={`${navItemWidth} flex justify-center`} key={item.name}>
                  <Link href={item.href} scroll={!item.anchor}>
                    <a className="cursor-pointer lg:text-xl text-base hover:font-bold hover:text-cyan-100 hover:border-b-4 border-cyan-500" data-anchor={item.anchor} onClick={(e) => handleClick(e)}>
                      <span className="sm:pr-2 pr-1 font-bold">/</span>{item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        <div className={(open ? "opacity-100 max-h-96" : "opacity-0 max-h-0") + " transition-all ease-in-out duration-300 overflow-hidden"}>
          <div className="border-y-2 border-neutral-600 bg-neutral-800 py-2.5">
            <ul className="relative flex flex-col items-center justify-between space-y-1.5">
              {navigation.map((item) => (
                <li className="flex justify-start items-center py-1 ml-5 w-full" key={item.name}>
                  <Link href={item.href} scroll={!item.anchor}>
                    <a className="cursor-pointer lg:text-xl text-base hover:font-bold hover:text-cyan-100 hover:border-b-4 border-cyan-500" data-anchor={item.anchor} onClick={(e) => handleClick(e)}>
                      <span className="sm:pr-2 pr-1 font-bold">/</span>{item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
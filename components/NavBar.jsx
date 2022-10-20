import Link from 'next/link'

const navigation = [
  {name: 'Home', href: '/', current: false},
  {name: 'About', href: '/about', current: false},
  {name: 'Portfolio', href: '/portfolio', current: false},
  {name: 'Articles', href: '/articles', current: false},
];

export default function NavBar(props) {
  const navItemWidth = `w-1/${navigation.length}`;

  return (
    <nav className="bg-slate-900 text-emerald-400">
       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex sm:h-16 h-12 items-center justify-center  sm:mb-0 mb-1">
          <Link href="/">
            <div className="cursor-pointer md:px-6 px-5 border-dashed md:border-b-4 border-b-2 border-emerald-400">
              <span className="md:text-5xl sm:text-4xl text-3xl font-logo">	&gt;_&nbsp;Adam_Isaak&nbsp;-dev</span>
            </div>
          </Link>
        </div>
        <div className="mx-auto max-w-xs md:max-w-sm lg:max-w-md">
          <ul className="relative flex md:h-10 h-4 items-center justify-between">
            {navigation.map((item) => (
              <li className={`${navItemWidth} flex justify-center`} key={item.name}>
                <Link href={item.href}>
                  <div className="cursor-pointer">
                    <span className="md:text-xl text-base hover:font-bold hover:border-b-4 border-emerald-400">{item.name}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
       </div> 
    </nav>
  );
}
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
    <nav className="bg-gray-900 text-white">
       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-0 lg:py-2">
        <div className="sm:h-16 h-12 relative flex flex-col md:flex-row items-center justify-between">
          <div className="">
            <Link href="/">
              <div className="cursor-pointer md:pb-2 sm:pb-1">
                <span className="lg:text-5xl md:text-4xl sm:text-4xl text-2xl font-logo">	&gt;_&nbsp;Adam_Isaak&nbsp;-dev</span>
              </div>
            </Link>
          </div>
          <div className="">
            <ul className="relative flex items-center justify-between lg:space-x-8 space-x-4">
              {navigation.map((item) => (
                <li className={`${navItemWidth} flex justify-center`} key={item.name}>
                  <Link href={item.href}>
                    <div className="cursor-pointer lg:text-xl text-base hover:font-bold hover:text-cyan-100 hover:border-b-4 border-cyan-500">
                      <span className="sm:pr-2 pr-1 font-bold">/</span>
                      <span className="">{item.name}</span>
                    </div>
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
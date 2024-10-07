// import Image from "next/image";
import Link from "next/link";



const Navbar = () => {

    const navItems: { title: string; path: string }[] = [
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'Service',
            path: '/aboutus',
        },
        {
            title: 'Portfolio',
            path: '/AllShoe',
        },
        {
            title: 'Blogs',
            path: '/blog',
        },
        {
            title: 'Contacts Us',
            path: '/contact-us',
        }
    ];


    return (
        <header className="p-2">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link className="block text-teal-600" href="/">
                            <span className="sr-only">Home</span>
                            {/* <Image
                                className=""
                                src={icon1}
                                alt="icon 1"
                                width={180}
                                height={38}
                                priority
                            /> */}
                            <h2>JobCamp</h2>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                {navItems?.map((navItem) => (
                                    <li key={navItem.path}>
                                        <Link
                                            className='text-gray-800 font-bold  inline-block transition  hover:text-gray-500/75'
                                            href={navItem.path}
                                        >
                                            {navItem.title}
                                        </Link>
                                    </li>
                                ))}

                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">

                            <div className="hidden sm:flex">
                                <Link className="block text-teal-600" href="/">
                                    <span className="sr-only">Home</span>
                                    {/* <Image
                                        className=""
                                        src={icon2}
                                        alt="icon 1"
                                        width={200}
                                        height={60}
                                        priority
                                    /> */}
                                    <h2>LogIn</h2>
                                </Link>
                            </div>
                        </div>

                        <div className="block md:hidden">
                            <button className="rounded p-2 text-gray-600 transition hover:text-gray-600/75">
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content dropdown-end right-1 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                                    >
                                        {navItems?.map((navItem) => (
                                            <li key={navItem.path}>
                                                <Link
                                                    className='text-gray-800 font-bold  inline-block transition  hover:text-gray-500/75'
                                                    href={navItem.path}
                                                >
                                                    {navItem.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
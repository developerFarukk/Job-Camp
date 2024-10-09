import Image from "next/image";
import Link from "next/link";
import job from '../../../public/jobcamp.ico'
import { TfiSettings } from "react-icons/tfi";



const Navbar = () => {

    const navItems: { title: string; path: string }[] = [
        {
            title: 'Job Search',
            path: '/',
        },
        {
            title: 'Service',
            path: '/service',
        },
        {
            title: 'career Advice',
            path: '/advice',
        },
        {
            title: 'Notice',
            path: '/notice',
        },
        {
            title: 'Explore Companies',
            path: '/explore',
        }
    ];


    return (
        <header className="shrink-0 ">
            <div className="mx-auto max-w-screen ">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex gap-1 items-center">

                        {/* Menu setting */}
                        <div>
                            <div>
                                <TfiSettings className="h-10 w-10 p-1 hover:bg-blue-100 rounded-full" />
                            </div>
                        </div>

                        <Link className="block text-teal-600 hover:bg-blue-50 hover:text-black rounded-full p-2" href="/">
                            <div className="flex gap-2 items-center">
                                <Image
                                    className=""
                                    src={job}
                                    alt="JobCamp"
                                    width={60}
                                    height={60}
                                    priority
                                />
                                <div className="hidden lg:block md:block">
                                    <h2 className=" text-3xl font-bold">JobCamp</h2>
                                </div>
                            </div>
                        </Link>

                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                {navItems?.map((navItem) => (
                                    <li key={navItem.path}>
                                        <Link
                                            className='text-gray-800 font-bold lg:text-lg inline-block transition hover-underline-animation'
                                            href={navItem.path}
                                        >
                                            {navItem.title}
                                        </Link>
                                    </li>
                                ))}

                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center ">
                        <div className="sm:flex sm:gap-4">

                            <div className=" sm:flex">
                                <Link className="block text-teal-600" href="/">
                                    {/* <Image
                                        className=""
                                        src={icon2}
                                        alt="icon 1"
                                        width={200}
                                        height={60}
                                        priority
                                    /> */}
                                    <button className="btn btn-warning"><h2>LogIn</h2></button>
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
                                        className="menu bg-blue-50 menu-sm dropdown-content dropdown-end right-1 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                                    >
                                        {navItems?.map((navItem) => (
                                            <li key={navItem.path}>
                                                <Link
                                                    className='text-gray-800  font-bold  inline-block transition  menu'
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
import Image from "next/image";




function NavBar() {
    return (
        <nav className="nav">
            <div>
                <Image src="/images/logo.png" alt="logo" width={150} height={24} />
            </div>
            <div>
                <ul className="actions">
                    <li className="btn rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="#fff" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </li>
                    <li className="btn rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="#fff" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
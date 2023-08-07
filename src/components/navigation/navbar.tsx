import { Prompt } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';

const prompt = Prompt({weight:['400'],style: ['normal'],subsets: ['latin']})

const Navbar = () => {
    return(
        <header className="w-full h-16 px-4 md:px-10 lg:px-32 flex fixed top-0 left-0 items-center bg-white z-30 shadow-md">
            <Link href={"/"} className={`${prompt.className} text-4xl flex gap-2 items-center justify-center`}>
                <Image
                    className=''
                    width={40}
                    height={40}
                    alt="Next Ninja Icon"
                    src="/assets/logo-icon.svg"
              />
              Next Ninja
            </Link>
            {/* <nav></nav> */}
        </header>
    )
}

export default Navbar;
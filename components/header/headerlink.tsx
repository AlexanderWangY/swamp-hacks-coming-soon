import Link from "next/link";

const HeaderLink = ({
    children, link
  }: Readonly<{
    children: React.ReactNode, link: string;
  }>) => {
    return (
        <Link className='group flex-col items-center text-xl opacity-65 transition duration-200 hover:opacity-100 select-none hidden xl:flex' href={link}>
            {children}
            <span className='duration-350 h-0.5 w-0 bg-white transition-all group-hover:w-full'></span>
        </Link>
    );
}

export default HeaderLink;
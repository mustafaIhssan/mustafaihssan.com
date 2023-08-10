import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "#", label: "About" },
  { href: "#", label: "What I do" },
  // { href: "#", label: "My Work" },
  { href: "#", label: "Contact" },
];

export const Header = () => {
  return (
    <header className="text-primary flex flex-row justify-between text-lg	p-1 pt-5 leading-5 max-w-screen-lg mx-auto">
      <div className="font-semibold flex space-x-3 justify-center items-center">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          alt="Musatafa's profile picture"
        />
        <div className="flex">
          Mustafa
          <div className="font-normal">Ihssan</div>
        </div>
      </div>
      <nav>
        <ul className="flex flex-row space-x-10 font-medium">
          {links.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="hover:border-b hover:border-primary pb-2"
            >
              {label}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

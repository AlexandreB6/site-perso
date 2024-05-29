import Link from "next/link";
import Image from "next/image";

const links = [
  {
    key: "1",
    name: "Galeries images",
    href: "/galeries",
    icon: "icone galery",
  },
  {
    key: "2",
    name: "recettes",
    href: "/recettes",
    icon: "icon recettes",
  },
];

export default function Header() {
  return (
    <header
      role="banner"
      className=" w-full h-full px-3 py-4 md:px-2 bg-purple-900 "
    >
      <div className="max-w-7xl flex flex-row justify-between items-end mr-auto ml-auto">
        <Link href="/">
          <Image
            src="/logo.jpg"
            className=""
            width={50}
            height={50}
            alt="Avatar"
          />
        </Link>
        <ul className="text-white flex flex-row content-center gap-4">
          {links.map((link) => {
            return (
              <li>
                <Link key={link.key} href={link.href}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

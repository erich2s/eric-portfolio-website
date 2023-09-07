"use client";
import Link from "next/link";

export default function Header() {
  const links = ["about", "skills", "contact"];
  return (
    <>
      <nav className="justify-centerpy-2 flex w-full select-none py-2 font-light md:px-28">
        <div className="container flex flex-col items-center justify-between md:flex-row">
          <div id="logo">
            <Link href="/">Eric Huang</Link>
          </div>
          <div className="nav-links flex gap-x-8 text-xs md:text-base">
            {links.map((link) => (
              <span
                key={link}
                className="cursor-pointer"
                onClick={() => {
                  document
                    .getElementById(link)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </span>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

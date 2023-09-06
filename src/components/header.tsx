import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* <Blur /> */}
      <nav className="justify-centerpy-2 flex w-full select-none py-2 font-light md:px-32">
        <div className="container flex flex-col items-center justify-between md:flex-row">
          <div id="logo">
            <Link href="/">Eric Huang</Link>
          </div>
          <div className="nav-links flex gap-x-8 text-xs md:text-base">
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

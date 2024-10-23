import Link from "next/link";

export default function Navbar() {
  return (
    <div className="text-white flex flex-row justify-between items-center mx-[2vw]">
      <Link href="/">Aamer Faiz</Link>
      <div className="h-16 flex flex-row justify-end text-white items-center">
        <a href="/documents/resume.pdf" download className="mx-[1vw] cursor-pointer">
          My Resume
        </a>
        {/* <Link href="/contact" className="mx-[1vw] cursor-pointer">Contact Me</Link> */}
      </div>
    </div>
  );
}

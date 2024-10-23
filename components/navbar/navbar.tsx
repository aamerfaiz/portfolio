import Link from "next/link"
import styles from "./style.module.css"

export default function Navbar() {
  return (
    <div className="text-white flex flex-row justify-between items-center mx-[2vw]">
      <Link href="/">Aamer Faiz</Link>
      <div className="h-16 flex flex-row justify-end text-white items-center">
        <Link href="" className="mx-[1vw] cursor-pointer">Experience</Link>
        <Link href="/test" className="mx-[1vw] cursor-pointer">Download Resume</Link>
        <Link href="" className="mx-[1vw] cursor-pointer">Contact Me</Link>
        
      </div>
    </div>

  );
}

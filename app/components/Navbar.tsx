'use client'
import { useState } from "react";
import { Bebas_Neue, Manrope } from "next/font/google";
import Image from "next/image";
import HamburgerBtn from "@/app/assets/hamburger.svg";
import CancelBtn from "@/app/assets/cancel.svg";
import Link from "next/link";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"]
})

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
})

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex items-baseline w-full justify-between items-center px-5 py-3 lg:px-24">
        <Link href="/" className={`${bebas.className} text-3xl`}>Jim Ntare</Link>
        {/* Hamburger Button */}
        <div
          className="lg:hidden absolute right-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger Icon */}
          {
            isOpen ?
              <Image alt="hamburger btn" className="w-9" src={HamburgerBtn} /> :
              <Image alt="cancel btn" className="w-9" src={CancelBtn} />
          }
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:block lg:w-1/6 lg:flex lg:justify-between">
          <Link href="#projects">Work</Link>
          <Link href="#projects">About</Link>
          <Link href="#projects">Contact</Link>
        </div>
      </div>
      <div className="w-full">
        {
          isOpen && (
            <div className={`${manrope.className} absolute w-full text-center text-2xl flex flex-col bg-black`}>
              <Link href="#projects" className="py-2" onClick={() => setIsOpen(false)}>Work</Link>
              <Link href="/about" className="py-2" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="#contact" className="py-2" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          )
        }
      </div>
    </div>
  )
}

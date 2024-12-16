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
    <div className="top-0 sticky">
      <div className="flex w-full bg-black justify-between items-center px-5 py-4 lg:px-24 lg:py-5">
        <Link href="/" onClick={() => setIsOpen(false)} className={`${bebas.className} text-3xl`}>Jim Ntare</Link>
        {/* Hamburger Button */}
        <div
          className="absolute right-4 top-3 lg:hidden "
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
          <Link href="/#projects">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </div>
      <div className="w-full">
        {
          isOpen && (
            <div
              className={`
                ${manrope.className} 
                absolute 
                w-full 
                text-center 
                text-2xl 
                flex 
                flex-col 
                justify-evenly 
                justify-center 
                bg-black 
                h-screen`}>
              <Link href="/" className="py-2" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" className="py-2" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/#contact" className="py-2" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          )
        }
      </div>
    </div>
  )
}

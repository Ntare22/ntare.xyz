import { Bebas_Neue, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import linkedin from "@/app/assets/linkedin.svg";
import github from "@/app/assets/github.svg";
import x from "@/app/assets/x.svg";
import instagram from "@/app/assets/instagram.svg"
import ContactForm from "../ContactForm";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"]
})

export default function Contact({
  heading,
  description,
  links
}: any) {
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
  const parts = description.split(emailRegex);
  const email = description.match(emailRegex)?.[0]

  const linkedIn = links.find((link: any) => link.link_name == 'linkedin')
  const gitHub = links.find((link: any) => link.link_name == 'github')
  const xLogo = links.find((link: any) => link.link_name == 'x')
  const insta = links.find((link: any) => link.link_name == 'instagram')

  return (
    <div id="contact" className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2">
        <h1 className={`${bebas.className} text-5xl lg:text-6xl lg:w-1/2`}>{heading}</h1>
        <div>
          <p className="font-thin text-[#C7C7C7] lg:text-xl">
            {parts[0]}
            {email && (
              <a href={`mailto:${email}`} className="underline decoration-green-500 text-white underline-offset-4">{email}</a>
            )}
            {parts[1]}
          </p>
        </div>
        <div className="flex items-center py-3">
          <Link target="_blank" href={linkedIn.url}>
            <Image alt={linkedIn.link_name} width={25} height={20} src={linkedin} />
          </Link>
          <Link target="_blank" href={gitHub.url} className="ml-2">
            <Image alt={gitHub.link_name} width={25} height={20} src={github} />
          </Link>
          <Link target="_blank" href={xLogo.url} className="ml-2">
            <Image alt={xLogo.link_name} width={25} height={20} src={x} />
          </Link>
          <Link target="_blank" href={insta.url} className="ml-2">
            <Image alt={insta.link_name} width={25} height={20} src={instagram} />
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2 lg:mr-20">
        <ContactForm />
      </div>
    </div>
  )
}

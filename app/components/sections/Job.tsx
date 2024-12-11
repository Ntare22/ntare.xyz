import { Manrope } from "next/font/google";
import moment from "moment";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
})

export default function Job({
  role,
  company,
  description,
  start_date,
  end_date
}: any) {
  return (
    <div className={`${manrope.className} py-2`}>
      <div className="flex flex-col py-2 lg:flex-row lg:justify-between">
        <h1 className={`${manrope.className} font-thin`}>{role}</h1>
        <p className={`${manrope.className} text-[#C7C7C7]`}>{`${moment(start_date).format("MMMM, YYYY")} - ${!end_date ? 'Present' : moment(start_date).format("MMMM, YYYY")}`}</p>
      </div>
      <p className={`${manrope.className} py-3 text-[#D3E97A]`}>{company}</p>
      <p className="font-thin text-[#C7C7C7]">{description}</p>
    </div>
  )
}

import { av1, av2, av3, av4, av5, av6, av7, av8 } from "@/helpers/images"
import Image from "next/image"

const avatars = [av1, av2, av3, av4, av5, av6, av7]

export const Decorations = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 -z-50 overflow-hidden rank-before decorations-newsletter">
      {avatars.map((a, i) => (
        <div className={`a a-${i + 1}`} key={i}>
          <Image src={a} alt="avatar" />
        </div>
      ))}
    </div>
  )
}

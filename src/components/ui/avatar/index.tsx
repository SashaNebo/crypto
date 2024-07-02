import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { Icon } from "../icon"
import { AVATAR } from "@/types"

export const Avatar = ({ avatarImg, verified }: AVATAR) => {
  return (
    <Link className="w-max relative block" href={"/"} scroll={false}>
      <div className="w-[40px] h-[40px] border-2 border-solid border-[#D7D7E5] rounded-full overflow-hidden dark:border-[#2A2533]">
        <Image className="" src={avatarImg} alt="avatar" quality={100} />
      </div>
      {verified && (
        <Icon
          className="w-5 h-5 absolute right-0 bottom-0 translate-x-[20%] translate-y-[10%]"
          id="verified"
        />
      )}
    </Link>
  )
}

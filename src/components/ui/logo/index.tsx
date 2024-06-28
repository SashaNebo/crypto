import Link from "next/link"
import clsx from "clsx"
import { Icon } from "../icon"

export const Logo = ({
  className,
  size = "default",
}: {
  className?: string
  size?: "default" | "lg"
}) => {
  const linkStyles = clsx(
    className,
    {
      default:
        "gap-x-2 text-[20px] leading-tight max-sm:gap-x-[6px] max-sm:text-[16px]",
      lg: "gap-x-[15px] text-[37px] leading-snug max-sm:gap-x-[10px] max-sm:text-[27px]",
    }[size],
  )

  const iconStyles = clsx(
    {
      default: "w-[25px] max-sm:w-[19px]",
      lg: "w-[46px] max-sm:w-[33px]",
    }[size],
  )

  return (
    <Link
      className={clsx(
        "w-max flex items-center font-bold text-color-text",
        linkStyles,
      )}
      href={"/"}
      aria-label="go home">
      <Icon className={iconStyles} id="logo" />
      <span>Crypto®</span>
    </Link>
  )
}

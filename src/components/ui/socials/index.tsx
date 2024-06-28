import { SOCIAL_ITEM } from "@/types"
import Link from "next/link"
import { Icon } from "../icon"
import clsx from "clsx"

export const Socials = ({
  className,
  array,
}: {
  className?: string
  array: SOCIAL_ITEM[]
}) => {
  return (
    <ul className={clsx("nav-socials", className)}>
      {array.map(({ href, iconId }) => (
        <li key={href}>
          <Link
            href={href}
            aria-label={`open social ${href}`}
            rel="noopener noreferrer nofollow"
            target="_blank">
            <Icon id={iconId} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

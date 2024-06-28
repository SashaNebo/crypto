import Link from "next/link"
import clsx from "clsx"
import { NAV_ITEM } from "@/types"

export const Nav = ({
  className,
  array,
  onClickLink,
}: {
  className?: string
  array: NAV_ITEM[]
  onClickLink?: () => void
}) => {
  return (
    <ul className={clsx("nav", className)}>
      {array.map(({ id, text, href }) => (
        <li key={id}>
          <Link
            onClick={onClickLink}
            href={href}
            aria-label={`navigation to ${text}`}
            scroll={false}>
            {text}
          </Link>
        </li>
      ))}
    </ul>
  )
}

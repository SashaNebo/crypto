import { Icon } from "@/components/ui/icon"
import { socialItems } from "@/constants"
import { anMenuSocialsItem } from "@/constants/animations"
import { motion } from "framer-motion"
import Link from "next/link"

export const MenuSocials = () => {
  return (
    <ul className="menu-socials">
      {socialItems.map(({ iconId, href }, i) => (
        <motion.li
          className="menu-socials__item"
          key={iconId}
          variants={anMenuSocialsItem}
          custom={i}
          initial="initial"
          animate="enter"
          exit="exit">
          <Link
            href={href}
            className="menu-socials__link"
            aria-label={`open social ${href}`}
            rel="noopener noreferrer nofollow"
            target="_blank">
            <Icon id={iconId} />
          </Link>
        </motion.li>
      ))}
    </ul>
  )
}

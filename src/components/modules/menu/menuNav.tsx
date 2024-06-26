import { navItemsNavigation } from "@/constants"
import { anMenuNavItem } from "@/constants/animations"
import { motion } from "framer-motion"
import Link from "next/link"
import { MenuSocials } from "./menuSocials"
import { MenuLogo } from "./menuLogo"

export const MenuNav = () => {
  return (
    <nav className="menu-nav">
      <MenuLogo />
      <ul className="menu-nav__list">
        {navItemsNavigation.map(({ id, text, href }, i) => (
          <li className="menu-nav__item" key={id}>
            <motion.div
              className="menu-nav__item-content"
              variants={anMenuNavItem}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit">
              <Link
                className="menu-nav__link"
                href={href}
                aria-label={`navigation to ${text}`}
                scroll={false}>
                {text}
              </Link>
            </motion.div>
          </li>
        ))}
      </ul>
      <MenuSocials />
    </nav>
  )
}

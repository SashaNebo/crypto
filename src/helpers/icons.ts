import logo from "../../public/images/icons/logo.svg"
import hamburguer from "../../public/images/icons/hamburguer.svg"
import grid from "../../public/images/icons/grid.svg"
import close from "../../public/images/icons/close.svg"
import instagram from "../../public/images/icons/instagram.svg"
import twitter from "../../public/images/icons/twitter.svg"
import linkedin from "../../public/images/icons/linkedin.svg"

export const iconsList = {
  logo,
  hamburguer,
  grid,
  close,
  instagram,
  twitter,
  linkedin,
} as const

export type IconsIds = keyof typeof iconsList

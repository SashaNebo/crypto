import logo from "../../public/images/icons/logo.svg"
import instagram from "../../public/images/icons/instagram.svg"
import twitter from "../../public/images/icons/twitter.svg"
import linkedin from "../../public/images/icons/linkedin.svg"
import badgeAppStore from "../../public/images/icons/badge-app-store.svg"
import badgeAppStoreDark from "../../public/images/icons/badge-app-store-dark.svg"
import badgeGooglePlay from "../../public/images/icons/badge-google-play.svg"
import badgeGooglePlayDark from "../../public/images/icons/badge-google-play-dark.svg"
import ethereum from "../../public/images/icons/ethereum.svg"
import blurCircle from "../../public/images/icons/blur-circle.svg"
import verified from "../../public/images/icons/verified.svg"

export const iconsList = {
  logo,
  instagram,
  twitter,
  linkedin,
  badgeAppStore,
  badgeAppStoreDark,
  badgeGooglePlay,
  badgeGooglePlayDark,
  ethereum,
  blurCircle,
  verified,
} as const

export type IconsIds = keyof typeof iconsList

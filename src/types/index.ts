import { IconsIds } from "@/helpers/icons"
import { StaticImageData } from "next/image"

export type THEME_STATE = {
  theme: "dark" | null
  toggleTheme: () => void
}

export type THEME_CONTEXT = React.Context<THEME_STATE>

export type NAV_ITEM = {
  id: string
  text: string
  href: string
}

export type SOCIAL_ITEM = {
  href: string
  iconId: IconsIds
}

export type AVATAR = {
  avatarImg: StaticImageData
  verified?: boolean
}

export type CARD_NFT = {
  cardImg: StaticImageData
  ownerName: string
  priceInUSD: string
  priceInETH: string
  priceStatus: "success" | "fail"
} & AVATAR

export type SECTION_INFO = { offsetTop: number; id: string }
export type SECTIONS_STATE = {
  sections: SECTION_INFO[]
  addSection: (sectionInfo: SECTION_INFO) => void
}

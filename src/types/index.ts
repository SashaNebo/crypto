import { IconsIds } from "@/helpers/icons"

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

import { NAV_ITEM, SOCIAL_ITEM } from "@/types"

export const navItemsNavigation: NAV_ITEM[] = [
  { id: "download", text: "Download", href: "/" },
  { id: "nfts", text: "NFTs", href: "/" },
  { id: "rank", text: "Rank", href: "/" },
  { id: "newsletter", text: "Newsletter", href: "/" },
  { id: "faq", text: "FAQ", href: "/" },
]

export const navItemsAdditional: NAV_ITEM[] = [
  {
    id: "About us",
    text: "About us",
    href: "/",
  },
  {
    id: "Questions",
    text: "Questions",
    href: "/",
  },
  {
    id: "Press",
    text: "Press",
    href: "/",
  },
  {
    id: "Contact us",
    text: "Contact us",
    href: "/",
  },
  {
    id: "Legal",
    text: "Legal",
    href: "/",
  },
]

export const socialItems: SOCIAL_ITEM[] = [
  { href: "https://twitter.com", iconId: "twitter" },
  { href: "https://instagram.com", iconId: "instagram" },
  { href: "https://linkedin.com", iconId: "linkedin" },
]

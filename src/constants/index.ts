import {
  av3,
  av6,
  av8,
  av9,
  nftImg1,
  nftImg2,
  nftImg3,
  nftImg4,
} from "@/helpers/images"
import { CARD_NFT, NAV_ITEM, SOCIAL_ITEM } from "@/types"

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

export const cardsNFTsAll: CARD_NFT[] = [
  {
    avatarImg: av3,
    cardImg: nftImg1,
    ownerName: "Hacker",
    priceInETH: "1.2",
    priceInUSD: "2432.21",
    verified: true,
    priceStatus: "success",
  },
  {
    avatarImg: av6,
    cardImg: nftImg2,
    ownerName: "ArtFan",
    priceInETH: "1.7",
    priceInUSD: "3740",
    verified: false,
    priceStatus: "success",
  },
  {
    avatarImg: av8,
    cardImg: nftImg3,
    ownerName: "Digital",
    priceInETH: "5.4",
    priceInUSD: "11,880",
    verified: true,
    priceStatus: "success",
  },
  {
    avatarImg: av9,
    cardImg: nftImg4,
    ownerName: "Meta",
    priceInETH: "4.2",
    priceInUSD: "9,240",
    verified: true,
    priceStatus: "success",
  },
  {
    avatarImg: av9,
    cardImg: nftImg4,
    ownerName: "Meta",
    priceInETH: "4.2",
    priceInUSD: "9,240",
    verified: true,
    priceStatus: "success",
  },
  {
    avatarImg: av9,
    cardImg: nftImg4,
    ownerName: "Meta",
    priceInETH: "4.2",
    priceInUSD: "9,240",
    verified: true,
    priceStatus: "success",
  },
  {
    avatarImg: av9,
    cardImg: nftImg4,
    ownerName: "Meta",
    priceInETH: "4.2",
    priceInUSD: "9,240",
    verified: true,
    priceStatus: "success",
  },
  {
    avatarImg: av9,
    cardImg: nftImg4,
    ownerName: "Meta",
    priceInETH: "4.2",
    priceInUSD: "9,240",
    verified: true,
    priceStatus: "success",
  },
  {
    avatarImg: av9,
    cardImg: nftImg4,
    ownerName: "Meta",
    priceInETH: "4.2",
    priceInUSD: "9,240",
    verified: true,
    priceStatus: "success",
  },
]

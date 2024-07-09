import {
  av1,
  av2,
  av3,
  av4,
  av6,
  av8,
  av9,
  nftImg1,
  nftImg2,
  nftImg3,
  nftImg4,
} from "@/helpers/images"
import { CARD_NFT, COLLECTOR, NAV_ITEM, SOCIAL_ITEM } from "@/types"

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
    priceStatus: "fail",
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

export const categoryList = [
  "This day",
  "This week",
  "This mounth",
  "This year",
]

export const collectors: COLLECTOR[] = [
  {
    name: "John Doe",
    nickname: "@johnNFT",
    priceInETH: "1.5",
    pricePercent: "20",
    priceStatus: "success",
    avatarImg: av1,
    verified: true,
  },
  {
    name: "Charlie Davis",
    nickname: "@charlieNFT",
    priceInETH: "2.1",
    pricePercent: "15",
    priceStatus: "success",
    avatarImg: av2,
  },
  {
    name: "Alice Johnson",
    nickname: "@aliceNFT",
    priceInETH: "0.9",
    pricePercent: "30",
    priceStatus: "fail",
    avatarImg: av3,
    verified: true,
  },
  {
    name: "Bob Brown",
    nickname: "@bobNFT",
    priceInETH: "1.2",
    pricePercent: "10",
    priceStatus: "success",
    avatarImg: av4,
  },
  {
    name: "Jane Smith",
    nickname: "@janeNFT",
    priceInETH: "0.7",
    pricePercent: "25",
    priceStatus: "fail",
    avatarImg: av6,
    verified: true,
  },
  {
    name: "Eve Martinez",
    nickname: "@eveNFT",
    priceInETH: "3.0",
    pricePercent: "5",
    priceStatus: "success",
    avatarImg: av8,
  },
  {
    name: "Frank Wilson",
    nickname: "@frankNFT",
    priceInETH: "2.5",
    pricePercent: "18",
    priceStatus: "success",
    avatarImg: av9,
    verified: false,
  },
]

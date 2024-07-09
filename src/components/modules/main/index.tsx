import { Hero } from "@/components/sections/hero"
import { NFTs } from "@/components/sections/nfts"
import { Rank } from "@/components/sections/rank"
import { Newsletter } from "@/components/sections/newsletter"

export const Main = () => {
  return (
    <main>
      <Hero />
      <NFTs />
      <Rank />
      <Newsletter />
    </main>
  )
}

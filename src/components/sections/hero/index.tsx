import { Download } from "./download"
import { av3, nftImg1 } from "@/helpers/images"
import { Decorations } from "./decorations"
import { CardNFT } from "@/components/elements/cardNFT"
import { Stripe } from "../../elements/stripe"
import { Section } from "@/components/ui/section"

export const Hero = () => {
  return (
    <Section className="relative overflow-hidden" sectionId="download">
      <div className="container">
        <div className="min-h-[90vh] flex justify-center items-center gap-x-[100px] pt-[100px] max-sm:min-h-[80vh] max-sm:justify-start">
          <Download />
          <div className="max-lg:hidden card-nft">
            <CardNFT
              cardImg={nftImg1}
              avatarImg={av3}
              ownerName="Hacker"
              priceInETH={"1.2"}
              priceInUSD={"2432.21"}
              verified={true}
              priceStatus="success"
            />
          </div>
        </div>
      </div>
      <Stripe />
      <Decorations />
    </Section>
  )
}

import { Download } from "./download"
import { avatar1, nftImg1 } from "@/helpers/images"
import { Decorations } from "./decorations"
import { CardNFT } from "@/components/elements/cardNFT"

export const Hero = () => {
  return (
    <section className="relative">
      <div className="container">
        <div className="min-h-[90vh] flex justify-center items-center gap-x-[50px] pt-[100px] max-sm:min-h-[80vh] max-sm:justify-start">
          <Download />
          <div className="max-lg:hidden">
            <CardNFT
              cardImg={nftImg1}
              avatarImg={avatar1}
              ownerName="Hacker"
              priceInETH={1.2}
              priceInUSD={2432.21}
              verified={true}
              priceStatus="success"
            />
          </div>
        </div>
      </div>

      <Decorations />
    </section>
  )
}

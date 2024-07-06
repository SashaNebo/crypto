import { Avatar } from "@/components/ui/avatar"
import { CARD_NFT } from "@/types"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"

export const CardNFT = ({
  cardImg,
  avatarImg,
  ownerName,
  priceInETH,
  priceInUSD,
  verified,
  priceStatus,
}: CARD_NFT) => {
  return (
    <div className="w-[326px] h-[534px] relative border-[1px] border-solid border-color-border rounded-xl overflow-hidden max-lg:w-[230px] max-lg:h-[360px]">
      <Link
        href={"/"}
        className="absolute z-[1]"
        scroll={false}
        aria-label="open nft">
        <Image src={cardImg} alt="card img" priority />
      </Link>

      <div className="w-full absolute bottom-0 z-[2] flex justify-between p-4 bg-color-bg">
        <div className="flex gap-x-3">
          <Avatar avatarImg={avatarImg} verified={verified} />
          <div className="">
            <div className="text-xs font-light italic text-color-muted">
              Owned by
            </div>
            <div className="text-lg font-bold">{ownerName}</div>
          </div>
        </div>

        <div className="grid">
          <span
            className={clsx(
              "text-xs text-right",
              priceStatus === "success"
                ? "text-color-success"
                : "text-color-danger",
            )}>
            {priceInUSD}$
          </span>
          <span className="text-lg font-bold">{priceInETH} ETH</span>
        </div>
      </div>
    </div>
  )
}

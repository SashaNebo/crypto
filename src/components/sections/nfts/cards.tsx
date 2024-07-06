import { CardNFT } from "@/components/elements/cardNFT"
import { CardNFTLoader } from "@/components/elements/cardNFT/cardNFTLoader"
import { cardsNFTsAll } from "@/constants"
import { motion } from "framer-motion"
import { useEffect, useId, useRef, useState } from "react"

export const Cards = ({ isLoading }: { isLoading: boolean }) => {
  const [contentWidth, setContentWidth] = useState(0)
  const [cardsWidth, setCardsWidth] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const id = useId()

  useEffect(() => {
    if (contentRef.current) setContentWidth(contentRef.current.offsetWidth)
    if (cardsRef.current) setCardsWidth(cardsRef.current.offsetWidth)
  }, [isLoading])

  return (
    <div ref={contentRef}>
      <motion.div
        className="w-min flex py-6 gap-x-6 max-lg:gap-x-4"
        ref={cardsRef}
        drag="x"
        dragConstraints={{
          left: -(cardsWidth - contentWidth),
          right: 0,
        }}
        whileTap={{ cursor: "grabbing" }}
        whileHover={{ cursor: "grab" }}>
        {cardsNFTsAll.map((nft, i) =>
          !isLoading ? (
            <CardNFT key={nft.ownerName + i} {...nft} />
          ) : (
            <CardNFTLoader uniqueKey={`${id}-${i}`} key={i} />
          ),
        )}
      </motion.div>
    </div>
  )
}

"use client"
import { useEffect, useState } from "react"
import { Tabs } from "./tabs"
import { Cards } from "./cards"
import { Section } from "@/components/ui/section"

export const NFTs = () => {
  const [activeTabId, setActiveTabId] = useState("All")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(() => false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [activeTabId])

  const switchActiveId = (tabId: string) => {
    setIsLoading(() => true)
    setActiveTabId(() => tabId)
  }

  return (
    <Section className="overflow-hidden pt-10" sectionId="nfts">
      <div className="container">
        <h6 className="subtitle">Trending</h6>
        <div className="flex flex-wrap justify-between items-center gap-y-6 max-sm:flex-col max-sm:items-start max-sm:gap-y-4">
          <h3 className="headline-h3 text-nowrap">Popular Artwork</h3>
          <Tabs activeTabId={activeTabId} setActiveTabId={switchActiveId} />
        </div>
        <Cards isLoading={isLoading} />
      </div>
    </Section>
  )
}

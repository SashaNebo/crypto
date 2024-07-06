"use client"
import { useWindowWidth } from "@/hooks/useWindowWidth"
import clsx from "clsx"
import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

const tabsItems = ["All", "Cyberpunk", "3D", "Video", "GIF", "AI Art"]

export const Tabs = ({
  activeTabId,
  setActiveTabId,
}: {
  activeTabId: string
  setActiveTabId: (tabId: string) => void
}) => {
  const windowWidth = useWindowWidth()
  const [tabsWidth, setTabsWidth] = useState(0)
  const tabsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (tabsRef.current) setTabsWidth(tabsRef.current.offsetWidth)
  }, [])

  const dragLeft = (): number => {
    const w = -(tabsWidth - windowWidth)
    return w < 0 ? w - 40 : 0
  }

  return (
    <motion.div
      className="w-min flex items-center gap-x-3"
      ref={tabsRef}
      drag="x"
      dragConstraints={{
        left: dragLeft(),
        right: 0,
      }}
      whileTap={{ cursor: "grabbing" }}
      whileHover={{ cursor: "grab" }}>
      {tabsItems.map((tabId) => (
        <button
          onClick={() => setActiveTabId(tabId)}
          className="relative px-4 py-2 text-[16px] font-bold text-nowrap border-[1px] border-[#D7D7E5] rounded-[18px] dark:border-[#2A2533]"
          key={tabId}>
          {tabId}
          {activeTabId === tabId && <ActiveEl />}
        </button>
      ))}
    </motion.div>
  )
}

const ActiveEl = () => (
  <motion.span
    className="w-full h-full absolute top-0 left-0 z-[1] rounded-[18px] border-2 border-color-primary"
    layoutId="activeEl"
    transition={{ type: "spring" }}
  />
)

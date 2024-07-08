"use client"
import { useEffect, useRef, useState } from "react"
import { Icon } from "../icon"
import { AnimatePresence, motion } from "framer-motion"
import clsx from "clsx"

export const Dropdown = ({ list }: { list: string[] }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const close = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", close)
    } else {
      window.removeEventListener("click", close)
    }

    return () => window.removeEventListener("click", close)
  }, [isOpen])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={clsx(
          "flex items-center gap-x-2 pl-4 pr-3 py-2 text-[16px] font-bold leading-[1.25] bg-color-bg border border-[#c5c5c5] dark:border-[#1F1B26] rounded-[18px]",
          isOpen && "active-tab",
        )}
        onClick={() => setIsOpen((prev) => !prev)}>
        <span>This week</span>
        <Icon
          className={clsx(
            "w-[18px] h-[18px] stroke-color-text transition-transform duration-200",
            isOpen && "-rotate-[180deg]",
          )}
          id="down"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 z-10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, top: "200%" }}
            animate={{ opacity: 1, top: "100%" }}>
            <ul className="w-max flex flex-col gap-y-3 mt-3 px-6 py-5 bg-color-bg border border-[#c5c5c5] dark:border-[#1F1B26] rounded-xl">
              {list.map((item) => (
                <li
                  className="py-1 text-[20px] font-medium cursor-pointer"
                  key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

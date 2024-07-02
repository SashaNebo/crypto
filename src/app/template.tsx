"use client"
import { motion } from "framer-motion"
import { ThemeModifier } from "@/components/elements/themeModifier"
import { Backlight } from "@/components/elements/backlight"

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className={`min-h-screen relative grid grid-cols-[100%] grid-rows-[auto_1fr_auto]`}
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}>
      {children}
      <Backlight />
    </motion.div>
  )
}

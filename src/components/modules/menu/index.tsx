"use client"
import { useState } from "react"
import { MenuBtn } from "./menuBtn"
import { AnimatePresence, motion } from "framer-motion"
import { anMenu } from "@/constants/animations"
import { MenuNav } from "./menuNav"

export const Menu = () => {
  const [isActive, setIsActive] = useState(false)
  const toggleActive = () => setIsActive((prev) => !prev)

  return (
    <div className="menu-root">
      <MenuBtn isActive={isActive} toggleActive={toggleActive} />
      <motion.menu
        className="menu"
        variants={anMenu}
        animate={isActive ? "open" : "closed"}
        initial="closed">
        <AnimatePresence>{isActive && <MenuNav />}</AnimatePresence>
      </motion.menu>
    </div>
  )
}

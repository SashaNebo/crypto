"use client"
import { useState } from "react"
import { MenuBtn } from "./menuBtn"
import { AnimatePresence, motion } from "framer-motion"
import { anMenu, anMenuRoot } from "@/constants/animations"
import { MenuNav } from "./menuNav"
import clsx from "clsx"
import { useMenu } from "@/hooks/useMenu"

export const Menu = () => {
  const [isActive, setIsActive] = useState(false)
  const toggleActive = () => setIsActive((prev) => !prev)
  const menuRootStatus = useMenu()

  return (
    <motion.div
      className={clsx(
        "menu-root",
        menuRootStatus === "fixed" && "menu-root--fixed",
      )}
      layout
      variants={anMenuRoot}
      animate={menuRootStatus}>
      <MenuBtn isActive={isActive} toggleActive={toggleActive} />
      <motion.menu
        className="menu"
        variants={anMenu}
        animate={isActive ? "open" : "closed"}
        initial="closed">
        <AnimatePresence>{isActive && <MenuNav />}</AnimatePresence>
      </motion.menu>
    </motion.div>
  )
}

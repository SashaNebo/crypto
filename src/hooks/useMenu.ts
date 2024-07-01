import { useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"

export const useMenu = () => {
  const [menuRootStatus, setMenuRootStatus] = useState<
    "initial" | "hidden" | "fixed"
  >("initial")

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest <= 100) setMenuRootStatus(() => "initial")
    if (latest <= 500 && latest > 100) setMenuRootStatus(() => "hidden")
    if (latest > 500) setMenuRootStatus(() => "fixed")
  })

  return menuRootStatus
}

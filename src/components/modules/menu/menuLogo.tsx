import { Logo } from "@/components/ui/logo"
import { anMenuLogo } from "@/constants/animations"
import { motion } from "framer-motion"

export const MenuLogo = () => {
  return (
    <motion.div
      variants={anMenuLogo}
      custom={1}
      initial="initial"
      animate="enter"
      exit="exit">
      <Logo className="menu-logo" size="default" />
    </motion.div>
  )
}

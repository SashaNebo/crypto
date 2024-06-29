import { motion } from "framer-motion"

export const MenuBtn = ({
  isActive,
  toggleActive,
}: {
  isActive: boolean
  toggleActive: () => void
}) => {
  return (
    <button className="menu-btn" onClick={toggleActive}>
      <motion.div
        className="menu-btn__slider"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}>
        <div className="menu-btn__el">
          <PerspectiveText label="Menu" />
        </div>
        <div className="menu-btn__el">
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </button>
  )
}

const PerspectiveText = ({ label }: { label: string }) => {
  return (
    <div className="perspective-text">
      <p>{label}</p>
      <p>{label}</p>
    </div>
  )
}

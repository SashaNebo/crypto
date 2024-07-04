"use client"
import { useParallaxText } from "@/hooks/useParallaxText"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export const StripeLine = ({
  children,
  backgroundColor,
  velocity,
}: {
  children: React.ReactNode
  backgroundColor: string
  velocity: number
}) => {
  const [wrapWidth, setWrapWidth] = useState(1000)
  const ref = useRef<HTMLDivElement>(null)
  const x = useParallaxText(wrapWidth, velocity)

  useEffect(() => {
    if (ref.current) {
      setWrapWidth(ref.current?.offsetWidth)
    }
  }, [])

  return (
    <motion.div
      className="w-min flex gap-x-6 p-6"
      ref={ref}
      style={{ backgroundColor, x }}>
      {children}
      {children}
    </motion.div>
  )
}

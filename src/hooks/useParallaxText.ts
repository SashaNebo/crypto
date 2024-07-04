import {
  MotionValue,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion"
import { useRef } from "react"

export const useParallaxText = (wrapMax: number, velocity: number) => {
  const baseX = useMotionValue(0)
  const x = useTransform(baseX, (v) => `${wrap(0, -wrapMax / 2, v)}px`)

  const directionFactor = useRef(1)

  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 200,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 3], {
    clamp: false,
  })

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * velocity * (delta / 30)
    const vf = velocityFactor.get()

    if (vf > 0) directionFactor.current = 1
    if (vf < 0) directionFactor.current = -1

    moveBy += directionFactor.current * moveBy * vf
    baseX.set(baseX.get() + moveBy)
  })

  return x
}

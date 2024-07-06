"use client"
import { Context, useContext, useEffect, useRef } from "react"
import { SectionsContext } from "@/context"
import { SECTIONS_STATE } from "@/types"

export const Section = ({
  children,
  className,
  sectionId,
}: {
  children: React.ReactNode
  className?: string
  sectionId: string
}) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { addSection } = useContext(SectionsContext as Context<SECTIONS_STATE>)

  useEffect(() => {
    if (sectionRef.current) {
      addSection({ id: sectionId, offsetTop: sectionRef.current.offsetTop })
    }
  }, [])

  return (
    <section className={className} ref={sectionRef}>
      {children}
    </section>
  )
}

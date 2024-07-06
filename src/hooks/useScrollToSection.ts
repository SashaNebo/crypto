import { SectionsContext } from "@/context"
import { SECTIONS_STATE } from "@/types"
import { Context, useContext } from "react"

export const useScrollToSection = () => {
  const { sections } = useContext(SectionsContext as Context<SECTIONS_STATE>)

  return (id: string) => {
    sections.forEach((sectionInfo) => {
      if (id === sectionInfo.id) {
        window.scrollTo({ top: sectionInfo.offsetTop, behavior: "smooth" })
      }
    })
  }
}

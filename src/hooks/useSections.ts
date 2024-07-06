import { useState } from "react"
import { SECTION_INFO } from "@/types"

const useSections = () => {
  const [sections, setSections] = useState<SECTION_INFO[]>([])

  const addSection = (sectionInfo: SECTION_INFO) => {
    setSections((prev) => {
      const haveSection = prev.find((s) => s.id === sectionInfo.id)
      return !haveSection ? [...prev, sectionInfo] : [...prev]
    })
  }

  return { sections, addSection }
}

export { useSections }

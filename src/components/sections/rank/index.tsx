"use client"
import { Dropdown } from "@/components/ui/dropdown"
import { Section } from "@/components/ui/section"
import { categoryList, collectors } from "@/constants"
import { useState } from "react"
import { Ranking } from "./ranking"
import { Decorations } from "./decorations"

export const Rank = () => {
  const [category, setCategory] = useState("This week")

  return (
    <Section className="relative py-[100px]" sectionId="rank">
      <div className="container">
        <h6 className="subtitle">{category}</h6>
        <div className="flex flex-wrap justify-between items-center gap-6 max-sm:flex-wrap max-sm:flex-col max-sm:items-start max-sm:gap-y-4">
          <h3 className="headline-h3 text-nowrap">Top Collectors</h3>
          <Dropdown
            category={category}
            setCategory={setCategory}
            list={categoryList}
          />
        </div>

        <Ranking collectors={collectors} />
      </div>
      <Decorations />
    </Section>
  )
}

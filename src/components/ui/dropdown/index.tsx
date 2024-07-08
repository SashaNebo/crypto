"use client"
import { Dispatch, SetStateAction, useRef } from "react"
import { DropdownBtn } from "./dropdownBtn"
import { useDropdown } from "@/hooks/useDropdown"
import { AnimatePresence } from "framer-motion"
import { DropdownList } from "./dropdownList"

export const Dropdown = ({
  category,
  setCategory,
  list,
}: {
  category: string
  setCategory: Dispatch<SetStateAction<string>>
  list: string[]
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { isOpen, setIsOpen } = useDropdown(dropdownRef)
  const toggleOpen = () => setIsOpen((prev) => !prev)
  const selectCategory = (s: string) => {
    setIsOpen(() => false)
    setCategory(() => s)
  }

  return (
    <div className="relative max-sm:w-full" ref={dropdownRef}>
      <DropdownBtn
        isOpen={isOpen}
        toggleOpen={toggleOpen}
        category={category}
      />

      <AnimatePresence>
        {isOpen && <DropdownList list={list} selectCategory={selectCategory} />}
      </AnimatePresence>
    </div>
  )
}

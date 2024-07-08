import clsx from "clsx"
import { Icon } from "../icon"

export const DropdownBtn = ({
  isOpen,
  toggleOpen,
  category,
}: {
  isOpen: boolean
  toggleOpen: () => void
  category: string
}) => {
  return (
    <button
      className={clsx(
        "flex items-center gap-x-2 pl-4 pr-3 py-2 text-[16px] font-bold leading-[1.25] bg-color-bg border border-[#c5c5c5] dark:border-[#1F1B26] rounded-[18px] max-sm:w-full max-sm:justify-between",
        isOpen && "active-tab",
      )}
      onClick={toggleOpen}>
      <span>{category}</span>
      <Icon
        className={clsx(
          "w-[18px] h-[18px] stroke-color-text transition-transform duration-200",
          isOpen && "-rotate-[180deg]",
        )}
        id="down"
      />
    </button>
  )
}

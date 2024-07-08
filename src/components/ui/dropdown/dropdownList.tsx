import { motion } from "framer-motion"

export const DropdownList = ({
  list,
  selectCategory,
}: {
  list: string[]
  selectCategory: (s: string) => void
}) => {
  return (
    <motion.div
      className="w-max absolute top-full left-0 z-10 overflow-hidden max-sm:left-[initial] max-sm:right-0"
      initial={{ opacity: 0, top: "200%" }}
      animate={{ opacity: 1, top: "100%" }}>
      <ul className="w-full flex flex-col gap-y-3 mt-3 px-6 py-5 bg-color-bg border border-[#c5c5c5] dark:border-[#1F1B26] rounded-xl">
        {list.map((item) => (
          <li
            className="py-1 text-[20px] font-medium cursor-pointer"
            onClick={() => selectCategory(item)}
            key={item}>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

import { ThemeContext } from "@/context"
import { THEME_CONTEXT } from "@/types"
import { useContext } from "react"

export const ThemeModifier = () => {
  const { toggleTheme } = useContext(ThemeContext as THEME_CONTEXT)

  return (
    <button
      className="w-[44px] h-[26px] relative rounded-[50px] bg-gray-400 after:w-[22px] after:h-[22px] after:absolute after:top-1/2 after:left-0 after:bg-white after:rounded-full after:translate-x-[2px] after:translate-y-[-50%] after:transition-all after:duration-300 after:ease-in-out dark:after:translate-x-[20px] dark:after:bg-color-bg"
      onClick={toggleTheme}
    />
  )
}

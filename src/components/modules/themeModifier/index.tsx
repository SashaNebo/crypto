import { ThemeContext } from "@/context"
import { THEME_CONTEXT } from "@/types"
import { useContext } from "react"

export const ThemeModifier = () => {
  const { toggleTheme } = useContext(ThemeContext as THEME_CONTEXT)

  return (
    <button
      className="w-10 h-10 fixed right-[12vh] bottom-[10vh] z-50 bg-color-inverse rounded-full hover:scale-125 transition-transform duration-[300ms] "
      onClick={toggleTheme}
    />
  )
}

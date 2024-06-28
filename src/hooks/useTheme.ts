import { THEME_STATE } from "@/types"
import { useEffect, useState } from "react"

export const useTheme = (): THEME_STATE => {
  const [theme, setTheme] = useState<null | "dark">(null)
  const getThemeLS = () => localStorage.getItem("data-theme")

  useEffect(() => {
    if (getThemeLS() === "dark") {
      setTheme(() => "dark")
    }
  }, [])

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("data-theme", "dark")
    }

    if (!theme && getThemeLS() === "dark") {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("data-theme", "light")
    }
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev ? null : "dark"))

  return { theme, toggleTheme }
}

"use client"
import { ThemeContext } from "@/context"
import { useTheme } from "@/hooks/useTheme"

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const themeState = useTheme()

  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  )
}

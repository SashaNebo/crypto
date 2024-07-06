"use client"
import { SectionsContext, ThemeContext } from "@/context"
import { useSections } from "@/hooks/useSections"
import { useTheme } from "@/hooks/useTheme"

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const themeState = useTheme()
  const sectionsState = useSections()

  return (
    <ThemeContext.Provider value={themeState}>
      <SectionsContext.Provider value={sectionsState}>
        {children}
      </SectionsContext.Provider>
    </ThemeContext.Provider>
  )
}

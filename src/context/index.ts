import type { SECTIONS_STATE, THEME_STATE } from "@/types"

import { createContext } from "react"

export const ThemeContext = createContext<null | THEME_STATE>(null)
export const SectionsContext = createContext<null | SECTIONS_STATE>(null)

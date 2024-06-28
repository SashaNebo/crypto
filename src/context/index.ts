import type { THEME_STATE } from "@/types"

import { createContext } from "react"

export const ThemeContext = createContext<null | THEME_STATE>(null)

"use client"
import { Icon } from "@/components/ui/icon"
import { ThemeContext } from "@/context"
import { THEME_CONTEXT } from "@/types"
import { useContext } from "react"

export const Download = () => {
  const { theme } = useContext(ThemeContext as THEME_CONTEXT)

  return (
    <div className="grid gap-y-8">
      <h1 className="max-w-[515px] text-[64px] font-black max-sm:text-[48px] max-sm:max-w-[313px]">
        O Maior Marketplace de NFTs do Brasil{" "}
      </h1>
      <div className="flex gap-x-6 max-sm:flex-col max-sm:gap-y-2">
        <button className="w-max">
          <Icon
            className="w-full h-full"
            id={theme === "dark" ? "badgeGooglePlayDark" : "badgeGooglePlay"}
          />
        </button>
        <button className="w-max">
          <Icon
            className="w-full h-full"
            id={theme === "dark" ? "badgeAppStoreDark" : "badgeAppStore"}
          />
        </button>
      </div>
    </div>
  )
}

"use client"
import { ThemeContext } from "@/context"
import { THEME_CONTEXT } from "@/types"
import { useContext } from "react"
import ContentLoader from "react-content-loader"
import { IContentLoaderProps } from "react-content-loader/native"

export const CardNFTLoader: React.FC<IContentLoaderProps> = (props) => {
  const { theme } = useContext(ThemeContext as THEME_CONTEXT)

  return (
    <ContentLoader
      className="w-[326px] h-[534px] max-lg:w-[230px] max-lg:h-[360px]"
      speed={2}
      viewBox="0 0 326 534"
      backgroundColor={theme === "dark" ? "#000" : "#DFDFDF"}
      foregroundColor={theme === "dark" ? "#110619" : "#D9D9D9"}
      {...props}>
      <rect x="0" y="0" rx="12" ry="12" width="326" height="534" />
    </ContentLoader>
  )
}

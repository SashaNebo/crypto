"use client"
import { Logo } from "@/components/ui/logo"
import { Nav } from "@/components/ui/nav"
import { navItemsNavigation } from "@/constants"
import { Icon } from "@/components/ui/icon"

export const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center px-8 py-6 max-sm:px-6 max-sm:flex-wrap">
        <Logo />
        <Nav className="nav-header" array={navItemsNavigation} />
        <button className="hidden max-md:block">
          <Icon className="w-8 h-8 stroke-color-inverse" id="hamburguer" />
        </button>
      </nav>
    </header>
  )
}

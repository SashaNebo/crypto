import { Logo } from "@/components/ui/logo"
import { Nav } from "@/components/ui/nav"
import { navItemsNavigation } from "@/constants"
import { Menu } from "../menu"

export const Header = () => {
  return (
    <header className="sticky top-0">
      <nav className="flex justify-between items-center px-8 py-6 max-sm:px-6 max-sm:flex-wrap">
        <Logo />
        <Nav className="nav-header" array={navItemsNavigation} />
        <Menu />
      </nav>
    </header>
  )
}

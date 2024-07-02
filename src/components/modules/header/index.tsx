import { Logo } from "@/components/ui/logo"
import { Nav } from "@/components/ui/nav"
import { navItemsNavigation } from "@/constants"
import { Menu } from "../menu"

export const Header = () => {
  return (
    <header>
      <div className="absolute z-10 w-full">
        <nav className="flex justify-between items-center px-[3vw] py-6 max-sm:px-[20px] max-sm:flex-wrap">
          <Logo />
          <Nav className="nav-header" array={navItemsNavigation} />
          <Menu />
        </nav>
      </div>
    </header>
  )
}

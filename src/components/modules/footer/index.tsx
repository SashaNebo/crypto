import { Logo } from "@/components/ui/logo"
import { Nav } from "@/components/ui/nav"
import { Socials } from "@/components/ui/socials"
import {
  navItemsAdditional,
  navItemsNavigation,
  socialItems,
} from "@/constants"

export const Footer = () => {
  return (
    <footer className="pt-[60px] pb-[140px] max-md:pt-[65px] max-md:pb-[90px]">
      <div className="container">
        <div className="flex justify-between gap-x-28 gap-y-14 max-lg:flex-col">
          <div className="space-y-[23px]">
            <Logo size="lg" />

            <p className="max-w-[312px] text-base text-color-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Socials array={socialItems} />
          </div>

          <div className="flex justify-between flex-wrap gap-x-28 gap-y-14">
            <div className="space-y-[23px]">
              <h4 className="text-[22px] font-bold leading-normal">Crypto®</h4>
              <Nav className="nav-footer" array={navItemsNavigation} />
            </div>
            <div className="space-y-[23px]">
              <h4 className="text-[22px] font-bold leading-normal">
                Important links
              </h4>
              <Nav className="nav-footer" array={navItemsAdditional} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

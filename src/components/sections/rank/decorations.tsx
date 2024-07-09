import { Icon } from "@/components/ui/icon"

export const Decorations = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 -z-50 overflow-hidden">
      <div className="w-[317px] absolute top-0 left-0 -z-10 -translate-x-1/2 -rotate-[8deg] max-sm:hidden">
        <Icon className="scale-reverse" id="ethereum" />
      </div>
      <div className="w-[317px] absolute bottom-0 right-0 -z-10 translate-x-1/2 rotate-[8deg] max-sm:w-[200px] max-sm:bottom-[initial] max-sm:translate-y-1/4 max-sm:-rotate-[8deg]">
        <Icon id="ethereum" />
      </div>
    </div>
  )
}

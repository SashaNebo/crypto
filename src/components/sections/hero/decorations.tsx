import { Icon } from "@/components/ui/icon"

export const Decorations = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 -z-50 overflow-hidden">
      <div className="absolute bottom-0 left-0 -translate-x-1/3 -rotate-[12deg] max-lg:top-0 max-lg:left-1/2 max-lg:bottom-auto max-lg:-translate-y-[45%] max-lg:rotate-6">
        <Icon
          className="w-[350px] h-[350px] scale-reverse max-lg:w-[200px] max-lg:h-[200px]"
          id="ethereum"
        />
      </div>
      <div className="absolute top-0 right-1/2 translate-x-1/2 translate-y-1/4 max-lg:hidden">
        <Icon className="w-[225px] h-[225px]" id="ethereum" />
      </div>
      <div className="absolute right-0 bottom-0 blur-sm translate-x-[20%] rotate-[8deg]">
        <Icon className="w-[300px] h-[300px]" id="ethereum" />
      </div>
    </div>
  )
}

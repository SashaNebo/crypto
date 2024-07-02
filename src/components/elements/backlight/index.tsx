import { Icon } from "@/components/ui/icon"

export const Backlight = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 -z-[100] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[80%] blur-[200px]">
        <Icon id="blurCircle" />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[90%] blur-[200px]">
        <Icon id="blurCircle" />
      </div>
    </div>
  )
}

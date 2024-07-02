import { Icon } from "@/components/ui/icon"

export const Decorations = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 -z-50 overflow-hidden">
      <div className="absolute bottom-0 left-0 -translate-x-1/3 -rotate-[12deg]">
        <Icon className="w-[350px] h-[350px] scale-reverse" id="ethereum" />
      </div>
      <div className="absolute top-0 right-1/2 hidden">
        <Icon className="w-[225px] h-[225px]" id="ethereum" />
      </div>
      <div className="absolute right-0 bottom-0 blur-sm translate-x-[20%] rotate-[8deg]">
        <Icon className="w-[300px] h-[300px]" id="ethereum" />
      </div>
    </div>
  )

  // return (
  //   <div className="decorations-hero">
  //     {Array.from({ length: 3 }).map((_, i) => (
  //       <div className={clsx("shape", `shape-${i + 1}`)} key={i}>
  //         <Icon id="ethereum" />
  //       </div>
  //     ))}
  //   </div>
  // )
}

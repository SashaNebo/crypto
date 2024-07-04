import { Icon } from "@/components/ui/icon"

export const StripeText = ({
  color,
  length,
}: {
  color: string
  length: number
}) => {
  return (
    <div className="w-min min-w-[100vw] flex justify-between flex-nowrap gap-x-6">
      {Array.from({ length }).map((_, i) => (
        <div className="w-max flex flex-nowrap items-center gap-x-6" key={i}>
          <span>
            <Icon id="cryptoText" style={{ fill: color }} />
          </span>
          <span
            className={`text-[32px] font-black text-color-text text-nowrap`}
            style={{ color }}>
            20% OFF
          </span>
        </div>
      ))}
    </div>
  )
}

import { Avatar } from "@/components/ui/avatar"
import { Icon } from "@/components/ui/icon"
import { COLLECTOR } from "@/types"

export const Ranking = ({ collectors }: { collectors: COLLECTOR[] }) => {
  return (
    <ul className="py-6">
      {collectors.map((collector, i) => (
        <li
          className="flex justify-between items-center py-[10px] border-b border-b-color-border"
          key={collector.name + i}>
          <div className="flex items-center gap-x-3">
            <Avatar
              avatarImg={collector.avatarImg}
              verified={collector.verified}
            />
            <div>
              <div className="text-sm font-bold">{collector.name}</div>
              <div className="text-xs text-color-primary">
                {collector.nickname}
              </div>
            </div>
          </div>

          <div className="grid gap-y-1">
            <div className="flex flex-nowrap items-center">
              <span className="text-sm font-bold text-nowrap">
                {collector.priceInETH} ETH
              </span>
              <Icon className="w-6 h-6" id="crypto" />
            </div>
            <div className="flex justify-end">
              <Icon
                className={`w-4 h-4 ${
                  collector.priceStatus === "success"
                    ? "stroke-color-success rotate-180"
                    : "stroke-color-danger"
                }`}
                id="down"
              />
              <span
                className={`text-xs font-bold ${
                  collector.priceStatus === "success"
                    ? "text-color-success"
                    : "text-color-danger"
                }`}>
                {collector.priceStatus === "fail" && "-"}
                {collector.pricePercent} %
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

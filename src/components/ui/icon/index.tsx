import { IconsIds, iconsList } from "@/helpers/icons"

type P = {
  id: IconsIds
} & React.SVGProps<SVGSVGElement>

export const Icon = ({ id, ...props }: P) => {
  const IconComponent = iconsList[id]
  return <IconComponent {...props} />
}

'use client'

import { IconType } from 'react-icons'

interface Props {
  onClick: (value: string) => void
  label: string
  icon: IconType
  selected?: boolean
}
const CategoryInput = ({ onClick, label, icon: Icon, selected }: Props) => {
  return (
    <div
      className={`flex w-full flex-col gap-3 rounded-xl border-2 p-4 hover:border-black ${
        selected ? 'border-black' : 'border-neutral-200'
      } cursor-pointer transition`}
      onClick={() => onClick(label)}>
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  )
}
export default CategoryInput

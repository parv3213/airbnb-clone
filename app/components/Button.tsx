'use client'
import { IconType } from 'react-icons'

interface Props {
  label: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => {}
  disabled?: boolean
  outline?: boolean
  small?: boolean
  icon?: IconType
}

const Button = ({ label, onClick, disabled, outline, small, icon: Icon }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
    relative w-full rounded-lg transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70 ${
      outline ? 'bg-white' : 'bg-rose-500'
    } ${outline ? 'border-black' : 'border-rose-500'}
    ${outline ? 'text-black' : 'text-white'}
    ${small ? 'border-[1px] px-1 text-sm font-light' : 'text-md border-[2px] py-3 font-semibold'}
  `}>
      {Icon && <Icon className="absolute left-4 top-3" size={24} />}
      {label}
    </button>
  )
}
export default Button

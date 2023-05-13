'use client'

import Image from 'next/image'

interface Props {
  image?: string | null
}
const Avatar = ({ image }: Props) => {
  return <Image className="rounded-full" height={30} width={30} alt="avatar" src={image || '/images/placeholder.jpg'} />
}

export default Avatar

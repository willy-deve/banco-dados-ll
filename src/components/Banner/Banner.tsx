import React from 'react'
import BannerStyled from './BannerStyled'

interface BannerProps {
  titulo: string
  background: string
}

const Banner: React.FC<BannerProps> = ({ titulo, background }) => {
  return (
    <BannerStyled urlImagem={background}>
      <h6>{titulo}</h6>
    </BannerStyled>
  )
}

export default Banner

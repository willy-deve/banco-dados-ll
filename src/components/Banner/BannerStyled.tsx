import styled from 'styled-components'

interface BannerProps {
  urlImagem: string
}

const BannerStyled = styled.div<BannerProps>`
  width: 100%;
  height: 40vh;
  color: #f5f5f5;
  background-image: url(${(props) => props.urlImagem});
  display: flex;
  justify-content: center;
  align-items: center;

  h6 {
    font-size: 30px;
    color: #fff;
  }
`

export default BannerStyled

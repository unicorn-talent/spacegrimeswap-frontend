import styled from 'styled-components'
import { Grid } from '@spacegrimeswap/uikit'

const GridLayout = styled(Grid)`
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 16px;
  @media screen and (min-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
  }
  @media screen and (min-width: 1480px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
  }
  @media screen and (min-width: 1800px) {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 32px;
  }
`

export default GridLayout

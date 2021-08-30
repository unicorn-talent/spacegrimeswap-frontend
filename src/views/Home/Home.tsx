import React from 'react'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'
import HomeBanner from 'views/Home/components/HomeBanner'
import HomeCardList from 'views/Home/components/HomeCardList'
import Footer from 'components/Menu/Footer'
import { BottomGradient, BottomGradientDark } from '../../components/BottomGradient'

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  return (
    <StyledPage>
      <HomeBanner />
      <HomeCardList />
      {theme.isDark ? (
        <BottomGradientDark style={{ height: '100px', width: '100%', position: 'fixed', bottom: '0' }} />
      ) : (
        <BottomGradient style={{ height: '100px', width: '100%', position: 'fixed', bottom: '0' }} />
      )}

      <Footer />
    </StyledPage>
  )
}

export default Home

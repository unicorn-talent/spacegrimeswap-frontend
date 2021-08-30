import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from './ConnectWalletButton'

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  min-height: calc(100vh - 64px);
  background: ${({ theme }) => theme.colors.gradients.bubblegum};

  ${({ theme }) => theme.mediaQueries.xs} {
    background-image: ${({ theme }) =>
      theme.isDark
        ? `url('/images/ether2/ether_not_connected_dark.png')`
        : `url('/images/ether2/ether_not_connected_light.png')`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 24px;
    padding-bottom: 0;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 32px;
    min-height: calc(100vh - 64px);
  }
`

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  text-align: center;
`

const StyledTitle = styled.div`
  font-size: 58px;
  font-family: 'Akira Expanded';
  font-weight: bold;
  color: ${({ theme }) => (theme.isDark ? '#ffffff' : '#212052')};
  margin-bottom: 20px;
`

const WalletNotConnected = () => {
  const { t } = useTranslation()

  return (
    <StyledPage>
      <Wrapper>
        <StyledTitle>{t('ETH 2.0')}</StyledTitle>
        <ConnectWalletButton />
      </Wrapper>
    </StyledPage>
  )
}

export default WalletNotConnected

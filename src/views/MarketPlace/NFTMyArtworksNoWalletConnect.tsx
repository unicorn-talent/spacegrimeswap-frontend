import React from 'react'
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from './components/ConnectWalletButton'
import Page from './components/Page'
import NFTMyArtworks from './NFTMyArtworks'

const StyledTitle = styled.div`
  font-size: 58px;
  font-family: 'Akira Expanded';
  font-weight: bold;
  color: ${({ theme }) => (theme.isDark ? '#ffffff' : '#212052')};
  margin-bottom: 20px;
`

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  text-align: center;
`

const NFTMyArtworksNoWalletConnect: React.FC = () => {
  const { account } = useWeb3React()

  const { t } = useTranslation()
  return (
    <>
      {!account ? (
        <Page>
          <Wrapper>
            <StyledTitle>{t('MY ARTWORKS')}</StyledTitle>
            <ConnectWalletButton />
          </Wrapper>
        </Page>
      ) : (
        <NFTMyArtworks />
      )}
    </>
  )
}

export default NFTMyArtworksNoWalletConnect

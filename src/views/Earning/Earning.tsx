import React from 'react'
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from './ConnectWalletButton'
import Page from './Page'
import EarningWalletConnected from './EarningWalletConnected'

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

const Earning: React.FC = () => {
  const { account } = useWeb3React()

  const { t } = useTranslation()
  return (
    <>
      {!account ? (
        <Page>
          <Wrapper>
            <StyledTitle>{t('EARNING')}</StyledTitle>
            <ConnectWalletButton style={{ backgroundColor: 'blue' }} />
          </Wrapper>
        </Page>
      ) : (
        <EarningWalletConnected />
      )}
    </>
  )
}

export default Earning

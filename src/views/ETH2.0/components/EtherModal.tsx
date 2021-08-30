import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { ModalContainer, InjectedModalProps, Text, ModalCloseButton } from '@spacegrimeswap/uikit'
import styled from 'styled-components'
import SelectedModalCard from './EtherModalcard'

const StyledModal = styled(ModalContainer)`
  border: none;
  box-shadow: none;
  background: rgba(42, 55, 134, 0);
  position: relative;
  padding: 24px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
}
`
const StyledCard = styled.div`
  position: relative;
  padding: 24px;
  justify-content: center;
  font-family: Barlow;
  & Button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    font-size: 12px;
  }
  & img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 12px;
  }
`
const StyledCardTitle = styled.div`
  text-align: center;
  margin-bottom: 24px;
  font-size: 24px;
`

const NowLive = styled(Text)`
  color: white;
  font-size: 48px;
  font-weight: 200;
  display: inline;
  font-family: 'Poppins';
`

const LoremText = styled(Text)`
  background-color: #fa1db6;
  font-size: 48px;
  font-weight: 200;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
  font-family: 'Poppins';
`

interface CurrencySearchModalProps extends InjectedModalProps {
  showCommonBases?: boolean
  index: number
}

export default function CustomModal({
  onDismiss = () => null,
  showCommonBases = false,
  index,
}: CurrencySearchModalProps) {
  const { t } = useTranslation()
  return (
    <StyledModal minWidth="320px">
      <div style={{ textAlign: 'end' }}>
        <ModalCloseButton onDismiss={onDismiss} />
      </div>
      <StyledCard>
        <img src="/images/ether2/centerimg.png" alt="card-logo" />
        <StyledCardTitle>
          <NowLive>
            <LoremText>{t('GRIMEX-ETH')}</LoremText>
            {t(' BLP')}
          </NowLive>
          <br />
          <Text color="white">{t('Deposit GRIMEX-ETH BLP Tokens and earn GRETH')}</Text>
        </StyledCardTitle>
        <SelectedModalCard />
        <Text color="white" style={{ textAlign: 'center' }}>
          {t(
            'Every time you stake and unstake LP tokens, the contract will automatically harvest GRETH rewards for you!',
          )}
        </Text>
      </StyledCard>
    </StyledModal>
  )
}

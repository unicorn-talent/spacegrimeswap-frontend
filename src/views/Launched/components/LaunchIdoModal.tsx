import React from 'react'
import { ModalContainer, Text, Button, Image } from '@spacegrimeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'

const StyledModal = styled(ModalContainer)`
  background: rgba(200, 205, 255, 0);
  background-image: url('/images/launchpad/idoBack.png');
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 820px;
  min-width:820px;
  min-height: 700px;
  font-family: Barlow;
  padding: 150px 98px 48px 98px;
  border: none;
  box-shadow: none;
}
`

const StyledTitle = styled.div`
  font-size: 44px;
  font-family: 'Akira Expanded';
  font-weight: bold;
  color: white;
  text-align: center;
`

const NowLive = styled(Text)`
  background-color: white;
  font-size: 32px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Barlow';
  font-weight: bold;
  text-align: center;
`

const LoremText = styled(Text)`
  background-color: #fa1db6;
  font-weight: bold;
  font-size: 32px;
  -webkit-background-clip: text;
  display: inline;
  font-family: 'Barlow';
`

export default function LaunchIdoModal() {
  const { t } = useTranslation()
  return (
    <StyledModal minWidth="400px">
      <StyledTitle>{t('LAUNCH YOUR IDO')}</StyledTitle>
      <NowLive>
        {t('Launch your project with ')}
        <LoremText>{t('SpaceGrime')}</LoremText>
        {t('!')}
      </NowLive>
      <Text style={{ color: 'white', fontSize: '30px', fontFamily: 'Barlow', marginBottom: '8px' }}>
        {t(
          'SpaceGrime is a decentralized trading platform that uses the automatic market maker(AMM) model. At the same time SpaceGrime is an AMM+NFT exchange on the Binance Smart Chain. Various data indicate the rapid growth of SpaceGrime in the DEFI ecosystem.',
        )}
      </Text>
      <Button
        scale="sm"
        style={{
          backgroundColor: '#2594e1',
          padding: '20px 30px',
          margin: '0 8px 12px 8px',
          borderRadius: '20px',
          fontFamily: 'Barlow',
          fontWeight: 100,
          textShadow: '0 0 3px, 0 0 6px, 0 0 9px, 0 0 12px',
        }}
      >
        {t('APPLY NOW')}
      </Button>
      <Image
        style={{ position: 'absolute', margin: '-110px 0 0 450px' }}
        width={275}
        height={215}
        src="/images/launchpad/Astronauts.png"
        alt="astronauts"
      />
    </StyledModal>
  )
}

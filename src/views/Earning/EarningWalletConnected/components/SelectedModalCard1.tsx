// eslint-disable-next-line
import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { Button, Text } from '@spacegrimeswap/uikit'

const StyledCard = styled.div`
  position: relative;
  background: rgba(200, 205, 255, 0.63);
  border: 2px solid #c6c9ec;
  border-radius: 30px;
  box-shadow: 0 0 30px 5px rgba(99, 107, 222);
  width: 236px;
  justify-content: center;
  font-family: 'Barlow';
  & Button {
    display: block;
    font-size: 14px;
    color: black;
    background-image: linear-gradient(180deg, #19fff4, #abffb0);
    margin: 7px auto;
  }
  & img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 150px !important;
    height: 150px !important;
    margin-bottom: 0;
  }
  // opacity: 0.4;
  &:hover {
    background: rgba(200, 205, 255, 1);
  }
`

const StyledText = styled(Text)`
  color: '#414076';
  font-weight: 'bold';
  font-family: 'Barlow';
`

const SelectedModalCard1: React.FC = () => {
  const { t } = useTranslation()
  return (
    <StyledCard>
      <img src="/images/earning/X2 Token_small.png" alt="card-logo" />
      <StyledText style={{ fontSize: '28px' }}>{t('0.000')}</StyledText>
      <StyledText style={{ fontSize: '18px' }}>{t('GRIMEX Tokens Staked')}</StyledText>

      <Button scale="sm">{t('APPROVE GRIMEX')}</Button>
    </StyledCard>
  )
}

export default SelectedModalCard1

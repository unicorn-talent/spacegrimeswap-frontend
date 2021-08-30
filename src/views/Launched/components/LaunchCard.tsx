import React from 'react'
import styled from 'styled-components'
import { Text, Button, Card, useModal } from '@spacegrimeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import LaunchModal from '../LaunchModal'

const FCard = styled.div`
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.47);
  border: 2px solid white;
  align-self: baseline;
  box-shadow: ${({ theme }) =>
    theme.isDark ? '0px 0px 3px white, 0 0 6px white' : '0px 0px 3px white, 0 0 6px white, 0 0 9px white'};
  min-width: 230px;
  width: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 16px;
  margin-left: 16px;
  position: relative;

  &:hover {
    background: rgba(200, 205, 255, 0.7);
  }
`

const CardImage = styled.div<{ imgurl: string }>`
  border-radius: 20px;
  background-image: ${({ imgurl }) => `url(${imgurl})`};
  border: 1px solid white;
  align-self: baseline;
  min-width: 226px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin-bottom: 4px;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  padding: 0 4px;
  justify-content: space-between;
  margin-bottom: 4px;
`

const CardInfo = styled.div`
  margin: 100px 12px 0 12px;
  background: rgba(180, 180, 180, 0.8);
  border-radius: 10px;
  padding: 8px 12px;
  // filter: blur(4px);
`

const CardProperty = styled.span`
  color: white;
  font-size: 12px;
  font-family: 'Barlow';
  font-weight: 100;
`

const StyledIdoTime = styled(Text)`
  color: #444278;
  font-size: 12px;
  font-family: 'Barlow';
  font-size: bold;
`

const StyledBadge = styled(Card)`
  padding: 8px;
  background-color: #c1bfc3;
  width: 80px;
  text-align: center;
  margin-top: -10px;
  margin-left: -20px;
  position: absolute;
  z-index: 1;
  color: ${({ theme }) => (theme.isDark ? 'black' : 'white')};
`

const StyledCardTitle = styled(Text)`
  width: 75%;
  color: ${({ theme }) => (theme.isDark ? 'white' : '#444278')};
  font-size: 13px;
  font-family: 'Barlow';
  font-weight: bold;
`

const StyledCardDescription = styled(Text)`
  padding: 4px;
  color: ${({ theme }) => (theme.isDark ? 'white' : '#444278')};
  font-size: 12px;
  font-family: 'Barlow';

  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const StyledMoreBtn = styled(Button)`
  width: 25%;
  color: #fc35cb;
  font-family: 'Barlow';
  height: 20px;
  font-size: 13px;
`

const LaunchCard: React.FC<{ imgurl: string; title: string; description: string; idoAmount: string; time: string }> = ({
  imgurl,
  title,
  description,
  idoAmount,
  time,
}) => {
  const { t } = useTranslation()
  const [onPresent1] = useModal(
    <LaunchModal title={title} description={description} time={time} idoAmount={idoAmount} showCommonBases />,
    false,
  )
  return (
    <FCard>
      <StyledBadge>{t('ENDED')}</StyledBadge>
      <CardImage imgurl={imgurl}>
        <CardInfo>
          <StyledIdoTime>
            {t('IDO Amount: ')}
            <CardProperty>{t(`${idoAmount}`)}</CardProperty>
          </StyledIdoTime>
          <StyledIdoTime>
            {t('time: ')}
            <CardProperty>{t(`${time}`)}</CardProperty>
          </StyledIdoTime>
        </CardInfo>
      </CardImage>
      <Row>
        <StyledCardTitle>{t(`${title}`)}</StyledCardTitle>
        <StyledMoreBtn onClick={onPresent1} variant="text">
          {t('MORE...')}
        </StyledMoreBtn>
      </Row>
      <StyledCardDescription>{t(`${description}`)}</StyledCardDescription>
    </FCard>
  )
}

export default LaunchCard

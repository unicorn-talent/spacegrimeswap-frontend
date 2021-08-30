// eslint-disable-next-line
import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Flex } from '@spacegrimeswap/uikit'

const StyledFarmStakingCard = styled(Card)<{ cardBackgroundUrl: string }>`
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  min-width: 250px;
  height: 330px;
  background-image: ${({ cardBackgroundUrl }) => `url(${cardBackgroundUrl})`};
  background-size: 100% 100%;
  background-color: transparent;
  border-radius: 30px;
  box-shadow: rgb(0 121 255 / 40%) 0px 0px 0px 2px, rgb(0 121 255) 0px 0px 5px 1px,
    rgb(255 255 255 / 0%) 0px 1px 0px inset;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }

  transition: opacity 200ms;
  &:hover {
    opacity: 0.65;
  }
`
const Image = styled.img`
  margin-right: 5px;
  margin-top: 3px;
  width: 30px;
  height: 30px;
`
const StarImage = styled.img`
  margin-right: 3px;
  width: 23px;
  height: 25px;
  margin-top: 5px;
`
const StyledCardBody = styled(CardBody)`
  padding: 285px 15px 0 15px;
  display: flex;
  justify-content: space-between;
`
const CardTitle = styled.p<{ isDark: boolean }>`
  text-align: left;
  font-size: 16px;
  font-family: 'Barlow';
  font-weight: bold;
  color: ${({ isDark }) => (isDark ? '#050545' : '#ffffff')};
  margin-bottom: 5px;
  letter-spacing: -0.4px;
`
const CardPrice = styled.p<{ isDark: boolean }>`
  text-align: left;
  font-size: 12px;
  font-family: 'Barlow';
  font-weight: bold;
  color: ${({ isDark }) => (isDark ? '#050545' : '#ffffff')};
  letter-spacing: -0.4px;
`
const CardStar = styled.p<{ isDark: boolean }>`
  font-size: 16px;
  font-family: 'Barlow';
  font-weight: bold;
  color: ${({ isDark }) => (isDark ? '#050545' : '#ffffff')};
  padding-top: 10px;
`

const StarBox = styled.div`
  display: inline-flex;
`

const NewCardItem: React.FC<{
  cardBackgroundUrl: string
  cardTitle: string
  priceValue: string
  starValue: string
  isDark: boolean
}> = ({ cardBackgroundUrl, cardTitle, priceValue, starValue, isDark }) => {
  const starPath = isDark ? '/images/home/vote_emoji_0.png' : '/images/home/vote_emoji_1.png'
  return (
    <StyledFarmStakingCard cardBackgroundUrl={cardBackgroundUrl}>
      {/* <NavLink exact activeClassName="active" to="/farms" id="farm-apr-cta"> */}
      <StyledCardBody>
        <Flex>
          <Image src="/images/home/logo_symbol.png" />
          <Flex flexDirection={['column']}>
            <CardTitle isDark={isDark}>{cardTitle}</CardTitle>
            <CardPrice isDark={isDark}>{priceValue}</CardPrice>
          </Flex>
        </Flex>
        <StarBox>
          <StarImage src={starPath} />
          <CardStar isDark={isDark}>{starValue}</CardStar>
        </StarBox>
      </StyledCardBody>
      {/* </NavLink> */}
    </StyledFarmStakingCard>
  )
}

export default NewCardItem

import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Input, Flex, ButtonMenu, Button } from '@spacegrimeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'

const Wrapper = styled.div`
  max-height: max-content;
  overflow: inherit;
`

const BannerHeader = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 25px;
`

const HeaderTitle = styled.p`
  font-family: 'Akira Expanded';
  font-size: 56px;
  font-weight: bold;
  color: ${({ theme }) => (theme.isDark ? '#ffffff' : '#414177')};
`

const HeaderDescription = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  color: ${({ theme }) => (theme.isDark ? '#ffffff' : '#414177')};
`

const HeaderAlarm = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  padding-top: 3px;
  color: #fa1dbb;
`

const LeftWrapper = styled.div`
  min-width: 640px;
  max-width: 840px;
  margin-top: 0px;

  @media screen and (min-width: 1400px) {
    margin-top: -35px;
  }
`

const RightWrapper1 = styled.div`
  margin-top: 10px;
  background-color: ${({ theme }) => (theme.isDark ? '#3a3996' : 'white')};
  border-radius: 30px;
  width: fit-content;
`

const CardImage = styled.img`
  border-radius: 30px;
  height: 240px;
  width: 340px;
`

const CardDetail = styled.div`
  height: 62px;
  padding: 10px 12px 8px 12px;
  display: flex;
  width: 340px;
  justify-content: space-between;
`

const DetailIcon = styled.div`
  background-image: url('/images/home/logo_symbol.png');
  height: 40px;
  width: 40px;
  background-repeat: round;
`

const DetailText = styled.div``

const DetailTitle = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 20px;
  color: ${({ theme }) => (theme.isDark ? 'white' : '#414076')};
`

const DetailDescription = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  padding-top: 3px;
  color: ${({ theme }) => (theme.isDark ? 'white' : '#414076')};
`

const LinkButton = styled.button`
  border: none;
  border-radius: 20px;
  height: 33px;
  background-image: linear-gradient(to right, #aeffae, #19fff4);
  padding: 0 20px;
`

const TabMenu = styled(ButtonMenu)`
  background: transparent;
  border: none;
  height: 45px;
  display: flex;
`

const TabItem = styled.div<{ backgroundUrl: string }>`
  height: 91px;
  width: 86px;
  background: ${({ backgroundUrl }) => `url(${backgroundUrl})`};
  background-repeat: no-repeat;
  background-position-y: bottom;
  margin: 0 20px;
  cursor: pointer;
  background-position-x: center;
`

const TabBody = styled.div`
  border-radius: 20px;
  ${({ theme }) =>
    theme.isDark
      ? 'box-shadow: rgba(58, 57, 150, 1) 0px 2px 4px 0px, rgba(58, 57, 150, 1) 0px 2px 16px 0px;'
      : 'box-shadow: rgba(255, 255, 255, 1) 0px 2px 4px 0px, rgba(255, 255, 255, 1) 0px 2px 16px 0px;'}
  // background-image: 'linear-gradient(to bottom, #3a3996, #f0f0f0)';
  background-color: ${({ theme }) => (theme.isDark ? '#3a3996' : 'white')};
  overflow: show;
`

const SortDiv = styled.div`
  text-align: end;
  padding-top: 30px;
`

const SortSpan = styled.span`
  font-family: 'Barlow';
  font-size: 18px;
  margin-right: 10px;
  color: ${({ theme }) => (theme.isDark ? 'white' : '#414076')};
`

const SortItem = styled.span`
  font-family: 'Barlow';
  font-size: 16px;
  margin-right: 20px;
  color: ${({ theme }) => (theme.isDark ? 'white' : '#414076')};
`

const TabContent = styled.div`
  margin: 0 10px;
  padding-bottom: 40px;
`

const SpanMenu = styled(ButtonMenu)`
  margin-top: 25px;
  margin-bottom: 10px;
  background: transparent;
  border: none;
  display: inline-block;
`

const SpanLabel = styled.label<{ fontWeight: string }>`
  font-family: 'Barlow';
  font-size: 18px;
  margin: 0 20px;
  line-height: 30px;
  display: inline-block;
  color: ${({ theme }) => (theme.isDark ? 'white' : '#414076')};
  cursor: pointer;
  font-weight: ${({ fontWeight }) => `${fontWeight}`};
`

const SearchRow = styled(Flex)`
  flex-direction: row;
  align-items: center;
  margin: 0 20px;
  padding: 5px 0;
`

const SearchLabel = styled.label`
  font-family: 'Barlow';
  font-size: 18px;
  min-width: 200px;
  text-align: end;
  margin-right: 10px;
  color: ${({ theme }) => (theme.isDark ? 'white' : '#414076')};
`

const CustomInput = styled(Input)`
  border-radius: 5px;
  border: none;
  padding: 0 10px;
  background-color: ${({ theme }) => (theme.isDark ? '#403e97' : '#c7cdd2')};
  opacity: 0.8;
  height: 37px;
  font-family: 'Barlow';
  font-size: 18px;
  color: ${({ theme }) => (theme.isDark ? '#ffffff' : '#414076')};
`

const Stress = styled(Flex)`
  flex-direction: column;
  margin: 0 30px;
  max-width: 1900px;
  justify-content: center;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
`

const BannerBox = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 30px 0 30px;

  @media screen and (min-width: 1400px) {
    flex-direction: row;
  }
`

const tabItemValues = [
  {
    id: 0,
    backgroundUrl: '/images/marketplace/icon1',
    title: 'FEATURED ARTISTS',
    tokenItemValues: [
      { title: 'SWOG' },
      { title: 'Coral Corp' },
      { title: 'Cookie Munster' },
      { title: 'Hamid' },
      { title: 'SrnArtGallery' },
      { title: 'Chiara Magni' },
      { title: 'Space Cadet' },
      { title: 'Muwasha iProjects' },
      { title: 'Irene Cerezo' },
      { title: 'Mr.Anderson' },
    ],
  },
  {
    id: 1,
    backgroundUrl: '/images/marketplace/icon2',
    title: 'DIGITAL ARTWORK',
    tokenItemValues: [
      { title: 'BSC Artists' },
      { title: 'KAKA NFT' },
      { title: 'Radio Caca NFT' },
      { title: 'Tokau NFT' },
      { title: 'LoveNFT' },
      { title: 'SafeNFT' },
      { title: 'Space Cadet' },
      { title: 'Muwasha iProjects' },
      { title: 'Irene Cerezo' },
      { title: 'Mr.Anderson' },
      { title: 'More +' },
    ],
  },
  {
    id: 2,
    backgroundUrl: '/images/marketplace/icon3',
    title: 'GAMIFICATION NFT',
    tokenItemValues: [
      { title: 'Alchemy Toys' },
      { title: 'Crypto Doggles' },
      { title: 'BakingNFT' },
      { title: 'Doggy Equipment' },
      { title: 'Poker NFT' },
      { title: 'Rare Car' },
      { title: 'Bakery Combos' },
      { title: 'Battle Pets' },
      { title: 'BakerySoccer' },
      { title: 'Weapons' },
      { title: 'Pet Eggs' },
    ],
  },
]

const StyledSelectMode = styled.select`
  border: none;
  font-family: 'Barlow';
  font-size: 16px;
  background-color: ${({ theme }) => (theme.isDark ? '#403e97' : 'white')};
  color: ${({ theme }) => (theme.isDark ? 'white' : '#414177')};
  margin: 0 4px;

  & option {
    font-size: 14px;
    font-family: 'Barlow';
  }
`

const ButtonBox = styled.div`
  margin-left: 30px;
  margin-top: 20px;
`

const ContentButton = styled(Button)<{ buttonbg: string }>`
  height: 35px;
  border-radius: 18px;
  border: none;
  background-color: ${({ buttonbg }) => `${buttonbg}`};
  padding: 11px 15px;
  font-size: 11px;
  font-family: 'Barlow', sans-serif;
  color: white;
  margin-right: 15px;
  letter-spacing: -0.3px;
  cursor: pointer;
  text-shadow: 0 0 6px, 0 0 6px;
`

const MarketPlaceBanner: React.FC<{
  cardBackgroundUrl: string
  cardTitle: string
  priceValue: string
  starValue: string
  getSearchKey
  getSearchByNameStr
  getMediaType
}> = ({ cardBackgroundUrl, cardTitle, priceValue, starValue, getSearchKey, getSearchByNameStr, getMediaType }) => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  // Header texts
  const headerTitle = t('NFT MARKETPLACE')
  const headerDescription = t('NFTs are no longer confined the limited goods available on earth.')
  const headerAlarm = t('New frontiers are now open.')

  const [tabId, setTabIndex] = useState(0)
  const [itemId, setItemIndex] = useState(0)
  // const [searchKey, setSearchKey] = useState('')

  const handleClickTab = (newIndex) => setTabIndex(newIndex)
  const handleClickItem = (newIndex) => {
    setItemIndex(newIndex)
    const temp = tabItemValues[tabId].tokenItemValues[newIndex].title
    getSearchKey(temp)
  }

  const searchByName = (e) => {
    if (e.keyCode === 13) {
      getSearchByNameStr(e.target.value)
    }
  }

  const handleMediaType = (e) => {
    getMediaType(e.target.value)
  }

  // Right Card
  const rightCarBackground = '/images/nfts/bullish-lg.png'

  return (
    <div>
      <Wrapper>
        <Stress>
          <BannerHeader>
            <HeaderTitle>{headerTitle}</HeaderTitle>
            <HeaderDescription>{headerDescription}</HeaderDescription>
            <HeaderAlarm>{headerAlarm}</HeaderAlarm>
          </BannerHeader>
        </Stress>
        <BannerBox>
          <LeftWrapper>
            <TabMenu activeIndex={tabId} onItemClick={handleClickTab}>
              {theme.isDark
                ? tabItemValues.map((item) => (
                    <TabItem
                      key={item.id}
                      backgroundUrl={
                        item.id === tabId
                          ? `${item.backgroundUrl}_dark_active.png`
                          : `${item.backgroundUrl}_dark_inactive.png`
                      }
                    />
                  ))
                : tabItemValues.map((item) => (
                    <TabItem
                      key={item.id}
                      backgroundUrl={
                        item.id === tabId ? `${item.backgroundUrl}_active.png` : `${item.backgroundUrl}_inactive.png`
                      }
                    />
                  ))}
            </TabMenu>
            <TabBody>
              <SortDiv>
                <SortSpan>SORT BY: </SortSpan>
                <StyledSelectMode onChange={handleMediaType} name="mediaType" id="mediaType">
                  <option value="All">All</option>
                  <option value="Picture">Picture</option>
                  <option value="Gif">Gif</option>
                  <option value="Video">Video</option>
                  <option value="Audio">Audio</option>
                </StyledSelectMode>
                <StyledSelectMode style={{ marginRight: '26px' }} name="category" id="category">
                  <option value="Price-up">Price&uarr;</option>
                  <option value="Price-down">Price &darr;</option>
                  <option value="Votes-up">Votes&uarr;</option>
                  <option value="Votes-down">Votes &darr;</option>
                  <option value="Time-up">Time&uarr;</option>
                  <option value="Time-down">Time&darr;</option>
                </StyledSelectMode>
              </SortDiv>
              <TabContent>
                <SpanMenu activeIndex={itemId} onItemClick={handleClickItem}>
                  {tabItemValues[tabId].tokenItemValues.map((item, index) => (
                    <SpanLabel key={item.title} fontWeight={index === itemId ? 'bold' : 'light'}>
                      {item.title}
                    </SpanLabel>
                  ))}
                </SpanMenu>
                <SearchRow>
                  <SearchLabel>Search by Name: </SearchLabel>
                  <CustomInput onKeyUp={searchByName} placeholder="Type here..." />
                </SearchRow>
                <SearchRow>
                  <SearchLabel>Search by Collective: </SearchLabel>
                  <CustomInput placeholder="Type here..." />
                </SearchRow>
              </TabContent>
            </TabBody>
          </LeftWrapper>
          <RightWrapper1>
            <CardImage src={cardBackgroundUrl} alt="lottery bunny" />
            <CardDetail>
              <DetailIcon />
              <DetailText>
                <DetailTitle>{cardTitle}</DetailTitle>
                <DetailDescription>{priceValue}</DetailDescription>
              </DetailText>
              <LinkButton>GET NOW</LinkButton>
            </CardDetail>
          </RightWrapper1>
        </BannerBox>
        <ButtonBox>
          <ContentButton buttonbg="#ff00bc" to="/myartwork" as={Link}>
            MY ARTWORKS
          </ContentButton>

          <ContentButton buttonbg="#4d95df" to="/mintartworks" as={Link}>
            MINT ARTWORKS
          </ContentButton>
        </ButtonBox>
      </Wrapper>
    </div>
  )
}

export default MarketPlaceBanner

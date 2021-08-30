import React from 'react'
import styled from 'styled-components'
import { Input, Flex, Button } from '@spacegrimeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Container from 'components/Layout/Container'

const Wrapper = styled.div`
  max-height: max-content;
  overflow: inherit;

  ${({ theme }) => theme.mediaQueries.md} {
    max-height: 400px;
  }
`

const BannerHeader = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 25px;
`

const HeaderTitle = styled.p`
  font-family: 'Akira Expanded';
  font-size: 44px;
  font-weight: bold;
  color: ${({ theme }) => (theme.isDark ? '#ffffff' : '#414076')};
`

const HeaderDetail = styled.div`
  display: inline-flex;
`

const HeaderDescription = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  color: ${({ theme }) => (theme.isDark ? '#ffffff' : '#414177')};
`

const HeaderAlarm = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 19px;
  color: #fa1dbb;
`

const LeftWrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
`
const RightWrapper = styled(Flex)`
  flex-direction: column;
  align-items: flex-end;
  width: 315px;
  margin-top: 20px;

  @media screen and (min-width: 1200px) {
    margin-top: 0px;
  }
`

const SortLabel = styled.label`
  font-family: 'Barlow';
  font-size: 20px;
  text-align: end;
  width: 100%;
  color: ${({ theme }) => (theme.isDark ? '#ffffff' : '#414177')};
  margin-bottom: 10px;
`

const ButtonGroup = styled(Flex)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`

const CustomButton = styled(Button)<{ backgroundColor: string }>`
  text-shadow: 0 0 3px, 0 0 6px;
  font-family: 'Barlow';
  font-weight: normal;
  font-size: 14px;
  background-color: ${({ backgroundColor }) => `${backgroundColor}`};
`

const SortDetail = styled(Flex)`
  flex-direction: row;
  align-items: center;
`

const LeftLabel = styled.label`
  font-family: 'Barlow';
  font-size: 12px;
  color: ${({ theme }) => (theme.isDark ? '#ffffff' : '#414076')};
  margin-right: 5px;
`

const RightLabel = styled.label`
  font-family: 'Barlow';
  font-size: 12px;
  color: #fa1dbb;
`

const Stress = styled(Container)`
  display: flex;
  flex-direction: column-reverse;
  margin: 0 30px;
  max-width: 1900px;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
`

const SearchPanel = styled(Flex)`
  flex-direction: column;
  align-items: center;
  ${({ theme }) =>
    theme.isDark
      ? 'box-shadow: rgba(58, 57, 150, 1) 0px 0px 5px 5px, rgba(58, 57, 150, 1) 0px 0px 16px 5px;'
      : 'box-shadow: rgba(255, 255, 255, 1) 0px 0px 5px 5px, rgba(255, 255, 255, 1) 0px 0px 16px 5px;'}
  background-color: ${({ theme }) => (theme.isDark ? '#3a3996' : 'white')};
  background-image: ${({ theme }) => (theme.isDark ? '' : 'linear-gradient(to bottom, #ffffff, #eaefef)')};
  // background-image: linear-gradient(to bottom, #ffffff, #eaefef);
  width: fit-content;
  padding: 20px 30px 20px 10px;
  border-radius: 25px;
  margin: auto;
  margin-top: 40px;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`

const SearchItem = styled.div`
  align-items: center;
  display: inline-flex;
  margin: 5px 0;
`

const SearchLabel = styled.label`
  font-family: 'Barlow';
  font-size: 18px;
  width: 200px;
  text-align: end;
  margin-right: 10px;
  padding-top: 5px;
  color: ${({ theme }) => (theme.isDark ? 'white' : '#414076')};
`

const SearchInput = styled(Input)`
  width: 215px;
  border-radius: 5px;
  border: none;
  padding: 0 10px;
  background-color: ${({ theme }) => (theme.isDark ? '#403e97' : '#c7cdd2')};
  opacity: 0.6;
  height: 35px;
  font-family: 'Barlow';
  font-size: 18px;
  color: ${({ theme }) => (theme.isDark ? 'white' : '#414076')};
`

const ArtWorkBanner: React.FC<{ getSearchByNameStr }> = ({ getSearchByNameStr }) => {
  const { t } = useTranslation()

  // Header texts
  const headerTitle = t("[USERNAME]'S ARTWORK")
  const headerDescription = t('Warp speed ahead to outer space-the final frontier for')
  const headerAlarm = t('installer NFTs.')

  const searchByName = (e) => {
    if (e.keyCode === 13) {
      getSearchByNameStr(e.target.value)
    }
  }

  return (
    <div>
      <Wrapper>
        <Stress>
          <BannerHeader>
            <HeaderTitle>{headerTitle}</HeaderTitle>
            <HeaderDetail>
              <HeaderDescription>{headerDescription}</HeaderDescription>
              <HeaderAlarm>{headerAlarm}</HeaderAlarm>
            </HeaderDetail>
          </BannerHeader>
        </Stress>
        <SearchPanel>
          <LeftWrapper>
            <SearchItem>
              <SearchLabel>Search by Name: </SearchLabel>
              <SearchInput onKeyUp={searchByName} placeholder="Type here..." />
            </SearchItem>
            <SearchItem>
              <SearchLabel>Search by Collective: </SearchLabel>
              <SearchInput placeholder="Type here..." />
            </SearchItem>
          </LeftWrapper>
          <RightWrapper>
            <SortLabel>Sort Artwork by:</SortLabel>
            <ButtonGroup>
              <CustomButton scale="sm" backgroundColor="#fa1dbb">
                HOTTEST
              </CustomButton>
              <CustomButton scale="sm" backgroundColor="#414076">
                LATEST
              </CustomButton>
              <CustomButton scale="sm" backgroundColor="#0095ff">
                OLDEST
              </CustomButton>
            </ButtonGroup>
            <SortDetail>
              <LeftLabel>SWITCH VIEWS OR GO BACK TO </LeftLabel>
              <RightLabel>DEFAULT</RightLabel>
            </SortDetail>
          </RightWrapper>
        </SearchPanel>
      </Wrapper>
    </div>
  )
}

export default ArtWorkBanner

import React from 'react'
import styled from 'styled-components'
import { Text, Flex, Button } from '@spacegrimeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import StatisticCard1 from './StatisticCard1'
import StatisticCard2 from './StatisticCard2'

const Wrapper = styled.div`
  max-width: 1593px;
  max-height: max-content;
  overflow: hidden;
`

const Stress = styled.div`
  background-image: ${({ theme }) =>
    theme.isDark ? `url('images/home/home_banner_dark.png')` : `url('/images/lottery/home-bannner-back.png')`};
  padding: 0 48px;
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 1250px) {
    flex-direction: row;
  }
`

const NowLive = styled(Text)`
  text-align: center;
  background-color: #212052;
  font-size: 48px;
  font-weight: 200;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
  font-family: 'Poppins';
  ${({ theme }) => theme.mediaQueries.xl} {
    text-align: left;
  }
`

const StyledStaBtnUnTxt = styled(Text)`
  text-align: center;
  background-color: #212052;
  font-size: 48px;
  font-weight: 200;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
  font-family: 'Poppins';
  ${({ theme }) => theme.mediaQueries.xl} {
    text-align: right;
    margin: 0px 48px 0px 0px;
  }
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

const ThemeText = styled(Text)`
  background-color: ${({ theme }) => (theme.isDark ? '#ffffff' : '#414177')};
  font-size: 48px;
  font-weight: 200;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
  font-family: 'Poppins';
`

const LeftWrapper = styled(Flex)`
  flex-direction: column;
  flex: 1;
  padding-bottom: 120px;
  padding-top: 24px;
`

const RightWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 0.5;
  & img {
    max-width: 480px;
    width: 480px;
    height: 350px;
  }
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1593px;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.xl} {
    flex-direction: row;
  }
`

const CardLeftWrapper = styled(Flex)`
  flex-direction: column;
  flex: 1;
  margin: 0 48px 24px 48px;
  ${({ theme }) => theme.mediaQueries.xl} {
    margin: 0 12px 0 48px;
  }
`

const CardRightWrapper = styled.div`
  display: flex;
  flex: 0.5;
  margin: 0 48px 0 48px;
  ${({ theme }) => theme.mediaQueries.xl} {
    margin: 0 48px 0 12px;
  }
`

const CardButtonWrapper = styled.div`
  display: flex;
  flex: 0.5;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  & Button {
    text-shadow: 0 0 3px, 0 0 6px;
    font-family: 'Barlow';
    font-weight: normal;
    font-size: 14px;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    margin: 0 48px 0 12px;
    flex-flow: row-reverse;
  }
`

const statisticBtnArray = [
  {
    id: 0,
    btnName: 'YEARLY',
    backgroundColor: '#008ffe',
  },
  {
    id: 1,
    btnName: 'MONTHLY',
    backgroundColor: '#3d4276',
  },
  {
    id: 2,
    btnName: 'BIWEEKLY',
    backgroundColor: '#f91dba',
  },
]

const HomeBanner: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Wrapper>
        <Stress>
          <LeftWrapper>
            <NowLive>
              <LoremText>{t('Lorem')}</LoremText>
              <ThemeText>{t(' ipsum dolor sit amet')}</ThemeText>
            </NowLive>
            <ThemeText style={{ fontSize: '16px', fontFamily: 'Barlow', fontWeight: 'bold' }}>
              {t(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore manage qliqua.',
              )}
              {t(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore manage qliqua.',
              )}
              {t(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore manage qliqua.',
              )}
            </ThemeText>
            <div style={{ marginTop: '32px' }}>
              <Button
                style={{
                  textShadow: '0 0 3px, 0 0 6px',
                  borderRadius: '30px',
                  backgroundColor: '#fc35cb',
                }}
                scale="md"
              >
                <Text color="white" bold fontFamily="Barlow" fontWeight={100} fontSize="16px" mr="4px">
                  {t('GET IT NOW')}
                </Text>
              </Button>
              <img
                style={{
                  marginLeft: '40px',
                  marginBottom: '-18px',
                  height: '48px',
                  width: '75px',
                }}
                src="/images/lottery/getitnow-icon.png"
                alt="Get It Now's next icon"
              />
            </div>
          </LeftWrapper>
          <RightWrapper>
            <img src="/images/lottery/banner.png" alt="lottery bunny" />
          </RightWrapper>
        </Stress>
      </Wrapper>
      <Inner
        style={{
          margin: '-100px 0 24px 0',
        }}
      >
        <CardLeftWrapper>
          <StatisticCard1 />
        </CardLeftWrapper>
        <CardRightWrapper>
          <StatisticCard2 />
        </CardRightWrapper>
      </Inner>
      <Inner>
        <CardLeftWrapper>
          <NowLive
            style={{
              fontSize: '24px',
            }}
          >
            <LoremText style={{ fontSize: '24px' }}> {t('Out of This World NFTs')} </LoremText>
            <ThemeText style={{ fontSize: '24px' }}>{t(' in 1 week')}</ThemeText>
          </NowLive>
        </CardLeftWrapper>
        <CardButtonWrapper>
          {statisticBtnArray.map((statisticBtn) => (
            <Button
              key={statisticBtn.id}
              style={{ backgroundColor: `${statisticBtn.backgroundColor}` }}
              scale="sm"
              m="8px"
            >
              {t(`${statisticBtn.btnName}`)}
            </Button>
          ))}
        </CardButtonWrapper>
      </Inner>
      <Inner>
        <CardLeftWrapper>
          <StyledStaBtnUnTxt>
            <ThemeText style={{ fontSize: '12px', fontFamily: 'Barlow' }}>
              {t(' SWITCH VIEWS OR GO BACK TO ')}
            </ThemeText>
            <LoremText style={{ fontSize: '12px', fontFamily: 'Barlow' }}>{t('DEFAULT')}</LoremText>
          </StyledStaBtnUnTxt>
        </CardLeftWrapper>
      </Inner>
    </>
  )
}

export default HomeBanner

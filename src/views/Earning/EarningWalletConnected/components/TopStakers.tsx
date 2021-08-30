import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { InjectedModalProps, Text } from '@spacegrimeswap/uikit'
import styled from 'styled-components'

const StyledCardTitle = styled.div`
  text-align: center;
  margin-bottom: 24px;
`

const NowLive = styled(Text)`
  color: white;
  font-size: 54px;
  display: inline;
  font-family: 'Poppins';
`

const LoremText = styled(Text)`
  background-color: #fa1db6;
  font-size: 54px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
  font-family: 'Poppins';
`

const WrapperRank1 = styled.div`
  background: ${({ theme }) => (theme.isDark ? `rgba(61, 60, 112, 0.2)` : `rgba(197, 202, 253, 0.63)`)};
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  padding: 12px;
  align-items: center;
  box-shadow: ${({ theme }) => (theme.isDark ? `0 10px 21px #060638` : `0 0 7px white, 0 19px 21px #060638`)};
`

const WrapperRank2 = styled.div`
  background: ${({ theme }) => (theme.isDark ? `rgba(61, 60, 112, 0.2)` : `rgba(197, 202, 253, 0.63)`)};
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  padding: 12px;
  align-items: center;
  box-shadow: ${({ theme }) => (theme.isDark ? `0 10px 21px #060638` : `0 0 14px white, 0 19px 21px #606092`)};
`

const WrapperRank3 = styled.div`
  background: ${({ theme }) => (theme.isDark ? `rgba(61, 60, 112, 0.2)` : `rgba(197, 202, 253, 0.63)`)};
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  padding: 12px;
  align-items: center;
  box-shadow: ${({ theme }) =>
    theme.isDark ? `0 0 21px #14146e,0 10px 21px #060638` : `0 0 21px #babaec, 0 19px 21px #9c9cce`};
`

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px;
  align-items: center;
  height: 65px;
  border-bottom: ${({ theme }) => (theme.isDark ? `3px solid #606092` : `3px solid #858dc8`)};
  border-radius: 25px;
`

const Wrapper1 = styled.div`
  background: ${({ theme }) => (theme.isDark ? `rgba(61, 60, 112, 0.2)` : `rgba(197, 202, 253, 0.63)`)};
  box-shadow: ${({ theme }) =>
    theme.isDark ? `0 0 21px #14146e, 0 10px 21px #060638` : `0 0 21px white, 0 19px 21px #060638`};
  border-radius: 25px;
  height: 669px;
`

const StyledRank = styled.div`
  flex: 15%;
  text-align: center;
  font-family: 'Barlow';
  font-size: 24px;
  color: white;

  & img {
    width: 45px;
    height: 48px;
  }
`
const StyledAddress = styled.div`
  flex: 65%;
`
const StyledPrize = styled.div`
  flex: 20%;
`

const StyledInfoTxt = styled(Text)`
  color: ${({ theme }) => (theme.isDark ? `white` : `#414076`)};
  font-family: 'Barlow';
  font-size: 24px;
  display: inline;
`
// 3d3c70 61 60 112

const rankArrays = [
  { address: '0xF977814e90dA4**********5A0616a897441aceC', prize: '21,000,000' },
  { address: '0xF977814e90dA4**********5A0616a897441aceC', prize: '21,000,000' },
  { address: '0xF977814e90dA4**********5A0616a897441aceC', prize: '21,000,000' },
  { address: '0xF977814e90dA4**********5A0616a897441aceC', prize: '21,000,000' },
  { address: '0xF977814e90dA4**********5A0616a897441aceC', prize: '21,000,000' },
  { address: '0xF977814e90dA4**********5A0616a897441aceC', prize: '21,000,000' },
  { address: '0xF977814e90dA4**********5A0616a897441aceC', prize: '21,000,000' },
  { address: '0xF977814e90dA4**********5A0616a897441aceC', prize: '21,000,000' },
  { address: '0xF977814e90dA4**********5A0616a897441aceC', prize: '21,000,000' },
  { address: '0xF977814e90dA4**********5A0616a897441aceC', prize: '21,000,000' },
]

interface CurrencySearchModalProps extends InjectedModalProps {
  showCommonBases?: boolean
}

const IndividualTopStakers: React.FC<{ address: string; prize: string }> = ({ address, prize }) => {
  return (
    <>
      <StyledAddress>
        <StyledInfoTxt>{address}</StyledInfoTxt>
      </StyledAddress>
      <StyledPrize>
        <img
          style={{ display: 'inline', marginBottom: '-9px' }}
          src="/images/earning/GRIMEX Token.png"
          alt="GrimexToken"
        />
        <StyledInfoTxt style={{ display: 'inline' }} ml={12}>
          {prize}
        </StyledInfoTxt>
      </StyledPrize>
    </>
  )
}

export default function TopStakers({ showCommonBases = false }: CurrencySearchModalProps) {
  const { t } = useTranslation()
  return (
    <>
      <StyledCardTitle>
        <NowLive>
          <img
            style={{
              display: 'inline',
              width: '69px !important',
              height: '69px !important',
              marginBottom: '-16px',
            }}
            src="/images/earning/Podium.png"
            alt="Top Stakers"
          />
          <LoremText>{t(`Top`)}</LoremText>
          {t(` Stakers`)}
        </NowLive>
      </StyledCardTitle>
      <Wrapper1>
        {rankArrays.map((rank, index) => {
          if (index === 0) {
            return (
              <WrapperRank1>
                <StyledRank>
                  <img src="/images/earning/gold.png" alt="gold rank" />
                </StyledRank>
                <IndividualTopStakers address={rank.address} prize={rank.prize} />
              </WrapperRank1>
            )
          }
          if (index === 1) {
            return (
              <WrapperRank2
                style={{
                  height: '144px',
                  alignItems: 'flex-end',
                  zIndex: -1,
                  marginTop: '-72px',
                }}
              >
                <StyledRank>
                  <img src="/images/earning/silver.png" alt="gold rank" />
                </StyledRank>
                <IndividualTopStakers address={rank.address} prize={rank.prize} />
              </WrapperRank2>
            )
          }
          if (index === 2) {
            return (
              <WrapperRank3
                style={{
                  height: '216px',
                  alignItems: 'flex-end',
                  zIndex: -1,
                  marginTop: '-144px',
                }}
              >
                <StyledRank>
                  <img src="/images/earning/bronze.png" alt="gold rank" />
                </StyledRank>
                <IndividualTopStakers address={rank.address} prize={rank.prize} />
              </WrapperRank3>
            )
          }
          return (
            <Wrapper2>
              <StyledRank>{`${index + 1}.`}</StyledRank>
              <IndividualTopStakers address={rank.address} prize={rank.prize} />
            </Wrapper2>
          )
        })}
      </Wrapper1>
    </>
  )
}

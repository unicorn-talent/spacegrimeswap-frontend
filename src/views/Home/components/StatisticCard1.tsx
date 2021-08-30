import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { Card, CardBody, Text } from '@spacegrimeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import * as TokenBalance from 'hooks/useTokenBalance'
import { usePollFarmsData, usePriceGrimexBusd } from 'state/farms/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { getGrimexAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledFarmStakingCard = styled(Card)`
  background-color: #3a3996;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0.5, 0.6), 0 20px 20px 0 rgba(0, 0, 0.3, 0.4);
`

const Row = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  font-family: 'Barlow';
`
const Col = styled.div`
  font-size: 12px;
  justify-content: space-between;
  width: 25%;
  margin-right: 8px;
`

const StyledText = styled(Text)`
  color: white;
  font-family: 'Barlow';
  font-size: 12px;
`

const StatisticCard1 = () => {
  const { t } = useTranslation()
  const totalSupply = TokenBalance.useTotalSupply()
  const burnedBalance = getBalanceNumber(TokenBalance.useBurnedBalance(getGrimexAddress()))
  const grimexSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const grimexPrice = usePriceGrimexBusd()
  const [grimexUSDPrice, setGrimexUSDPrice] = useState(0)
  const { balance: grimexBalance } = TokenBalance.default(getGrimexAddress())
  const [grimexMarketCapUSDBalance, setGrimexMarketCapUSDBalance] = useState(0)
  const { account } = useWeb3React()

  useEffect(() => {
    setGrimexUSDPrice(grimexPrice.toNumber())
    setGrimexMarketCapUSDBalance(new BigNumber(grimexSupply).multipliedBy(grimexPrice).toNumber())
  }, [grimexPrice, grimexSupply]);

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Row>
          <Col>
			<StyledText small> {t('Your SPACEGRIME balance')} </StyledText>
			{
              !account ? 
              (
                <Text small color="white" fontFamily="Barlow" fontSize="12px">
                  {' '}
                  {t('LOCKED')}{' '}
                </Text>
              ) : (
                <CardValue fontSize="12px" fontFamily="Barlow" color="white" decimals={0} value={getBalanceNumber(grimexBalance)} />
              )
            }
          </Col>
          <Col>
            <StyledText small> {t('Pending Harvest')} </StyledText>
            <StyledText small> {t('$ 0.000')} </StyledText>
          </Col>
          <Col>
			<StyledText small> {t('SPACEGRIME price')} </StyledText>
			<CardValue fontSize="12px" fontFamily="Barlow" color="white" decimals={0} value={grimexUSDPrice} />
          </Col>
          <Col>
			<StyledText small> {t('SPACEGRIME Market Cap')} </StyledText>
      <CardValue fontSize="12px" fontFamily="Barlow" color="white" decimals={0} value={grimexMarketCapUSDBalance} />
          </Col>
        </Row>
        <Row>
          <Col>
			<StyledText small> {t('SPACEGRIME in Circulation')} </StyledText>
            <CardValue fontSize="12px" fontFamily="Barlow" color="white" decimals={0} value={grimexSupply} />
          </Col>
          <Col>
			<StyledText small> {t('Total Supply')} </StyledText>
			<CardValue fontSize="12px" fontFamily="Barlow" color="white" decimals={0} value={grimexSupply + burnedBalance} />
          </Col>
          <Col>
			<StyledText small> {t('TVL')} </StyledText>
			<CardValue fontSize="12px" fontFamily="Barlow" color="white" decimals={0} value={burnedBalance} />
          </Col>
          <Col>
            <StyledText small> {t('Volume(24hr)')} </StyledText>
            <StyledText small> {t('LOCKED')} </StyledText>
          </Col>
        </Row>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default StatisticCard1

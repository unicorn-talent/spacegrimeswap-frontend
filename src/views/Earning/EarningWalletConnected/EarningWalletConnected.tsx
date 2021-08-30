import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Heading, Flex } from '@spacegrimeswap/uikit'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'
import { ChainId } from '@spacegrimeswap/sdk'
import { useTranslation } from 'contexts/Localization'
import { useFarms, usePollFarmsData, usePriceGrimexBusd } from 'state/farms/hooks'
import Loading from 'components/Loading'
import isArchivedPid, { isEarnGrimexPid } from 'utils/farmHelpers'
import { latinise } from 'utils/latinise'
import { Farm } from 'state/types'
import { getFarmApr } from 'utils/apr'
import { orderBy } from 'lodash'
import Page from './components/Page'
import { TabStatus, EarningWalletTab } from './components/EarningWalletTab'
import WalletCardItem, { FarmWithStakedValue } from './components/WalletCardItem'
import BaseLayout from '../../../components/BaseLayout'
import { BottomGradient, BottomGradientDark } from '../../../components/BottomGradient'

const StyledFlexLayout = styled(BaseLayout)`
  justify-content: center;
  margin: 24px;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 800px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`

const cardValues = [
  { id: 1, stake: 'Bake', earn: 'WSG', roi: '24.16%' },
  { id: 2, stake: 'WSGBNBBLP', earn: 'WSG', roi: '300.44%' },
  { id: 3, stake: 'GAT', earn: 'WSG', roi: '85.98%' },
  { id: 4, stake: 'GAT', earn: 'TLM', roi: '71.83%' },
  { id: 5, stake: 'GATBNB BLP', earn: 'BAKE', roi: '180%' },
  { id: 6, stake: 'DOGGY-BNB BLP', earn: 'BAKE', roi: '110%' },
  { id: 7, stake: 'GRIMEX', earn: 'X2', roi: '180%' },
  { id: 8, stake: 'GRIMEX', earn: 'X2', roi: '180%' },
  { id: 9, stake: 'GRIMEX', earn: 'X2', roi: '180%' },
  { id: 10, stake: 'GRIMEX', earn: 'X2', roi: '180%' },
  { id: 11, stake: 'GRIMEX', earn: 'X2', roi: '180%' },
  { id: 12, stake: 'GRIMEX', earn: 'X2', roi: '180%' },
  { id: 13, stake: 'GRIMEX', earn: 'X2', roi: '180%' },
  { id: 14, stake: 'GRIMEX', earn: 'X2', roi: '180%' },
]

const EarningWalletConnected = () => {
  const { t } = useTranslation()
  const { data: farmsLP, userDataLoaded } = useFarms()
  const grimexPrice = usePriceGrimexBusd()
  const [query, setQuery] = useState('')
  const { account } = useWeb3React()
  const [newArray, setnewArray] = useState([])
  const [sortOption, setSortOption] = useState('hot')
  const [tabStatus, setTabStatus] = useState(TabStatus.TabHot)

  usePollFarmsData(false)

  const userDataReady = !account || (!!account && userDataLoaded)

  const activeFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X' && !isArchivedPid(farm.pid))
  const earnGrimexFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X' && isEarnGrimexPid(farm.pid))
  const inactiveFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier === '0X' && !isArchivedPid(farm.pid))
  const archivedFarms = farmsLP.filter((farm) => isArchivedPid(farm.pid))

  const [isActive, setActive] = useState(true)

  const farmsList = useCallback(
    (farmsToDisplay: Farm[]): FarmWithStakedValue[] => {
      let farmsToDisplayWithAPR: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        if (!farm.lpTotalInQuoteToken || !farm.quoteToken.busdPrice) {
          return farm
        }
        const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(farm.quoteToken.busdPrice)
        const { cakeRewardsApr, lpRewardsApr } = isActive
          ? getFarmApr(new BigNumber(farm.poolWeight), grimexPrice, totalLiquidity, farm.lpAddresses[ChainId.TESTNET])
          : { cakeRewardsApr: 0, lpRewardsApr: 0 }

        return { ...farm, apr: cakeRewardsApr, lpRewardsApr, liquidity: totalLiquidity }
      })

      if (query) {
        const lowercaseQuery = latinise(query.toLowerCase())
        farmsToDisplayWithAPR = farmsToDisplayWithAPR.filter((farm: FarmWithStakedValue) => {
          return latinise(farm.lpSymbol.toLowerCase()).includes(lowercaseQuery)
        })
      }
      return farmsToDisplayWithAPR
    },
    [grimexPrice, query, isActive],
  )

  const chosenFarmsMemoized = useMemo(() => {
    let chosenFarms = []

    const sortFarms = (farms: FarmWithStakedValue[]): FarmWithStakedValue[] => {
      switch (sortOption) {
        case 'apr':
          return orderBy(farms, (farm: FarmWithStakedValue) => farm.apr + farm.lpRewardsApr, 'desc')
        case 'multiplier':
          return orderBy(
            farms,
            (farm: FarmWithStakedValue) => (farm.multiplier ? Number(farm.multiplier.slice(0, -1)) : 0),
            'desc',
          )
        case 'earned':
          return orderBy(
            farms,
            (farm: FarmWithStakedValue) => (farm.userData ? Number(farm.userData.earnings) : 0),
            'desc',
          )
        case 'liquidity':
          return orderBy(farms, (farm: FarmWithStakedValue) => Number(farm.liquidity), 'desc')
        default:
          return farms
      }
    }

    switch(tabStatus) {
      case TabStatus.TabHot:
        chosenFarms = farmsList(activeFarms)
        break;
      case TabStatus.TabEarnGrimex:
        break;
      case TabStatus.TabGrimexStaking:
        break;
      case TabStatus.TabEarnNFT:
        break;
      case TabStatus.TabNFTStaking:
        break;
      case TabStatus.TabOthers:
        break;
      case TabStatus.TabEnded:
        break;
      default:
        break;
    }
    
    return sortFarms(chosenFarms)
  }, [
    sortOption,
    activeFarms,
    farmsList,
    tabStatus
  ])

  useEffect(() => {
    const initFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X' && !isArchivedPid(farm.pid))
    setnewArray(initFarms)
  }, [farmsLP])

  const callback = (status) => {
    setTabStatus(status)
  }
  const { theme } = useTheme()

  return (
    <Page>
      <StyledContent>
        <Heading as="h1" scale="xxl" fontFamily="Akira Expanded" color="white" mb="24px">
          {t('Earning')}
        </Heading>

        <EarningWalletTab getCardCount={callback} />

        <StyledFlexLayout>
          {chosenFarmsMemoized.map((farm, index) => (
            <WalletCardItem key={farm.pid} farm={farm} earn="GRIMEX"/>
          ))}
        </StyledFlexLayout>
      </StyledContent>
      {theme.isDark ? (
        <BottomGradientDark style={{ height: '100px', width: '100%', position: 'fixed', bottom: '0' }} />
      ) : (
        <BottomGradient style={{ height: '100px', width: '100%', position: 'fixed', bottom: '0' }} />
      )}

      {account && !userDataLoaded && (
        <Flex justifyContent="center">
          <Loading />
        </Flex>
      )}
    </Page>
  )
}

export default EarningWalletConnected

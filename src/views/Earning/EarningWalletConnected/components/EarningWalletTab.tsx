// eslint-disable-next-line

import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { Button, Text } from '@spacegrimeswap/uikit'

const StyledTabBtn = styled.div`
  & Button {
    margin: 4px 20px 4px 20px;
  }
`
const StyledTabBtnTxt = styled(Text)`
  text-shadow: 0px 0px 4px white, 0 0 8px white, 0 0 12px white, 0 0 16px white;
  font-family: 'Barlow';
  font-weight: bold;
  color: white;
  margin-right: 4px;
  font-size: 16px;
`

const tabBtnArray = [
  { btnName: 'Hot' },
  { btnName: 'Earn GRIMEX' },
  { btnName: 'GRIMEX Staking' },
  { btnName: 'Others' },
  { btnName: 'Earn NFT' },
  { btnName: 'NFT Staking' },
  { btnName: 'Ended' },
]

export enum TabStatus  {
  TabHot,
  TabEarnGrimex,
  TabGrimexStaking,
  TabOthers,
  TabEarnNFT,
  TabNFTStaking,
  TabEnded
}

export const EarningWalletTab = ({ getCardCount }) => {
  const { t } = useTranslation()

  // const [tabId, setTabIndex] = useState(0)

  const handleTabBtnClk = (tabBtn) => {
    if (tabBtn.btnName === 'Hot') {
      getCardCount(TabStatus.TabHot)
    } else if (tabBtn.btnName === 'Earn GRIMEX') {
      getCardCount(TabStatus.TabEarnGrimex)
    } else if (tabBtn.btnName === 'GRIMEX Staking') {
      getCardCount(TabStatus.TabGrimexStaking)
    } else if (tabBtn.btnName === 'Others') {
      getCardCount(TabStatus.TabOthers)
    } else if (tabBtn.btnName === 'Earn NFT') {
      getCardCount(TabStatus.TabEarnNFT)
    } else if (tabBtn.btnName === 'NFT Staking') {
      getCardCount(TabStatus.TabNFTStaking)
    } else if (tabBtn.btnName === 'Ended') {
      getCardCount(TabStatus.TabEnded)
    }
  }

  return (
    <StyledTabBtn>
      {tabBtnArray.map((tabBtn) =>
        tabBtn.btnName === 'Hot' ? (
          <Button key={tabBtn.btnName} p="0" variant="text" onClick={() => handleTabBtnClk(tabBtn)}>
            <img key={tabBtn.btnName} src="/images/earning/fire.png" alt="hot-fire" />
            <StyledTabBtnTxt style={{ marginBottom: '-12px' }}>{t(`${tabBtn.btnName}`)}</StyledTabBtnTxt>
          </Button>
        ) : (
          <Button key={tabBtn.btnName} p="0" variant="text" onClick={() => handleTabBtnClk(tabBtn)}>
            <StyledTabBtnTxt> {t(`${tabBtn.btnName}`)} </StyledTabBtnTxt>
          </Button>
        ),
      )}
    </StyledTabBtn>
  )
}

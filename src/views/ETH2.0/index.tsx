import React from 'react'
import { useWeb3React } from '@web3-react/core'
import Page from './components/Page'
import ETHHeader from './components/ETHHeader'
import WalletNotConnected from './components/WalletNotConnected'
import WalletConnected from './components/WalletConnected'

const Teams = () => {
  const { account } = useWeb3React()
  if (!account) {
    return <WalletNotConnected />
  }

  return (
    <Page>
      <ETHHeader />
      <WalletConnected />
    </Page>
  )
}

export default Teams

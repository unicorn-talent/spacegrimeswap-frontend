import React from 'react'
import { Button, useWalletModal } from '@spacegrimeswap/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const ConnectWalletButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <Button
      onClick={onPresentConnectModal}
      {...props}
      style={{
        backgroundColor: '#fa1dbb',
        padding: '10px 50px',
        borderRadius: '20px',
        fontFamily: 'Barlow',
        textAlign: ' center',
        fontWeight: 100,
        textShadow: '0 0 10px, 0 0 10px',
        boxShadow: '0 0 2px #2584ca, 0 0 4px #2584ca, 0 0 6px #2584ca',
      }}
    >
      {t('CONNET TO A WALLET')}
    </Button>
  )
}

export default ConnectWalletButton

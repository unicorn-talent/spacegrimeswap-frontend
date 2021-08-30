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
        backgroundColor: '#008ffe',
        padding: '10px 35px',
        borderRadius: '30px',
        fontFamily: 'Barlow',
        textAlign: ' center',
        fontWeight: 100,
        textShadow: '0 0 10px, 0 0 10px',
      }}
    >
      {t('CONNET WALLET')}
    </Button>
  )
}

export default ConnectWalletButton

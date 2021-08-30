import React from 'react'
import styled from 'styled-components'
import { Heading } from '@spacegrimeswap/uikit'
import { useTranslation } from 'contexts/Localization'
// import EtherFAQ from './EtherFAQ'

const Ethstyle = styled.div`
  width: 80%;
  margin-left: 10%;
  background-color: #fdfbfb;
  border-radius: 30px;
  height: 90%;
  box-shadow: 0 0 3px white, 0 0 6px white, 0 0 9px white;
  background-image: linear-gradient(#fdfbfb, #eef0f0);
`
const ETHHeader = () => {
  const { t } = useTranslation()

  return (
    <>
      <div>
        <Heading scale="xl" mb="8px" style={{ marginLeft: '20%', color: 'white', marginBottom: '20px' }}>
          {t('ETH 2.0')}
        </Heading>
        <Ethstyle>
          <div style={{ marginLeft: '40px', paddingTop: '20px' }}>
            <p style={{ color: '#4da4e7', marginBottom: '40px', fontSize: '20px' }}>What is ETH 2.0?</p>
            <p style={{ color: '#414076', lineHeight: '1.5' }}>
              ETH 2.0 is the next generation of Ethereum and uses proof-of-stake (PoS) to secure its network. PoS can
              generate staking income but participating in ETH2.0 requires 32 ETH in staking and validator construction
              technology.
            </p>
            <p style={{ borderTop: '1px solid #c9cad7', width: '13%', marginTop: '10px', marginBottom: '15px' }} />
            <p>
              <img src="/images/ether2/nextque.png" alt="center" />
              <span style={{ color: '#414076' }}> View Next: What is ETH2.0 Staking Token?</span>
            </p>
          </div>
        </Ethstyle>
      </div>
    </>
  )
}

export default ETHHeader

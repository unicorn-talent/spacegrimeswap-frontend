// eslint-disable-next-line

import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { Button, Text } from '@spacegrimeswap/uikit'

const StyledCard = styled.div`
  position: relative;
  background: rgba(200, 205, 255, 0.63);
  border: 2px solid #c6c9ec;
  border-radius: 30px;
  box-shadow: 0 0 30px 5px rgba(99, 107, 222);
  width: 250px;
  height: 300px;
  padding: 24px;
  padding-left: 0px;
  padding-right: 0px;
  justify-content: center;
  font-family: Barlow;
  & Button {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  & img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 100px;
  }
  // opacity: 0.4;
  &:hover {
    background: rgba(200, 205, 255, 1);
  }
`
const Row = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`

const Col = styled.div`
  margin: 0 24px;
  text-align: center;
`

const SelectedModalCard: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Row>
      <Col>
        <StyledCard>
          <img src="/images/ether2/img_2.png" alt="card-logo" />
          <br />
          <Text>{t('0.000')}</Text>
          <Text style={{ marginBottom: '12px' }}>{t('GRETH Earned')}</Text>
          <Button style={{ color: 'black', backgroundImage: 'linear-gradient(180deg, #19fff4, #abffb0)' }} scale="sm">
            {t('HARVEST')}
          </Button>
        </StyledCard>
      </Col>
      <Col>
        <StyledCard>
          <img src="/images/ether2/centerimg.png" alt="card-logo" />
          <br />
          <Text>{t('0.000')}</Text>
          <Text style={{ marginBottom: '12px' }}>{t('GRIMEX-ETH BLP Tokens Staked')}</Text>
          <Button style={{ color: 'black', backgroundImage: 'linear-gradient(180deg, #19fff4, #abffb0)' }} scale="sm">
            {t('APPROVE GRIMEX-ETH BLP')}
          </Button>
        </StyledCard>
      </Col>
    </Row>
  )
}

export default SelectedModalCard

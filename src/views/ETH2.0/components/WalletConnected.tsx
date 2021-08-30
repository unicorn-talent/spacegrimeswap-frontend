import React, { useState } from 'react'
import { Flex, Button, useModal } from '@spacegrimeswap/uikit'
import styled from 'styled-components'
import Footer from '../../../components/Menu/Footer'
import Ethermodal from './EtherModal'

const cards = ['/images/ether2/img_1.png', '/images/ether2/img_2.png', '/images/ether2/img_3.png']

const StyledDiv = styled.div`
  text-align: -webkit-center;
`
const ContentDiv = styled.div`
  margin-top: 170px;
`

const index = 1
const WalletConnected = () => {
  const [onPresent1] = useModal(<Ethermodal index={index} showCommonBases />)

  const [count, setCount] = useState(1)

  const prevSlide = () => {
    const prevSlide1 = count - 1 < 0 ? 0 : count - 1
    setCount(prevSlide1)
  }

  const nextSlide = () => {
    const nextSlide1 = count + 1 < cards.length ? count + 1 : cards.length - 1
    setCount(nextSlide1)
  }

  return (
    <div style={{ width: '100%' }}>
      <div style={{ textAlign: 'center', color: 'white', marginTop: '60px' }}>
        <StyledDiv>
          <p style={{ fontSize: '40px' }}>
            <span style={{ color: '#fc35cb' }}>$GRIMEX</span> Staking
          </p>
          <div style={{ color: '#2594e1', marginTop: '20px', lineHeight: '1.8', width: '220px', marginBottom: '50px' }}>
            <p>
              <span style={{ float: 'left' }}>Deposit</span>
              <span style={{ float: 'right' }}>DRIMEX-ETH BLP</span>
            </p>
            <br />
            <p>
              <span style={{ float: 'left' }}>Earn</span>
              <span style={{ float: 'right' }}>GRETH</span>
            </p>
            <br />
            <p>
              <span style={{ float: 'left' }}>Roi</span>
              <span style={{ float: 'right' }}>0</span>
            </p>
            <br />
          </div>
          <ContentDiv>
            <Flex>
              <div style={{ marginTop: '60px', width: '25%' }}>
                <Button variant="text" onClick={prevSlide}>
                  <img src="/images/ether2/leftarrow.png" alt="left" />
                </Button>
              </div>
              <div style={{ width: '50%', marginRight: 'auto', marginLeft: 'auto', display: 'block' }}>
                <div>
                  <Flex style={{ display: 'inline-flex' }}>
                    {count === 0 || count === 2 ? (
                      <img
                        src={cards[1]}
                        style={{ zIndex: 0, marginRight: '-20px', width: '170px', height: '170px', opacity: '0.3' }}
                        alt="carousel-img"
                      />
                    ) : (
                      <img
                        src={cards[count + 1]}
                        style={{ zIndex: 0, marginRight: '-20px', width: '170px', height: '170px', opacity: '0.3' }}
                        alt="carousel-img"
                      />
                    )}

                    <img
                      src={cards[count]}
                      style={{ zIndex: 0, marginLeft: '-70px', width: '170px', height: '170px' }}
                      alt="carousel-img"
                    />
                  </Flex>
                </div>
              </div>
              <div style={{ marginTop: '60px', width: '25%' }}>
                <Button variant="text" onClick={nextSlide}>
                  <img src="/images/ether2/rightarrow.png" alt="right" />
                </Button>
              </div>
            </Flex>
            <Button
              style={{
                height: '40px',
                backgroundColor: '#aeffae',
                marginTop: '40px',
                marginBottom: '20px',
                color: 'black',
                backgroundImage: 'linear-gradient(#aeffae, #71ffcb)',
              }}
              onClick={onPresent1}
            >
              SELECT
            </Button>
          </ContentDiv>
        </StyledDiv>
      </div>
      <Footer />
    </div>
  )
}

export default WalletConnected

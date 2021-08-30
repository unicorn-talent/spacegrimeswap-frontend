import React, { useState } from 'react'
import {
  Heading,
  Button,
  Flex,
  ModalContainer,
  //   ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalBody,
  InjectedModalProps,
} from '@spacegrimeswap/uikit'
import styled from 'styled-components'
import CurrencyInputPanel from './components/inputpanel'

const StyledModal = styled(ModalContainer)`
  background-image: url('/images/launchpad/ooo.png');
  background-position: center;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width:65%;
  height: 80%;
  font-family: Barlow;
  box-shadow: 0 0 25px white;
}
  .overlay3{
    left: 40px;
    top: 20px;
    z-index:3;
    font-weight: 10px;
    text-align: justify;
    font-family: Barlow;
  }
  .leftbutton{
    width: 20px;
    height: 30px;
    margin-top:15px;
    background-color:#22A5FF;
  }
  .officialbutton{
    color:'white';
    height: 40px;
    width: 162px;
    margin-top: 30px;
    background-color:#22A5FF;
    text-shadow: 2px 2px 5px white;
    font-family: Barlow;
    letter-spacing: -1.3px;
  }
  .cancel{
    width:30px;
    height:30px;
    margin-top: 15px;
    margin-right:20px;

  }
  .buycontent{
    height: 70px;
    background-color: ${({ theme }) => (theme.isDark ? '#3A3996' : '#ECEEEF')};
    border-radius: 25px;
    margin-bottom: 20px;
    margin-top:30px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 1300px) {
      width:450px;
      margin-left: 0;
      margin-right: 0;
    }
  }
  .burn{
      margin-right:10px;
      float: left;
      margin-top: -10px;
  }
`
interface CurrencySearchModalProps extends InjectedModalProps {
  showCommonBases?: boolean
  title: string
  description: string
  idoAmount: string
  time: string
}

export default function CustomModal({
  onDismiss = () => null,
  showCommonBases = false,
  title,
  description,
  idoAmount,
  time,
}: CurrencySearchModalProps) {
  const [burn] = useState(0)
  const [holder] = useState(15)
  const [slip] = useState(7)
  const [initial] = useState(34000000000000)

  return (
    <StyledModal minWidth="400px">
      <ModalBody>
        <div className="overlay3">
          <Flex>
            <ModalTitle>
              <Heading>
                <div style={{ marginLeft: '15px' }}>
                  <Button className="leftbutton">IDO</Button>
                </div>
              </Heading>
            </ModalTitle>
            <div className="cancel">
              <ModalCloseButton onDismiss={onDismiss} />
            </div>
          </Flex>

          <div>
            <Flex>
              <div style={{ width: '7%' }} />
              <div style={{ width: '55%', marginLeft: '10px' }}>
                <p style={{ fontSize: '40px', color: 'white', marginBottom: '20px', fontFamily: 'barlow' }}>
                  <span style={{ color: '#FC35CB' }}>{title.split(' ', 1)}</span>{' '}
                  <span style={{ fontSize: '90%' }}>{title.replace(`${title.split(' ', 1)}`, '')}</span>
                </p>
                <div style={{ color: 'white', fontFamily: 'barlow' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna alliqua.
                </div>
                <Button className="officialbutton">OFFICIAL WEBSITE</Button>
                <div style={{ color: 'white', marginTop: '40px' }}>
                  <p style={{ fontFamily: 'barlow' }}>{description}</p>
                </div>
                <div className="buycontent">
                  <CurrencyInputPanel />
                </div>
              </div>
              <div style={{ width: '30%', color: 'white', marginLeft: '50px', marginRight: '10px', marginTop: '50px' }}>
                <p style={{ paddingBottom: '13px' }}>
                  <span style={{ float: 'left' }}> IDO Amount:</span>
                  <span style={{ float: 'right' }}>{idoAmount}</span>
                </p>
                <br />
                <p style={{ paddingBottom: '13px' }}>
                  <span style={{ float: 'left' }}>Supported Coin:</span>
                  <span style={{ float: 'right' }}>BNB</span>
                </p>
                <br />
                <p style={{ paddingBottom: '13px' }}>
                  <span style={{ float: 'left' }}>Price:</span>
                  <span style={{ float: 'right' }}>0.005BNB</span>
                </p>
                <br />
                <p style={{ paddingBottom: '13px' }}>
                  <span style={{ float: 'left' }}>Start Block:</span>
                  <span style={{ float: 'right' }}>0</span>
                </p>
                <br />
                <p style={{ paddingBottom: '13px' }}>
                  <span style={{ float: 'left' }}>Time:</span>
                  <span style={{ float: 'right' }}>{time}</span>
                </p>
                <br />
                <p style={{ borderTop: '5px solid white', width: '100%', marginTop: '20px', marginBottom: '30px' }} />
                <p style={{ fontSize: '25px', float: 'right', textShadow: '0px 0px 5px white' }}>FEATURES</p>
                <br />
                <p style={{ marginBottom: '20px', marginTop: '60px' }}>
                  <img src="/images/launchpad/burn.png" alt="Cinque Terre" className="burn" />

                  <span>Burn %:</span>
                  <span style={{ float: 'right' }}>{burn}</span>
                </p>
                <br />
                <p style={{ marginBottom: '20px' }}>
                  <img src="/images/launchpad/holder.png" alt="Cinque Terre" className="burn" />
                  <span>%Redistributed to Holders:</span>
                  <span style={{ float: 'right' }}>{holder}%</span>
                </p>

                <br />
                <p style={{ marginBottom: '20px' }}>
                  <img src="/images/launchpad/slipage.png" alt="Cinque Terre" className="burn" />
                  <span>Slippage%:</span>
                  <span style={{ float: 'right' }}>{slip}%</span>
                </p>

                <br />
                <p style={{ marginBottom: '20px' }}>
                  <img src="/images/launchpad/locked.png" alt="Cinque Terre" className="burn" />
                  <span>LP Locked:</span>
                  <span style={{ float: 'right' }}>250Years</span>
                </p>
                <br />
                <p style={{ marginBottom: '20px' }}>
                  <img src="/images/launchpad/initial.png" alt="Cinque Terre" className="burn" />
                  <span>Initial Supply:</span>
                  <span style={{ float: 'right' }}>{initial}(34 Trilion)</span>
                </p>
              </div>
            </Flex>
          </div>
        </div>
      </ModalBody>
    </StyledModal>
  )
}

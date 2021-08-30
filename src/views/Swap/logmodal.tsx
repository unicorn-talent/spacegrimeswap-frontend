import React from 'react'
import { Button, Flex, ModalContainer, ModalBody, Input } from '@spacegrimeswap/uikit'
import styled from 'styled-components'
// import CurrencyInputPanel from './inputpanel'

const StyledModal = styled(ModalContainer)`
   {
    background: none;
    background-image: url('/images/popup.png');
    border: none;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 50%;
    height: 90%;
    font-family: Barlow;
    box-shadow: none;
  }
  //   .overlay1{

  //     background-position: center;
  //     z-index:-1;
  // }
`

export default function LogModal() {
  return (
    <StyledModal minWidth="400px">
      <div>
        <ModalBody>
          <div style={{ textAlign: 'center', color: 'white', position: 'relative' }}>
            <div style={{ fontSize: '50px', fontWeight: 'bold', marginTop: '15%', textShadow: '3px 3px #000000' }}>
              <p>LISTING</p>
              <p>APPLICATION</p>
            </div>
            <div style={{ marginTop: '4%', width: '40%', marginLeft: '30%', fontSize: '20px' }}>
              <p style={{ marginBottom: '5px' }}>Contract Address:</p>
              <Input type="text" scale="md" style={{ opacity: '0.3' }} placeholder="Type here..." />
              <br />
              <p style={{ marginBottom: '5px' }}>Token Logo Upload:</p>
              <Flex>
                <Input type="text" style={{ width: '50%', opacity: '0.3' }} scale="md" placeholder="Browse files..." />
                <Button height="40px" style={{ marginLeft: '40px', backgroundColor: '#25A1FF', width: '40%' }}>
                  UPLOAD
                </Button>
              </Flex>
              <br />
              <p style={{ marginBottom: '5px' }}>Telegram User ID:</p>
              <Input type="text" style={{ opacity: '0.3' }} scale="md" placeholder="Type here..." />
            </div>
          </div>
        </ModalBody>
        <Button
          height="40px"
          style={{
            position: 'relative',
            marginLeft: '45%',
            textShadow: '0 0 3px #FFFFFF',
            width: '10%',
            backgroundColor: '#3E4377',
            marginTop: '45px',
          }}
        >
          SUBMIT
        </Button>
      </div>
    </StyledModal>
  )
}

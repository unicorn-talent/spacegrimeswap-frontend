import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from '@spacegrimeswap/uikit'

const StyledIconField = styled.div`
  position: absolute;
  bottom: 8px;
  right: 16px;
  & img {
    margin-right: 15px;
  }
`

// const StyledFooterIcon = styled.div`
//   // position: absolute;
//   // bottom: 8px;
//   // right: 16px;
// `

const FootIcon = () => {
  return (
    <Flex flexGrow={1}>
      <StyledIconField>
        <NavLink exact activeClassName="active" to="https://www.twitter.com" target="_blank">
          <img src="/images/twitter.png" alt="Twitter" />
        </NavLink>
        <NavLink exact activeClassName="active" to="https://www.telegram.com" target="_blank">
          <img src="/images/telegram.png" alt="Telegram" />
        </NavLink>
        <NavLink exact activeClassName="active" to="https://www.email.com" target="_blank">
          <img src="/images/email.png" alt="Email" />
        </NavLink>
      </StyledIconField>
    </Flex>
  )
}

export default FootIcon

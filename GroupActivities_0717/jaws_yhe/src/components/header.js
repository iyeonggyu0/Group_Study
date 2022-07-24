import styled from 'styled-components'
import logo from '../img/logo1.png'
import logoh from '../img/logo0.png'
import MenuItem from './menuItem'
import HiddenMenuItemWrap from './hiddenBar'
import { useState } from 'react'

const DivHeader = styled.div`
  width: 100%;
  min-width: 1100px;
  height: 80px;
  border-bottom: 1px solid #fff;
  position: absolute;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: red;
  }
`
const Logo = styled.div`
  width: 40%;
  z-index: 1;
  left: 10rem;
  padding-right: 10rem;
  position: absolute;
  top: 21px;
  @media screen and (max-width: 1500px) {
    position: absolute;
    left: 2rem;
  }
`
const MenuItemWrap = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  position: relative;
  top: 21px;
`
const Header = () => {
  return (
    <DivHeader>
      <Logo className="l">
        <img src={logo} />
      </Logo>
      <MenuItemWrap>
        <MenuItem text="BRAND" />
        <MenuItem text="MENU" />
        <MenuItem text="STORE" />
        <MenuItem text="COMMUNITY" />
      </MenuItemWrap>
      <HiddenMenuItemWrap></HiddenMenuItemWrap>
    </DivHeader>
  )
}

export default Header

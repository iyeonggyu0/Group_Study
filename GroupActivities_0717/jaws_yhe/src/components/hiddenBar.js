import styled from 'styled-components'
import HiddenColumn from './hiddenItem'
import HiddenBox from './hiddenBox'
import { useState } from 'react'
const HiddenBar = styled.div`
  width: 100%;
  min-width: 1100px;
  height: 160px;
  position: absolute;
  top: 80px;
  background-color: #fff;
  color: #000;
  /* display: none; */

  .columns {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }
`

const HiddenMenuItemWrap = () => {
  return (
    <HiddenBar>
      <HiddenBox big="BRAND" small="jaws is happy" />
      <div className="columns">
        <HiddenColumn
          id="0"
          text1="greeting"
          text2="story"
          text3="recruit_info"
        />
        <HiddenColumn
          id="1"
          text1="mainMenu"
          text2="setMenu"
          text3="sideMenu"
        />
        <HiddenColumn id="2" text1="findStore" text2="guideStore" />
        <HiddenColumn id="3" text1="community" text2="customer's voice" />
      </div>
    </HiddenBar>
  )
}

export default HiddenMenuItemWrap

import styled from 'styled-components'
import { useCallback, useState, useRef, useEffect } from 'react'

import {
  iconA,
  iconB,
  iconC,
  iconD,
  logo,
  search,
  searchbn,
  menu,
} from '../img/imgs'
import Hot10Slide from './hot10'

const FHeaderTop = styled.div`
  width: 100%;
  height: 35px;
  position: relative;
  margin: 6px 0 9px;
  border-bottom: 1px solid #000;

  ul {
    display: flex;
    justify-content: right;
    position: absolute;
    right: 50px;
  }
  li {
    margin-right: 2em;
    list-style: none;
  }
`

const HeaderTop = () => {
  return (
    <FHeaderTop>
      <div>
        <ul>
          <li>
            <a href="./">
              join<span style={{ color: 'pink' }}>(+20,000won)</span>
            </a>
          </li>
          <li>
            <a href="./">Customer Service</a>
          </li>
          <li style={{ border: '1px solid #000', padding: '2px 5px' }}>
            <a href="./">login</a>
          </li>
        </ul>
      </div>
    </FHeaderTop>
  )
}
const FHeaderMiddle = styled.div`
  height: 131px;
  padding: 1rem 20% 1rem 5%;
  display: flex;
  justify-content: center;
  .logo {
    /* margin-right: 5rem; */
  }
  img {
    width: 140px;
    height: 41px;
  }
  .form {
    position: relative;
    background: url(${searchbn}) no-repeat;
    width: 363px;
    height: 44px;
    display: inline-block;
    margin: 0 3rem;
  }
  input {
    width: 363px;
    height: 44px;
    outline: none;
    border: none;
    background: none;
    padding: 0 70px 0 20px;
    font-weight: 300;
  }
  button {
    width: 44px;
    height: 44px;
    border: none;
    background: url(${search}) no-repeat;
    position: absolute;
    top: 8px;
    right: 10px;
  }
`
const IconWrap = styled.div`
  display: flex;
`
const Icon = ({ src, text }) => {
  return (
    <>
      <div style={{ marginRight: '10px' }}>
        <img src={src} style={{ width: '35px', height: '33px' }} />
        <h6 style={{ fontSize: '8PX' }}>{text}</h6>
      </div>
    </>
  )
}
const HeaderMiddle = () => {
  return (
    <FHeaderMiddle>
      <div className="logo">
        <a href="./">
          <img src={logo} />
        </a>
      </div>
      <div className="form">
        <input type="text" />
        <button></button>
      </div>
      <IconWrap>
        <Icon src={iconA} text="attend" />
        <Icon src={iconB} text="like" />
        <Icon src={iconC} text="basket" />
        <Icon src={iconD} text="proposal" />
      </IconWrap>
      <Hot10Slide />
    </FHeaderMiddle>
  )
}

const HeaderBottom = () => {
  const menuList = [
    {
      id: 1,
      title: 'BEST',
      subTitle: ['', '', '', '', ''],
    },
    {
      id: 2,
      title: 'NEW',
      subTitle: ['', '', '', '', ''],
    },
    {
      id: 3,
      title: 'OUTER',
      subTitle: ['가디간', 'yasang', 'padding', 'jacket', 'plis'],
    },
    {
      id: 4,
      title: 'SHIRTS_BLOUSE',
      subTitle: ['long', 'mentomen', 'hood', 'short', 'neet'],
    },
    {
      id: 5,
      title: 'TRAINING',
      subTitle: ['', '', '', '', ''],
    },
    {
      id: 6,
      title: 'BASIC',
      subTitle: ['111', '222', '333', '444', '555'],
    },
    {
      id: 7,
      title: 'ONEPIECE',
      subTitle: ['', '', '', '', ''],
    },
    {
      id: 8,
      title: 'SKIRTS',
      subTitle: ['', '', '', '', ''],
    },
    {
      id: 9,
      title: 'BASIC',
      subTitle: ['111', '222', '333', '444', '555'],
    },
    {
      id: 10,
      title: 'SHOES',
      subTitle: ['111', '222', '333', '444', '555'],
    },
    {
      id: 11,
      title: 'ACCESORY',
      subTitle: ['111', '222', '333', '444', '555'],
    },
  ]
  let [ison, seton] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ])

  const onoff = useCallback(() => {
    if (ison === true) {
      seton(false)
      console.log(ison)
    } else {
      seton(true)
      console.log(ison)
    }
  })

  return (
    <FHeaderBottom>
      <div id="menu">
        <img src={menu} />
      </div>
      {menuList.map((e) => (
        <div className="listWrap">
          <li className="list" id={e.title} onClick={onoff}>
            {e.title}
          </li>
          {ison == true ? (
            <div className="hidden" id={e.title}>
              <p>{e.subTitle[0]}</p>
              <p>{e.subTitle[1]}</p>
              <p>{e.subTitle[2]}</p>
              <p>{e.subTitle[3]}</p>
              <p>{e.subTitle[4]}</p>
            </div>
          ) : null}
        </div>
      ))}
    </FHeaderBottom>
  )
}

const FHeaderBottom = styled.div`
  width: 100%;
  padding: 0 20% 0 5%;
  display: flex;
  justify-content: center;

  .listWrap {
    position: relative;
  }
  li.list {
    width: 90px;
    float: left;
    list-style: none;
    padding: 5px;
    background-color: #fff;

    &:hover {
      background-color: #ff7d9e;
      color: #fff;
    }
  }
  li#BEST {
    width: 90px;
    color: purple;
    font-weight: 600;
    &:hover {
      background-color: #ff7d9e;
      color: #fff;
    }
  }
  li#NEW {
    width: 90px;
    color: deeppink;
    font-weight: 600;
    &:hover {
      background-color: #ff7d9e;
      color: #fff;
    }
  }
  li#SHIRTS_BLOUSE {
    width: 150px;
  }
  #menu {
    position: relative;
    top: 0px;
    left: -30px;
  }
  .hidden {
    background: #ff7d9e;
    width: 90px;
    height: 150px;
    position: relative;
    top: 30px;
    color: #fff;
    /* display: none; */
    z-index: 5;
    margin-bottom: 1rem;
  }

  div#SHIRTS_BLOUSE {
    width: 150px;
  }
`

const FHeader = styled.header`
  a {
    text-decoration: none;
  }
`

const Header = () => {
  return (
    <FHeader>
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </FHeader>
  )
}
export default Header

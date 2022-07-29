import { TopModalGif, BtnClose } from '../img/imgs'
import styled from 'styled-components'
import { useState } from 'react'
// useState로 모달창 구현
const DivTopModalInner = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  background-color: #37a8e2;
  transition: all ease 0.5s;
  .topModal {
    width: 100%;
    text-align: center;
    position: relative;
    top: 0;
  }
  button {
    width: 35px;
    height: 35px;
    background: none;
    border: none;
    position: absolute;
    right: 100px;
    top: 30%;
  }
`

const TopModalInner = () => {
  let [modal, setModal] = useState(true)
  console.log(modal)
  return modal == true ? (
    <DivTopModalInner>
      <div className="topModal">
        <img src={TopModalGif}></img>
        <button
          onClick={() => {
            setModal(false)
          }}
        >
          <img src={BtnClose} />
        </button>
      </div>
    </DivTopModalInner>
  ) : null
}

export default TopModalInner

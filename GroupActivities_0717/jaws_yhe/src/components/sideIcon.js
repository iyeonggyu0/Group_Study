import styled from 'styled-components'
import top from '../img/top.png'
import bottom from '../img/bottom.png'

const Side = styled.div`
  position: fixed;
  top: 40%;
  right: 2rem;
`

const SideIcon = () => {
  return (
    <Side>
      <div>
        <img src={bottom}></img>
      </div>
      <div>
        <img src={top}></img>
      </div>
    </Side>
  )
}
export default SideIcon

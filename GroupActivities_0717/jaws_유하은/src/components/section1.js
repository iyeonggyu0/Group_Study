import styled from 'styled-components'
import img from '../img/subtitle_community.jpg'

const DivSection1 = styled.div`
  background: url(${img}) center no-repeat;
  width: 100%;
  background-size: cover;
  height: 270px;
`
const Content = styled.div`
  width: 100%;
  color: white;
  z-index: 1;
  font-size: 50px;
  text-align: center;
  padding: 150px;
  font-weight: 900;
`
const Section1 = () => {
  return (
    <div>
      <DivSection1>
        <Content>COMMUNITY</Content>
      </DivSection1>
    </div>
  )
}

export default Section1

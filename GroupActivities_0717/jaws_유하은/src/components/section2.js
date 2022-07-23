import message from '../img/message.png'
import styled from 'styled-components'
import Form from './form'

const DivSection2 = styled.div`
  width: 100%;
  height: 212px;
  padding: 48px 0 50px 0;
  background-color: white;
  margin-bottom: 30px;
`

const TopSection2 = styled.div`
  width: 100%;
  height: 100px;
  margin-left: 34px;
  padding: 0 0 0 61px;
`

const BottomSection2 = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  margin-left: 90px;
`

const Section2 = () => {
  return (
    <DivSection2>
      <TopSection2>
        <img src={message} style={{ marginRight: '1.5rem' }}></img>
        <span
          style={{
            fontSize: '26px',
            fontWeight: '900',
            position: 'relative',
            top: '-5px',
          }}
        >
          COMMUNITY
        </span>
      </TopSection2>
      <BottomSection2>
        <Form id="sForm" name="sForm" method="get" action=""></Form>
      </BottomSection2>
    </DivSection2>
  )
}

export default Section2

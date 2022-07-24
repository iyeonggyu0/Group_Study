import styled from 'styled-components'

const Hiddenbox = styled.div`
  position: absolute;
  top: 40px;
  left: 8rem;
  margin-right: 4rem;
  right: 0;
  @media screen and (max-width: 1500px) {
    position: absolute;
    left: 2rem;
  }
`

const Big = ({ text }) => {
  return <p style={{ fontSize: '2.5rem', fontWeight: '700' }}>{text}</p>
}
const Small = ({ text }) => {
  return <p style={{ fontSize: '1.5rem', fontWeight: '500' }}>{text}</p>
}

const HiddenBox = ({ big, small }) => {
  return (
    <Hiddenbox>
      <Big text={big}></Big>
      <Small text={small}></Small>
    </Hiddenbox>
  )
}

export default HiddenBox

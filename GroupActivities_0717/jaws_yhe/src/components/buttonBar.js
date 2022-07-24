import styled from 'styled-components'
import prevBtn from '../img/prev.png'
import nextBtn from '../img/next.png'
import dprevBtn from '../img/prev1.png'
import dnextBtn from '../img/next1.png'
import Button from './button'

const DivButtonBar = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`

const ButtonBar = () => {
  return (
    <DivButtonBar>
      <Button src={dprevBtn} />
      <Button src={prevBtn} />
      <Button text="1" />
      <Button text="2" />
      <Button text="3" />
      <Button text="4" />
      <Button text="5" />
      <Button src={nextBtn} />
      <Button src={dnextBtn} />
    </DivButtonBar>
  )
}

export default ButtonBar

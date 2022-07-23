import styled from 'styled-components'

const Btn = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  background-color: gray;
  margin-right: 1.3rem;
`

const Button = ({ src, text }) => {
  return (
    <Btn
      style={
        text && {
          backgroundColor: 'rgba(255,255,255,0.2)',
          color: '#000',
          fontWeight: '800',
        }
      }
    >
      <img src={src && src}></img>
      <p style={{ position: 'relative', top: '-10px' }}>{text && text}</p>
    </Btn>
  )
}
export default Button

import styled from 'styled-components'
import searchIcon from '../img/search.png'

const DivForm = styled.div`
  width: 164px;
  margin: 0 22px 0 0;
`
const Select = styled.select`
  width: 100%;
  height: 38px;
  display: inline-block;
  border: none;
  border-bottom: 2px solid #000;
`

const Input = styled.input`
  width: 100%;
  height: 38px;
  border: none;
  border-bottom: 2px solid #000;
`
const Button = styled.button`
  position: relative;
  left: 570px;
  top: -30px;
  background: none;
  border: none;
`
const Form = () => {
  return (
    <>
      <DivForm>
        <Select>
          <option value style={{ padding: '0 30px 12px 0' }}>
            option
          </option>
          <option value="1">Story</option>
          <option value="2">Notice</option>
          <option value="3">Meida</option>
          <option value="4">Spicy Life</option>
        </Select>
      </DivForm>
      <DivForm>
        <Select>
          <option value style={{ padding: '0 30px 12px 0' }}>
            title
          </option>
          <option value="1">contents</option>
        </Select>
      </DivForm>
      <div style={{ width: '604px', margin: '0 26px 0 0' }}>
        <Input type="text" placeholder="write your question" maxLength="20" />
        <Button>
          <img src={searchIcon}></img>
        </Button>
      </div>
      <div style={{ width: '91px', borderBottom: '2px solid #000' }}>
        <p>
          total
          <span style={{ marginLeft: '10px', fontWeight: '700' }}>131</span>
        </p>
      </div>
    </>
  )
}

export default Form

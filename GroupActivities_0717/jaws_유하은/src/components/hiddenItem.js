import styled from 'styled-components'
import jaws from '../img/jaws.png'
const Hiddencolumn = styled.div`
  ul {
    /* width: 100%; */
    height: 100%;
    float: left;
    padding-right: 2rem;
    padding-left: 2rem;
    position: relative;
    padding-top: 40px;
    padding-bottom: 35px;
    &:hover {
      background-color: wheat;
      transition: all ease 0.5s;
    }
  }
  ul li {
    width: 8rem;
    list-style: none;
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
    &:hover {
      border-bottom: 3px solid #9c0a1f;
      background-image: url(${jaws});
      background-position-x: 90%;
      background-repeat: no-repeat;
    }
  }
`
const HiddenColumn = ({ id, text1, text2, text3 }) => {
  return (
    <Hiddencolumn>
      <ul>
        <li>{text1}</li>
        <li>{text2}</li>
        <li>{text3}</li>
      </ul>
    </Hiddencolumn>
  )
}

export default HiddenColumn

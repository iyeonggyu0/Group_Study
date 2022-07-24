import styled from 'styled-components'
const MenuItemBlock = styled.div`
  font-weight: 800;
  font-size: 24px;
  color: white;
  z-index: 1;
  padding: 0 40px;
`
const MenuItem = ({ text }) => {
  return <MenuItemBlock>{text}</MenuItemBlock>
}
export default MenuItem

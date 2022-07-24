import styled from 'styled-components'
import noticeIcon from '../img/notice.png'
import storyIcon from '../img/story.png'

const DivBoxStoryItem = styled.div`
  min-width: 350px;
  min-height: 540px;
  background-color: #fff;
  margin-right: 1rem;
  &:hover {
    background-color: #9c0a1f;
    color: white;
    z-index: 1;
    transition: all ease 0.5s;
  }
`

const BoxTop = styled.div`
  margin-bottom: 1rem;
`
const BoxMiddle = styled.div`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0.1rem;
  text-align: center;
  height: 100px;
`

const BoxBottom = styled.div`
  /* width: 100%; */
  position: relative;
  bottom: 0;
  left: 1rem;
`
const BoxStoryItem = ({ icon, notice, text, src }) => {
  return (
    <DivBoxStoryItem>
      <BoxTop>
        <img src={notice === 'true' ? noticeIcon : storyIcon}></img>
        <span
          style={{
            fontWeight: '700',
            padding: '0 0 0 46px',
            position: 'relative',
            top: '-20px',
            left: '-30px',
          }}
        >
          {icon}
        </span>
      </BoxTop>
      <BoxMiddle>
        <p>{text}</p>
      </BoxMiddle>
      <BoxBottom>
        <img src={src}></img>
      </BoxBottom>
    </DivBoxStoryItem>
  )
}

export default BoxStoryItem

import styled from 'styled-components'
import box1 from '../img/box1.jpg'
import box2 from '../img/box2.jpg'
import box3 from '../img/box3.jpg'
import box4 from '../img/box4.jpg'
import box5 from '../img/box5.png'
import box6 from '../img/box6.jpg'

import BoxStoryItem from './boxStoryItem'
import ButtonBar from './buttonBar'

const BoxStory = styled.div`
  width: 1100px;
  display: flex;
  margin: 0 auto;
  padding-top: 40px;
`

const Section3 = () => {
  return (
    <div
      style={{
        backgroundColor: 'whitesmoke',
        width: '100%',
        height: 'auto',
      }}
    >
      <BoxStory>
        <BoxStoryItem
          icon="Notice"
          notice="true"
          text="MONTH 6, DELIVERY APPLICATION SALE PROMOTION"
          src={box1}
        />
        <BoxStoryItem icon="Notice" notice="true" text="newMenu" src={box2}>
          <div> mushroom-teokbokki </div>
        </BoxStoryItem>
        <BoxStoryItem
          icon="Story"
          notice="false"
          text="MONTH 4, DELIVERY SALE GUIDE"
          src={box3}
        />
      </BoxStory>
      <BoxStory style={{ paddingTop: '2rem' }}>
        <BoxStoryItem
          icon="Story"
          notice="false"
          text="Jaws x Samsung collaboration. S22 sales"
          src={box4}
        />
        <BoxStoryItem
          icon="Notice"
          notice="true"
          text="MONTH 3, DELIVERY SALE GUIDE"
          src={box5}
        />
        <BoxStoryItem
          icon="Notice"
          notice="true"
          text="MONTH 2, DELIVERY SALE GUIDE"
          src={box6}
        />
      </BoxStory>
      <ButtonBar></ButtonBar>
    </div>
  )
}

export default Section3

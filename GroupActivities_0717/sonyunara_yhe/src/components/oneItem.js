// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import './styles.css'

// import required modules
import { Navigation } from 'swiper'
import styled from 'styled-components'
import { bear01, bear02, bear03, bearA, bearB, bearC } from '../img/imgs'
const FOneItem = styled.div`
  .A {
    width: 30%;
    display: inline-block;
  }
`
const OneItem = () => {
  return (
    <FOneItem>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="A">
          <img src={bearA} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bearB} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bearC} />
        </SwiperSlide>
      </Swiper>
    </FOneItem>
  )
}
export default OneItem

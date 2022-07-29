import styled from 'styled-components'
import {
  b01,
  b02,
  b11,
  b12,
  b21,
  b31,
  b41,
  b51,
  b61,
  b71,
  b81,
  b91,
  b101,
  b111,
} from '../img/imgs'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import './styles.css'

// import required modules
import { Navigation } from 'swiper'

const FSlideWrap = styled.div`
  width: 1600px;
  padding: 50px 0;
  margin: 0 auto;
  img {
    animation-name: boxa;
    animation-duration: 7s;
  }
  .img2 {
    animation-name: boxb;
    animation-duration: 7s;
    animation-iteration-count: infinite;
  }
`
const SlideImg = ({ src1, src2 }) => {
  return (
    <FSlideWrap>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li>
          <a>
            <div className="img1" style={{ marginRight: '10px' }}>
              <img src={src1} style={{ borderRadius: '5%' }} />
            </div>
          </a>
        </li>
        <li>
          <a>
            <div className="img2" style={{ marginRight: '10px' }}>
              <img src={src2} style={{ borderRadius: '5%' }} />
            </div>
          </a>
        </li>
      </ul>
    </FSlideWrap>
  )
}

const SlideWrap = () => {
  return (
    <div className="imgWrap">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <SlideImg src1={b41} src2={b51} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImg src1={b01} src2={b11} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImg src1={b21} src2={b31} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImg src1={b61} src2={b71} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImg src1={b81} src2={b91} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImg src1={b101} src2={b111} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
export default SlideWrap

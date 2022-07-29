import styled from 'styled-components'
import ItemContainer from './itemContainer'
import { Link } from 'react-router-dom'
import {
  ex,
  today,
  i1,
  i2,
  i3,
  i4,
  i5,
  i6,
  i7,
  i8,
  i9,
  i10,
  i11,
  i12,
  i13,
  i14,
  i15,
  i16,
  i17,
  i18,
  i19,
  i20,
  i21,
  i22,
  i23,
  i24,
  i25,
  i26,
  i27,
  i28,
  i29,
  i30,
  i31,
  i32,
  i33,
  i34,
  i35,
  i36,
  i37,
  i38,
  i39,
  i40,
  i41,
  i42,
} from '../img/imgs'
import { useCallback, useState } from 'react'
const FItemWrap = styled.div`
  width: 100%;
  margin: 3rem 0 12rem 3rem;
`
const FCategory = styled.div`
  .ctg {
    background-color: #f3f3f3;
    color: gray;
    border-radius: 45px;
    width: 93px;
    height: 43px;
    margin-left: 1rem;
  }
  #new {
    background-color: #ff7d9e;
    color: #fff;
  }

  p {
    text-align: center;
    position: relative;
    top: 7px;
    font-size: 20px;
    font-weight: 600;
    &:hover {
      color: #fff;
    }
  }
`

const Category = ({ value, address }) => {
  return (
    <FCategory>
      <div className="ctg" id={value}>
        <Link to={address} id={value}>
          <p style={{ marginTop: '10px' }}>{value}</p>
        </Link>
      </div>
    </FCategory>
  )
}

const NewItem = () => {
  const mainList = [
    [
      {
        id: 1,
        stockCode: '001',
        stockName: 'pants',
        stockDisPer: '27',
        stockPrice: '27000',
        stockImg: i1,
        todayDeliver: true,
        subTitle: 'Almost sold out',
      },
      {
        id: 2,
        stockCode: '002',
        stockName: 'shirts',
        stockDisPer: '30',
        stockPrice: '17000',
        stockImg: i2,
        todayDeliver: false,
      },
      {
        id: 3,
        stockCode: '003',
        stockName: 'skirts',
        stockDisPer: '15',
        stockPrice: '30000',
        stockImg: i3,
        todayDeliver: true,
        subTitle: 'Almost sold out',
      },
      {
        id: 4,
        stockCode: '004',
        stockName: 'training pants',
        stockDisPer: '10',
        stockPrice: '15000',
        stockImg: i4,
        todayDeliver: false,
      },
      {
        id: 5,
        stockCode: '005',
        stockName: 'formal shirts',
        stockDisPer: '5',
        stockPrice: '50000',
        stockImg: i5,
        todayDeliver: true,
      },
      {
        id: 6,
        stockCode: '006',
        stockName: 'basic top',
        stockDisPer: '50',
        stockPrice: '5000',
        stockImg: i6,
        todayDeliver: false,
      },
      {
        id: 7,
        stockCode: '007',
        stockName: 'summer blouse',
        stockDisPer: '27',
        stockPrice: '27000',
        stockImg: i7,
        todayDeliver: true,
        subTitle: 'Almost sold out',
      },
      {
        id: 8,
        stockCode: '008',
        stockName: 'tree blouse',
        stockDisPer: '33',
        stockPrice: '33000',
        stockImg: i8,
        todayDeliver: false,
      },
      {
        id: 9,
        stockCode: '009',
        stockName: 'yellow blouse',
        stockDisPer: '27',
        stockPrice: '27000',
        stockImg: i9,
        todayDeliver: true,
      },
      {
        id: 10,
        stockCode: '010',
        stockName: 'blouse',
        stockDisPer: '70',
        stockPrice: '7000',
        stockImg: i10,
        todayDeliver: false,
      },
      {
        id: 11,
        stockCode: '011',
        stockName: 'white blouse',
        stockDisPer: '0',
        stockPrice: '50000',
        stockImg: i11,
        todayDeliver: true,
      },
      {
        id: 12,
        stockCode: '012',
        stockName: 'top',
        stockDisPer: '27',
        stockPrice: '27000',
        stockImg: i12,
        todayDeliver: false,
        subTitle: 'Almost sold out',
      },
      {
        id: 13,
        stockCode: '013',
        stockName: 'top',
        stockDisPer: '27',
        stockPrice: '3000',
        stockImg: i13,
        todayDeliver: true,
      },
      {
        id: 14,
        stockCode: '001',
        stockName: 'top',
        stockDisPer: '50',
        stockPrice: '22000',
        stockImg: i14,
        todayDeliver: false,
      },
      {
        id: 15,
        stockCode: '015',
        stockName: 'pants',
        stockDisPer: '27',
        stockPrice: '27000',
        stockImg: i15,
        todayDeliver: true,
      },
      {
        id: 16,
        stockCode: '016',
        stockName: 'blouse',
        stockDisPer: '27',
        stockPrice: '27000',
        stockImg: i16,
        todayDeliver: false,
      },
      {
        id: 17,
        stockCode: '017',
        stockName: 'pants',
        stockDisPer: '27',
        stockPrice: '27000',
        stockImg: i17,
        todayDeliver: true,
      },
      {
        id: 18,
        stockCode: '018',
        stockName: 'white basic',
        stockDisPer: '20',
        stockPrice: '27000',
        stockImg: i18,
        todayDeliver: false,
      },
      {
        id: 19,
        stockCode: '019',
        stockName: 'only sona',
        stockDisPer: '27',
        stockPrice: '27000',
        stockImg: i19,
        todayDeliver: true,
      },
      {
        stockCode: '020',
        stockName: 'wide pants',
        stockDisPer: '27',
        stockPrice: '27000',
        stockImg: i20,
        todayDeliver: false,
      },
      {
        id: 21,
        stockCode: '021',
        stockName: 'pants',
        stockDisPer: '26',
        stockPrice: '11000',
        stockImg: i21,
        todayDeliver: true,
      },
      {
        id: 22,
        stockCode: '022',
        stockName: 'summer blouse2',
        stockDisPer: '25',
        stockPrice: '10000',
        stockImg: i22,
        todayDeliver: false,
      },
    ],
    [
      {
        id: 23,
        stockCode: '003',
        stockName: 'skirts',
        stockDisPer: '15',
        stockPrice: '30000',
        stockImg: i23,
        todayDeliver: true,
        subTitle: 'Almost sold out',
      },
      {
        id: 4,
        stockCode: '004',
        stockName: 'training pants',
        stockDisPer: '10',
        stockPrice: '15000',
        stockImg: i24,
        todayDeliver: false,
      },
      {
        id: 5,
        stockCode: '005',
        stockName: 'formal shirts',
        stockDisPer: '5',
        stockPrice: '50000',
        stockImg: i25,
        todayDeliver: true,
      },
      {
        id: 6,
        stockCode: '006',
        stockName: 'basic top',
        stockDisPer: '50',
        stockPrice: '5000',
        stockImg: i26,
        todayDeliver: false,
      },
      {
        id: 7,
        stockCode: '007',
        stockName: 'summer blouse',
        stockDisPer: '27',
        stockPrice: '27000',
        stockImg: i27,
        todayDeliver: true,
        subTitle: 'Almost sold out',
      },
      {
        id: 8,
        stockCode: '008',
        stockName: 'tree blouse',
        stockDisPer: '33',
        stockPrice: '33000',
        stockImg: i28,
        todayDeliver: false,
      },
      {
        id: 9,
        stockCode: '009',
        stockName: 'yellow blouse',
        stockDisPer: '27',
        stockPrice: '27000',
        stockImg: i29,
        todayDeliver: true,
      },
      {
        id: 10,
        stockCode: '010',
        stockName: 'blouse',
        stockDisPer: '70',
        stockPrice: '7000',
        stockImg: i30,
        todayDeliver: false,
      },
      {
        id: 11,
        stockCode: '011',
        stockName: 'white blouse',
        stockDisPer: '0',
        stockPrice: '50000',
        stockImg: i31,
        todayDeliver: true,
      },
      {
        id: 12,
        stockCode: '012',
        stockName: 'top',
        stockDisPer: '27',
        stockPrice: '27000',
        stockImg: i32,
        todayDeliver: false,
        subTitle: 'Almost sold out',
      },
      {
        id: 13,
        stockCode: '013',
        stockName: 'top',
        stockDisPer: '27',
        stockPrice: '3000',
        stockImg: i33,
        todayDeliver: true,
      },
      {
        id: 14,
        stockCode: '001',
        stockName: 'top',
        stockDisPer: '50',
        stockPrice: '22000',
        stockImg: i34,
        todayDeliver: false,
      },
      {
        id: 15,
        stockCode: '015',
        stockName: 'pants',
        stockDisPer: '27',
        stockPrice: '27000',
        stockImg: i35,
        todayDeliver: true,
      },
      {
        id: 16,
        stockCode: '016',
        stockName: 'blouse',
        stockDisPer: '27',
        stockPrice: '27000',
        stockImg: i36,
        todayDeliver: false,
      },
      {
        id: 17,
        stockCode: '017',
        stockName: 'pants',
        stockDisPer: '27',
        stockPrice: '27000',
        stockImg: i37,
        todayDeliver: true,
      },
      {
        id: 18,
        stockCode: '018',
        stockName: 'white basic',
        stockDisPer: '20',
        stockPrice: '27000',
        stockImg: i38,
        todayDeliver: false,
      },
      {
        id: 19,
        stockCode: '019',
        stockName: 'only sona',
        stockDisPer: '27',
        stockPrice: '27000',
        stockImg: i39,
        todayDeliver: true,
      },
      {
        stockCode: '020',
        stockName: 'wide pants',
        stockDisPer: '27',
        stockPrice: '27000',
        stockImg: i40,
        todayDeliver: false,
      },
      {
        id: 21,
        stockCode: '021',
        stockName: 'pants',
        stockDisPer: '26',
        stockPrice: '11000',
        stockImg: i41,
        todayDeliver: true,
      },
      {
        id: 42,
        stockCode: '022',
        stockName: 'summer blouse2',
        stockDisPer: '25',
        stockPrice: '10000',
        stockImg: i42,
        todayDeliver: false,
      },
    ],
  ]

  const currentData = mainList[0]

  return (
    <FItemWrap>
      <h2
        style={{
          fontSize: '32px',
          color: '#010101',
          fontWeight: '700',
          marginBottom: '50px',
        }}
      >
        Recommended Proudct
      </h2>
      <div style={{ display: 'flex' }}>
        <Category value="new" id="1" address="/new" />
        <Category value="best" id="0" address="/main" />
        <Category value="top" id="2" address="/top" />
        <Category value="bottom" id="3" address="/bottom" />
      </div>
      <ItemContainer data={currentData} />
    </FItemWrap>
  )
}
export default NewItem

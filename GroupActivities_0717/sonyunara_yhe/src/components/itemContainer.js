import { useState, useCallback, useRef } from 'react'
import styled from 'styled-components'
import { today } from '../img/imgs'
import { Link } from 'react-router-dom'
import { heart } from '../img/imgs'
const FItemContainer = styled.div`
  width: 100%;
  .innerContainer {
    display: flex;
    flex-wrap: wrap;
  }
  .itemBox {
    margin-top: 3rem;
    margin-left: 3rem;
    width: 300px;
    height: 400px;
  }
  .heart {
    z-index: 15;
    position: relative;
    top: -35px;
    left: 250px;
  }
  .discount {
    margin-right: 10px;
    color: deeppink;
  }
`

const ItemContainer = ({ data }) => {
  console.log(data)

  return (
    <FItemContainer>
      <div className="innerContainer">
        {data.map((e) => (
          <Link to="./">
            <div className="itemBox" id={e.stockCode}>
              <img src={e.stockImg} />
              <Link to="./">
                <img src={heart} className="heart" />
              </Link>
              {e.todayDeliver === true ? (
                <p>
                  <img src={today} />
                </p>
              ) : (
                <p>
                  <img src={today} style={{ visibility: 'hidden' }} />
                </p>
              )}
              <p>{e.stockName}</p>
              <div>
                <span className="discount">{e.stockDisPer}%</span>
                <span className="price">{e.stockPrice}</span>
              </div>
              {e.subTitle && <p style={{ color: 'deeppink' }}>{e.subTitle}</p>}
            </div>
          </Link>
        ))}
      </div>
    </FItemContainer>
  )
}

export default ItemContainer

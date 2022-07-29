import { useCallback, useState } from 'react'
import { down } from '../img/imgs'
import styled from 'styled-components'
const Hot10Slide = () => {
  const hot10 = [
    {
      id: 1,
      name: 'start summer',
    },
    {
      id: 2,
      name: 'crop',
    },
    {
      id: 3,
      name: 'linen',
    },
    {
      id: 4,
      name: 'only sona',
    },
    {
      id: 5,
      name: 'shirts',
    },
    {
      id: 6,
      name: 'pants',
    },
    {
      id: 7,
      name: 'sneakers',
    },
    {
      id: 8,
      name: 'bag',
    },
    {
      id: 9,
      name: 'start autoumn',
    },
    {
      id: 10,
      name: 'start winter',
    },
  ]
  //   console.log(hot10)

  let [modal, setModal] = useState(false)
  //   console.log(hot10[0])
  const [target, setTarget] = useState(hot10[9])

  const openModal = useCallback(() => {
    if (modal === false) {
      setModal(true)
      // console.log(modal)
    } else {
      setModal(false)
      // console.log(modal)
    }
  }, [modal])

  return (
    <Fhot10>
      <div id="move" onClick={openModal}>
        <p>
          {target.id}. {target.name}
        </p>
        <button id="btnDown"></button>
      </div>
      {modal == true ? (
        <div className="hotWrap">
          <div className="title">hot keyword</div>
          <div className="items">
            {hot10.map((item) => (
              <p id={item.id} style={{ marginBottom: '5px' }}>
                <strong style={{ color: 'pink' }}>{item.id} . </strong>
                <span>{item.name}</span>
              </p>
            ))}
          </div>
        </div>
      ) : null}
    </Fhot10>
  )
}
const Fhot10 = styled.div`
  #move {
    position: relative;
    top: 15px;
    width: 200px;
    margin-left: 10em;
    padding: 5px;
    border: 3px solid gray;
  }
  button#btnDown {
    margin-top: -0.5rem;
    margin-right: -1rem;
    background: url(${down}) no-repeat;
    background-size: 25px;
  }
  .hotWrap {
    background-color: #fff;
    z-index: 10;
    width: 200px;
    position: relative;
    top: 15px;
    margin-left: 10em;
    border: 3px solid gray;
    border-bottom-left-radius: 5%;
    border-bottom-right-radius: 5%;
    /* transition: all ease 5s; */
  }
  .title {
    border-top: none;
    padding: 3px;
    width: 100%;
    border-bottom: 1px solid gray;
    text-align: center;
  }
`

export default Hot10Slide

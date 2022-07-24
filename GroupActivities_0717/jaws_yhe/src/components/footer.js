import styled from 'styled-components'
import footerLogo from '../img/footer_logo.png'
import footerBnr from '../img/foot-bnr.jpg'
import call from '../img/call.png'

const DivFooter = styled.div`
  width: 100%;
  height: auto;
  background-color: #111111;
  color: white;
  padding: 2rem;
  display: flex;
  .footerLeft {
    width: 60%;
    padding: 2rem;
  }

  .footerRight {
    width: 40%;
    display: inline-block;
    padding: 3rem 1rem;
  }
  .text1 {
    font-size: 14px;
    margin: 2rem 0;
  }
  .text2 {
    margin-bottom: 2rem;
    font-size: 12px;
  }

  .footerRight ul li {
    float: left;
    list-style: none;
    margin: 0 1rem;
  }
  .call {
    clear: both;
    margin: 3rem 0;
  }

  .callInfo {
    display: inline-block;
    position: relative;
    top: 1.5rem;
  }

  .callInfo p {
    margin-left: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  p.timeInfo {
    color: #fff;
  }
  p.tel {
    color: red;
  }
  select {
    width: 400px;
    height: 40px;
    background-color: #000;
    border: 2px solid gray;
    color: gray;
  }
  option {
    color: white;
    font-size: 1rem;
  }
`

const Footer = () => {
  return (
    <DivFooter>
      <div className="footerLeft">
        <img src={footerLogo}></img>
        <p className="text1">
          CEO Na Sang-gyun / Business registration number 209-81-54096 /
        </p>
        <p className="text1" style={{ marginTop: '-1.5rem' }}>
          20 Eonju-ro 147-gil, Seoul Metropolitan Government
        </p>
        <p className="text2">COPYRIGHT (C) JAWSFOOD ALL RIGHTS RESERVED.</p>
        <img src={footerBnr}></img>
      </div>
      <div className="footerRight">
        <ul>
          <li>Recruitment info </li>
          <li> info policy</li>
          <li>Terms of Use</li>
          <li>Site Map</li>
        </ul>
        <div className="call">
          <img src={call}></img>
          <div className="callInfo">
            <p class="tel">Customer's voice 1600-7984</p>
            <p class="timeInfo">
              10:00 a.m. to 5:00 p.m. / Lunch time 1:00 p.m. to 2:00 p.m
            </p>
            <p class="timeInfo">Closed on weekends and holidays</p>
            <p class="tel">Start-up inquiry 1688-2868</p>
          </div>
        </div>
        <select>
          <option value>Family Site</option>
          <option value="0">bareda gimsunsaneng</option>
        </select>
      </div>
    </DivFooter>
  )
}

export default Footer

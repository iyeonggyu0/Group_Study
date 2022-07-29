import styled from 'styled-components'
const FFooter = styled.div`
  padding: 3rem 3rem;
  color: #fff;
  background-color: #000;
  .sona {
  }
  .f1 {
    display: flex;
    margin-top: 1rem;

    margin-bottom: 1rem;
  }
  .f2 {
    display: flex;
    margin-bottom: 1rem;
  }
  li {
    font-size: 13px;
    margin-right: 20px;
  }
`
const Footer = () => {
  return (
    <FFooter>
      <div id="footerWrap">
        <p className="sona">ABOUT SONA</p>
        <ul className="f1">
          <li>상호 : 에스엔패션그룹(주)</li>
          <li> 사업장소재지 : 서울특별시 구로구 디지털로 257 지층</li>
          <li>안내전화 : 1599-8861</li>
          <li> 대표이사 : 구길리</li>
          <li> 개인정보관리책임자 : 표창욱</li>
          <li>제휴/광고문의 : sonyunara01@gmail.com</li>
        </ul>
        <ul className="f2">
          <li>사업자등록번호 : 215-87-38531[사업자정보확인]</li>
          <li> 통신판매업 신고번호 : 2015-서울구로-1525</li>
        </ul>

        <p>COPYRIGHT (C) 2013 SONA ALL RIGHTS RESERVED.</p>
      </div>
    </FFooter>
  )
}
export default Footer

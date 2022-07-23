import styled from "styled-components";
import RiotLogo from "../src_assets/riotLogo.png";
import LolLogo from "../src_assets/lolLogo.png";
import Globe from "../src_assets/globe.png";

const Header = () => {
    return (
        <>
            <HeaderDiv>
                <HeaderLogo1></HeaderLogo1>
                <HeaderLogo2></HeaderLogo2>
                <HeaderUl>
                    <HeaderLi>게임정보</HeaderLi>
                    <HeaderLi>챔피언</HeaderLi>
                    <HeaderLi>새소식</HeaderLi>
                    <HeaderLi>패치노트</HeaderLi>
                    <HeaderLi>다운로드</HeaderLi>
                    <HeaderLi>E스포츠</HeaderLi>
                    <HeaderLi>알아보기</HeaderLi>
                    <HeaderLi>유니버스</HeaderLi>
                    <HeaderLi>라이엇 스토어</HeaderLi>
                    <HeaderLi>고객지원</HeaderLi>
                </HeaderUl>
                <GlobeIcon></GlobeIcon>
                <Login>
                    <p style={{ paddingTop: "6px" }}>로그인</p>
                </Login>
                <SignUp>
                    <p style={{ paddingTop: "6px" }}>회원가입</p>
                </SignUp>
            </HeaderDiv>
        </>
    );
};

export default Header;

const HeaderDiv = styled.div`
    background-color: #111111;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #1a1a1a;
    position: relative;
`;

const HeaderLogo1 = styled.div`
    background-image: url(${RiotLogo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    width: 110px;
    height: 70px;
    position: absolute;
    left: 20px;
    top: 5px;
`;

const HeaderLogo2 = styled.div`
    background-image: url(${LolLogo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
    left: 150px;
    top: 25px;
    width: 30px;
    height: 30px;
`;

const HeaderUl = styled.ul`
    color: #fff;
    list-style: none;
    position: absolute;
    font-family: "Noto Sans KR";
    margin-left: 200px;
    top: 29px;
`;

const HeaderLi = styled.li`
    float: left;
    padding-left: 18px;
    padding-right: 25px;
    font-size: 13px;
`;

const GlobeIcon = styled.div`
    background-image: url(${Globe});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
    right: 220px;
    top: 30px;
    width: 18px;
    height: 18px;
`;

const Login = styled.div`
    text-align: center;
    color: #fff;
    font-family: "Noto Sans KR";
    font-size: 13px;
    border-radius: 6.4px;
    background-color: #282828;
    position: absolute;
    right: 135px;
    top: 23px;
    width: 71px;
    height: 32px;
`;

const SignUp = styled.div`
    text-align: center;
    color: #111111;
    font-family: "Noto Sans KR";
    font-size: 13px;
    border-radius: 12px;
    background-color: #13b6da;
    position: absolute;
    right: 35px;
    top: 23px;
    width: 85px;
    height: 32px;
`;

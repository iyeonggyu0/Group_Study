import styled from "styled-components";

const Header = () => {
    return (
        <>
        <HeaderDiv>
            <div>
                <LeftText>Google 정보</LeftText>
                <LeftText>스토어</LeftText>
            </div>
            <div>
                <RightText>Gmail</RightText>
                <RightText>이미지</RightText>
            </div>
        </HeaderDiv>
        </>
    )
}

const HeaderDiv = styled.div`
    width: 100%;
    background-color: #202124;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
`;

const LeftText = styled.span`
    color: #bdc1c6;
    font-size: 14px;
    margin: 0px 0px 0px 20px;
    font-weight: bold;

    &:hover {
        border-bottom: .7px solid #bdc1c6;
        cursor: pointer
    }
`;

const RightText = styled.span`
    color: #fff;
    font-size: 14px;
    margin: 0px 20px 0px 0px;
    font-weight: bold

    &:hover {
        border-bottom: .7px solid #bdc1c6;
        cursor: pointer
    }
`;

export default Header
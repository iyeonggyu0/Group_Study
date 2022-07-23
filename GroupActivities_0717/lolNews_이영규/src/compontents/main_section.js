import styled from "styled-components";

const MainSection = () => {
    return (
        <>
            <MainDiv>
                <MainImgDiv>IMG</MainImgDiv>
                <MainSamllText>갈래</MainSamllText>
                <MainText>이름</MainText>
            </MainDiv>
        </>
    );
};

export default MainSection;

const MainDiv = styled.div`
    margin: 0 auto;
    width: 420px;
    height: 140px;
    position: relative;
    border: 1px solid salmon;
`;

const MainImgDiv = styled.div`
    width: 120px;
    height: 120px;
    position: absolute;
    background-color: gray;
    top: 10px;
    border: 1px solid salmon;
`;

const MainSamllText = styled.p`
    font-family: "noto sans KR";
    top: 30px;
    left: 130px;
    position: absolute;
    font-size: 12px;
`;

const MainText = styled.p`
    font-family: "noto sans KR";
    top: 50px;
    left: 130px;
    position: absolute;
    font-size: 24px;
`;

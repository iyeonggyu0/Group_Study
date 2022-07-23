import styled from "styled-components";

const SmallBanner = () => {
    return (
        <>
            <BannerMainDiv>
                <SmallBannerImgDiv>IMG</SmallBannerImgDiv>
                <SmallBannerSamllText>갈래</SmallBannerSamllText>
                <SmallBannerMainText>이름</SmallBannerMainText>
            </BannerMainDiv>
        </>
    );
};

export default SmallBanner;

const BannerMainDiv = styled.div`
    margin: 0 auto;
    width: 420px;
    height: 140px;
    position: relative;
    border: 1px solid salmon;
`;

const SmallBannerImgDiv = styled.div`
    width: 120px;
    height: 120px;
    position: absolute;
    background-color: gray;
    top: 10px;
    border: 1px solid salmon;
`;

const SmallBannerSamllText = styled.p`
    font-family: "noto sans KR";
    top: 30px;
    left: 130px;
    position: absolute;
    font-size: 12px;
`;

const SmallBannerMainText = styled.p`
    font-family: "noto sans KR";
    top: 50px;
    left: 130px;
    position: absolute;
    font-size: 24px;
`;

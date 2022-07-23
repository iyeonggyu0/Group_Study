import styled from "styled-components";
import Checked from "../src_assets/checked.png";
import SmallBanner from "./small_banner";

const BannerSection = () => {
    return (
        <>
            <BGBanner>
                BG_div
                <BGText>Main Text</BGText>
                <MainImg>Main_div</MainImg>
            </BGBanner>
            <CheckedDiv>
                Checked_div
                <SmallBannerDiv>
                    <SmallBanner />
                    <SmallBanner />
                    <SmallBanner />
                </SmallBannerDiv>
            </CheckedDiv>
        </>
    );
};

export default BannerSection;

const BGBanner = styled.div`
    width: 100%;
    height: 570px;
    background-color: gray;
    position: relative;
    border: 1px solid salmon;
`;

const BGText = styled.p`
    font-size: 36px;
    font-family: "noto sans KR";
    font-weight: 700;
    color: #fff;
    position: absolute;
    bottom: 100px;
    left: 200px;
    border: 1px solid salmon;
`;

const MainImg = styled.div`
    width: 1140px;
    height: 570px;
    background-color: #202124;
    border: 1px solid salmon;
    position: absolute;
    right: 200px;
    top: 65px;
    z-index: 100;
`;

const CheckedDiv = styled.div`
    width: 100%;
    height: 330px;
    background-image: url(${Checked});
    border: 1px solid salmon;
    position: relative;
    display: flex;
    justify-content: center;
`;

const SmallBannerDiv = styled.div`
    z-index: 0;
    width: 80%;
    height: 140px;
    position: absolute;
    bottom: 45px;
    display: flex;
    border: 1px solid salmon;
`;

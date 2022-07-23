import styled from "styled-components";

const SocialBar = () => {
    return (
        <>
            <SocialBarDiv>
                <SocialBarP>공식 소셜채널 살펴보기</SocialBarP>
            </SocialBarDiv>
        </>
    );
};

export default SocialBar;

const SocialBarDiv = styled.div`
    width: 85%;
    height: 64px;
    background-color: #051c24;
    margin: 0 auto;
    border: 1px solid salmon;
`;

const SocialBarP = styled.p`
    font-size: 24px;
    color: #fff;
    font-family: "noto sans KR";
    text-align: center;
    font-weight: 700;
    padding-top: 13px;
`;

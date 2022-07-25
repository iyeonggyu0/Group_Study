import styled from "styled-components";

const Footer = () => {
    return (
        <>
            <FooterWrap>
                <div>
                    <Text>광고</Text>
                    <Text>비즈니스</Text>
                    <Text>검색의 원리</Text>
                </div>
                <div>
                    <Text>개인정보 처리방침</Text>
                    <Text>약관</Text>
                    <Text>설정</Text>
                </div>
            </FooterWrap>
        </>
    );
};

const FooterWrap = styled.div`
    background-color: #171717;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Text = styled.span`
    color: #999da2;
    font-size: 14px;
    margin: 10px
`;

export default Footer;

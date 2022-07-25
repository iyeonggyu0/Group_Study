import styled from "styled-components";

const Search = () => {
    return (
        <>
        <Wrap>
            <img alt="Google" height="92" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png" width="272"></img>
            <SearchBar>
              <SearchBarIn>
                <svg style={{fill: '#9aa0a6', height: '20px', marginLeft: '5px'}} focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                <SearchBarInput></SearchBarInput>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <img style={{width: '20px', height: '12px', marginRight: '20px'}} src='https://www.gstatic.com/inputtools/images/tia.png'></img>
                  <svg style={{width: '24px', height: '24px', marginRight: '7px'}} focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc04" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>
                </div>
              </SearchBarIn>
            </SearchBar>
            <ButtonDiv>
                <HrefButton>Google 검색</HrefButton>
                <HrefButton>I'm Feeling Lucky</HrefButton>
            </ButtonDiv>
            <span style={{color: '#fff', fontSize: '13px'}}>Google 제공 서비스: English</span>
        </Wrap>
        </>
    )
}

const ButtonDiv = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SearchBar = styled.div`
  width: 68%;
  border: 1px solid rgba(189, 193, 198, 0.523);
  border-radius: 100px;
  height: 39px;
  padding: 2.5px 10px 2.5px 10px;
  margin-top: 30px;
  max-width: 560px;
`;

const SearchBarIn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 560px;
  width: 100%;
  color: #9aa0a6
`;

const SearchBarInput = styled.input`
  background-color: #00000000;
  height: 100%;
  width: 80%;
  border: 0px;
  color: #fff;
`;

const HrefButton = styled.button`
  height: 35px;
  color: #fff;
  margin: 0px 10px 0px 10px;
  padding: 0px 15px 0px 15px;
  background-color: #303134;
  border: 0px;
  border-radius: 5px;
  &:hover {
    cursor:pointer
  }
`;

export default Search
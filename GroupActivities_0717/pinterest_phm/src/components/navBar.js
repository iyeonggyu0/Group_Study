import styled from "styled-components";
import "./navBar.css";
//네비게이션바
const NavBar = () => {
  return (
    <>
      <NavBarWrap>
        <NavIcon href="/Main">
          <IconImage src="/img/pinterest_logo.png" alt="pinterest logo" />
        </NavIcon>
        <NavStatus href="/Main">
          <NavStatusName>Home</NavStatusName>
        </NavStatus>
        <CreatePinWrap href="#">
          <div className="CreatePin">
            Create
            <CreatePinDownIcon
              src="/img/downward_icon.png"
              alt="downbuttonImage"
            />
          </div>
          <CreatePinPullDown>
            <CreatePinHidden>Create Idea Pin</CreatePinHidden>
            <CreatePinHidden>Create Pin</CreatePinHidden>
          </CreatePinPullDown>
        </CreatePinWrap>
        <div className="searchBarWrap">
          <IconImage src="/img/findIcon.png" alt="magnifyingGlassIcon" />
          <NavSearch type="text" placeholder="Search"></NavSearch>
          <ClearInput>
            <HiddenIconImage src="/img/findIcon.png" alt="clearInput" />
          </ClearInput>
        </div>
        <NavIcons href="/Main/notifications">
          <BigIconImage src="/img/notiIcons.png" alt="Notifications" />
        </NavIcons>
        <NavIcons href="/Main/messages">
          <BigIconImage src="/img/msgIcons.png" alt="Messages" />
        </NavIcons>
        <AccountStatus></AccountStatus>
        <NavOthers>
          <NavOthersImg src="/img/downward_icon.png" alt="downbuttonImage" />
        </NavOthers>
      </NavBarWrap>
    </>
  );
};

export default NavBar;

const NavBarWrap = styled.header`
  display: inline-flex;
  width: 100%;
  background-color: #fff;
  position: fixed;
  justify-content: start;
  align-items: flex-start;
  z-index: 100;
  height: 5em;
  top: 0;
  left: 0;
  right: 0;
  /* margin-bottom: 5em; */
`;
const NavIcon = styled.a`
  display: inline-block;
  margin: 1em;
  width: 3em;
  height: 3em;
  border-radius: 100%;
  /* background-color: #efefef; 호버했을 때*/
  padding: 1px;
`;

const IconImage = styled.img`
  width: 1.5em;
  display: inline-block;
  margin: 12px;
`;
const HiddenIconImage = styled.img`
  width: 18px;
  display: inline-block;
  margin: 12px;
  visibility: hidden;
  border-radius: 100%;
`;

const NavStatus = styled.a`
  text-decoration: none;
  display: inline-block;
  width: 5em;
  text-align: center;
  height: 3em;
  border-radius: 17em;
  border: none;
  background-color: #000;
  color: #fff;
  margin: 1em;
  margin-left: 0;
`;

const NavStatusName = styled.div`
  margin: 0.7em;
  color: #fff;
`;

const CreatePinWrap = styled.a`
  text-decoration: none;
  border: none;
  background-color: transparent;
  margin: 1em;
  margin-left: 0;
  font-weight: 700;
`;
const CreatePinDownIcon = styled.img`
  display: inline-block;
`;
const CreatePinPullDown = styled.div`
  margin: 1em;
`;
const CreatePinHidden = styled.div`
  display: none;
`;
const NavSearch = styled.input`
  background-color: transparent;
  border: transparent;
  width: 90%;
`;
const ClearInput = styled.button`
  /* width: 1em; */
  border: transparent;
`;
const NavIcons = styled.a`
  width: 3em;
`;

const BigIconImage = styled.img`
  width: 3em;
  margin: 1em 1em 1em 0;
`;
const NavOthers = styled.button`
  border: none;
  background-color: transparent;
  margin: 1em;
`;

const NavOthersImg = styled.img`
  width: 1em;
  height: 1em;
  margin: 1em 0;
  margin-right: 1em;
`;
const AccountStatus = styled.div`
  background-color: #efefef;
  width: 1.5em;
  height: 1.5em;
  border-radius: 100%;
  margin: 1.7em 1em;
`;

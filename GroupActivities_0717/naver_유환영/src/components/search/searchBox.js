import styled from "styled-components";

const SearchBox = () => {

    return (
        <SearchBoxBtn type="text" placeholder="검색어를 입력하세요."/>
        
    )
}
export default SearchBox;

const SearchBoxBtn = styled.input`
    width: 530px;
    height: 43px;
`
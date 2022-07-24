import styled from "styled-components";
const Contents = () => {
  return (
    <>
      <ItemsDisplayWrap>
        <ItemsDisplay>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter1.png"></Items>
            </ItemsLink>
          </ItemsView>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter2.png"></Items>
            </ItemsLink>
          </ItemsView>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter20.png"></Items>
            </ItemsLink>
          </ItemsView>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter3.png"></Items>
            </ItemsLink>
          </ItemsView>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter4.png"></Items>
            </ItemsLink>
          </ItemsView>
        </ItemsDisplay>
        <ItemsDisplay>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter5.png"></Items>
            </ItemsLink>
          </ItemsView>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter6.png"></Items>
            </ItemsLink>
          </ItemsView>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter7.png"></Items>
            </ItemsLink>
          </ItemsView>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter8.png"></Items>
            </ItemsLink>
          </ItemsView>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter9.png"></Items>
            </ItemsLink>
          </ItemsView>
        </ItemsDisplay>
        <ItemsDisplay>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter10.png"></Items>
            </ItemsLink>
          </ItemsView>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter11.png"></Items>
            </ItemsLink>
          </ItemsView>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter12.png"></Items>
            </ItemsLink>
          </ItemsView>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter13.png"></Items>
            </ItemsLink>
          </ItemsView>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter14.png"></Items>
            </ItemsLink>
          </ItemsView>
        </ItemsDisplay>
        <ItemsDisplay>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter15.png"></Items>
            </ItemsLink>
          </ItemsView>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter16.png"></Items>
            </ItemsLink>
          </ItemsView>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter17.png"></Items>
            </ItemsLink>
          </ItemsView>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter18.png"></Items>
            </ItemsLink>
          </ItemsView>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter19.png"></Items>
            </ItemsLink>
          </ItemsView>
        </ItemsDisplay>
        <ItemsDisplay>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter21.png"></Items>
            </ItemsLink>
          </ItemsView>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter22.png"></Items>
            </ItemsLink>
          </ItemsView>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter23.png"></Items>
            </ItemsLink>
          </ItemsView>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter24.png"></Items>
            </ItemsLink>
          </ItemsView>
          <ItemsView>
            <ItemsLink href="#">
              <Items src="/img/Libby_on_Twitter25.png"></Items>
            </ItemsLink>
          </ItemsView>
        </ItemsDisplay>
      </ItemsDisplayWrap>
    </>
  );
};
export default Contents;
const ItemsDisplayWrap = styled.div`
  width: max-content;
  /* background-color: black; */
  padding-top: 5em;
  margin: auto;
`;

const ItemsDisplay = styled.div`
  display: inline-flex;
  /* align-items: stretch; */
  /* justify-content: flex-start; */
  flex-wrap: wrap;
  /* width: 30%; */
  height: 100%;
  flex-direction: column;
  align-content: flex-start;
  /* background-color: aqua; */
  /* margin: 0 auto; */
`;
const ItemsView = styled.div`
  display: inilne-block;
  width: 236px;
  max-height: 431.3px;
  min-height: fit-content;
  border-radius: 3em;
  background-color: blue;
  margin: 1em;
`;
const Items = styled.img`
  width: 236px;
  height: 431.3px;
  border-radius: 3em;
`;
const ItemsLink = styled.a``;

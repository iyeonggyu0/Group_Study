import styled from "styled-components";
const Widget = () => {
  return (
    <>
      <WidgetWrap>
        <WidgetIcon href="#">
          <WidgetImage src="img/widgetIcon.png" alt="widget Icon"></WidgetImage>
          <HiddenWidgetItemListWrap>
            <VisitHelpCtr>
              Visit the Help Center
              <RightUpArrow src="/img/right_up_arrow.png"></RightUpArrow>
            </VisitHelpCtr>
            <CreateWidget>
              Create Widget
              <RightUpArrow src="/img/right_up_arrow.png"></RightUpArrow>
            </CreateWidget>
            <OtherWidgetsWrap>
              <ul>
                <WidgetLinks>
                  <WidgetAbout href="#">About</WidgetAbout>
                </WidgetLinks>
                <WidgetLinks>
                  <WidgetBlog href="#">Blog</WidgetBlog>
                </WidgetLinks>

                <WidgetLinks>
                  <WidgeBusiness href="#">Business</WidgeBusiness>
                </WidgetLinks>

                <WidgetLinks>
                  <WidgetCareers href="#">Careers</WidgetCareers>
                </WidgetLinks>

                <WidgetLinks>
                  <WidgetDevelopers href="#">Developers</WidgetDevelopers>
                </WidgetLinks>
              </ul>
              <ul>
                <WidgetLinks>
                  <WidgeRemovals href="#">Removals</WidgeRemovals>
                </WidgetLinks>
                <WidgetLinks>
                  <WidgetPrivacy href="#">Privacy</WidgetPrivacy>
                </WidgetLinks>
                <WidgetLinks>
                  <WidgetPersonalizedAds href="#">
                    Personalized Ads
                  </WidgetPersonalizedAds>
                </WidgetLinks>
                <WidgetLinks>
                  <WidgetTerms href="#">Terms</WidgetTerms>
                </WidgetLinks>
              </ul>
            </OtherWidgetsWrap>
          </HiddenWidgetItemListWrap>
        </WidgetIcon>
      </WidgetWrap>
    </>
  );
};

export default Widget;

const WidgetWrap = styled.div`
  display: inline-block;
  position: fixed;
  z-index: 700;
  right: 2em;
  bottom: 2em;
  border-radius: 100%;
  width: 3em;
  height: 3em;
  text-align: center;
  box-shadow: 2px 2px 5px 2px #efefef;
`;
const WidgetIcon = styled.a`
  border-radius: 100%;
  width: 3em;
  height: 3em;
  display: block;
  /* margin: 1em; */
  padding: 0.5em;
  border-color: transparent;
  background-color: #fff;
`;
const WidgetImage = styled.img`
  width: 2em;
  border-radius: 100%;
  height: 2em;
`;
const HiddenWidgetItemListWrap = styled.div`
  display: inline-block;
  width: 27em;
  position: fixed;
  margin: 1em;
  bottom: 3em;
  right: 5em;
  background-color: #fff;
  box-shadow: 2px 2px 5px 2px #efefef;
  border: 1px solid transparent;
  border-radius: 8%;
`;
const VisitHelpCtr = styled.a`
  display: inline-block;
  font-weight: 600;
  width: 95%;
  margin-top: 1em;
  padding: 1em;
  text-align: left;
  border-radius: 1em;
  background-color: #efefef;
`;
const CreateWidget = styled.a`
  display: inline-block;
  font-weight: 600;
  width: 95%;
  margin-bottom: 1em;
  padding: 1em;
  text-align: left;
  border-radius: 1em;
  background-color: #efefef;
`;
const OtherWidgetsWrap = styled.div`
  display: block;
  text-align: left;
`;

//위젯에 있는 항목들
const WidgetLinks = styled.li`
  list-style-type: none;
  text-decoration: none;
  display: inline-block;
  padding-left: 1em;
  padding-bottom: 1em;
`;

const WidgetAbout = styled.a``;
const WidgetBlog = styled.a``;
const WidgeBusiness = styled.a``;
const WidgetCareers = styled.a``;
const WidgetDevelopers = styled.a``;
const WidgeRemovals = styled.a``;
const WidgetPrivacy = styled.a``;
const WidgetPersonalizedAds = styled.a``;
const WidgetTerms = styled.a``;

const RightUpArrow = styled.img`
  display: inline-block;
  float: right;
  width: 1em;
`;

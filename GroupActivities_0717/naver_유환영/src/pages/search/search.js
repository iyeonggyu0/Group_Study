import SearchBox    from "../../components/search/searchBox";
import MenuList     from "../../components/search/menuList";
import PowerLink    from "../../components/search/contents/powerLink";
import Dictionary   from "../../components/search/contents/dictionary";
import View         from "../../components/search/contents/view";
import News         from "../../components/search/contents/news";
import Image        from "../../components/search/contents/image";
import Shop         from "../../components/search/contents/shop";
import Video        from "../../components/search/contents/video";
import Page         from "../../components/search/page";
import Footer       from "../../components/search/footer";

const Search = () => {
    return (
        <>
        <SearchBox />        
        <MenuList />
        <PowerLink />
        <Dictionary />
        <View />
        <News />
        <Image />
        <Shop />
        <Video />
        <Page />
        <Footer />
        </>
    )
}
export default Search;


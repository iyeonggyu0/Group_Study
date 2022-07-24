import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Search from "./pages/search/search";

function App() {
  return (
    //React Route Dom 
    //react에서 페이지 이동에 관련된 라이브러리
    <BrowserRouter> {/* 라이브러리의 최상위 태그*/}
      <Routes> {/* Route들을 묶어주는 태그*/}
        <Route/> {/* 현재 주소와 비교하여 경로가 일치한 컴포넌트만 보여주는 태그*/}
        <Route path="/search" element={<Search/>}/>
        {/*<Route path="/todo/login" element={<Login/>}/>*/}
        {/*Route의 속성 path는 url(주소), element 보여줄 컴포넌트명*/}
      </Routes>
    </BrowserRouter>

  );
}

export default App;

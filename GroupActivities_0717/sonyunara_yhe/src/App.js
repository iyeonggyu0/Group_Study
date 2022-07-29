import './App.css'
import Main from './pages/main'
import New from './pages/new'
import Top from './pages/top'
import Bottom from './pages/bottom'
import Stock from './pages/stockpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
        <Route path="/main" element={<Main />} />
        <Route path="/new" element={<New />} />
        <Route path="/top" element={<Top />} />
        <Route path="/bottom" element={<Bottom />} />
        <Route path="/stock" element={<Stock />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

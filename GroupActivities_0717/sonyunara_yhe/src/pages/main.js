import TopModal from '../components/topModal'
import Header from '../components/header'
import SlideWrap from '../components/slideWrap'
import MainItem from '../components/mainItem'
import InfoWrap from '../components/infoWrap'
import Footer from '../components/footer'
import Hot10Slide from '../components/hot10'
const Main = () => {
  return (
    <div style={{ minWidth: '1400px' }}>
      <TopModal />
      <Header />
      <SlideWrap />
      <MainItem />
      <InfoWrap />
      <Footer />
    </div>
  )
}
export default Main

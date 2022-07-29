import TopModal from '../components/topModal'
import Header from '../components/header'
import SlideWrap from '../components/slideWrap'
import BottomItem from '../components/bottomItem'
import InfoWrap from '../components/infoWrap'
import Footer from '../components/footer'
const Bottom = () => {
  return (
    <div style={{ minWidth: '1400px' }}>
      <TopModal />
      <Header />
      <SlideWrap />
      <BottomItem />
      <InfoWrap />
      <Footer />
    </div>
  )
}
export default Bottom

import TopModal from '../components/topModal'
import Header from '../components/header'
import SlideWrap from '../components/slideWrap'
import TopItem from '../components/topItem'
import InfoWrap from '../components/infoWrap'
import Footer from '../components/footer'
const Top = () => {
  return (
    <div style={{ minWidth: '1400px' }}>
      <TopModal />
      <Header />
      <SlideWrap />
      <TopItem />
      <InfoWrap />
      <Footer />
    </div>
  )
}
export default Top

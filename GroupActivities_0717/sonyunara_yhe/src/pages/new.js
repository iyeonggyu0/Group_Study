import TopModal from '../components/topModal'
import Header from '../components/header'
import SlideWrap from '../components/slideWrap'
import NewItem from '../components/newItem'
import InfoWrap from '../components/infoWrap'
import Footer from '../components/footer'
const New = () => {
  return (
    <div style={{ minWidth: '1400px' }}>
      <TopModal />
      <Header />
      <SlideWrap />
      <NewItem />
      <InfoWrap />
      <Footer />
    </div>
  )
}
export default New

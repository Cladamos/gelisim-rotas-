import { Banner } from "../components/Banner/Banner"
import { Faq } from "../components/Faq/Faq"
import { FeaturesCards } from "../components/FeaturesCards/FeatureCards"
import { Footer } from "../components/Footer/Footer"
import { GetInTouch } from "../components/GetInTouch/GetInTouch"
import { HeroHeader } from "../components/HeroHeader/HeroHeader"
import { UserComment } from "../components/UserComment"

function HomeView() {
  return (
    <>
      <HeroHeader />
      <FeaturesCards />
      <GetInTouch />
      <Banner />
      <UserComment />
      <Faq />
      <Footer />
    </>
  )
}

export default HomeView

import { Helmet } from "react-helmet";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Ebook() {
  return (
    <>
      <Helmet>
        <title>E-book holistique</title>
        <meta name="description" content="Éveillez votre confiance intérieure, cultivez la positivité et explorez votre chemin de vie spirituel." />
      </Helmet>
      <div>
        <main>
          <Header />
        </main>
      </div>
      <Footer />
    </>
  )
}
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Formulaire from "../components/Contact/Formulaire";

export default function Contact() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Élisabeth coach holistique contact</title>
          <meta name="description" content="Contactez Élisabeth, votre coach holistique, pour éveiller votre confiance intérieure et vous guider sur votre chemin de vie spirituel. Découvrez des techniques pour cultiver la positivité." />
        </Helmet>
      </HelmetProvider>
      <div>
        <Header />
        <main className="flex flex-col justify-center items-center">
          <section className="px-6 my-6">
            <h1 className="text-6xl font-Ephesis text-center mb-6 text-first-1000">Contact</h1>
            <p className="text-center font-poppins">
              Des questions sur le coaching holistique ? Contactez moi pour obtenir des réponses claires.
            </p>
            <Formulaire />
          </section>
        </main>

      </div>

      <Footer />
    </>
  )
}


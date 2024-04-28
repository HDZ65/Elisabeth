// import imgHolistique from './../assets/holistique.jpg';
import React from 'react';
const lazyImport = (path) => React.lazy(() => import(`${path}`));

const Button = lazyImport('../components/Button/Button.jsx');
const Header = lazyImport('../components/Header/Header.jsx');
const Bienvenue = lazyImport('../components/Accueil/Bienvenue/Bienvenue.jsx');
const Decouvrez = lazyImport('../components/Accueil/Decouvrez/Decouvrez.jsx');
const LeBlog = lazyImport('../components/Accueil/LeBlog/LeBlog');
const UnPeuDeMoi = lazyImport('../components/Accueil/UnPeuDeMoi/UnPeuDeMoi');
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer/Footer.jsx';

const AccueilHolistique = () => (
  <section className='flex max-w-7xl w-4/5 m-auto text-first-1000 bg-[url(./../assets/holistique.jpg)]'>
    <article className='flex flex-col items-start justify-center gap-6 md:w-1/2 py-12 '>
      <h1 className='md:text-5xl text-4xl font-Alice'>Éveillez votre confiance intérieure, cultivez la positivité et explorez votre chemin de vie spirituel.</h1>
      <p className='font-Montaga text-xl md:text-2xl'>- Soin holistique</p>
      <Button couleur={'bg-first-1000 text-white-1000 rounded'} texte={"Je prends RDV"} />
    </article>
    {/* <article className='hidden md:flex justify-center items-center w-1/2 '>
        <img className='size-96 object-cover' src={imgHolistique} alt="soin holistique" />
      </article> */}


  </section>
);

export default function Accueil() {
  return (
    <>
      <Helmet>
        <title>Élisabeth coach holistique</title>
        <meta name="description" content="Éveillez votre confiance intérieure, cultivez la positivité et explorez votre chemin de vie spirituel." />
      </Helmet>
      <div>
        <Header />
        <main className='flex flex-col justify-between '>
          <section className=''>
            <AccueilHolistique />
          </section>
          <Bienvenue />
          <Decouvrez />
          <UnPeuDeMoi />
          <LeBlog />
        </main>
      </div>
      <Footer />
    </>
  )
}

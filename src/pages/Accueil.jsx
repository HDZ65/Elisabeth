// import imgHolistique from './../assets/holistique.jpg';


// Importations directes des composants
import Button from '../components/Button/Button.jsx';
import Header from '../components/Header/Header.jsx';
import Bienvenue from '../components/Accueil/Bienvenue/Bienvenue.jsx';
import Decouvrez from '../components/Accueil/Decouvrez/Decouvrez.jsx';
import LeBlog from '../components/Accueil/LeBlog/LeBlog';
import UnPeuDeMoi from '../components/Accueil/UnPeuDeMoi/UnPeuDeMoi';

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

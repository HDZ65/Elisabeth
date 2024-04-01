
import Button from '../components/Button/Button.jsx';
import NavBar from './../components/NavBar.jsx';

export default function Accueil() {
  return (
    <>
      <NavBar />
      <section className=''>
        <div className=' flex flex-col items-start justify-center gap-4 w-4/5 m-auto py-10 text-first-1000'>
          <h2 className='text-3xl  font-Alice'>Eveillez votre confiance intérieure, cultivez la positivité et explorez votre chemin de vie spirituel.</h2>
          <p className='font-Montaga '>- Soin holistique</p>
          <Button/>
        </div>
      </section>
      <section className=" bg-third-1000">
        <div className='flex flex-col items-center justify-center gap-4 w-4/5 m-auto py-16 text-white-1000'>
        <h2 className="text-6xl font-Ephesis">Bienvenue</h2>
        <h3 className="text-2xl font-Alice">Elisabeth coach holistique</h3>
        <p className="text-center  ">Bienvenue, je suis Elisabeth votre coach holistique. Je m&apos;engage à vous guider vers une vie plus harmonieuse et épanouissante, au travers d&apos;approches personnalisées et des outils conçus pour libérer votre plein potentiel.</p>
        <p>~</p>
        <p className="text-center ">Réservez dès aujourd&apos;hui un premier appel afin d&apos;évaluer ensemble vos besoins et définir le chemin vers votre transformation personnelle</p>
        </div>
      </section>
    </>

  )
}
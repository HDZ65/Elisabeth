import Button from '../components/Button/Button.jsx';
import NavBar from './../components/NavBar.jsx';

export default function Accueil() {
  return (
    <>
      <NavBar />
      <section className=''>
        <div className=' flex flex-col items-start justify-center gap-4 w-4/5 m-auto py-10 text-first-1000'>
          <h2 className='text-3xl  font-Alice'>Éveillez votre confiance intérieure, cultivez la positivité et explorez votre chemin de vie spirituel.</h2>
          <p className='font-Montaga '>- Soin holistique</p>
          <Button />
        </div>
      </section>
      <section className=" bg-third-1000">
        <div className='flex flex-col items-center justify-center gap-4 w-4/5 m-auto py-16 text-white-1000'>
          <h2 className="text-6xl font-Ephesis">Bienvenue</h2>
          <p className="text-center text-xl font-Alice  ">Je suis Élisabeth votre <span className='font-bold'>coach holistique</span> . Je m&apos;engage à vous guider vers une vie plus <span className='font-bold'>harmonieuse</span> et <span className='font-bold'>épanouissante</span>, au travers d&apos;approches <span className='font-bold'>personnalisées</span> et des outils conçus pour libérer votre plein <span className='font-bold'>potentiel</span>.</p>
          <p>~</p>
          <p className="text-center text-xl font-Alice "><span className='font-bold'>Réservez</span> dès aujourd&apos;hui un premier appel afin d&apos;évaluer ensemble vos besoins et définir le chemin vers votre <span className='font-bold'>transformation personnelle</span></p>
        </div>
      </section>
      <section className=''>
        <article className='flex flex-col items-center justify-center gap-4 w-4/5 m-auto py-16 text-black-1000'>
          <h2 className="text-6xl font-Ephesis">Découvrez</h2>
          <h3 className=' text-2xl font-Alice mb-8 '>Mes accompagnements</h3>
          <h4 className=' text-2xl font-Montaga underline'>Coaching individuel</h4>
          <p className='text-center'>Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.</p>
        </article>
        <article className='flex flex-col items-center justify-center gap-4 w-4/5 m-auto pb-8 text-black-1000'>
          <h4 className=' text-2xl font-Montaga underline'>Coaching individuel</h4>
          <p className='text-center'>Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.</p>
        </article>
        <article className='flex flex-col items-center justify-center gap-4 w-4/5 m-auto pb-8 text-black-1000'>
          <h4 className=' text-2xl font-Montaga underline'>Coaching individuel</h4>
          <p className='text-center'>Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.</p>
        </article>
      </section>
    </>
  )
}
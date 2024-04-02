import Button from '../components/Button/Button.jsx';
import NavBar from './../components/NavBar.jsx';
import maPhoto from './../assets/Elisabeth.png';
import CardCompenent from '../components/Button/CardCompenent/CardCompenent.jsx';
import { articleData } from '../data/data.jsx';

export default function Accueil() {
  return (
    <>
      <NavBar />
      <section className=''>
        <div className=' flex flex-col items-start justify-center gap-4 w-4/5 m-auto py-10 text-first-1000'>
          <h2 className='text-3xl  font-Alice'>Éveillez votre confiance intérieure, cultivez la positivité et explorez votre chemin de vie spirituel.</h2>
          <p className='font-Montaga'>- Soin holistique</p>
          <Button couleur={'bg-first-1000 text-white-1000'} texte={"Je prends RDV"} />
        </div>
      </section>
      <section className=" bg-third-1000">
        <div className='flex flex-col items-center justify-center gap-4 w-4/5 m-auto py-16 text-white-1000'>
          <h2 className="text-6xl font-Ephesis">Bienvenue</h2>
          <p className="text-center text-xl font-Alice">Je suis Élisabeth votre <span className='font-bold'>coach holistique</span> . Je m&apos;engage à vous guider vers une vie plus <span className='font-bold'>harmonieuse</span> et <span className='font-bold'>épanouissante</span>, au travers d&apos;approches <span className='font-bold'>personnalisées</span> et des outils conçus pour libérer votre <span className='font-bold'>plein potentiel</span>.</p>
        </div>
      </section>

      <section className='flex flex-col  items-center justify-center gap-4 w-4/5 m-auto py-10 text-first-1000'>
          <h2 className="text-6xl font-Ephesis">Découvrez</h2>
          <h3 className=' text-xl font-Alice mb-8 text-black-1000'>Mes accompagnements</h3>
        <article className='flex flex-col items-center justify-center gap-4 w-4/5 m-auto pb-8 text-black-1000'>
          <h4 className=' text-2xl font-Montaga underline text-first-1000'>Coaching individuel</h4>
          <p className='text-center'>Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.</p>
        </article>
        <article className='flex flex-col items-center justify-center gap-4 w-4/5 m-auto pb-8 text-black-1000'>
          <h4 className=' text-2xl font-Montaga underline text-first-1000'>Coaching individuel</h4>
          <p className='text-center'>Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.</p>
        </article>
        <article className='flex flex-col items-center justify-center gap-4 w-4/5 m-auto pb-8 text-black-1000'>
          <h4 className=' text-2xl font-Montaga underline text-first-1000'>Coaching individuel</h4>
          <p className='text-center'>Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.</p>
        </article>
      </section>

      <section className='flex flex-col justify-center items-center bg-third-1000'>
        <article className='flex flex-col items-center justify-center gap-8 w-4/5 m-auto py-8 text-white-1000'>
          <img className='h-44 rounded-full bg-second-1000 ' src={maPhoto} alt="Elisabeth" />
          <h2 className="text-6xl font-Ephesis">Un peu de moi</h2>
          <p className="text-center text-xl font-Alice">Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.</p>
          <Button couleur={'bg-white-1000 text-first-1000'} texte={"Découvrez mon parcours"} />
        </article>
      </section>

      <section className=''>
        <article className='flex flex-col items-center justify-center gap-4 w-4/5 m-auto py-16 text-black-1000'>
          <h2 className="text-6xl font-Ephesis text-first-1000">Le blog</h2>
          <h3 className=' text-2xl font-Alice mb-8 '>Les derniers articles</h3>
          {articleData.map((article) => (
            <CardCompenent
              key={article.id}
              textCard={article.titleCard}
              sx={{ height: 140, width: 300 }}
              src={article.image} alt="photo" description={article.description}
            >
              <Button texte={"Lire l'article"} couleur={'bg-white-1000 text-first-1000'} />
            </CardCompenent>
          ))}
        </article>
      </section>
    </>
  )
}
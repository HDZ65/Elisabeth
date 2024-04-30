import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Coaching() {
  return (
    <>

      <div>
        <Header />
        <section className="flex flex-col gap-2 px-6 py-4">
          <h1 className="text-6xl font-Ephesis text-first-1000 text-center">Coaching</h1>
          <p className="text-center text-first-1000">Profitez d&apos;un accompagnement holistique personnalisé avec notre coaching dédié à révéler votre potentiel et vous aider à atteindre vos objectifs de vie. Découvrez une approche profonde et sur mesure pour votre développement personnel.</p>
          <ul className="text-first-1000 list-disc list-inside">
            <li>Surmonter les épreuves de la vie et supprimer les croyances limitantes</li>
            <li>Améliorer ses relations interpersonnelles</li>
            <li>Se libérer du stress et de l&apos;anxiété</li>
            <li>Retrouver une certaine sérénité</li>
            <li>Développer son estime de soi et sa confiance en soi</li>
            <li>Faire bouger ce qui ne convient plus dans son système</li>
          </ul>
          <p className="text-first-1000">Le coaching holistique est un accompagnement global qui prend en compte l&apos;ensemble de votre être : corps, esprit et émotions. Il s&apos;agit d&apos;une approche personnalisée qui vise à vous aider à trouver l&apos;équilibre et l&apos;harmonie dans votre vie, en vous permettant de développer votre potentiel et de réaliser vos objectifs.</p>
        </section>
      </div>


      <Footer />
    </>


  )
}
import React from "react";
import Accompagnement from "../Accompagnements/Accompagnement";
import Button from './../../Button/Button.jsx';
const Decouvrez = React.memo( function Decouvrez() {
  return (
    <section className='flex flex-col text-center max-w-7xl items-center justify-center gap-4 w-4/5 m-auto py-10 text-first-1000'>
        <h2 className="text-6xl md:text-7xl font-Ephesis">Accompagnement</h2>
        <Accompagnement title='Coaching individuel' content='"Embarquez pour un accompagnement dans votre voyage de coaching holistique profond. Ensemble, nous dénouerons les nœuds qui entravent votre confiance en soi et aborderons les défis quotidiens qui vous empêchent d&apos;atteindre vos objectifs."' />
        <Button couleur={'bg-first-1000 text-white-1000'} texte={"Je prends RDV"} />
      </section>
  )
})

export default Decouvrez;


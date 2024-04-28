import React from "react";

const Bienvenue = React.memo(function Bienvenue() {
  return (
    <section className=" bg-third-1000 ">
        <article className='flex flex-col items-center justify-center gap-4 w-4/5 max-w-7xl m-auto py-16 text-white-1000'>
          <h2 className="md:text-7xl text-6xl font-Ephesis">Bienvenue</h2>
          <p className="text-center text-xl font-Alice">Je suis Élisabeth votre <span className='font-bold'>coach holistique</span> et intuitive spécialisée dans la confiance en soi, la spiritualité et les aspects émotionnels. Je m&apos;engage à vous guider vers une vie plus <span className='font-bold'>harmonieuse</span> et <span className='font-bold'>épanouissante</span>, au travers d&apos;approches <span className='font-bold'>personnalisées</span> et des outils conçus pour libérer votre <span className='font-bold'>plein potentiel</span>.</p>
        </article>
      </section>
  )
})

export default Bienvenue;


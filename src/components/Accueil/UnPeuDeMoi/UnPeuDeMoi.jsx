
import maPhoto from '../../../assets/Elisabeth.png';
import React from "react";
const UnPeuDeMoi = React.memo( function UnPeuDeMoi() {
  return (
    <section className='flex flex-col justify-center items-center bg-third-1000'>
        <article className='flex flex-col items-center justify-center gap-8 w-4/5 max-w-7xl m-auto py-8 text-white-1000'>

          <img className='h-44 rounded-full bg-second-1000 ' src={maPhoto} alt="Elisabeth" />
          <h2 className="text-6xl md:text-7xl font-Ephesis">Un peu de moi</h2>
          <p className="text-center text-xl font-Alice">Je suis Elisabeth, coach holistique et intuitive. Depuis plusieurs années, j&apos;ai approfondi mes connaissances et affiné mes compétences au travers de divers stages et formations dans le domaine spirituel. Notamment en 2018 où je me suis formée au Reiki au 1er et 2ème niveau, ainsi qu&apos;à la loi de l&apos;attraction. J&apos;ai également eu le privilège d&apos;étudier les travaux de nombreux spécialistes et mentors renommés, enrichissant ainsi ma compréhension de ce vaste univers. Ayant moi-même mis en pratique les enseignements de ces figures charismatiques, j&apos;ai pu bénéficier de leur sagesse et de leurs conseils pour approfondir ma propre évolution spirituelle. Aujourd&apos;hui, forte de cette expérience et de ces apprentissages, je mets mon expertise à votre service pour vous accompagner dans votre propre cheminement spirituel.</p>
        </article>
      </section>
  )
})

export default UnPeuDeMoi;


import Button from '../../Button/Button.jsx';
import CardComponent from './CardComponent/CardComponent.jsx';
import { articleData } from '../../../data/Article.jsx';
import React from 'react';


const LeBlog = React.memo( function LeBlog() {
  return (
    <section className=''>
        <article className='flex flex-col items-center justify-center gap-4 w-4/5 max-w-7xl m-auto py-16 text-black-1000'>
          <h2 className="text-6xl md:text-7xl font-Ephesis text-first-1000">Le blog</h2>
          <h3 className=' text-2xl font-Alice mb-4 '>Les derniers articles</h3>
          <div className='flex flex-row items-center justify-center gap-4 mb-4'>
          {articleData.slice(0, 3).map((article) => (
            <CardComponent
              key={article.id}
              textCard={article.titleCard}
              sx={{ height: 140, width: 300 }}
              src={article.image} alt="photo" description={article.description}
            >
              <Button texte={"Lire l'article"} couleur={'bg-white-1000 text-first-1000'} />
            </CardComponent>
          ))}
          </div>
          <Button texte={"Voir tous les articles..."} couleur={'bg-first-1000 text-white-1000'} />
        </article>
      </section>
  )
})

export default LeBlog;


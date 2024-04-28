import { useState, useEffect, useCallback } from 'react';
import { IoIosMenu } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { GiEyeOfHorus } from "react-icons/gi";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname.substring(1);

  useEffect(() => {
    const closeNavbar = (e) => {
      if (!e.target.closest('.navbar')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('click', closeNavbar);
      window.addEventListener('scroll', closeNavbar);
    } else {
      window.removeEventListener('click', closeNavbar);
      window.removeEventListener('scroll', closeNavbar);
    }

    return () => {
      window.removeEventListener('click', closeNavbar);
      window.removeEventListener('scroll', closeNavbar);
    };
  }, [isOpen]);

  const toggleNavbar = useCallback((e) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
  }, []);

  return (
    <header onClick={(e) => e.stopPropagation()} className="font-Montaga flex flex-col items-center justify-center gap-4 relative bg-first-1000 w-full text-white-1000 py-6">
      <div className='md:flex md:justify-between items-center w-4/5 max-w-7xl'>
        <div className='flex flex-col items-center'>
          <GiEyeOfHorus style={{ color: "#FCF6EF" }} size={30} />
          <Link to="/" className='text-white-1000 text-3xl font-Montaga'>Élisabeth</Link>
        </div>
        <div className="hidden md:flex gap-6">
          <Link className='text-white-1000 text-2xl hover:text-slate-200 hover:scale-110' to="/">Accueil</Link>
          <Link className='text-white-1000 text-2xl hover:text-slate-200 hover:scale-110' to="/coaching">Coaching</Link>
          <Link className='text-white-1000 text-2xl hover:text-slate-200 hover:scale-110' to="/e-book">E-book</Link>
          <Link className='text-white-1000 text-2xl hover:text-slate-200 hover:scale-110' to="/blog">Blog</Link>
          <Link className='text-white-1000 text-2xl hover:text-slate-200 hover:scale-110' to="/contact">Contact</Link>
        </div>
      </div>
      <div className='hidden relative w-full max-md:flex flex-col items-center justify-center'>
        <button
          aria-expanded={isOpen}
          onClick={toggleNavbar}
          className='relative bg-second-1000 text-slate-200 flex flex-col justify-between items-center px-2 py-1 rounded w-4/5'
        >
          <div className='text-white-1000 w-full flex justify-between items-center'>
            <p>{currentPage || 'Accueil'}</p>
            <IoIosMenu size={25} color={'#FCF6EF'} />
          </div>
          <nav className={`${isOpen ? 'max-h-96' : 'max-h-0'} transition-all duration-1000 ease-in-out origin-top text-start absolute top-14  w-full bg-first-1000 overflow-hidden text-white-1000`}>
            <Link to="/" className="block px-4 py-2 border-b border-second-1000">Accueil</Link>
            <Link to="/coaching" className="block px-4 py-2 border-b border-second-1000">Coaching</Link>
            <Link to="/e-book" className="block px-4 py-2 border-b border-second-1000">E-book</Link>
            <Link to="/blog" className="block px-4 py-2 border-b border-second-1000">Blog</Link>
            <Link to="/contact" className="block px-4 py-2  ">Contact</Link>
          </nav>
        </button>
      </div>
    </header>
  )
}
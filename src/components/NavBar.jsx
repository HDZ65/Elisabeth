import { useState, useEffect } from 'react';
import { IoIosMenu } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { GiEyeOfHorus } from "react-icons/gi";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname.substring(1);

  useEffect(() => {
    const closeNavbar = () => {
      setIsOpen(false);
    };

    if (isOpen) {
      window.addEventListener('click', closeNavbar);
    }

    return () => {
      window.removeEventListener('click', closeNavbar);
    };
  }, [isOpen]);

  return (
    <header onClick={(e) => e.stopPropagation()} className="font-Montaga flex flex-col items-center justify-center gap-4 relative bg-first-1000 w-full text-white-1000 py-6">
      <div className='flex flex-col items-center'>
        <GiEyeOfHorus style={{ color: "#FCF6EF" }} size={30} />
        <h1 className='text-white-1000 text-3xl font-Montaga'>Élisabeth</h1>
      </div>
      <div className='relative w-full flex flex-col items-center justify-center'>
        <button onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }} className='relative bg-second-1000 text-slate-200 flex flex-col justify-between items-center px-2 py-1 rounded w-4/5'>
          <div className='text-white-1000 w-full flex justify-between items-center'>
            <p>{currentPage || 'Accueil'}</p>
            <IoIosMenu size={25} color={'#FCF6EF'} />
          </div>
          <nav className={`${isOpen ? 'max-h-96' : 'max-h-0'} transition-all duration-1000 ease-in-out origin-top text-start absolute top-14  w-full bg-first-1000 overflow-hidden text-white-1000`}>
            <Link to="/" className="block px-4 py-2 border-b border-second-1000">Accueil</Link>
            <Link to="/Services" className="block px-4 py-2 border-b border-second-1000">Coaching</Link>
            <Link to="/E-book" className="block px-4 py-2 border-b border-second-1000">E-book</Link>
            <Link to="/Contact" className="block px-4 py-2  ">Contact</Link>
          </nav>
        </button>
      </div>
    </header>
  )
}
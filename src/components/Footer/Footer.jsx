import { CiInstagram } from "react-icons/ci";
import PropTypes from 'prop-types';

const LinkColumn = ({ links }) => (
  <div className="flex flex-col gap-2">
    {links.map((link, index) => (
      <a key={index} href={link.href}>{link.text}</a>
    ))}
  </div>
);

LinkColumn.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired
};

export default function Footer() {
  const leftLinks = [
    { href: "/coaching", text: "Coaching" },
    { href: "/blog", text: "Blog" },
    { href: "/ebook", text: "E-book" }
  ];
  const rightLinks = [
    { href: "/contact", text: "Contact" },
    { href: "/mentions-legales", text: "Mentions légales" },
    { href: "/politique-de-confidentialite", text: "Politique de confidentialité" }
  ];

  return (
    <footer className="relative bg-first-1000  text-white-1000 w-full">
      <div className="flex flex-row relative justify-between max-w-7xl m-auto px-6 py-4">
        <LinkColumn links={leftLinks} />
        <LinkColumn links={rightLinks} />
        <CiInstagram className="absolute  top-4 right-0 mr-6 text-2xl cursor-pointer" />
      </div>
      <div className="mx-auto px-6">
        <p className="text-center text-white-1000">© 2024 par Elisabeth. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

import { Menu, X } from "lucide-react";

type HeaderProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About Me", href: "#about-me" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ menuOpen, setMenuOpen }: HeaderProps) {
  return (
    <header className="site-header">
      <a href="#top" className="brand" aria-label="Pawon'e Simbah home">
        <span>P</span>
        <span className="brand-name">
          Pawon'e
          <br />
          Simbah
        </span>
      </a>
      <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-note">
        Est. 1987 <i>·</i> Surakarta, ID
      </div>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

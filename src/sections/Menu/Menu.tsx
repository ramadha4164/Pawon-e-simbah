import { ArrowUpRight } from 'lucide-react';
import { menuData } from './menu.data';
import './style.css';

export default function MenuSection() {
  return (
    <section id="menu" className="menu-section section-pad">
      <div className="section-kicker reveal">{menuData.kicker} <span className="right-note">{menuData.note}</span></div>
      <div className="menu-grid">
        <div className="menu-image reveal">
          <img src={menuData.image} alt={menuData.imageAlt} />
          <span>{menuData.imageLabel}</span>
        </div>
        <div className="menu-list reveal">
          {menuData.items.map((item) => (
            <div className="menu-item" key={item.name}>
              <span className="menu-no">{item.no}</span>
              <div><h3>{item.name}</h3><p>{item.detail}</p></div>
              <b>{item.price}</b>
            </div>
          ))}
          <a className="arrow-link dark-link" href={menuData.ctaHref}>{menuData.ctaLabel} <ArrowUpRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}

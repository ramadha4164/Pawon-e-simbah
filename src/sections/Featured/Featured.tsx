import { ArrowUpRight } from 'lucide-react';
import { featuredData } from './featured.data';
import './style.css';

export default function Featured() {
  return (
    <section className="special section-pad reveal">
      <div className="special-top">
        <div className="section-kicker">{featuredData.kicker}</div>
        <span className="special-label">{featuredData.label} <span>✦</span></span>
      </div>
      <div className="special-card">
        <img src={featuredData.image} alt={featuredData.imageAlt} />
        <div className="special-copy">
          <p className="eyebrow">{featuredData.eyebrow}</p>
          <h2>{featuredData.title[0]}<br /><em>{featuredData.title[1]}</em></h2>
          <p>{featuredData.description}</p>
          <div className="special-price"><span>{featuredData.currency}</span>{featuredData.price}</div>
          <a className="arrow-link" href={featuredData.ctaHref}>{featuredData.ctaLabel} <ArrowUpRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}

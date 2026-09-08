import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { homeData } from "./home.data";
import "./style.css";

export default function Home() {
  return (
    <section id="top" className="hero section-pad">
      <div className="hero-copy reveal">
        <p className="eyebrow">{homeData.eyebrow}</p>

        <h1>
          {homeData.title[0]}
          <br />
          <em>{homeData.title[1]}</em>
          <br />
          {homeData.title[2]}
        </h1>

        <p className="hero-intro">{homeData.intro}</p>

        <a className="arrow-link" href={homeData.ctaHref}>
          {homeData.ctaLabel}
          <ArrowUpRight size={18} />
        </a>
      </div>

      <div className="hero-art reveal">
        <div className="sun-disc" />

        <span className="vertical-label">{homeData.verticalLabel}</span>

        <img src={homeData.image} alt={homeData.imageAlt} />

        <span className="hero-stamp">
          {homeData.stamp[0]}
          <br />
          {homeData.stamp[1]}
        </span>
      </div>

      <div className="hero-foot">
        <span>
          {homeData.scrollLabel}
          <ArrowDownRight size={16} />
        </span>

        <span>{homeData.pageNumber}</span>
      </div>
    </section>
  );
}

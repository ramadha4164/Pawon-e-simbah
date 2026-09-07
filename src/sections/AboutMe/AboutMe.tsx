import { aboutMeData } from './aboutMe.data';
import './style.css';

export default function AboutMe() {
  return (
    <section id="about-me" className="about section-pad reveal">
      <div className="section-kicker">{aboutMeData.kicker}</div>

      <div className="about-grid">
        <div className="about-title">
          <p className="display-small">
            {aboutMeData.title[0]}
            <br />
            <em>{aboutMeData.title[1]}</em>
          </p>

          <p className="about-tagline">
            {aboutMeData.tagline}
          </p>

          <div className="pattern-mark">✳</div>
        </div>

        <div className="about-copy">
          <p className="lede">{aboutMeData.lead}</p>

          <p>{aboutMeData.body}</p>

          <div className="signature">
            {aboutMeData.signature} <span>✦</span>
          </div>
        </div>
      </div>
    </section>
  );
}

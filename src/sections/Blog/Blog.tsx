import { ArrowUpRight } from 'lucide-react';
import { blogData } from './blog.data';
import './style.css';

export default function Blog() {
  return (
    <section id="blog" className="journal section-pad">
      <div className="section-kicker reveal">{blogData.kicker} <span className="right-note">{blogData.note}</span></div>
      <div className="journal-heading reveal">
        <h2>{blogData.title[0]} <em>{blogData.title[1]}</em><br />{blogData.title[2]}</h2>
        <a className="circle-link" href={blogData.readAllHref}>{blogData.readAllLabel} <ArrowUpRight size={20} /></a>
      </div>
      <div className="articles">
        {blogData.articles.map((article) => (
          <a className="article reveal" href="#contact" key={article.number}>
            <span>{article.number}</span>
            <div><h3>{article.title}</h3><p>{article.meta} <ArrowUpRight size={15} /></p></div>
          </a>
        ))}
      </div>
    </section>
  );
}

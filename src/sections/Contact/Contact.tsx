import { ArrowUpRight, Instagram, Mail } from 'lucide-react';
import { contactData } from './contact.data';
import './style.css';

export default function Contact() {
  return (
    <section id="contact" className="contact section-pad reveal">
      <div className="contact-mark">✳</div>
      <p className="eyebrow">{contactData.eyebrow}</p>
      <h2>{contactData.title[0]}<br /><em>{contactData.title[1]}</em></h2>
      <p className="contact-text">{contactData.description}</p>
      <div className="contact-links">
        {contactData.links.map((link) => (
          <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
            {link.icon === 'instagram' && <Instagram size={18} />}
            {link.icon === 'email' && <Mail size={18} />}
            {link.icon === 'whatsapp' && <span className="contact-symbol">◌</span>}
            {link.label} <ArrowUpRight size={16} />
          </a>
        ))}
      </div>
    </section>
  );
}

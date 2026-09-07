import { MoveDiagonal } from 'lucide-react';
import { galleryData, galleryItems } from './gallery.data';
import './style.css';

type GalleryProps = {
  onOpenLightbox: (index: number) => void;
};

export default function Gallery({ onOpenLightbox }: GalleryProps) {
  return (
    <section id="gallery" className="gallery-section section-pad">
      <div className="section-kicker reveal">{galleryData.kicker} <span className="right-note">{galleryData.note}</span></div>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <button key={item.src} className={`gallery-item ${item.className} reveal`} onClick={() => onOpenLightbox(index)}>
            <img src={item.src} alt={item.alt} />
            <span>{item.label} <MoveDiagonal size={15} /></span>
          </button>
        ))}
      </div>
    </section>
  );
}

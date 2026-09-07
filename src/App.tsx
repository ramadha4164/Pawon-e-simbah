import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, CircleArrowUp, Menu, X } from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './sections/Home/Home';
import AboutMe from './sections/AboutMe/AboutMe';
import MenuSection from './sections/Menu/Menu';
import Featured from './sections/Featured/Featured';
import Gallery from './sections/Gallery/Gallery';
import Blog from './sections/Blog/Blog';
import Contact from './sections/Contact/Contact';

import { galleryItems } from './sections/Gallery/gallery.data';
import './styles/globals.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const revealRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    revealRef.current = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((element) => revealRef.current?.observe(element));
    return () => revealRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (lightbox === null) return;
      if (event.key === 'Escape') setLightbox(null);
      if (event.key === 'ArrowRight') setLightbox((value) => value === null ? 0 : (value + 1) % galleryItems.length);
      if (event.key === 'ArrowLeft') setLightbox((value) => value === null ? 0 : (value - 1 + galleryItems.length) % galleryItems.length);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightbox]);

  const openLightbox = (index: number) => {
    setZoom(1);
    setLightbox(index);
  };

  const next = () => setLightbox((value) => value === null ? 0 : (value + 1) % galleryItems.length);
  const previous = () => setLightbox((value) => value === null ? 0 : (value - 1 + galleryItems.length) % galleryItems.length);

  return (
    <main>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <AboutMe />
      <MenuSection />
      <Featured />
      <Gallery onOpenLightbox={openLightbox} />
      <Blog />
      <Contact />
      <Footer />

      {lightbox !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close gallery"><X /></button>
          <button className="lightbox-arrow left" onClick={(event) => { event.stopPropagation(); previous(); }} aria-label="Previous image"><ArrowLeft /></button>
          <div
            className="lightbox-frame"
            onClick={(event) => event.stopPropagation()}
            onWheel={(event) => setZoom((value) => Math.min(3, Math.max(1, value - event.deltaY * 0.001)))}
            onMouseDown={(event) => setDragStart(event.clientX)}
            onMouseUp={(event) => {
              if (dragStart !== null && Math.abs(event.clientX - dragStart) > 60) {
                event.clientX < dragStart ? next() : previous();
              }
              setDragStart(null);
            }}
          >
            <img src={galleryItems[lightbox].src} alt={galleryItems[lightbox].alt} style={{ transform: `scale(${zoom})` }} />
          </div>
          <button className="lightbox-arrow right" onClick={(event) => { event.stopPropagation(); next(); }} aria-label="Next image"><ArrowRight /></button>
          <div className="lightbox-caption">{galleryItems[lightbox].label} <span>Scroll to zoom · Drag to browse</span></div>
        </div>
      )}
    </main>
  );
}

export default App;

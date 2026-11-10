
import { Link } from 'react-router';
import { useEffect } from 'react';
import './Home.css';

const collections = [
  {
    title: 'WOMEN',
    description: 'Effortless elegance',
    image: '/images/women.jpg',
  },
  {
    title: 'MEN',
    description: 'Modern essentials',
    image: '/images/men.jpg',
  },
  {
    title: 'ACCESSORIES',
    description: 'The finishing touch',
    image: '/images/accessories.jpg',
  },
];

function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="home-hero">
        <img
          className="hero-image"
          src="/images/hero.jpg"
          alt="VELORA contemporary fashion collection"
        />

        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="hero-label">VELORA / NEW COLLECTION</span>

          <h1>
            THE ART OF
            <br />
            BEING TIMELESS.
          </h1>

          <p>Modern silhouettes. Effortless confidence.</p>

          <a href="#collections" className="hero-button">
            EXPLORE COLLECTIONS
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <span className="hero-bottom-label">
          EST. 2026 — CONTEMPORARY FASHION
        </span>
      </section>

      {/* INTRO SECTION */}
      <section className="home-intro reveal">
        <span className="section-label">THE VELORA EDIT</span>

        <h2>
          Style is temporary.
          <br />
          <em>Elegance is forever.</em>
        </h2>

        <p>
          A curated expression of modern fashion.
          Designed for those who believe less is more.
        </p>
      </section>

      {/* COLLECTIONS SECTION */}
      <section id="collections" className="collections-section">
        <div className="collections-heading reveal">
          <div>
            <span className="section-label">EXPLORE VELORA</span>
            <h2>THE COLLECTIONS</h2>
          </div>

          <span className="collection-season">2026 / EDITION 01</span>
        </div>

        <div className="collections-grid">
          {collections.map((collection) => (
            <article
              className="collection-card reveal"
              key={collection.title}
            >
              <div className="collection-image-wrapper">
                <img
                  src={collection.image}
                  alt={`${collection.title} fashion collection`}
                  loading="lazy"
                />

                <div className="collection-overlay">
                  <span>DISCOVER THE EDIT ↗</span>
                </div>
              </div>

              <div className="collection-info">
                <div>
                  <h3>{collection.title}</h3>
                  <p>{collection.description}</p>
                </div>

                <span className="collection-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BRAND PHILOSOPHY */}
      <section className="brand-section">
        <div className="brand-content reveal">
          <span className="section-label">OUR PHILOSOPHY</span>

          <h2>
            NOT JUST FASHION.
            <br />
            A WAY OF LIFE.
          </h2>

          <p>
            At VELORA, we believe true style comes from
            simplicity, individuality, and timeless design.
            Every collection reflects a balance between
            modern expression and lasting elegance.
          </p>

          <Link to="/about" className="brand-link">
            DISCOVER OUR STORY
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      {/* END MESSAGE */}
      <section className="home-ending reveal">
        <span>VELORA</span>
        <p>DEFINE YOUR OWN ELEGANCE.</p>
      </section>
    </div>
  );
}

export default Home;

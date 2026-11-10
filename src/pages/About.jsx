
import { Link } from 'react-router';
import './About.css';

const values = [
  {
    number: '01',
    title: 'SIMPLICITY',
    description:
      'We believe that true elegance begins with simplicity. Every detail has a purpose.',
  },
  {
    number: '02',
    title: 'INDIVIDUALITY',
    description:
      'Style is personal. We celebrate confidence, character, and authentic expression.',
  },
  {
    number: '03',
    title: 'TIMELESSNESS',
    description:
      'Beyond passing trends, we embrace designs that remain relevant season after season.',
  },
];

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-label">THE VELORA STORY</span>

          <h1>
            BEYOND
            <br />
            THE ORDINARY.
          </h1>

          <p>
            A contemporary expression of timeless elegance.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-image">
          <img
            src="/images/about.jpg"
            alt="VELORA fashion studio"
          />
        </div>

        <div className="about-story-content">
          <span className="about-label">WHO WE ARE</span>

          <h2>
            FASHION WITH
            <br />
            INTENTION.
          </h2>

          <p>
            VELORA is a contemporary fashion concept
            created for individuals who appreciate
            refined simplicity and effortless style.
          </p>

          <p>
            Our philosophy is rooted in the belief that
            elegance should feel natural, personal,
            and timeless.
          </p>

          <p>
            We bring together modern silhouettes,
            thoughtful details, and a minimalist
            aesthetic to inspire everyday confidence.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values-heading">
          <span className="about-label">WHAT DEFINES US</span>
          <h2>OUR VALUES</h2>
        </div>

        <div className="about-values-grid">
          {values.map((value) => (
            <article className="about-value-card" key={value.number}>
              <span>{value.number}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <span className="about-label">CONNECT WITH US</span>

        <h2>
          LET'S CREATE
          <br />
          SOMETHING TIMELESS.
        </h2>

        <Link to="/contact" className="about-cta-link">
          GET IN TOUCH ↗
        </Link>
      </section>
    </div>
  );
}

export default About;

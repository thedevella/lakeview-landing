const navLinks = [
  ["Rooms", "#rooms"],
  ["Experiences", "#experiences"],
  ["Dining", "#dining"],
  ["Our story", "#about"],
];

export default function Hero() {
  return (
    <header className="site-header" id="top">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Lakeview home">
          lakeview<span>.</span>
        </a>
        <div className="nav-links">
          {navLinks.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </div>
        <a className="nav-book button button-dark" href="#booking">
          Book your stay <span aria-hidden="true">↗</span>
        </a>
        <details className="mobile-nav">
          <summary aria-label="Open navigation menu">
            <span></span>
            <span></span>
          </summary>
          <div className="mobile-nav-panel">
            {navLinks.map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
            <a href="#booking">
              Book your stay <span aria-hidden="true">↗</span>
            </a>
          </div>
        </details>
      </nav>

      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-image">
          <div className="hero-copy">
            <span className="eyebrow eyebrow-light">
              <span className="eyebrow-dot"></span> A quieter kind of getaway
            </span>
            <h1 id="hero-title">
              Stay where
              <br />
              the water <em>whispers.</em>
            </h1>
            <p>
              A considered lakeside escape, made for slow mornings, long
              lunches, and the moments in between.
            </p>
            <a href="#rooms" className="button button-light">
              Find your room
            </a>
          </div>
          {/* <div className="hero-caption">
            <span>01 / 04</span>
            <span>Lake Como, Italy</span>
            <span>Scroll to discover ↓</span>
          </div> */}
        </div>
        <div className="booking-bar" id="booking">
          <label>
            <span>Check in</span>
            <input aria-label="Check in date" type="date" />
          </label>
          <label>
            <span>Check out</span>
            <input aria-label="Check out date" type="date" />
          </label>
          <label>
            <span>Guests</span>
            <select aria-label="Number of guests" defaultValue="2 guests">
              <option>1 guest</option>
              <option>2 guests</option>
              <option>3 guests</option>
              <option>4 guests</option>
            </select>
          </label>
          <a className="button button-dark booking-submit" href="#rooms">
            Explore availability
          </a>
        </div>
      </section>
    </header>
  );
}

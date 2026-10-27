const features = [
  ['✳', 'Made for unwinding', 'Unhurried mornings, considered comforts, and space to switch off.'],
  ['⌁', 'A lake on your doorstep', 'Waterfront moments and the best of the village close by.'],
  ['♧', 'Local by nature', 'Seasonal menus and thoughtful touches from the people around us.'],
  ['☼', 'A warmer welcome', 'The little things, taken care of before you even have to ask.'],
]

export default function Cta() {
  return (
    <>
      <section className="why-section section-pad">
        <div className="container why-grid">
          <div className="why-copy">
            <span className="eyebrow">The Lakeview feeling</span>
            <h2>All the little things.<br /><em>All in one place.</em></h2>
            <p>A stay should feel effortless. So we’ve thought about the details that make it yours, from the first coffee to the last look at the lake.</p>
            <div className="feature-grid">
              {features.map(([icon, title, description]) => (
                <article className="feature-card" key={title}>
                  <span className="feature-icon" aria-hidden="true">{icon}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="why-photo">
            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85" alt="A welcoming lakeside hotel surrounded by greenery" />
            <span className="photo-caption">Your own little corner of the lake</span>
          </div>
        </div>
      </section>
      <section className="closing-section" id="contact">
        <div className="container closing-inner">
          <span className="eyebrow eyebrow-light">The lake is calling</span>
          <h2>Come find your <em>stillness.</em></h2>
          <p>There’s a room with your name on it.</p>
          <a href="#booking" className="button button-light">Plan your stay</a>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <a className="wordmark" href="#top">lakeview<span>.</span></a>
            <p>A slower kind of somewhere.<br />Lake Como, Italy.</p>
          </div>
          <div className="footer-column">
            <span className="footer-label">Find your way</span>
            <a href="#rooms">Rooms & suites</a>
            <a href="#experiences">Experiences</a>
            <a href="#dining">The Still Room</a>
          </div>
          <div className="footer-column">
            <span className="footer-label">Say hello</span>
            <a href="mailto:hello@lakeview.example">hello@lakeview.example</a>
            <a href="tel:+390310000000">+39 031 000 0000</a>
            <a href="#contact">How to find us</a>
          </div>
          <a className="back-top" href="#top">Back to top ↑</a>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Lakeview. </span>
          <span>By CHIMEZIEM EMMANUELLA</span>
        </div>
      </footer>
    </>
  )
}
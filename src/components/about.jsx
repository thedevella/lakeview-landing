export default function About() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="container about-grid">
        <div className="about-heading">
          <span className="eyebrow">The art of doing less</span>
          <h2>A place to pause.<br />A view to <em>remember.</em></h2>
          <p>Some places invite you to do more. Lakeview is an invitation to do just enough: breathe a little deeper, take the scenic route, and let the day unfold.</p>
          <a href="#experiences" className="text-link">A little about us <span aria-hidden="true">↗</span></a>
        </div>
        <figure className="about-photo about-photo-tall">
          <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1100&q=85" alt="Sunlit hotel suite with a calm, neutral interior" />
          <figcaption>Room to breathe, room to be.</figcaption>
        </figure>
        <figure className="about-photo about-photo-small">
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=850&q=85" alt="Warmly furnished living space with natural textures" />
          <figcaption>A slower rhythm starts here.</figcaption>
        </figure>
        <div className="about-note">
          <span className="note-mark">“</span>
          <p>Not just a place to stay.<br />A feeling you take home.</p>
          <span className="note-signature">The Lakeview way</span>
        </div>
      </div>
    </section>
  )
}
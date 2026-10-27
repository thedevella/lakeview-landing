const experiences = [
  ['01', 'On the water', 'Take the long way around. The lake is better from a boat.'],
  ['02', 'In good company', 'Long-table dinners and local bottles worth opening.'],
  ['03', 'Out in the open', 'A winding path, a quiet cove, a view that stays with you.'],
]

export default function Dining() {
  return (
    <>
      <section className="dining-section section-pad" id="dining">
        <div className="container dining-grid">
          <div className="dining-copy">
            <span className="eyebrow">Gather around the table</span>
            <h2>Rooted here.<br /><em>Made to be shared.</em></h2>
            <p>Good food tastes even better when there’s nowhere else you need to be. At The Still Room, local ingredients and the season set the table.</p>
            <a href="#contact" className="button button-dark">Discover The Still Room</a>
            <div className="dining-details">
              <div><span>Breakfast</span><strong>7:30 – 10:30</strong></div>
              <div><span>Lunch & dinner</span><strong>12:00 – 22:00</strong></div>
            </div>
          </div>
          <div className="dining-photos">
            <figure className="dining-photo-main">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1100&q=85" alt="An intimate candlelit dinner served in a beautiful restaurant" />
            </figure>
            <figure className="dining-photo-detail">
              <img src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85" alt="Fresh seasonal ingredients and a thoughtfully prepared dish" />
            </figure>
          </div>
        </div>
      </section>
      {/* <section className="experiences-section section-pad" id="experiences">
        <div className="container">
          <div className="section-heading experiences-heading">
            <div>
              <span className="eyebrow">A stay that stays with you</span>
              <h2>Make room for <em>something good.</em></h2>
            </div>
            <a href="#contact" className="text-link">Explore experiences <span aria-hidden="true">↗</span></a>
          </div>
          <div className="experience-grid">
            {experiences.map(([number, title, description]) => (
              <article className="experience-card" key={number}>
                <span className="experience-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="experience-icon" aria-hidden="true">{number === '01' ? '⌁' : number === '02' ? '✳' : '↗'}</span>
              </article>
            ))}
          </div>
        </div>
      </section> */}
    </>
  )
}
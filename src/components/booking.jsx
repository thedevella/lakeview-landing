const rooms = [
  {
    name: "The Lakeview Room",
    detail: "A serene hideaway for two",
    price: "From €280 / night",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1100&q=85",
    alt: "Elegant hotel room with a large bed and soft natural light",
    tag: "Most loved",
  },
  {
    name: "The Terrace Suite",
    detail: "A private balcony above the lake",
    price: "From €420 / night",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1100&q=85",
    alt: "Quiet, spacious suite with a sitting area and warm wood details",
    tag: "Private terrace",
  },
  {
    name: "The Grand Residence",
    detail: "An expansive stay for getting together",
    price: "From €680 / night",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85",
    alt: "Beautifully appointed luxury residence opening to a terrace",
    tag: "A little extra",
  },
];

export default function Booking() {
  return (
    <section className="rooms-section section-pad" id="rooms">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Find your somewhere</span>
            <h2>
              Choose your perfect <em>stay.</em>
            </h2>
          </div>
          <p>
            Each room has its own point of view.
            <br />
            All of them feel a little like coming home.
          </p>
        </div>
        <div className="room-grid">
          {rooms.map((room) => (
            <article className="room-card" key={room.name}>
              <a href="#booking" className="room-image">
                <img src={room.image} alt={room.alt} />
                <span className="room-tag">{room.tag}</span>
                <span className="room-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <div className="room-info">
                <div>
                  <h3>{room.name}</h3>
                  <p>{room.detail}</p>
                </div>
                <span className="room-price">{room.price}</span>
              </div>
            </article>
          ))}
        </div>
        {/* <div className="rooms-footnote">
          <span>
            Every stay includes breakfast, thoughtful little extras, and our
            warmest welcome.
          </span>
          <a href="#booking" className="text-link">
            View all rooms <span aria-hidden="true">↗</span>
          </a>
        </div> */}
      </div>
    </section>
  );
}

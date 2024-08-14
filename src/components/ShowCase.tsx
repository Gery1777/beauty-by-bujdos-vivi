import bgShowcase1 from "../images/bg-showcase-1.jpg";
import bgShowcase2 from "../images/bg-showcase-2.jpg";
import bgShowcase3 from "../images/bg-showcase-3.jpg";

function ShowCase() {
  return (
    <>
      <section className="showcase" id="showcase">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              style={{
                backgroundImage: `url(${bgShowcase1})`,
              }}
            ></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Cosmetics</h2>
              <p className="lead mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                pellentesque ipsum iaculis nulla aliquet fermentum. Donec
                commodo sagittis mauris, eget cursus risus consectetur ac.
                Phasellus varius laoreet mi, ac sodales sem varius eget. Duis
                vel sem consequat, cursus mi in, cursus turpis.
              </p>
            </div>
          </div>
          <div className="row g-0">
            <div
              className="col-lg-6 text-white showcase-img"
              style={{
                backgroundImage: `url(${bgShowcase2})`,
              }}
            ></div>
            <div className="col-lg-6 my-auto showcase-text">
              <h2>Make up and beauty consultant</h2>
              <p className="lead mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                pellentesque ipsum iaculis nulla aliquet fermentum. Donec
                commodo sagittis mauris, eget cursus risus consectetur ac.
                Phasellus varius laoreet mi, ac sodales sem varius eget. Duis
                vel sem consequat, cursus mi in, cursus turpis.
              </p>
            </div>
          </div>
          <div className="row g-0">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              style={{
                backgroundImage: `url(${bgShowcase3})`,
              }}
            ></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Eyelash stylist</h2>
              <p className="lead mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                pellentesque ipsum iaculis nulla aliquet fermentum. Donec
                commodo sagittis mauris, eget cursus risus consectetur ac.
                Phasellus varius laoreet mi, ac sodales sem varius eget. Duis
                vel sem consequat, cursus mi in, cursus turpis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShowCase;

function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="about-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <h3>Ezt itt mind tudom...</h3>
              <p className="lead mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                rutrum vulputate eros non tempus.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Donec rutrum vulputate eros non
                tempus.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <img
              className="img-fluid rounded-circle mb-3"
              src="./src/images/testimonials-1.jpg"
              alt="..."
            />
          </div>
          <div className="col-lg-4">
            <div className="about-item mx-auto mb-0 mb-lg-3">
              <h3>...meg ezt is</h3>
              <p className="lead mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                rutrum vulputate eros non tempus.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Donec rutrum vulputate eros non
                tempus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec rutrum vulputate eros non tempus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;

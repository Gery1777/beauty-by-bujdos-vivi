//Import images
import testimonials1 from "../images/testimonials-1.jpg";
import testimonials2 from "../images/testimonials-1.jpg";
import testimonials3 from "../images/testimonials-1.jpg";

function Testimonials() {
  return (
    <div>
      <div className="container">
        <h2 className="mb-5">What people are saying...</h2>
        <div className="row">
          <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
              <img
                className="img-fluid rounded-circle mb-3"
                src={testimonials1}
                alt="..."
              />
              <h5>Margaret E.</h5>
              <p className="font-weight-light mb-0">
                "This is fantastic! Thanks so much guys!"
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
              <img
                className="img-fluid rounded-circle mb-3"
                src={testimonials2}
                alt="..."
              />
              <h5>Fred S.</h5>
              <p className="font-weight-light mb-0">
                "Bootstrap is amazing. I've been using it to create lots of
                super nice landing pages."
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
              <img
                className="img-fluid rounded-circle mb-3"
                src={testimonials3}
                alt="..."
              />
              <h5>Sarah W.</h5>
              <p className="font-weight-light mb-0">
                "Thanks so much for making these free resources available to
                us!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonials;

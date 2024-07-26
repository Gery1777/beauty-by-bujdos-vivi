function Contact() {
  return (
    <>
      {" "}
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <h2 className="mb-4">
              Use the form below to get in touch with me!
            </h2>
            <form
              className="form-subscribe"
              id="contactFormFooter"
              data-sb-form-api-token="API_TOKEN"
            >
              {/* <!-- Email address input--> */}
              <div className="row">
                <div className="col">
                  <input
                    className="form-control form-control-m"
                    id="emailAddressBelow"
                    type="email"
                    placeholder="Email Address"
                    data-sb-validations="required,email"
                  />
                  <div
                    className="invalid-feedback text-white"
                    data-sb-feedback="emailAddressBelow:required"
                  >
                    Email Address is required.
                  </div>
                  <div
                    className="invalid-feedback text-white"
                    data-sb-feedback="emailAddressBelow:email"
                  >
                    Email Address Email is not valid.
                  </div>
                </div>
                <div className="col-auto">
                  <button
                    className="btn btn-primary btn-xs disabled"
                    id="submitButton"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div className="d-none" id="submitSuccessMessage">
                <div className="text-center mb-3">
                  <div className="fw-bolder">Form submission successful!</div>
                  <p>To activate this form, sign up at</p>
                  <a
                    className="text-white"
                    href="https://startbootstrap.com/solution/contact-forms"
                  >
                    https://startbootstrap.com/solution/contact-forms
                  </a>
                </div>
              </div>
              <div className="d-none" id="submitErrorMessage">
                <div className="text-center text-danger mb-3">
                  Error sending message!
                </div>
              </div>
            </form>
            <form
              className="form-subscribe"
              id="contactFormMessage"
              data-sb-form-api-token="API_TOKEN"
            >
              <div className="row">
                <div className="col">
                  <input
                    className="form-control form-control-lg"
                    id="messageBelow"
                    type="email"
                    placeholder="Message"
                    data-sb-validations="required"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

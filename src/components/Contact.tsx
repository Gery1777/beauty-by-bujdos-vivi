import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

interface FormValues {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phone: string;
  message: string;
}

function Contact() {
  const [loading, setLoading] = useState(false);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailAddressRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    emailjs.init("0hYc9Bpcy1KNIFrXe");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = "service_ajzbge9";
    const templateId = "template_gb2qkjr";

    const formValues: FormValues = {
      firstName: firstNameRef.current?.value || "",
      lastName: lastNameRef.current?.value || "",
      emailAddress: emailAddressRef.current?.value || "",
      phone: phoneRef.current?.value || "",
      message: messageRef.current?.value || "",
    };

    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        emailAddress: formValues.emailAddress,
        phone: formValues.phone,
        message: formValues.message,
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <h2 className="mb-5">
              Use the form below to get in touch with me!
            </h2>
            <form
              id="contact_form"
              name="contact_form"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="mb-5 row">
                <div className="col">
                  <label>Vezetéknév*</label>
                  <input
                    ref={lastNameRef}
                    type="text"
                    required
                    className="form-control"
                    id="last_name"
                    name="last_name"
                  ></input>
                </div>
                <div className="col">
                  <label>Keresztnév*</label>
                  <input
                    ref={firstNameRef}
                    type="text"
                    required
                    className="form-control"
                    id="first_name"
                    name="first_name"
                  ></input>
                </div>
              </div>
              <div className="mb-5 row">
                <div className="col">
                  <label>Email cím*</label>
                  <input
                    ref={emailAddressRef}
                    type="email"
                    required
                    className="form-control"
                    id="email_addr"
                    name="email"
                  ></input>
                </div>
                <div className="col">
                  <label>Telefonszám</label>
                  <input
                    ref={phoneRef}
                    type="tel"
                    className="form-control"
                    id="phone_input"
                    name="Phone"
                  ></input>
                </div>
              </div>
              <div className="mb-5">
                <label>Üzenet</label>
                <textarea
                  ref={messageRef}
                  required
                  className="form-control"
                  id="message"
                  name="message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary px-4 btn-lg">
                Küldés
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

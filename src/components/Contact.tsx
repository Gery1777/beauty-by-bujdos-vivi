import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Modal from "react-bootstrap/Modal";

interface NotificationModalProps {
  // isOpen: boolean; // Use a clearer prop name
  modalTitle: string;
  modalMessage: string[];
  onClose: () => void; // Optional callback for handling close from parent
}
function NotificationModal({
  modalTitle,
  modalMessage,
  onClose,
}: NotificationModalProps) {
  return (
    <>
      <div className="col-8 modal-container">
        <Modal.Header>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <hr></hr>
        <Modal.Body>
          {modalMessage.map((msg) => (
            <p style={{ margin: "0px" }}>{msg}</p>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </Modal.Footer>
      </div>
    </>
  );
}
//Contact
interface FormValues {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phone: string;
  message: string;
}

function Contact() {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailAddressRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    emailjs.init("0hYc9Bpcy1KNIFrXe");
  }, []);

  function ToggleModal(isOpen: boolean) {
    const opacityContainer = document.getElementById("opacityContainer")!;
    isOpen
      ? opacityContainer.classList.add("opacity-container")
      : opacityContainer.classList.remove("opacity-container");
    setShowModal(isOpen);
  }
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
      // setLoading(true);
      //send email
      // await emailjs.send(serviceId, templateId, {
      //   firstName: formValues.firstName,
      //   lastName: formValues.lastName,
      //   emailAddress: formValues.emailAddress,
      //   phone: formValues.phone,
      //   message: formValues.message,
      // });
      //reset HTML inputs
      (document.getElementById("firstName") as HTMLInputElement).value = "";
      (document.getElementById("lastName") as HTMLInputElement).value = "";
      (document.getElementById("emailAddress") as HTMLInputElement).value = "";
      (document.getElementById("phone") as HTMLInputElement).value = "";
      (document.getElementById("message") as HTMLTextAreaElement).value = "";
      //alert user that email is sent
      ToggleModal(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {showModal ? (
        <NotificationModal
          modalTitle="Köszönöm"
          modalMessage={[
            "Üzeneted megkaptam, amint tudok jelentkezem :)",
            "Üdv,",
            "Vivi",
          ]}
          onClose={() => ToggleModal(false)}
        ></NotificationModal>
      ) : null}
      <section className="contact text-white text-center" id="contact">
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
                <div className="mb-5 row contact-row">
                  <div className="col">
                    <label>Vezetéknév*</label>
                    <input
                      ref={lastNameRef}
                      type="text"
                      required
                      className="form-control"
                      id="lastName"
                      name="lastName"
                    ></input>
                  </div>
                  <div className="col">
                    <label>Keresztnév*</label>
                    <input
                      ref={firstNameRef}
                      type="text"
                      required
                      className="form-control"
                      id="firstName"
                      name="firstName"
                    ></input>
                  </div>
                </div>
                <div className="mb-5 row contact-row">
                  <div className="col">
                    <label>Email cím*</label>
                    <input
                      ref={emailAddressRef}
                      type="email"
                      required
                      className="form-control"
                      id="emailAddress"
                      name="emailAddress"
                    ></input>
                  </div>
                  <div className="col">
                    <label>Telefonszám</label>
                    <input
                      ref={phoneRef}
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                    ></input>
                  </div>
                </div>
                <div className="mb-5 contact-row">
                  <label>Üzenet*</label>
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
      </section>
    </>
  );
}

export default Contact;

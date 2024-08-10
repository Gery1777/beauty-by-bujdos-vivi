import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

interface FormValues {
  from_name: string;
  message: string;
  reply_to: string;
}

export default function Test() {
  const [loading, setLoading] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailjs.init("0hYc9Bpcy1KNIFrXe");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = "service_ajzbge9";
    const templateId = "template_gb2qkjr";

    const formValues: FormValues = {
      from_name: nameRef.current?.value || "",
      message: messageRef.current?.value || "",
      reply_to: emailRef.current?.value || "",
    };

    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        from_name: formValues.from_name,
        message: formValues.message,
        reply_to: formValues.reply_to,
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
            <h2 className="mb-4">
              Use the form below to get in touch with me!
            </h2>
            <div>
              <form className="for" onSubmit={handleSubmit}>
                <div style={{ display: "flex" }}>
                  <input
                    className="form-control"
                    ref={nameRef}
                    name="from_name"
                    placeholder="Name"
                    style={{ width: "40%" }}
                  />
                  <input
                    className="form-control"
                    ref={emailRef}
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    className="form-control"
                    ref={messageRef}
                    name="message"
                    placeholder="Message"
                  />
                </div>
                <button className="btn btn-primary" disabled={loading}>
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

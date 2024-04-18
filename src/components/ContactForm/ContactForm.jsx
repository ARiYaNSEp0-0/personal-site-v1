import { useRef, useState } from "react";
import { Heading, Blur, CallToAction } from "../index";

import emailjs from "@emailjs/browser";

import "./ContactForm.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isMessageSent, setIsMessageSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2pg8yca", "template_ucqa6qo", form.current, {
        publicKey: "Jaetejvn4VIvURCBf",
      })
      .then(
        () => {
          setIsMessageSent(true);
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => setIsMessageSent(false), 3000);
        },
        (error) => {
          console.log(error);
          setIsMessageSent(false);
        }
      );
  };
  return (
    <section className="contact">
      <div className="container container-md">
        <div className="contact__inner equal-columns">
          <div className="contact__intro">
            <Heading level="h2" className="section-heading">
              شما می توانید با <span>من در تماس  باشید !</span>
            </Heading>
          </div>
          <div className="contact__form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="contact__form-group">
                <label htmlFor="name">نام :</label>
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  className="contact__input-name"
                  placeholder="نام شما ..."
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="email">ایمیل :</label>
                <input
                  type="email"
                  name="from_email"
                  id="email"
                  className="contact__input-email"
                  placeholder="name@example.com"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.trim())}
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="message">پیام :</label>
                <textarea
                  name="from_message"
                  id="message"
                  className="contact__input-message"
                  placeholder="پیام شما به من ..."
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <CallToAction
                as="button"
                type="submit"
                className="contact__submit"
              >
                {isMessageSent ? "پیام فرستاده شد" : "فرستادن پیام"}
              </CallToAction>
            </form>
            {/* <Blur
              blur={"60px"}
              color={"rgb(238 210 255)"}
              height={"40%"}
              width={"100%"}
              x={"20%"}
              y={"30%"}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

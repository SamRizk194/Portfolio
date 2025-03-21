import React from "react";
import "./Contact.css";
import Lottie from "react-lottie";
import animationData1 from "../../animation/arrow.json";
import animationData3 from "../../animation/message.json";

function Contact() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: animationData3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "64bc60b9-3ab1-4392-bcf3-c824527eabda");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <div className="arrow">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <section id="contact" className="container">
        <h1 className="sectionTitle">Contact</h1>
        <div className="message">
          <form onSubmit={onSubmit}>
            <div className="formGroup">
              <label htmlFor="name" hidden>
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email" hidden>
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="message" hidden>
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <input className="btn" type="submit" value="Submit" />
          </form>
          <span>{result}</span>
          <Lottie options={defaultOption} height={400} width={400} />
        </div>
      </section>
    </>
  );
}

export default Contact;

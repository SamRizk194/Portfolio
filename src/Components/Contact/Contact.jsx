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
      setResult("Message Sent Successfully");
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

      <section className="container scroll-mt-20" id="contact-us">
        <h1 className="sectionTitle">Contact</h1>
        <div className="message">
          <div>
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
              <div>
                {" "}
                <button
                  type="submit"
                  className="    font-semibold
    bg-[#00FF08]
    text-[#222]
    px-6 py-4
    rounded-[20px]
    cursor-pointer
    tracking-[1px]
    transition-all
    duration-500
    ease-out
    shadow-[0_0_15px_#00FF08]
    hover:scale-[1.05]
    hover:shadow-[0_0_5px_#00FF08,0_0_15px_#00FF08,0_0_30px_#00FF08]

    active:scale-[0.98]"
                >
                  Send
                </button>
              </div>
            </form>
            <span className="green">{result}</span>
          </div>
          <div className="lottie">
            <Lottie options={defaultOption} height={300} width={300} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

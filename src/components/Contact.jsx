import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import img from "../assets/images/contact-img.svg";

function Contact() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Track loading state

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true); // ✅ Disable button & show spinner

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log("Email sent!", result.text);
          setSuccessMessage("Your message has been sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("Error sending email:", error.message);
          setSuccessMessage("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setLoading(false); // ✅ Enable button after completion
      });
  };

  return (
    <>
      <div className="contact bg-[linear-gradient(90deg,#b004b0,#38097a)] w-full" id="contact">
        <div className="wrapper flex justify-center py-16 gap-52 lg:py-12">
          <div className="imgbox lg:hidden">
            <img className="w-[550px] h-full" src={img} alt="Contact" />
          </div>
          <div className="content-box">
            <h1 className="text-white font-bold text-4xl">Get In Touch</h1>
            {successMessage && <p className="text-green-400 py-2">{successMessage}</p>}
            
            <form ref={form} onSubmit={sendEmail} className="flex flex-col">
              <div className="flex gap-4 py-2">
                <input
                  className="bg-transparent h-14 rounded-2xl border-[1px] border-white pl-4 text-white placeholder-white lg:w-36"
                  type="text"
                  name="name"
                  placeholder="First Name"
                  required
                />
                <input
                  className="bg-transparent h-14 rounded-2xl border-[1px] border-white pl-4 text-white placeholder-white lg:w-36"
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="flex gap-4 py-4">
                <input
                  className="bg-transparent h-14 rounded-2xl border-[1px] border-white pl-4 text-white placeholder-white lg:w-36"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <input
                  className="bg-transparent h-14 rounded-2xl border-[1px] border-white pl-4 text-white placeholder-white lg:w-36"
                  type="text"
                  name="phone"
                  placeholder="Phone"
                />
              </div>
              <textarea
                className="bg-transparent rounded-2xl border-[1px] border-white h-36 pl-4 text-white w-full placeholder-white pt-2"
                name="message"
                placeholder="Message"
                required
              ></textarea>
              
              {/* ✅ Button with Spinner */}
              <button
                type="submit"
                disabled={loading} // ✅ Disable when loading
                className={`bg-white border-black border-[1px] py-[16px] rounded-lg px-8 my-8 w-32 font-bold flex items-center justify-center ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                ) : (
                  "Send"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

import { ArrowUpRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)
const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [notsent, setNotSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) {
      setNotSent(true);
      setTimeout(() => setNotSent(false), 1500);
      return;
    }
    // send to Formspree
    try {
      const response = await fetch("https://formspree.io/f/xgvpnbjy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setSent(true);
        setEmail("");
        setMessage("");
        setTimeout(() => setSent(false), 1500);
      } else {
        setNotSent(true);
        setTimeout(() => setNotSent(false), 1500);
      }
    } catch (err) {
      console.error("Form submit error:",err);
      setNotSent(true);
      setTimeout(() => setNotSent(false), 1500);
    }
  };

  const insRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      insRef.current,
      { y: 10, opacity: 0 }, 
      { 
        y: 0, 
        opacity: 1, 
        duration: 2, 
        ease: "power1.out", 
        scrollTrigger:{
          trigger:insRef.current,
          start: "top 60%",
          end: "top 40%",   
          scrub:true,
        }
      } 
    );
  }, []);

  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-white text-black font-b flex flex-col justify-between px-[5vw] py-[10vh]"
    >
      {/* Title */}
      <div className="text-center mb-24">
        <h1 className=" font-h text-[12vw] md:text-[8vw] leading-none tracking-tight">
          CONTACT
        </h1>
        <p ref={insRef} className="text-neutral-500 text-sm md:text-base mt-4 font-b tracking-tight">
          Let’s make pixels speak.
        </p>
      </div>

      {/* Contact Content */}
      <div className="flex flex-col md:flex-row justify-between gap-20 md:gap-32">
        {/* Left — Message Input */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[45%] flex flex-col space-y-6"
        >
          <h2 className="font-h text-3xl tracking-tight">
            Share your thoughts
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed max-w-md">
            Whether it’s a project, collaboration, or just a conversation — feel
            free to reach out.
          </p>

          <div className="floating-group">
            <input
              type="email"
              name="email"
              placeholder=" "
              required
              className="floating-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="floating-label">Your email</label>
          </div>

          <div className="floating-group">
            <textarea
              name="message"
              placeholder=" "
              rows="3"
              required
              className="floating-input resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label className="floating-label">Your message</label>
          </div>

          <button
            type="submit"
            className="self-start mt-4 border border-black px-6 py-2 rounded-full text-sm font-b tracking-tight hover:bg-black hover:text-white transition-all"
          >
            Send Message
          </button>

          {sent && (
            <p className="text-green-600 text-sm mt-2 transition-opacity duration-700">
              Message sent successfully ✨
            </p>
          )}

          {notsent && (
            <p className="text-red-600 text-sm mt-2 transition-opacity duration-700">
              Oops! something went wrong 🤔
            </p>
          )}
        </form>

        {/* Right — Contact Details */}
        <div className="w-full md:w-[45%] flex flex-col items-end text-right space-y-6">
          <div className="space-y-1 flex flex-col items-end">
            <p className="font-h text-lg leading-tight line-below">
              +91 97178 70659
            </p>
            <p className="font-h text-lg leading-tight line-below">
              rohitnegi0690@gmail.com
            </p>
          </div>

          <div className="flex justify-end gap-6 text-sm">
            <div className="chngHvrEff flex ">
              <a href="https://github.com/Rohitnegi51/" className="underline-hover">
                GITHUB
              </a>
              <div>
                <ArrowUpRight className="rotate-hover size-[20px]" />
              </div>
            </div>

            <div className="chngHvrEff flex ">
              <a href="https://www.linkedin.com/in/rohit-negi-79679825a/" className="underline-hover">
                LINKEDIN
              </a>
              <div>
                <ArrowUpRight className="rotate-hover size-[20px]" />
              </div>
            </div>
            <div className="chngHvrEff flex ">
              <a href="https://www.instagram.com/rohit_negi_51/" className="underline-hover">
                INSTAGRAM
              </a>
              <div>
                <ArrowUpRight className="rotate-hover size-[20px]" />
              </div>
            </div>
          </div>

          <div className="text-xs text-neutral-600 leading-tight pt-3">
            <p>Address:</p>
            <p> Creative Street</p>
            <p>New Delhi, India</p>
          </div>
        </div>
      </div>

      {/* Footer Line */}
      <div className="w-full flex justify-center pt-24">
        <p className="text-[0.7rem] text-neutral-500 tracking-wide">
          © 2025 Rohit Negi — All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Contact;

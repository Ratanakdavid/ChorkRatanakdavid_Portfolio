"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEnvelope, FaPhone, FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { LuSend } from "react-icons/lu";

const contactInfo = [
  {
    icon: <FaPhone className="w-5 h-5" />,
    title: "Phone",
    value: "+855 98 718 216",
    link: "tel:+85598718216",
  },
  {
    icon: <FaEnvelope className="w-5 h-5" />,
    title: "Email",
    value: "contact@vidsmile18.com",
    link: "mailto:contact@vidsmile18.com",
  },
  {
    icon: <FaGithub className="w-5 h-5" />,
    title: "GitHub",
    link: "https://github.com/Ratanakdavid",
  },
  {
    icon: <FaLinkedin className="w-5 h-5" />,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/chork-ratanakdavid-0106b92b4?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    icon: <FaTelegram className="w-5 h-5" />,
    title: "Telegram",
    link: "https://t.me/bangseokh3ro",
  },
  {
    icon: <FaFacebook className="w-5 h-5" />,
    title: "Facebook",
    
    link: "https://www.facebook.com/share/1CwU7zvZK1/?mibextid=wwXIfr",
  },
  {
    icon: <FaInstagram className="w-5 h-5" />,
    title: "Instagram",
    link: "https://www.instagram.com/dv.christtt?igsh=MTZrZXJyNWhuMWo2dQ%3D%3D&utm_source=qr",
  },
];

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const InputStyles =
    "px-4 py-3.5 my-4 bg-slate-800 outline-none rounded-md w-full text-gray-200 placeholder-gray-400";

  const onSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "b6f5208e-0011-4d65-91fc-1fee27a2d6e5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      (event.target as HTMLFormElement).reset();
      toast("Form submitted successfully", {
        style: { background: "#4f39f6", color: "white" },
      });
    } else {
      toast("Error submitting form", {
        style: { background: "#4f39f6", color: "white" },
      });
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-16 lg:py-30">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">

        {/* Left — Contact Info */}
        <div data-aos="fade-right">
          <h2 className="py-3 text-3xl md:text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-gray-300">
            Ready to collaborate?
          </h2>
          <p className="text-gray-400 mb-8 text-base lg:text-lg leading-relaxed">
            I&apos;m currently available for internship work and full-time
            opportunities. Whether you have a project in mind or just want to
            connect, feel free to reach out.
          </p>

          <div className="space-y-3">
            {contactInfo.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-200 hover:bg-white/5"
              >
                <div className="h-11 w-11 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 transition-all group-hover:bg-indigo-600/40 group-hover:scale-105 grid place-items-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.value}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div data-aos="zoom-in" className="lg:mt-24">
          <form onSubmit={onSubmit} className="rounded-lg bg-slate-900 px-4 py-8">
            <input
              type="text"
              placeholder="Your Name"
              className={InputStyles}
              required
              name="name"
            />
            <input
              type="text"
              placeholder="Your Email"
              className={InputStyles}
              required
              name="email"
            />
            <input
              type="text"
              placeholder="Subject of Message"
              className={InputStyles}
              required
              name="subject"
            />
            <textarea
              placeholder="Message"
              required
              className={`${InputStyles} resize-none`}
              rows={5}
              name="message"
            />
            <button
              className="w-full bg-linear-to-r from-blue-900 to-purple-800
                hover:from-blue-800 hover:to-purple-700 text-white font-semibold py-4
                rounded-lg transition-all flex items-center justify-center gap-2
                cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <span className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : (
                <>
                  <LuSend size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
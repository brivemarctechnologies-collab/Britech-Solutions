import { useState, type FormEvent, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import type { ContactFormData } from '../types';
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [phone, setPhone] = useState('');
  const [serviceInterest, setServiceInterest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // ✅ AUTO-FILL + SCROLL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const service = params.get("service");

    if (service) setServiceInterest(service);

    if (location.hash === "#contact-section") {
      const el = document.getElementById("contact-section");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const EMAILJS_SERVICE_ID = 'service_3b8rnny';
  const EMAILJS_TEMPLATE_ID = 'template_zuxl8ib';
  const EMAILJS_PUBLIC_KEY = 'AwFwrYaU1PBLCw97A';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // 📩 SEND TO YOU
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: phone || "Not provided",
          service_interest: serviceInterest || "Not specified",
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      // 📩 AUTO REPLY TO USER (optional but recommended)
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        "template_auto_reply",
        {
          to_name: formData.name,
          to_email: formData.email,
          service_interest: serviceInterest,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');

      setFormData({ name: '', email: '', message: '' });
      setPhone('');
      setServiceInterest('');

    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: any) => {
    if (e.target.name === 'phone') setPhone(e.target.value);
    else if (e.target.name === 'serviceInterest') setServiceInterest(e.target.value);
    else setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ WHATSAPP
  const handleWhatsApp = () => {
    const phoneNumber = "254717770536";

    const message = `Hello, my name is ${formData.name || "Client"}.
I'm interested in: ${serviceInterest || "your services"}.
Message: ${formData.message || "I'd like more details."}`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-deep-black pt-24">

      <section id="contact-section" className="py-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4">

          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            Contact Us
          </h1>

          {submitStatus === 'success' && (
            <div className="mb-4 text-green-400">
              ✓ Message sent successfully
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-4 text-red-400">
              ✗ Error sending message
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-black border border-gray-700 text-white"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-black border border-gray-700 text-white"
            />

            <input
              name="phone"
              placeholder="Phone (optional)"
              value={phone}
              onChange={handleChange}
              className="w-full p-3 bg-black border border-gray-700 text-white"
            />

            {/* 🔥 YOUR REQUIRED LABEL */}
            <label className="block text-sm font-medium text-gray-300">
              Service Interest {serviceInterest && "(Auto-selected)"}
            </label>

            <input
              name="serviceInterest"
              value={serviceInterest}
              onChange={handleChange}
              className="w-full p-3 bg-black border border-gray-700 text-white"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 bg-black border border-gray-700 text-white"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold-400 text-black py-3"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {/* ✅ WHATSAPP BUTTON */}
            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full border border-green-500 text-green-400 py-3 hover:bg-green-500 hover:text-white transition"
            >
              Chat on WhatsApp
            </button>

          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
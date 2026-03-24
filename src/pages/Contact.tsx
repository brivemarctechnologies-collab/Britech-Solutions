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

      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          "template_5micqmr",
          {
            to_name: formData.name,
            to_email: formData.email,
            service_interest: serviceInterest,
          },
          EMAILJS_PUBLIC_KEY
        );
      } catch (autoError) {
        console.warn("Auto-reply failed:", autoError);
      }

      setSubmitStatus('success');

      setFormData({ name: '', email: '', message: '' });
      setPhone('');
      setServiceInterest('');

    } catch (error) {
      console.error("Main email failed:", error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: any) => {
    if (e.target.name === 'phone') setPhone(e.target.value);
    else if (e.target.name === 'serviceInterest') setServiceInterest(e.target.value);
    else setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

      {/* HERO */}
      <section className="bg-gradient-to-b from-charcoal-200 to-deep-black py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Get in <span className="gradient-text">Touch</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Ready to start your project? Let’s bring your vision to life.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact-section" className="py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-5 gap-12">

          {/* LEFT INFO */}
          <div className="lg:col-span-2 space-y-6">

            <div className="glass-card p-8">
              <h2 className="text-xl font-bold text-white mb-6">
                Contact Information
              </h2>

              <p className="text-gray-400 text-sm">Phone</p>
              <p className="text-white mb-4">+254 717 770 536</p>

              <p className="text-gray-400 text-sm">Email</p>
              <p className="text-white mb-4">brivemarctechnologies@gmail.com</p>

              <p className="text-gray-400 text-sm">Location</p>
              <p className="text-white">Nairobi, Kenya</p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-white font-bold mb-4">Business Hours</h3>
              <p className="text-gray-300">Mon - Fri: 8AM - 6PM</p>
              <p className="text-gray-300">Sat: 9AM - 4PM</p>
              <p className="text-gray-500">Sun: Closed</p>
            </div>

          </div>

          {/* FORM */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8">

              <h2 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-500/20 text-green-400 rounded">
                  ✓ Message sent successfully
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-500/20 text-red-400 rounded">
                  ✗ Error sending message
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">

                  <input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-style"
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-style"
                  />

                  <input
                    name="phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={handleChange}
                    className="input-style"
                  />

                  <div>
                    <label className="text-sm text-gray-300">
                      Service Interest {serviceInterest && "(Auto-selected)"}
                    </label>
                    <input
                      name="serviceInterest"
                      value={serviceInterest}
                      onChange={handleChange}
                      className="input-style mt-2"
                    />
                  </div>

                </div>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-style"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full border border-green-500 text-green-400 py-3 rounded-lg hover:bg-green-500 hover:text-white transition"
                >
                  Chat on WhatsApp
                </button>

              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
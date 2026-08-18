import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend, 
  FiUser, 
  FiMessageSquare,
  FiCheckCircle 
} from 'react-icons/fi';
import { 
  FaGithub, 
  FaTwitter, 
  FaLinkedin,
  FaWhatsapp 
} from "react-icons/fa";
import emailjs from '@emailjs/browser';

function Contact() { 
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);
  const formRef = useRef();

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "jeffkaberagithara@gmail.com",
      href: "mailto:jeffkaberagithara@gmail.com",
      color: "from-orange-400 to-orange-500"
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+254 707 764 281",
      href: "tel:+254707764281",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: "#",
      color: "from-orange-600 to-orange-700"
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+254 707 764 281",
      href: "https://wa.me/254707764281",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/jeffkaberagithara-guru", color: "hover:text-orange-400", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/kabera-githara-21067839b", color: "hover:text-orange-500", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/JeffKaberaDev", color: "hover:text-orange-300", label: "Twitter" },
  ];

  const inputClass = "w-full pl-12 pr-4 py-4 bg-black/40 border border-orange-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:shadow-lg focus:shadow-orange-500/10 transition-all duration-300";

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus(null);

    emailjs.sendForm(
      'service_k4r5idp',
      'template_ue3ls0s',
      formRef.current,
      'gl9TrOzdHhAEebG-P'
    )
    .then((result) => {
      console.log('Email sent successfully!', result.text);
      setIsSending(false);
      setSendStatus('success');
      formRef.current.reset();
      setTimeout(() => setSendStatus(null), 5000);
    }, (error) => {
      console.log('Failed to send email:', error.text);
      setIsSending(false);
      setSendStatus('error');
      setTimeout(() => setSendStatus(null), 5000);
    });
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6"
            variants={fadeUp(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
            </span>
            <span className="text-orange-400 text-sm font-medium">Get in touch</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-black text-white mb-5"
            variants={fadeUp(0.25)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            Let's <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">Work Together</span>
          </motion.h2>

          <motion.p
            className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto"
            variants={fadeUp(0.35)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            Ready to bring your ideas to life? Let's discuss your project and create something amazing.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">Get in Touch</h3>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                I'm always excited to take on new projects and collaborate with innovative people. 
                Whether you have a project in mind or just want to say hello, I'd love to hear from you!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 mb-10">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-black/40 rounded-2xl border border-orange-500/15 hover:border-orange-500/40 transition-all duration-300 group cursor-pointer"
                  whileHover={{ x: 6 }}
                  variants={fadeUp(index * 0.08)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                >
                  <div className={`p-3.5 rounded-xl bg-linear-to-r ${info.color} shadow-lg shadow-orange-500/20 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300`}>
                    <info.icon className="text-white text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-semibold truncate">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={fadeUp(0.3)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
              <h4 className="text-xl font-bold text-white mb-5">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3.5 bg-black/40 rounded-xl border border-orange-500/15 hover:border-orange-500/40 text-gray-400 text-xl ${social.color} transition-all duration-300`}
                    whileHover={{ scale: 1.12, y: -3 }}
                    whileTap={{ scale: 0.92 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-black/50 rounded-2xl border border-orange-500/15 p-7 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={fadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
                  <label htmlFor="name" className="block text-gray-400 mb-2.5 font-medium">
                    Your Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500/60 text-lg" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className={inputClass}
                      placeholder="Enter your name"
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeUp(0.18)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
                  <label htmlFor="email" className="block text-gray-400 mb-2.5 font-medium">
                    Email Address
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500/60 text-lg" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={inputClass}
                      placeholder="Enter your email"
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div variants={fadeUp(0.26)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
                <label htmlFor="subject" className="block text-gray-400 mb-2.5 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className={inputClass.replace('pl-12', 'pl-4')}
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div variants={fadeUp(0.34)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
                <label htmlFor="message" className="block text-gray-400 mb-2.5 font-medium">
                  Your Message
                </label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-4 top-4 text-orange-500/60 text-lg" />
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    className={`${inputClass} resize-none`}
                    placeholder="Tell me about your project..."
                  />
                </div>
              </motion.div>

              {/* Status Messages */}
              {sendStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400"
                >
                  <FiCheckCircle className="text-xl" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {sendStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400"
                >
                  <span>Failed to send message. Please try again.</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSending}
                className="w-full bg-linear-to-r from-orange-600 to-orange-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                whileHover={{ scale: isSending ? 1 : 1.02, y: isSending ? 0 : -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

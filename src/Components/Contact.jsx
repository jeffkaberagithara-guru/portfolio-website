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
  FaInstagram, 
  FaFacebook, 
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
      color: "from-red-500 to-orange-500"
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+254 707 764 281",
      href: "tel:+254707764281",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: "#",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+254 777 764 281",
      href: "https://wa.me/254777764281",
      color: "from-green-600 to-green-400"
    }
  ];

  const socialLinks = [
   
     { icon: FaGithub, href: "https://github.com/jeffkaberagithara-guru", color: "hover:text-orange-400", label: "GitHub" },
     { icon: FaLinkedin, href: "https://linkedin.com/in/kabera-githara-21067839b", color: "hover:text-orange-500", label: "LinkedIn" },
     { icon: FaTwitter, href: "https://twitter.com/JeffKaberaDev", color: "hover:text-orange-300", label: "Twitter" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus(null);

    // EmailJS integration
    emailjs.sendForm(
      'service_k4r5idp',      // Replace with your EmailJS service ID
      'template_ue3ls0s',     // Replace with your EmailJS template ID
      formRef.current,
      'gl9TrOzdHhAEebG-P'       // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log('Email sent successfully!', result.text);
      setIsSending(false);
      setSendStatus('success');
      formRef.current.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSendStatus(null), 5000);
    }, (error) => {
      console.log('Failed to send email:', error.text);
      setIsSending(false);
      setSendStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setSendStatus(null), 5000);
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-linear-to-br from-black via-gray-900 to-orange-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-400 text-sm font-medium">Get in touch</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-black text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Let's <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">Work Together</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to bring your ideas to life? Let's discuss your project and create something amazing.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-300 mb-8">
                I'm always excited to take on new projects and collaborate with innovative people. 
                Whether you have a project in mind or just want to say hello, I'd love to hear from you!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-black/30 rounded-2xl border border-orange-500/10 hover:border-orange-500/30 transition-all duration-100 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`p-3 rounded-2xl bg-linear-to-r ${info.color} group-hover:scale-110 transition-transform duration-100`}>
                    <info.icon className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-black/30 rounded-xl border border-orange-500/10 hover:border-orange-500/30 text-gray-400 text-xl ${social.color} transition-all duration-100`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1 }}
                    viewport={{ once: true }}
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
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-gray-400 mb-2 font-medium">
                    Your Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-black/30 border border-orange-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all duration-100"
                      placeholder="Enter your name"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-gray-400 mb-2 font-medium">
                    Email Address
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-black/30 border border-orange-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all duration-100"
                      placeholder="Enter your email"
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="subject" className="block text-gray-400 mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-4 bg-black/30 border border-orange-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all duration-100"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-gray-400 mb-2 font-medium">
                  Your Message
                </label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-4 top-4 text-gray-500 text-lg" />
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-black/30 border border-orange-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all duration-100 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </motion.div>

              {/* Status Messages */}
              {sendStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400"
                >
                  <FiCheckCircle className="text-xl" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {sendStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400"
                >
                  <span>Failed to send message. Please try again.</span>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-linear-to-r from-orange-600 to-orange-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-100 disabled:opacity-50 disabled:cursor-not-allowed group"
                  whileHover={{ scale: isSending ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSending ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <FiSend className="group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
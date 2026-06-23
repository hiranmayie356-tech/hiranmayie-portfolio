import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiCheckCircle, FiPhone, FiGlobe } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactDetails = [
    {
      icon: <FiMail className="w-5 h-5" />,
      label: 'Email Me',
      value: 'hiranmayie356@gmail.com',
      link: 'mailto:hiranmayie356@gmail.com',
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      label: 'Call Me',
      value: '+91 9443510985',
      link: 'tel:+919443510985',
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'Hiranmayie S',
      link: 'https://www.linkedin.com/in/hiranmayie-santhanaraman-929549335/',
    },
    {
      icon: <FiGithub className="w-5 h-5" />,
      label: 'GitHub',
      value: 'hiranmayie356-tech',
      link: 'https://github.com/hiranmayie356-tech',
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#03030C] relative overflow-hidden">
      {/* Background space elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-[#A78BFA]/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-[#38BDF8]/5 blur-3xl pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold font-display text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <p className="text-text-secondary text-sm sm:text-base">
            I am always open to discussing internships, collaborations, innovative projects, and opportunities to learn and grow within the technology industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start text-left">
          
          {/* Contact Details Column */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white font-display mb-6">
              Let's connect and build the future
            </h3>
            
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-8">
              Feel free to reach out directly via email, phone, or connect with me through my LinkedIn and GitHub profiles. I look forward to hearing from you!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactDetails.map((detail, idx) => (
                <a
                  key={idx}
                  href={detail.link}
                  target={detail.link.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 group"
                >
                  <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">
                      {detail.label}
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-white/90 group-hover:text-accent transition-colors duration-300 truncate max-w-[200px] sm:max-w-none">
                      {detail.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 shadow-sm relative overflow-hidden bg-gradient-to-tr from-white/[0.01] to-white/[0.03]">
              
              {/* Form Content */}
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <FiCheckCircle className="w-16 h-16 text-accent mb-6 animate-bounce" />
                  <h3 className="text-2xl font-bold text-white font-display mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-text-secondary text-sm max-w-sm">
                    Thank you for reaching out. I have received your message and will get back to you as soon as possible!
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2.5 bg-gradient-to-r from-accent to-purple-600 hover:from-accent-hover hover:to-purple-700 text-white font-semibold rounded-lg shadow-md transition-colors text-sm cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="floating-label-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=" "
                        className="floating-label-input"
                        required
                      />
                      <label htmlFor="name" className="floating-label">Your Name</label>
                    </div>

                    {/* Email Input */}
                    <div className="floating-label-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=" "
                        className="floating-label-input"
                        required
                      />
                      <label htmlFor="email" className="floating-label">Email Address</label>
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="floating-label-group">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder=" "
                      className="floating-label-input"
                    />
                    <label htmlFor="subject" className="floating-label">Subject (Optional)</label>
                  </div>

                  {/* Message Input */}
                  <div className="floating-label-group">
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=" "
                      rows={5}
                      className="floating-label-input min-h-[120px]"
                      required
                    ></textarea>
                    <label htmlFor="message" className="floating-label">Your Message</label>
                  </div>

                  {/* Error Notification */}
                  {status === 'error' && (
                    <p className="text-xs font-bold text-red-400 text-left bg-red-950/20 border border-red-900/50 rounded px-4 py-2">
                      Please fill out all required fields correctly.
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 bg-gradient-to-r from-accent to-purple-600 hover:from-accent-hover hover:to-purple-700 disabled:from-slate-700 disabled:to-slate-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-sm tracking-wide pointer-events-auto cursor-pointer"
                  >
                    {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

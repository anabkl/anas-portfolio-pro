import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

const contactInfo = [
  { Icon: Mail, label: 'Email', value: 'anas@example.com', href: 'mailto:anas@example.com' },
  { Icon: GithubIcon, label: 'GitHub', value: 'github.com/anas-dev', href: 'https://github.com' },
  { Icon: LinkedinIcon, label: 'LinkedIn', value: 'linkedin.com/in/anas', href: 'https://linkedin.com' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00f5ff] focus:ring-1 focus:ring-[#00f5ff] transition-all'

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-4" style={{ background: 'linear-gradient(90deg, #00f5ff, #bf00ff)' }} />
          <p className="text-gray-400 text-lg">Have a project in mind? Let&apos;s talk!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-bold gradient-text mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  className="mt-6 px-6 py-2 rounded-full text-sm border border-[#00f5ff] text-[#00f5ff] hover:bg-[#00f5ff]/10 transition-colors"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className={inputClass}
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className={inputClass}
                />
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className={inputClass}
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your Message"
                  className={inputClass + ' resize-none'}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl font-semibold text-black flex items-center justify-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #00f5ff, #bf00ff)' }}
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">Let&apos;s connect</h3>
              <p className="text-gray-400 leading-relaxed">
                Whether you have a project idea, want to collaborate, or just want to say hi —
                my inbox is always open. I&apos;ll do my best to get back to you!
              </p>
            </div>

            {contactInfo.map(({ Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 4 }}
                className="glass rounded-xl p-4 flex items-center gap-4 hover:border-[#00f5ff]/40 transition-all"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#00f5ff]/10 border border-[#00f5ff]/20">
                  <Icon size={20} className="text-[#00f5ff]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
                  <p className="text-sm text-white font-medium">{value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

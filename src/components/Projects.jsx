import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './BrandIcons'

const projects = [
  {
    title: 'AI Chat Assistant',
    desc: 'LLM-powered conversational AI with RAG (Retrieval-Augmented Generation) pipeline. Features context-aware responses and document Q&A.',
    tags: ['Python', 'LangChain', 'FastAPI', 'React'],
    category: 'AI/ML',
    github: '#',
  },
  {
    title: 'Neural Style Transfer',
    desc: 'Deep learning application that applies artistic styles to images using convolutional neural networks.',
    tags: ['Python', 'TensorFlow', 'React', 'Flask'],
    category: 'AI/ML',
    github: '#',
  },
  {
    title: 'E-Commerce Platform',
    desc: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Web Dev',
    github: '#',
    demo: '#',
  },
  {
    title: 'Portfolio Analytics Dashboard',
    desc: 'Real-time data visualization dashboard with interactive charts and ML-powered insights.',
    tags: ['React', 'D3.js', 'Python', 'FastAPI'],
    category: 'Data Science',
    github: '#',
    demo: '#',
  },
  {
    title: 'NLP Sentiment Analyzer',
    desc: 'Twitter sentiment analysis using transformer models with real-time streaming and visualization.',
    tags: ['Python', 'Transformers', 'FastAPI', 'Docker'],
    category: 'AI/ML',
    github: '#',
    demo: '#',
  },
  {
    title: 'Real-time Chat App',
    desc: 'WebSocket-based chat application with AI content moderation and end-to-end encryption.',
    tags: ['React', 'Node.js', 'Socket.io', 'Redis'],
    category: 'Web Dev',
    github: '#',
  },
]

const filters = ['All', 'AI/ML', 'Web Dev', 'Data Science']

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-24 px-4 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-8" style={{ background: 'linear-gradient(90deg, #00f5ff, #bf00ff)' }} />

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <motion.button
                key={f}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                  active === f
                    ? 'border-transparent text-black'
                    : 'border-white/20 text-gray-300 hover:border-[#00f5ff] hover:text-[#00f5ff]'
                }`}
                style={active === f ? { background: 'linear-gradient(135deg, #00f5ff, #bf00ff)' } : {}}
              >
                {f}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass rounded-2xl p-6 flex flex-col gap-4 hover:border-[#00f5ff]/40 transition-all duration-300 hover:glow-cyan"
              >
                <div>
                  <span
                    className="text-xs font-mono px-2 py-1 rounded-full mb-3 inline-block"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,245,255,0.15), rgba(191,0,255,0.15))',
                      border: '1px solid rgba(0,245,255,0.3)',
                      color: '#00f5ff',
                    }}
                  >
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2 border-t border-white/10">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#00f5ff] transition-colors"
                  >
                    <GithubIcon size={16} />
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#bf00ff] transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

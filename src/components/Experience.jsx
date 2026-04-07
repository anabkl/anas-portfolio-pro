import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Code, Award } from 'lucide-react'

const timeline = [
  {
    type: 'education',
    year: '2021 – 2025',
    title: 'B.Sc. Computer Science',
    org: 'State University',
    desc: 'Specialization in AI & Machine Learning. CGPA: 3.9/4.0. Relevant coursework: Deep Learning, NLP, Computer Vision, Distributed Systems.',
    Icon: GraduationCap,
    color: '#00f5ff',
  },
  {
    type: 'work',
    year: 'Summer 2024',
    title: 'AI Research Intern',
    org: 'TechCorp AI Labs',
    desc: 'Developed and fine-tuned transformer models for NLP tasks. Improved model accuracy by 15% through novel attention mechanisms. Published internal research paper.',
    Icon: Briefcase,
    color: '#bf00ff',
  },
  {
    type: 'work',
    year: '2023',
    title: 'Fullstack Developer Intern',
    org: 'StartupXYZ',
    desc: 'Built React-based web applications and RESTful APIs. Implemented CI/CD pipelines and containerized applications using Docker.',
    Icon: Code,
    color: '#0080ff',
  },
  {
    type: 'education',
    year: '2023',
    title: 'Deep Learning Specialization',
    org: 'Coursera / deeplearning.ai',
    desc: '5-course specialization covering neural networks, CNN, sequence models, and transformer architectures.',
    Icon: Award,
    color: '#00f5ff',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #00f5ff, #bf00ff)' }} />
        </motion.div>

        <div className="relative">
          {/* Center line on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f5ff] via-[#bf00ff] to-[#0080ff] opacity-30" />

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${isLeft ? 'md:justify-end' : ''} items-start md:items-center gap-4`}
                >
                  {/* Desktop: alternating sides */}
                  <div className={`md:w-[45%] ${isLeft ? 'md:order-1' : 'md:order-3'}`}>
                    <div className="glass rounded-2xl p-6 hover:border-[#00f5ff]/40 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}
                        >
                          <item.Icon size={16} style={{ color: item.color }} />
                        </div>
                        <span className="text-xs font-mono" style={{ color: item.color }}>{item.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-sm font-medium text-gray-400 mb-3">{item.org}</p>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex md:order-2 w-[10%] justify-center">
                    <div
                      className="w-4 h-4 rounded-full border-2 z-10"
                      style={{ backgroundColor: item.color, borderColor: item.color, boxShadow: `0 0 12px ${item.color}` }}
                    />
                  </div>

                  {/* Spacer on opposite side */}
                  <div className={`hidden md:block md:w-[45%] ${isLeft ? 'md:order-3' : 'md:order-1'}`} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

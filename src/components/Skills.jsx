import { motion } from 'framer-motion'
import { Brain, Code, Monitor, Server, Database, Cloud } from 'lucide-react'

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    Icon: Brain,
    color: '#00f5ff',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV', 'HuggingFace', 'NumPy', 'Pandas'],
  },
  {
    title: 'Programming Languages',
    Icon: Code,
    color: '#bf00ff',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'Bash', 'SQL', 'R'],
  },
  {
    title: 'Frontend',
    Icon: Monitor,
    color: '#0080ff',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS', 'Framer Motion', 'Redux', 'Vue.js'],
  },
  {
    title: 'Backend',
    Icon: Server,
    color: '#00f5ff',
    skills: ['Node.js', 'FastAPI', 'Django', 'Express.js', 'GraphQL', 'REST APIs'],
  },
  {
    title: 'Databases',
    Icon: Database,
    color: '#bf00ff',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase', 'MySQL', 'Elasticsearch'],
  },
  {
    title: 'DevOps & Cloud',
    Icon: Cloud,
    color: '#0080ff',
    skills: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'Linux', 'Terraform'],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #00f5ff, #bf00ff)' }} />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass rounded-2xl p-6 hover:border-[#00f5ff]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}30` }}
                >
                  <cat.Icon size={20} style={{ color: cat.color }} />
                </div>
                <h3 className="font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className="text-xs px-3 py-1.5 rounded-full font-medium cursor-default transition-all"
                    style={{
                      background: `${cat.color}10`,
                      border: `1px solid ${cat.color}25`,
                      color: cat.color,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

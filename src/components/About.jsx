import { motion } from 'framer-motion'

const techStack = [
  { name: 'Python', icon: '🐍' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Docker', icon: '🐳' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'PyTorch', icon: '🔥' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Git', icon: '📦' },
  { name: 'Kubernetes', icon: '☸️' },
  { name: 'AWS', icon: '☁️' },
]

const skillBars = [
  { name: 'Machine Learning', level: 90 },
  { name: 'Full Stack Development', level: 85 },
  { name: 'Python', level: 95 },
  { name: 'React / Frontend', level: 88 },
  { name: 'Data Analysis', level: 82 },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #00f5ff, #bf00ff)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left – text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I&apos;m a passionate Computer Science student specializing in AI &amp; Machine Learning.
              I love building intelligent systems that solve real-world problems, from conversational AI
              to computer vision applications. With experience in both research and production environments,
              I bridge the gap between cutting-edge ML research and practical software development.
            </p>

            {/* Skill progress bars */}
            <div className="space-y-5">
              {skillBars.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    <span className="text-sm font-mono text-[#00f5ff]">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #00f5ff, #bf00ff)' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right – tech stack */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-200">Tech Stack</h3>
            <div className="grid grid-cols-3 gap-3">
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-xl p-3 flex flex-col items-center gap-2 cursor-default"
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-xs font-medium text-gray-300 text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


import { motion } from "framer-motion";
import { Code, Globe, Server, Sparkles } from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: Globe,
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "JavaScript (ES6+)"]
  },
  {
    category: "Backend Development",
    icon: Server,
    items: ["Node.js", "Express.js", "RESTful APIs", "Database Design", "Authentication & Security"]
  },
  {
    category: "Tools & Methods",
    icon: Code,
    items: ["Git/GitHub", "VS Code", "Responsive Design", "Agile/Scrum", "Testing"]
  },
  {
    category: "Soft Skills",
    icon: Sparkles,
    items: ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Fast Learner"]
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate Full-Stack Developer with expertise in modern web technologies.
            I love creating efficient, scalable, and user-friendly applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-lg hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center gap-3 mb-4">
                <skill.icon className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-sm text-muted-foreground"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With a strong foundation in both frontend and backend development, I strive to create
            seamless digital experiences that combine beautiful design with robust functionality.
            I'm always eager to learn new technologies and take on challenging projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

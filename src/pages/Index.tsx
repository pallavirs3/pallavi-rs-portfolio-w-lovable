import { useEffect } from "react";
import { Code, Dumbbell, Lock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";

const Index = () => {
  // Initialize animation observers
  useEffect(() => {
    const typingElement = document.querySelector(".typing-effect");
    if (typingElement) {
      typingElement.classList.add("typing-demo");
    }
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-bg text-portfolio-dark">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-24 pb-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <ScrollReveal>
                <h2 className="text-lg font-medium text-portfolio-purple mb-3">
                  Hi, I'm Pallavi 👋
                </h2>
                <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-4">
                  CSE Student and <span className="text-portfolio-purple">CyberSec Enthusiast</span>
                </h1>
                <p className="text-xl text-gray-600 typing-effect overflow-hidden whitespace-nowrap mb-8">
                  Cybersecurity Learner | Programming | Wellness
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#contact" 
                    className="px-8 py-3 bg-portfolio-purple text-white font-medium rounded-md hover:bg-portfolio-darkpurple transition-colors"
                  >
                    Contact Me
                  </a>
                  <a 
                    href="#projects" 
                    className="px-8 py-3 bg-white text-portfolio-purple font-medium rounded-md border border-portfolio-purple hover:bg-gray-50 transition-colors"
                  >
                    My Projects
                  </a>
                </div>
              </ScrollReveal>
            </div>

            <div className="flex justify-center">
              <ScrollReveal delay={300}>
                <div className="relative">
                  <div className="polaroid">
                    <img 
                      src="/lovable-uploads/a46dc97e-6851-477f-a952-246f68dd4032.png" 
                      alt="Pallavi" 
                      className="w-64 h-72 object-cover object-center"
                    />
                    <div className="text-center p-2">
                      <p className="font-medium">Pallavi</p>
                      <p className="text-xs text-gray-500">CS Engineering Student</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-md">
                    <div className="flex items-center space-x-2">
                      <Code size={16} className="text-portfolio-purple" />
                      <span className="text-sm font-medium">Coding</span>
                    </div>
                  </div>
                  <div className="absolute -top-6 -left-6 bg-white p-3 rounded-lg shadow-md">
                    <div className="flex items-center space-x-2">
                      <Dumbbell size={16} className="text-portfolio-purple" />
                      <span className="text-sm font-medium">Fitness</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-24">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="section-title">About Me</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={200}>
              <img 
                src="/lovable-uploads/a46dc97e-6851-477f-a952-246f68dd4032.png" 
                alt="About Pallavi" 
                className="rounded-lg shadow-lg w-full h-auto max-h-96 object-cover object-center"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm a passionate learner currently studying Computer Science Engineering (2022–2026). I did my Pre-University Course (PUC) at Kadamba P.U College.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm deeply interested in cybersecurity, programming, and digital wellness. When I'm not coding or learning about cyber attacks, you'll find me in the gym or creating meaningful content around health and self-discipline.
                </p>
                <div className="flex gap-8 mt-8">
                  <div>
                    <h3 className="font-heading font-semibold text-3xl text-portfolio-purple">3+</h3>
                    <p className="text-gray-500">Years of Learning</p>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-3xl text-portfolio-purple">3+</h3>
                    <p className="text-gray-500">Projects</p>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-3xl text-portfolio-purple">5+</h3>
                    <p className="text-gray-500">Technologies</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-gray-50">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="section-title">Education</h2>
          </ScrollReveal>
          
          <div className="timeline-container mt-16">
            <ScrollReveal delay={200}>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h3 className="text-lg font-heading font-semibold">Bachelor of Engineering in Computer Science</h3>
                    <span className="text-portfolio-purple font-medium">2022 - 2026</span>
                  </div>
                  <p className="text-gray-600">Currently pursuing my degree with a focus on cybersecurity and software development. Learning core computer science fundamentals and practical programming skills.</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h3 className="text-lg font-heading font-semibold">Pre-University Course (PUC)</h3>
                    <span className="text-portfolio-purple font-medium">Completed 2022</span>
                  </div>
                  <p className="text-gray-600">Studied at Kadamba P.U College with a focus on science and mathematics, creating a strong foundation for my engineering education.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="section-title">My Skills</h2>
            <p className="text-gray-600 max-w-2xl mb-12">
              I'm continuously learning and improving my technical skills. Here's an overview of what I've been working on.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={200}>
              <SkillCard
                title="Programming"
                icon={<Code size={24} />}
                description="I enjoy coding and building applications from scratch using various languages and technologies."
                skills={["Python", "C", "Java", "PHP"]}
                tools={["VS Code", "Git", "MySQL"]}
              />
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <SkillCard
                title="Web Development"
                icon={<Code size={24} />}
                description="I'm learning to create responsive and interactive websites using modern web technologies."
                skills={["HTML", "CSS", "JavaScript"]}
                tools={["Apache2", "MySQL", "Git"]}
              />
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <SkillCard
                title="Cybersecurity"
                icon={<Lock size={24} />}
                description="I'm passionate about ethical hacking and cybersecurity principles to build more secure applications."
                skills={["Ethical Hacking", "Penetration Testing"]}
                tools={["Nmap", "Wireshark", "Bandit wargames"]}
              />
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={200}>
            <div className="mt-16 bg-gray-50 rounded-lg p-8 border border-gray-100">
              <h3 className="text-xl font-heading font-semibold mb-6">Other Skills</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">Python Programming</span>
                    <span className="text-gray-500">Intermediate</span>
                  </div>
                  <progress className="skill-progress w-full h-2" value="65" max="100"></progress>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">HTML & CSS</span>
                    <span className="text-gray-500">Intermediate</span>
                  </div>
                  <progress className="skill-progress w-full h-2" value="70" max="100"></progress>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">Java</span>
                    <span className="text-gray-500">Beginner</span>
                  </div>
                  <progress className="skill-progress w-full h-2" value="40" max="100"></progress>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">Cybersecurity</span>
                    <span className="text-gray-500">Beginner</span>
                  </div>
                  <progress className="skill-progress w-full h-2" value="45" max="100"></progress>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">Git & GitHub</span>
                    <span className="text-gray-500">Beginner</span>
                  </div>
                  <progress className="skill-progress w-full h-2" value="50" max="100"></progress>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">PHP & MySQL</span>
                    <span className="text-gray-500">Beginner</span>
                  </div>
                  <progress className="skill-progress w-full h-2" value="45" max="100"></progress>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="section-title">My Projects</h2>
            <p className="text-gray-600 max-w-2xl mb-12">
              Here are some of the projects I've been working on during my studies. I'm constantly learning and building new things.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={200}>
              <ProjectCard
                title="Student Data Portal"
                description="A basic student record management system hosted on a virtual machine using Apache2 server. Built with PHP and MySQL."
                link="#"
                linkText="View Project"
                image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <ProjectCard
                title="Cybersecurity Mini-Lab Activities"
                description="Explored basic vulnerabilities and practiced ethical hacking using Nmap, Wireshark, and Bandit wargames."
                link="#"
                linkText="View Details"
                image="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="section-title">Let's Connect</h2>
            <p className="text-gray-600 max-w-2xl mb-12">
              Feel free to reach out if you'd like to collaborate, have questions, or just want to say hi!
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal delay={200}>
              <form className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-portfolio-purple focus:border-portfolio-purple"
                    placeholder="Pallavi"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-portfolio-purple focus:border-portfolio-purple"
                    placeholder="pallavi4740@gmail.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-portfolio-purple focus:border-portfolio-purple"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-portfolio-purple text-white py-3 px-6 rounded-md hover:bg-portfolio-darkpurple transition-colors"
                >
                  Send Message
                </button>
              </form>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-4">Contact Information</h3>
                  <p className="text-gray-600">
                    Feel free to reach out to me at my email address or connect with me on social media.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-4">Email Address</h3>
                  <a href="mailto:pallavi4740@gmail.com" className="text-portfolio-purple hover:underline">
                    pallavi4740@gmail.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-4">Current Status</h3>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Available for collaboration and learning opportunities</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

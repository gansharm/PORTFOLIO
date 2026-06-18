import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowRight,
  FaAward,
  FaBars,
  FaBriefcase,
  FaCheckCircle,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaGraduationCap,
  FaHtml5,
  FaJava,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaMoon,
  FaNodeJs,
  FaPaperPlane,
  FaPhoneAlt,
  FaProjectDiagram,
  FaReact,
  FaRocket,
  FaSun,
  FaTimes,
  FaTrophy,
} from "react-icons/fa";
import {
  SiAndroidstudio,
  SiBootstrap,
  SiEclipseide,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPython,
  SiSalesforce,
} from "react-icons/si";
import "./App.css";

const asset = (path) => `${process.env.PUBLIC_URL}${path}`;
const THEME_STORAGE_KEY = "ganesh-theme-v2";

const profile = {
  name: "Ganesh Sharma",
  title: "MCA Student | Full Stack Developer",
  email: "gansharma03@gmail.com",
  phone: "+91 93103 00627",
  location: "Greater Noida, Uttar Pradesh",
  github: "https://github.com/gansharm",
  linkedin: "https://www.linkedin.com/in/ganesh-sharma564211253",
  resume: asset("/Ganesh-Sharma-Resume.pdf"),
};

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const stats = [
  { label: "Projects Completed", value: "3+", icon: FaCode },
  { label: "Technologies", value: "12+", icon: FaRocket },
  { label: "Certifications", value: "5", icon: FaAward },
  { label: "Internship Experience", value: "3 Months", icon: FaBriefcase },
];

const socialLinks = [
  { label: "GitHub", href: profile.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedinIn },
  { label: "Email", href: `mailto:${profile.email}`, icon: FaEnvelope },
];

const floatingTech = [
  { label: "React", icon: FaReact, position: "-left-3 top-16", delay: 0 },
  { label: "Code", icon: FaCode, position: "right-2 top-9", delay: 0.2 },
  { label: "Database", icon: FaDatabase, position: "bottom-12 -left-1", delay: 0.4 },
  { label: "Salesforce", icon: SiSalesforce, position: "-right-4 bottom-20", delay: 0.6 },
];

const details = [
  ["Name", profile.name],
  ["Education", "MCA, NIET Greater Noida"],
  ["Location", profile.location],
  ["Email", profile.email],
  ["Phone", profile.phone],
];

const education = [
  {
    period: "Pursuing Now",
    title: "Master in Computer Application",
    place: "Noida Institute of Engineering and Technology, Greater Noida",
    badge: "CGPA 7.8",
  },
  {
    period: "Graduated, June 2024",
    title: "Bachelor in Computer Application",
    place: "Greater Noida Institute of Technology, Greater Noida",
    badge: "CGPA 7.0",
  },
  {
    period: "Completed, 2021",
    title: "Senior Secondary (12th Class)",
    place: "School Education",
    badge: "2021",
  },
  {
    period: "Completed, 2019",
    title: "Secondary (10th Class)",
    place: "School Education",
    badge: "2019",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "React", icon: FaReact, color: "text-cyan-500" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-violet-600" },
    ],
  },
  {
    title: "Programming & Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
      { name: "Express.js", icon: SiExpress, color: "text-neutral-800 dark:text-neutral-100" },
      { name: "MongoDB", icon: SiMongodb, color: "text-emerald-600" },
      { name: "SQL", icon: FaDatabase, color: "text-blue-600" },
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "Python", icon: SiPython, color: "text-blue-500" },
      { name: "DSA", icon: FaCode, color: "text-violet-600" },
    ],
  },
  {
    title: "Salesforce",
    skills: [
      { name: "Apex", icon: FaCode, color: "text-indigo-500" },
      { name: "SOQL", icon: FaDatabase, color: "text-purple-500" },
      { name: "Flows", icon: FaProjectDiagram, color: "text-teal-500" },
      { name: "Triggers", icon: SiSalesforce, color: "text-blue-500" },
      { name: "Admin", icon: SiSalesforce, color: "text-sky-500" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGithub, color: "text-neutral-900 dark:text-white" },
      { name: "GitHub", icon: FaGithub, color: "text-neutral-900 dark:text-white" },
      { name: "Android Studio", icon: SiAndroidstudio, color: "text-emerald-500" },
      { name: "Eclipse", icon: SiEclipseide, color: "text-indigo-500" },
      { name: "Salesforce Tools", icon: SiSalesforce, color: "text-blue-500" },
    ],
  },
];

const responsibilities = [
  "Apex Development",
  "Salesforce Flows",
  "Lightning Basics",
  "Administrator Tasks",
  "Salesforce Developer Tools",
];

const projects = [
  {
    title: "OSR Solutions Website",
    image: asset("/assets/project-osr.svg"),
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    description:
      "Developed a professional business website for OSR Solutions with premium UI/UX, responsive design, animations, product showcase, customer reviews, exhibition section, contact system and modern branding.",
    live: "https://osrsolutions.in",
    github: profile.github,
    featured: true,
  },
  {
    title: "Blog Application with Authentication",
    image: asset("/assets/project-blog.svg"),
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    description:
      "A full-featured blog application enabling users to register, authenticate and manage posts. Built responsive React UI, JWT authentication, secure access control and predictable state management.",
    live: "#contact",
    github: profile.github,
  },
  {
    title: "Full Fledge E-Commerce Website",
    image: asset("/assets/project-ecommerce.svg"),
    tech: ["React", "Node.js", "API Integration", "CORS", "JWT"],
    description:
      "Designed and implemented an e-commerce website with front-end and back-end tech, user authentication, order management, cart functionality and admin controls.",
    live: "#contact",
    github: profile.github,
  },
  {
    title: "MERN Stack Practice",
    image: asset("/assets/project-portfolio.svg"),
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    description:
      "Hands-on MERN development practice focused on scalable web applications, clean architecture, project planning, deployment and maintenance.",
    live: "#contact",
    github: profile.github,
  },
  {
    title: "Salesforce Training Work",
    image: asset("/assets/project-salesforce.svg"),
    tech: ["Salesforce", "Apex", "SOQL", "Flows", "Admin"],
    description:
      "Completed Salesforce Developer Training Program and internship tasks with hands-on exposure to Apex, Flows, Lightning and Administrator concepts.",
    live: "#contact",
    github: profile.github,
  },
];

const certifications = [
  { title: "Full Stack Development Certification", issuer: "MERN stack technologies and project management", year: "2024" },
  { title: "Salesforce Developer Training Program", issuer: "Credential ID: LNXCoE25NIET0125", year: "2025" },
  { title: "Java Certification", issuer: "Infosys Springboard", year: "Certified" },
  { title: "DSA Certification", issuer: "Infosys Springboard", year: "Certified" },
  { title: "Python Certification", issuer: "Infosys Springboard", year: "Certified" },
];

const achievements = [
  "Earned a certification in Full Stack Development with MERN stack and project management exposure.",
  "Completed a 3-month Salesforce Developer Training Program and internship.",
  "Completed Java, DSA and Python certifications through Infosys Springboard.",
  "Gained hands-on experience in Apex, Flows, Lightning, Administrator concepts and Salesforce Developer Tools.",
  "Built authentication-driven React projects with JWT and back-end integration.",
  "Maintaining current MCA CGPA of 7.8 after graduating BCA with CGPA 7.0.",
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored) return stored === "dark";
    return false;
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem(THEME_STORAGE_KEY, darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    setMenuOpen(false);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f6ff] text-slate-950 transition-colors duration-300 dark:bg-[#070817] dark:text-white">
      <div className="site-backdrop" />

      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-5 sm:px-6 sm:pt-6 lg:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-[24px] border border-white/70 bg-white/80 px-4 py-4 shadow-[0_18px_70px_rgba(99,102,241,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/75 sm:px-5">
          <button
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-blue-500 text-lg font-black tracking-normal text-white shadow-lg shadow-violet-500/25"
            type="button"
            onClick={() => scrollToSection("home")}
            aria-label="Go to home"
          >
            GS
          </button>

          <div className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-violet-50 hover:text-violet-700 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setDarkMode((value) => !value)}
              className="icon-button"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button
              className="icon-button xl:hidden"
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="mx-auto mt-3 max-w-7xl rounded-[24px] border border-white/70 bg-white/95 p-3 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/95 xl:hidden"
            >
              <div className="grid gap-1 sm:grid-cols-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-violet-50 hover:text-violet-700 dark:text-slate-200 dark:hover:bg-white/10"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10">
        <section id="home" className="section-pad hero-section">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mx-auto grid max-w-7xl items-center gap-8 rounded-[32px] border border-white/70 bg-white/78 p-5 shadow-[0_28px_90px_rgba(79,70,229,0.13)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/68 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] xl:grid-cols-[0.9fr_1fr_0.72fr]"
          >
            <motion.div variants={fadeUp} className="space-y-7">
              <div className="space-y-4">
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Hello, I'm</p>
                <h1 className="max-w-xl text-5xl font-black leading-[0.95] tracking-normal text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
                  Ganesh
                  <span className="block bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                    Sharma
                  </span>
                </h1>
                <p className="text-lg font-bold text-slate-800 dark:text-slate-100">{profile.title}</p>
                <p className="max-w-md text-base leading-8 text-slate-600 dark:text-slate-300">
                  Targeting full stack developer roles with a strong MERN background, practical Salesforce training
                  experience and a focus on building scalable, maintainable web applications.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a className="primary-button justify-center" href={profile.resume} download>
                  <FaDownload />
                  Download Resume
                </a>
                <button className="secondary-button justify-center" type="button" onClick={() => scrollToSection("contact")}>
                  Hire Me
                  <FaPaperPlane />
                </button>
              </div>

              <div className="flex items-center gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      className="social-button"
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      aria-label={item.label}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="relative mx-auto flex w-full max-w-[440px] items-center justify-center py-6">
              <div className="profile-orbit" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                className="profile-ring"
              />
              <div className="relative z-10 h-[270px] w-[270px] overflow-hidden rounded-full border-[10px] border-white bg-violet-50 shadow-[0_30px_90px_rgba(79,70,229,0.18)] dark:border-slate-900 sm:h-[345px] sm:w-[345px]">
                <img
                  src={asset("/assets/ganesh-profile.jpeg")}
                  alt="Ganesh Sharma professional profile"
                  className="h-full w-full object-cover"
                />
              </div>
              {floatingTech.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3.6, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
                    className={`absolute z-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/80 bg-white text-xl text-violet-600 shadow-xl shadow-violet-500/15 dark:border-white/10 dark:bg-slate-900 ${item.position}`}
                    title={item.label}
                  >
                    <Icon />
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div variants={container} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-1">
              {stats.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.label} variants={fadeUp} className="glass-card flex items-center gap-4 p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-xl text-violet-600 dark:bg-violet-500/15 dark:text-violet-300">
                      <Icon />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-slate-950 dark:text-white">{item.value}</p>
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-300">{item.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </section>

        <section id="about" className="section-pad">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div {...sectionMotion} className="glass-card p-6 sm:p-8">
              <SectionTitle icon={FaCode} title="About Me" />
              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                I am a full stack developer currently pursuing MCA from Noida Institute of Engineering and Technology.
                My resume focuses on MERN stack development, authentication-based React projects, Salesforce Developer
                Training and continuous growth through hands-on project delivery.
              </p>
              <div className="mt-7 grid gap-4">
                {details.map(([label, value]) => (
                  <div key={label} className="grid gap-1 rounded-2xl bg-white/60 p-4 dark:bg-white/5 sm:grid-cols-[130px_1fr]">
                    <span className="text-sm font-bold text-slate-500 dark:text-slate-400">{label}</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{value}</span>
                  </div>
                ))}
              </div>
              <button className="primary-button mt-7" type="button" onClick={() => scrollToSection("contact")}>
                Let's Connect
                <FaArrowRight />
              </button>
            </motion.div>

            <motion.div id="education" {...sectionMotion} className="glass-card p-6 sm:p-8">
              <SectionTitle icon={FaGraduationCap} title="Education" />
              <div className="mt-8 space-y-7">
                {education.map((item) => (
                  <TimelineItem key={item.title} {...item} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="section-pad">
          <motion.div {...sectionMotion} className="mx-auto max-w-7xl">
            <SectionHeader
              icon={FaRocket}
              title="Skills"
              subtitle="A balanced stack for building modern web products and Salesforce-driven business workflows."
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {skillGroups.map((group) => (
                <div key={group.title} className="glass-card p-6">
                  <h3 className="text-lg font-black text-slate-950 dark:text-white">{group.title}</h3>
                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2">
                    {group.skills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <div key={skill.name} className="skill-chip">
                          <Icon className={`text-2xl ${skill.color}`} />
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="experience" className="section-pad">
          <motion.div {...sectionMotion} className="mx-auto max-w-7xl">
            <SectionHeader
              icon={FaBriefcase}
              title="Experience"
              subtitle="Practical Salesforce development experience with automation, platform logic and UI components."
            />
            <div className="glass-card grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <span className="pill">3-Month Training + Internship</span>
                <h3 className="mt-5 text-3xl font-black text-slate-950 dark:text-white">Salesforce Developer Trainee</h3>
                <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                  Completed Salesforce Developer Training Program and internship with hands-on exposure to Apex, Flows,
                  Lightning, Administrator concepts and Salesforce Developer Tools.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {responsibilities.map((item) => (
                  <div key={item} className="rounded-[22px] border border-violet-100 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                    <FaCheckCircle className="mb-3 text-violet-600 dark:text-violet-300" />
                    <p className="font-bold text-slate-900 dark:text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="projects" className="section-pad">
          <motion.div {...sectionMotion} className="mx-auto max-w-7xl">
            <SectionHeader
              icon={FaProjectDiagram}
              title="Projects"
              subtitle="Premium project cards built for quick recruiter scanning, with stack badges and direct actions."
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </motion.div>
        </section>

        <section id="certifications" className="section-pad">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div {...sectionMotion} className="glass-card p-6 sm:p-8">
              <SectionTitle icon={FaAward} title="Certifications" />
              <div className="mt-6 space-y-4">
                {certifications.map((item) => (
                  <div key={item.title} className="flex items-center gap-4 rounded-[22px] bg-white/70 p-4 dark:bg-white/5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300">
                      <FaAward />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-black text-slate-950 dark:text-white">{item.title}</h3>
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{item.issuer}</p>
                    </div>
                    <span className="pill shrink-0">{item.year}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div id="achievements" {...sectionMotion} className="glass-card overflow-hidden p-6 sm:p-8">
              <SectionTitle icon={FaTrophy} title="Achievements" />
              <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_210px]">
                <div className="space-y-4">
                  {achievements.map((item) => (
                    <div key={item} className="flex gap-3">
                      <FaCheckCircle className="mt-1 shrink-0 text-violet-600 dark:text-violet-300" />
                      <p className="leading-7 text-slate-600 dark:text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="trophy-card">
                  <FaTrophy />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="section-pad pb-10">
          <motion.div {...sectionMotion} className="mx-auto max-w-7xl">
            <SectionHeader
              icon={FaPaperPlane}
              title="Contact Me"
              subtitle="Open to internships, Salesforce development work, full-stack projects and collaboration opportunities."
            />
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="grid gap-4">
                <ContactCard icon={FaEnvelope} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
                <ContactCard icon={FaPhoneAlt} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
                <ContactCard icon={FaMapMarkerAlt} label="Location" value={profile.location} />
                <ContactCard icon={FaGithub} label="GitHub" value="github.com/gansharm" href={profile.github} />
                <ContactCard icon={FaLinkedinIn} label="LinkedIn" value="Ganesh Sharma" href={profile.linkedin} />
              </div>

              <form className="glass-card p-6 sm:p-8" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="form-field">
                    <span>Name</span>
                    <input type="text" name="name" placeholder="Your name" required />
                  </label>
                  <label className="form-field">
                    <span>Email</span>
                    <input type="email" name="email" placeholder="you@example.com" required />
                  </label>
                </div>
                <label className="form-field mt-4">
                  <span>Subject</span>
                  <input type="text" name="subject" placeholder="Project or opportunity" required />
                </label>
                <label className="form-field mt-4">
                  <span>Message</span>
                  <textarea name="message" rows="5" placeholder="Tell me about the work..." required />
                </label>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button className="primary-button justify-center" type="submit">
                    Send Message
                    <FaPaperPlane />
                  </button>
                  {sent && <p className="text-sm font-bold text-emerald-600 dark:text-emerald-300">Message ready. I will respond soon.</p>}
                </div>
              </form>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/70 bg-white/70 px-4 py-6 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {currentYear} Ganesh Sharma. All rights reserved.</p>
          <p>Built with React + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

const sectionMotion = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.16 },
  variants: fadeUp,
};

function SectionTitle({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50 text-xl text-violet-600 dark:bg-violet-500/15 dark:text-violet-300">
        <Icon />
      </span>
      <h2 className="text-2xl font-black text-slate-950 dark:text-white">{title}</h2>
    </div>
  );
}

function SectionHeader({ icon, title, subtitle }) {
  return (
    <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <SectionTitle icon={icon} title={title} />
        <p className="mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">{subtitle}</p>
      </div>
    </div>
  );
}

function TimelineItem({ period, title, place, badge }) {
  return (
    <div className="relative grid gap-3 pl-8 sm:grid-cols-[140px_1fr_auto] sm:gap-5 sm:pl-10">
      <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-[3px] border-violet-600 bg-white dark:bg-slate-950" />
      <span className="absolute left-[7px] top-7 h-[calc(100%+12px)] w-px bg-violet-100 last:hidden dark:bg-violet-500/20" />
      <p className="text-sm font-black text-violet-600 dark:text-violet-300">{period}</p>
      <div>
        <h3 className="font-black text-slate-950 dark:text-white">{title}</h3>
        <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">{place}</p>
      </div>
      <span className="pill w-fit">{badge}</span>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="project-card group"
    >
      <div className="relative overflow-hidden rounded-t-[24px]">
        {project.featured && <span className="absolute left-3 top-3 z-10 rounded-full bg-violet-600 px-3 py-1 text-xs font-black text-white">Featured</span>}
        <img src={project.image} alt={`${project.title} preview`} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-black text-slate-950 dark:text-white">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span key={item} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <a className="primary-button justify-center px-4 py-3 text-xs" href={project.live}>
            Live Demo
            <FaExternalLinkAlt />
          </a>
          <a className="secondary-button justify-center px-4 py-3 text-xs" href={project.github} target="_blank" rel="noreferrer">
            GitHub
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function ContactCard({ icon: Icon, label, value, href }) {
  const content = (
    <div className="glass-card flex items-center gap-4 p-5 transition hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(79,70,229,0.14)]">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300">
        <Icon />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-black text-slate-500 dark:text-slate-400">{label}</p>
        <p className="break-words text-sm font-bold text-slate-950 dark:text-white">{value}</p>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      {content}
    </a>
  );
}

export default App;

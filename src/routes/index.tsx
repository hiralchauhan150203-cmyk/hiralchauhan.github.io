import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import deepfakeAsset from "@/assets/deepfake-app.png.asset.json";
const deepfakeImg = deepfakeAsset.url;
import powerbiAsset from "@/assets/tech-gear-dashboard.png.asset.json";
const powerbiImg = powerbiAsset.url;
import excelAsset from "@/assets/car-sales-dashboard.png.asset.json";
const excelImg = excelAsset.url;
import pizzaAsset from "@/assets/pizza-sales-report.png.asset.json";
const pizzaImg = pizzaAsset.url;
import hiralPhoto from "@/assets/hiral-photo.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hiral Chauhan — Data Analyst & BI Developer" },
      {
        name: "description",
        content:
          "Portfolio of Hiral Chauhan — Data Analyst, Power BI Developer, and AI/ML enthusiast transforming data into intelligent business solutions.",
      },
      { property: "og:title", content: "Hiral Chauhan — Data Analyst & BI Developer" },
      {
        property: "og:description",
        content:
          "Transforming Data into Insights, and Insights into Intelligent Solutions.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

const skillGroups = [
  {
    title: "Analytics & BI",
    items: [
      { name: "Power BI / DAX", level: 5 },
      { name: "Advanced Excel", level: 5 },
      { name: "Power Query", level: 4 },
      { name: "Data Visualization", level: 5 },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "SQL Server", level: 4 },
      { name: "MySQL", level: 4 },
      { name: "PostgreSQL", level: 3 },
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      { name: "Scikit-Learn", level: 4 },
      { name: "TensorFlow / PyTorch", level: 3 },
      { name: "Computer Vision / NLP", level: 3 },
      { name: "LangChain", level: 3 },
    ],
  },
  {
    title: "Programming",
    items: [
      { name: "Python", level: 5 },
      { name: "Java / C++", level: 4 },
      { name: "JavaScript / PHP", level: 3 },
    ],
  },
];

const projects = [
  {
    image: deepfakeImg,
    title: "Deepfake Video Detection System",
    description:
      "Advanced deepfake face detection using the Celeb-DF dataset with MTCNN face detection and dlib landmark alignment. Evaluated with Precision, Recall and F1-Score for multimedia forensics.",
    tags: ["PyTorch", "EfficientNet", "OpenCV", "MTCNN"],
    year: "2024",
    label: "Case Study 01",
  },
  {
    image: powerbiImg,
    title: "Tech Gear Manufacturing Dashboard",
    description:
      "Enterprise Power BI dashboard for monitoring manufacturing efficiency, profitability, inventory movement and defect rates across production plants.",
    tags: ["Power BI", "DAX", "SQL", "Modeling"],
    year: "2024",
    label: "Case Study 02",
  },
  {
    image: excelImg,
    title: "Car Sales Analytics Dashboard",
    description:
      "Interactive Excel dashboard analyzing sales performance, model-wise contribution and salesperson productivity with dynamic filtering and automated reports.",
    tags: ["Excel", "Pivot Tables", "Macros"],
    year: "2023",
    label: "Case Study 03",
  },
  {
    image: pizzaImg,
    title: "Pizza Sales Report",
    description:
      "Power BI dashboard analyzing pizza sales performance, daily and monthly order trends, category contribution, and size-wise revenue distribution.",
    tags: ["Power BI", "DAX", "Data Visualization", "SQL"],
    year: "2025",
    label: "Case Study 04",
  },
];

const experience = [
  {
    role: "Web Development Intern",
    org: "NEOTECHSOLUTIONS",
    year: "2024",
    detail:
      "Built responsive web apps with Bootstrap, PHP, JavaScript, and MySQL. Owned frontend-backend integration and dynamic database functionality.",
  },
  {
    role: "Web Development Intern",
    org: "Cloud Infosoft",
    year: "2023",
    detail:
      "Worked on HTML, CSS, and Agile development. Participated in website design and implementation tasks.",
  },
  {
    role: "Front-End Development Intern",
    org: "TECHOMAX",
    year: "2022",
    detail:
      "Learned web fundamentals and implemented responsive layouts with improved UI structure.",
  },
];

const certifications = [
  "Data Analytics — Weltec Institute",
  "Data Science — Weltec Institute",
  "Data Analysis — Skillshop (Google Analytics Certification)",
  "AI Tools — Be10x",
  "Data Analytics — Oneroadmap",
  "Deloitte Data Analytics Virtual Experience",
  "Tvtv (Forage)",
  "AI and Data Scientist — Oneroadmap",
];

function LevelBars({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`w-1 h-3 ${i < level ? "bg-brand" : "bg-brand/20"}`}
        />
      ))}
    </div>
  );
}

function Index() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // init theme from localStorage / system
  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox]);

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-2 bg-brand rounded-full" />
            <span className="font-medium tracking-tight text-sm">Hiral Chauhan</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-8 mr-4">
              {navLinks.slice(0, 3).map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
              ))}
              <div className="w-px h-4 bg-border" />
              <a href="#contact" className="text-sm font-medium text-brand">Contact</a>
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="size-9 rounded-md ring-1 ring-border bg-card flex items-center justify-center hover:bg-accent transition-colors"
            >
              {theme === "dark" ? (
                <svg className="size-4 text-brand" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1A.75.75 0 0 1 10 15ZM10 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM2.75 9.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1ZM15.25 9.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1ZM4.4 4.4a.75.75 0 0 1 1.06 0l.7.7a.75.75 0 0 1-1.06 1.06l-.7-.7a.75.75 0 0 1 0-1.06ZM13.84 13.84a.75.75 0 0 1 1.06 0l.7.7a.75.75 0 1 1-1.06 1.06l-.7-.7a.75.75 0 0 1 0-1.06ZM15.6 4.4a.75.75 0 0 1 0 1.06l-.7.7a.75.75 0 1 1-1.06-1.06l.7-.7a.75.75 0 0 1 1.06 0ZM6.16 13.84a.75.75 0 0 1 0 1.06l-.7.7a.75.75 0 1 1-1.06-1.06l.7-.7a.75.75 0 0 1 1.06 0Z"/></svg>
              ) : (
                <svg className="size-4 text-foreground" viewBox="0 0 20 20" fill="currentColor"><path d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z"/></svg>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="size-9 rounded-md ring-1 ring-border bg-card flex items-center justify-center hover:bg-accent transition-colors"
            >
              <svg className="size-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Side menu drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[90]" role="dialog" aria-modal="true">
          <div onClick={() => setMenuOpen(false)} className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200" />
          <aside className="absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-card border-l border-border shadow-2xl p-6 flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Navigation</span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="size-8 rounded-md hover:bg-accent flex items-center justify-center"
              >
                <svg className="size-4" viewBox="0 0 20 20" fill="currentColor"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"/></svg>
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <span className="font-mono text-[10px] text-muted-foreground group-hover:text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm font-medium">{l.label}</span>
                  <span className="ml-auto text-muted-foreground group-hover:text-brand">→</span>
                </a>
              ))}
            </nav>
            <div className="mt-auto pt-6 border-t border-border">
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">Theme</p>
              <button
                type="button"
                onClick={toggleTheme}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md ring-1 ring-border hover:bg-accent transition-colors text-sm"
              >
                <span>{theme === "dark" ? "Dark mode" : "Light mode"}</span>
                <span className="text-brand">{theme === "dark" ? "☾" : "☀"}</span>
              </button>
            </div>
          </aside>
        </div>
      )}


      {/* Hero */}
      <header className="relative py-20 md:py-32 px-6 border-b border-border grid-bg overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-start">
          <div className="max-w-[40ch]">
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">
              Hi, I'm Hiral Chauhan
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance mb-8 tracking-tight">
              Transforming Data into Insights, and Insights into Intelligent Solutions.
            </h1>
          </div>

          <div className="relative justify-self-start md:justify-self-end">
            <div className="relative">
              <div className="absolute -inset-2 bg-brand/10 rounded-2xl rotate-3" />
              <div className="relative size-44 md:size-56 rounded-2xl overflow-hidden ring-1 ring-border shadow-lg bg-card">
                <img
                  src={hiralPhoto.url}
                  alt="Portrait of Hiral Chauhan"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-card ring-1 ring-border rounded-md px-2 py-1 shadow-sm">
                <span className="text-[10px] font-mono text-brand uppercase tracking-widest">Bharuch · IN</span>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-6xl mx-auto mt-10">


          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1 flex flex-col gap-3 w-full md:w-auto md:ml-auto md:max-w-xs">
              <a
                href="#projects"
                className="w-full inline-flex items-center justify-center py-2.5 px-4 bg-brand text-white rounded-md text-sm font-medium ring-1 ring-brand ring-offset-1 hover:bg-brand/90 transition-colors"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                download="Hiral_Chauhan_Resume.pdf"
                className="w-full inline-flex items-center justify-center py-2.5 px-4 bg-card text-foreground rounded-md text-sm font-medium ring-1 ring-border shadow-sm hover:bg-accent transition-colors"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center py-2.5 px-4 text-foreground rounded-md text-sm font-medium hover:bg-muted transition-colors"
              >
                Contact Me →
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Marquee strip */}
      <div className="bg-zinc-900 py-3 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee w-max">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center gap-4 pr-12">
              {[
                "SQL Server", "Power BI", "Python", "Scikit-Learn", "DAX",
                "TensorFlow", "PyTorch", "OpenCV", "LangChain", "MySQL",
                "Advanced Excel", "PostgreSQL",
              ].map((s) => (
                <span key={s} className="flex items-center gap-4">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{s}</span>
                  <span className="w-8 h-[2px] bg-brand/40 inline-block" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h3 className="text-3xl font-semibold tracking-tight">About Me</h3>
          </div>
          <div className="lg:col-span-8 space-y-5 text-muted-foreground leading-relaxed text-pretty">
            <p>
              I'm a Computer Science Engineering graduate from{" "}
              <span className="text-foreground font-medium">Shroff SR Rotary Institute of Chemical Technology</span>{" "}
              with a strong foundation in Data Analytics, Artificial Intelligence, and Web Development.
            </p>
            <p>
              My experience includes developing interactive dashboards, performing data validation
              and quality checks, building machine learning solutions, and creating responsive web
              applications. I enjoy analyzing complex datasets, identifying trends, and developing
              innovative solutions that improve business performance.
            </p>
            <p>
              I'm continuously learning emerging technologies in AI, Machine Learning, Data Science,
              and Business Intelligence to stay aligned with industry demands.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight">Featured Projects</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col bg-card rounded-xl ring-1 ring-border p-4 hover:ring-brand/30 transition"
              >
                <button
                  type="button"
                  onClick={() => setLightbox({ src: p.image, title: p.title })}
                  className="relative w-full aspect-[4/3] bg-muted rounded-lg overflow-hidden outline outline-1 -outline-offset-1 outline-border mb-4 cursor-zoom-in"
                  aria-label={`Zoom into ${p.title}`}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <span className="absolute top-2 right-2 bg-black/60 text-white text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to zoom
                  </span>
                </button>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  {p.tags.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] font-mono py-0.5 px-2 bg-muted text-muted-foreground rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <h4 className="text-base font-semibold mb-2">{p.title}</h4>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-muted/40 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h3 className="text-3xl font-semibold tracking-tight mb-6">Technical Proficiency</h3>
              <div className="flex flex-wrap gap-2">
                {["Problem Solving", "Analytical Thinking", "Communication", "Critical Thinking", "Team Collaboration", "Time Management"].map((s) => (
                  <span key={s} className="px-3 py-1 bg-card ring-1 ring-border rounded-full text-xs font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-xl overflow-hidden shadow-sm">
                {skillGroups.map((g) => (
                  <div key={g.title} className="bg-card p-6">
                    <h5 className="text-[10px] font-mono text-brand uppercase mb-4 tracking-widest flex items-center gap-2">
                      <span className="size-1.5 bg-brand rounded-full" /> {g.title}
                    </h5>
                    <ul className="space-y-2.5">
                      {g.items.map((it) => (
                        <li key={it.name} className="text-sm text-foreground/80">
                          {it.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h3 className="text-3xl font-semibold tracking-tight">Professional Experience</h3>
          </div>
          <ol className="lg:col-span-8 divide-y divide-border border-y border-border">
            {experience.map((e) => (
              <li key={e.org} className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr_auto] gap-6 py-6 items-start">
                <span className="font-mono text-xs text-muted-foreground pt-1">{e.year}</span>
                <div>
                  <h4 className="text-base font-semibold">{e.role}</h4>
                  <p className="text-sm text-brand font-medium mb-2">{e.org}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{e.detail}</p>
                </div>
                <span className="hidden md:inline text-[10px] font-mono text-muted-foreground uppercase tracking-widest pt-1">
                  Internship
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Education + Certifications */}
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-semibold tracking-tight mb-8">Education</h3>
            <div className="bg-card ring-1 ring-border rounded-xl p-6">
              <p className="text-[10px] font-mono text-brand uppercase tracking-widest mb-2">2021 — 2025</p>
              <h4 className="text-lg font-semibold mb-1">B.E. Computer Science Engineering</h4>
              <p className="text-sm text-muted-foreground mb-6">
                Shroff SR Rotary Institute of Chemical Technology
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-t border-border pt-4">
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">CGPA</p>
                  <p className="text-2xl font-semibold tracking-tight">8.11<span className="text-sm text-muted-foreground">/10</span></p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">SPI</p>
                  <p className="text-2xl font-semibold tracking-tight">8.79<span className="text-sm text-muted-foreground">/10</span></p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-semibold tracking-tight mb-8">Certifications</h3>
            <ul className="grid grid-cols-1 gap-px bg-border ring-1 ring-border rounded-xl overflow-hidden">
              {certifications.map((c, i) => (
                <li key={c} className="bg-card p-4 flex items-center gap-4">
                  <span className="font-mono text-[10px] text-muted-foreground w-6">{String(i + 1).padStart(2, "0")}</span>
                  <span className="size-1.5 rounded-full bg-brand" />
                  <span className="text-sm font-medium">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 grid-bg">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">Let's Connect</h3>

            <div className="space-y-3">
              <a href="mailto:hiralchauhan150203@gmail.com" className="flex items-center gap-3 group">
                <div className="size-9 bg-card ring-1 ring-border rounded-md flex items-center justify-center shrink-0">
                  <svg className="size-4 text-brand" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1 1 0 0 0 .882 0L19 7.16V6a2 2 0 0 0-2-2H3Z" />
                    <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                  </svg>
                </div>
                <span className="text-sm font-medium group-hover:text-brand transition-colors">
                  hiralchauhan150203@gmail.com
                </span>
              </a>
              <a href="tel:+919313089962" className="flex items-center gap-3 group">
                <div className="size-9 bg-card ring-1 ring-border rounded-md flex items-center justify-center shrink-0">
                  <svg className="size-4 text-brand" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-.83 1.657l-.679.34c-.034.017-.064.04-.09.068a7.45 7.45 0 0 0 4.017 4.017c.028-.026.05-.056.068-.09l.34-.679a1.5 1.5 0 0 1 1.657-.83l3.223.716A1.5 1.5 0 0 1 15 6.352V14a2 2 0 0 1-2 2h-2.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H13a1 1 0 0 0 1-1v-6.64a.5.5 0 0 0-.379-.484l-2.476-.55-.17.339a2.45 2.45 0 0 1-2.693 1.358A8.948 8.948 0 0 1 4.35 8.058 2.45 2.45 0 0 1 5.708 5.365l.339-.17-.55-2.476A.5.5 0 0 0 5.026 2H3.5A1.5 1.5 0 0 1 2 3.5ZM10.8 11.92a9.05 9.05 0 0 0 1.49-1.483 1.5 1.5 0 0 1 1.995-.125l.975.731a1.5 1.5 0 0 1 .498 1.655l-.356 1.778a1.5 1.5 0 0 1-1.476 1.21H14a1.5 1.5 0 0 1-.5-.084v.002a7.5 7.5 0 0 1-7.5-7.5v-.002a1.5 1.5 0 0 1 .084-.5H5a1.5 1.5 0 0 1 1.21-1.476l1.778-.356a1.5 1.5 0 0 1 1.655.498l.731.975a1.5 1.5 0 0 1-.125 1.995 9.05 9.05 0 0 0-1.483 1.49c.044.035.088.07.13.106l2.028 1.803a.5.5 0 0 0 .662-.752l-1.803-2.028a6.45 6.45 0 0 0-.13-.106Z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium group-hover:text-brand transition-colors">
                  +91 93130 89962
                </span>
              </a>
              <div className="flex items-center gap-3">
                <div className="size-9 bg-card ring-1 ring-border rounded-md flex items-center justify-center shrink-0">
                  <svg className="size-4 text-brand" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .2.08.4.22.53l3 3a.75.75 0 1 0 1.06-1.06l-2.78-2.78V5Z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Bharuch, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-8 cursor-zoom-out animate-in fade-in duration-200"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 size-10 rounded-full bg-card/10 hover:bg-card/20 text-white flex items-center justify-center transition"
          >
            <svg className="size-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.title}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[95vw] max-h-[85vh] object-contain rounded-lg shadow-2xl cursor-default"
          />
          <p className="mt-4 text-white/80 text-sm font-mono tracking-wide">{lightbox.title}</p>
        </div>
      )}
    </div>
  );
}

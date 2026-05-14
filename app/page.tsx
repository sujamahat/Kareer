"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  ["Dashboard", "/dashboard"],
  ["Roadmap", "/roadmap"],
  ["Internships", "/internships"],
  ["Visa Checker", "/visa"],
  ["Resume Review", "/resume"],
  ["Mentors", "/mentors"],
  ["Chatbot", "/chatbot"],
];

const metrics = [
  ["Profile match", "84%", "+6% this week", "ti ti-trending-up", true],
  ["Matched roles", "12", "D-2 compliant only", "", false],
  ["Applications", "3", "1 interview", "ti ti-trending-up", true],
  ["Mentor sessions", "2", "Next: Friday 4 pm", "", false],
];

const internships = [
  {
    logo: "KA",
    role: "ML Engineering Intern",
    company: "Kakao AI · Seoul, Korea",
    match: "94%",
    tags: ["D-2 ok", "PyTorch", "Computer Vision", "20 hrs/wk max"],
    date: "Closes May 25",
    tone: "var(--teal-bg)",
    color: "var(--teal-lt)",
    featured: true,
  },
  {
    logo: "NV",
    role: "AI Research Intern",
    company: "Naver Labs · Seongnam, Korea",
    match: "88%",
    tags: ["D-2 ok", "NLP", "Research", "Hybrid"],
    date: "Closes Jun 1",
    tone: "rgba(55,138,221,0.1)",
    color: "#85B7EB",
  },
  {
    logo: "LG",
    role: "Computer Vision Intern",
    company: "LG AI Research · Seoul, Korea",
    match: "81%",
    tags: ["D-2 ok", "CNN", "OpenCV", "20 hrs/wk max"],
    date: "Closes May 20",
    tone: "var(--amber-bg)",
    color: "var(--amber)",
  },
  {
    logo: "SK",
    role: "Data Science Intern",
    company: "SK Telecom AI · Seoul, Korea",
    match: "76%",
    tags: ["D-2 ok", "Python", "Data analysis", "Remote-friendly"],
    date: "Closes Jun 15",
    tone: "rgba(212,168,67,0.1)",
    color: "#D4A843",
  },
];

const mentors = [
  ["JK", "Jisoo Kim", "ML Engineer · Kakao AI", "International grad", "Navigated D-2 to E-7 visa transition after graduating from KAIST. Now helps international students break into Korean ML roles.", ["PyTorch", "Vision", "Korea hiring", "Visa"], "Free intro session", "var(--teal-bg)", "var(--teal-lt)"],
  ["PP", "Priya Patel", "AI Researcher · Naver Labs", "From India", "PhD in Computer Vision from SNU. Helps CS students build research-grade portfolios and navigate Korean academic culture.", ["Research", "SNU network", "Portfolio", "NLP"], "₩20,000 / 45 min", "rgba(55,138,221,0.12)", "#85B7EB"],
  ["CL", "Chen Lei", "Tech Recruiter · Line Corp", "Recruiter", "Places 50+ international engineers per year at Korean tech companies. Knows what Korean hiring managers look for.", ["Resume review", "Interviews", "Salary", "E-7 visa"], "₩30,000 / 60 min", "var(--amber-bg)", "var(--amber)"],
  ["AR", "Amit Rao", "Backend Engineer · Krafton", "From Nepal", "Former D-2 student who transitioned to full-time at a Korean gaming company. Focused on workplace culture and language coaching.", ["Korean language", "Workplace culture", "Backend"], "Free intro session", "rgba(201,80,74,0.1)", "#E07C78"],
  ["SY", "Sara Yoon", "Career Coach · Independent", "Top mentor", "Helped 200+ international students in Korea navigate career transitions, D-2 to E-7 planning, and interview coaching.", ["D-2→E-7", "Cover letters", "Mock interviews"], "₩25,000 / 45 min", "rgba(93,202,165,0.15)", "#5DCAA5"],
  ["MN", "Min-jun Na", "AI Lead · Samsung Research", "Chaebol insider", "10 years at Samsung. Advises on large Korean tech companies, internal mobility, and AI research career paths.", ["Samsung", "AI research", "Chaebol culture"], "₩40,000 / 60 min", "rgba(175,169,236,0.15)", "#AFA9EC"],
] as const;

export function Icon({ name, size = 16 }: { name: string; size?: number }) {
  return <i className={name} style={{ fontSize: size }} aria-hidden="true" />;
}

export function Logo({ small = false }: { small?: boolean }) {
  return (
    <div className="flex items-center gap-[10px] no-underline">
      <div className="nav-logo-mark" style={small ? { width: 28, height: 28, fontSize: 14 } : undefined}>
        K
      </div>
      <span className={small ? "text-[14px] font-medium text-[var(--text2)]" : "text-[17px] font-medium tracking-[-0.3px] text-[var(--text)]"}>
        Kareer
      </span>
    </div>
  );
}

export function Header() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("kareer-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
    }
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("kareer-theme", nextTheme);
  }

  return (
    <nav className="nav-shell">
      <Link href="/" aria-label="Kareer home">
        <Logo />
      </Link>
      <div className="nav-links flex items-center gap-1">
        {navItems.map(([label, href]) => (
          <Link className="nav-link whitespace-nowrap" href={href} key={href}>
            {label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <button
          className="theme-toggle"
          type="button"
          aria-label={theme === "dark" ? "Switch to sunlight mode" : "Switch to dark mode"}
          onClick={toggleTheme}
        >
          <Icon name={theme === "dark" ? "ti ti-moon" : "ti ti-sun"} size={18} />
        </button>
        <Link href="/dashboard" className="nav-cta">
          Get started
        </Link>
      </div>
    </nav>
  );
}

export function SectionIntro({ label, title, copy }: { label: string; title: React.ReactNode; copy?: string }) {
  return (
    <div className="mb-9">
      <div className="sec-label">{label}</div>
      <h2 className="sec-title">{title}</h2>
      {copy ? <p className="sec-sub">{copy}</p> : null}
    </div>
  );
}

export function AiTip({ children, button, icon = "ti ti-robot" }: { children: React.ReactNode; button: string; icon?: string }) {
  return (
    <div className="ai-tip">
      <div className="ai-tip-icon">
        <Icon name={icon} size={18} />
      </div>
      <div>
        <div className="ai-tip-text">{children}</div>
        <button className="ai-tip-btn" type="button">
          <Icon name="ti ti-bolt" size={13} />
          {button}
        </button>
      </div>
    </div>
  );
}

export function Landing() {
  return (
    <section id="landing" className="landing">
      <div className="landing-eyebrow">
        <Icon name="ti ti-map-pin" size={13} />
        Built for international students in Korea
      </div>
      <h1 className="landing-h1">
        Your career in Korea
        <br />
        <em>starts here.</em>
      </h1>
      <p className="landing-sub">
        Stop surviving in convenience stores. Start building a career that uses your degree, respects your visa, and opens doors in Korea&apos;s tech industry.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/dashboard" className="btn-primary">
          <Icon name="ti ti-rocket" />
          Build your roadmap
        </Link>
        <Link href="/internships" className="btn-outline">
          <Icon name="ti ti-briefcase" />
          Browse D-2 internships
        </Link>
      </div>
      <div className="landing-stats">
        {[["340+", "D-2 safe roles"], ["94%", "Visa compliant"], ["120+", "Mentors in tech"]].map(([num, label]) => (
          <div key={label}>
            <div className="stat-num">{num}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Sidebar() {
  const sidebarItems = [
    { label: "Dashboard", icon: "ti ti-layout-dashboard", active: true },
    { label: "Career Roadmap", icon: "ti ti-map-2" },
    { label: "Internships", icon: "ti ti-briefcase", badge: "12" },
    { label: "Resume Review", icon: "ti ti-file-text" },
    { label: "Mentors", icon: "ti ti-users", sectionStart: true },
    { label: "AI Assistant", icon: "ti ti-message-circle" },
    { label: "Visa Tracker", icon: "ti ti-shield" },
    { label: "Applications", icon: "ti ti-chart-line" },
  ];

  return (
    <aside className="sidebar soft-card">
      <div className="sidebar-profile">
        <div className="sb-avatar avatar-round">SJ</div>
        <div className="sb-name">Suja J.</div>
        <div className="muted-small mt-0.5">AI Convergence · Kimpo University</div>
        <div className="sb-visa">
          <Icon name="ti ti-shield-check" size={12} />
          D-2 visa active
        </div>
      </div>
      <div className="sb-progress">
        <div className="mb-[7px] flex justify-between text-[11px] text-[var(--text3)]">
          <span>Career progress</span>
          <span className="text-[var(--teal-lt)]">Phase 3 of 6</span>
        </div>
        <div className="sp-bar"><div className="sp-fill w-[40%]" /></div>
      </div>
      <div className="py-[10px]">
        <div className="sb-section">Main</div>
        {sidebarItems.map((item) => (
          <div key={item.label}>
            {item.sectionStart ? <div className="sb-section">Grow</div> : null}
            <button className={`sb-item ${item.active ? "active" : ""}`} type="button">
              <Icon name={item.icon} size={17} />
              {item.label}
              {item.badge ? <span className="sb-badge">{item.badge}</span> : null}
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
}

export function MiniRoadmap() {
  const rows = [
    ["check", "Build CIFAR-10 CNN project", "Portfolio complete · PyTorch"],
    ["check", "Korean tech vocabulary module", "Completed 80%"],
    ["current", "Apply to 5 D-2 internships", "3 / 5"],
    ["lock", "Korean interview prep", "Unlocks after 5 apps"],
  ];
  return (
    <div className="panel">
      <div className="panel-head">
        <div className="panel-title"><Icon name="ti ti-map-2" /> Career roadmap</div>
        <span className="panel-link">View all →</span>
      </div>
      <div className="panel-body flex flex-col gap-3">
        {rows.map(([state, title, sub]) => (
          <div className="flex items-center gap-[10px]" key={title}>
            <div className={`avatar-round h-5 w-5 rounded-full ${state === "check" ? "bg-[var(--teal)] text-white" : state === "current" ? "border border-[var(--teal)] bg-[var(--teal-bg2)] text-[10px] font-medium text-[var(--teal-lt)]" : "border border-[var(--border2)] bg-[var(--bg4)] text-[var(--text3)]"}`}>
              {state === "check" ? <Icon name="ti ti-check" size={10} /> : state === "current" ? "3" : <Icon name="ti ti-lock" size={10} />}
            </div>
            <div className="min-w-0 flex-1">
              <div className={`text-[13px] font-medium ${state === "current" ? "text-[var(--teal-lt)]" : state === "lock" ? "text-[var(--text3)]" : "text-[var(--text)]"}`}>{title}</div>
              {state === "current" ? (
                <div className="prog-mini">
                  <div className="prog-mini-bar"><div className="prog-mini-fill w-[60%]" /></div>
                  <span className="prog-mini-text">{sub}</span>
                </div>
              ) : (
                <div className="text-[11px] text-[var(--text3)]">{sub}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Dashboard() {
  return (
    <section id="dashboard" className="section-pad">
      <div className="screen-inner">
        <SectionIntro label="Your workspace" title={<>Good morning, <em>Suja</em></>} />
        <div className="dash-grid">
          <Sidebar />
          <div className="dash-main">
            <div className="metrics-row">
              {metrics.map(([label, value, delta, icon, up]) => (
                <div className="metric" key={label as string}>
                  <div className="metric-label">{label}</div>
                  <div className="metric-val">{value}</div>
                  <div className={`metric-delta ${up ? "up" : ""}`}>{icon ? <Icon name={icon as string} size={13} /> : null}{delta}</div>
                </div>
              ))}
            </div>
            <div className="two-col-grid">
              <MiniRoadmap />
              <div className="panel">
                <div className="panel-head">
                  <div className="panel-title"><Icon name="ti ti-briefcase" /> Top matches</div>
                  <Link href="/internships" className="panel-link">View 12 →</Link>
                </div>
                <div className="panel-body flex flex-col gap-[10px]">
                  {internships.slice(0, 3).map((job) => (
                    <div className="flex items-center gap-3 rounded-[var(--r-sm)] bg-[var(--bg3)] p-[10px]" key={job.logo}>
                      <div className="company-logo avatar-round" style={{ background: job.tone, color: job.color }}>{job.logo}</div>
                      <div className="flex-1">
                        <div className="text-[13px] font-medium text-[var(--text)]">{job.role}</div>
                        <div className="text-[11.5px] text-[var(--text3)]">{job.company.split(" · ").slice(0, 2).join(" · ")}</div>
                      </div>
                      <div className="font-serif-display text-[18px] text-[var(--teal-lt)]">{job.match}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <AiTip button="Draft my LG AI cover letter">
              <strong>AI insight:</strong> You&apos;re 2 applications away from unlocking your Korean interview prep module. LG AI Research is your best next move; your CIFAR-10 CNN work directly matches their computer vision team.
            </AiTip>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Roadmap() {
  const phases = [
    ["Phase 1 · Foundation", "Set up Python + PyTorch", "All tasks complete", "done"],
    ["Phase 2 · Portfolio", "Build CIFAR-10 CNN project", "Trained + documented", "done"],
    ["Phase 3 · Apply", "Apply to 5 D-2 internships", "3 of 5 submitted", "current"],
    ["Phase 4 · Interview", "Korean interview prep", "Unlocks after 5 apps", "locked"],
    ["Phase 5 · Offer", "Negotiate & accept offer", "Visa document checklist", "locked"],
    ["Phase 6 · Grow", "First 90 days in role", "Korean workplace guide", "locked"],
  ];
  const tasks = [
    ["Tailor resume for Korean ATS format", "AI review complete · 91% ATS score", true],
    ["Apply to Kakao AI — ML Intern", "Submitted May 9 · Under review", true],
    ["Apply to Naver Labs — AI Research Intern", "Submitted May 11 · Awaiting response", true],
    ["Apply to LG AI Research — CV Intern", "Deadline: May 20 · Cover letter ready", false],
    ["Apply to 1 more D-2 role", "AI will suggest best-fit companies", false],
  ];
  return (
    <section id="roadmap" className="section-pad alt-section">
      <div className="screen-inner">
        <SectionIntro label="Phase tracker" title={<>AI Career <em>Roadmap</em></>} copy="Your personalised 6-phase path from first application to first day on the job — visa-safe, AI-guided, and built for Korea's tech market." />
        <div className="roadmap-layout">
          <div className="milestone-col">
            {phases.map(([phase, title, sub, state], index) => (
              <div className={`ms ${state === "current" ? "active-ms" : ""}`} key={phase}>
                <div className="ms-track">
                  <div className={`ms-dot ${state === "done" ? "done" : state === "current" ? "current" : "locked"}`}>
                    {state === "done" ? <Icon name="ti ti-check" size={10} /> : state === "current" ? "3" : <Icon name="ti ti-lock" size={10} />}
                  </div>
                  {index < phases.length - 1 ? <div className="ms-line" /> : null}
                </div>
                <div className="ms-content">
                  <div className="ms-phase">{phase}</div>
                  <div className={`ms-title ${state === "locked" ? "dim" : ""} ${state === "current" ? "!text-[var(--teal-lt)]" : ""}`}>{title}</div>
                  <div className="ms-sub">{sub}</div>
                  <div className="ms-tags">
                    <span className={`tag ${state !== "locked" ? "tag-teal" : ""}`}>{state === "current" ? "In progress" : state === "done" ? "Done" : "Locked"}</span>
                    {state === "current" ? <span className="tag tag-blue">3/5</span> : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="detail-col">
            <div className="detail-card">
              <div className="detail-phase-label">Phase 3 · Apply — Active</div>
              <div className="detail-title">Apply to 5 D-2-safe internships</div>
              <div className="detail-desc">Target roles explicitly marked D-2 compliant, related to your AI/CS major, and within the 20 hr/week legal cap. Your CIFAR-10 project is your strongest portfolio piece for ML and computer vision roles.</div>
              <div className="detail-chips">
                <div className="dchip chip-teal"><Icon name="ti ti-shield-check" /> D-2 compliant</div>
                <div className="dchip"><Icon name="ti ti-clock" /> 3-4 weeks</div>
                <div className="dchip"><Icon name="ti ti-star" /> High impact</div>
              </div>
            </div>
            <div className="tasks-card">
              <div className="tasks-head"><Icon name="ti ti-checklist" /> Tasks for this milestone</div>
              {tasks.map(([task, sub, done]) => (
                <div className="task-row" key={task as string}>
                  <div className={`task-cb ${done ? "done" : "open"}`}>{done ? <Icon name="ti ti-check" /> : null}</div>
                  <div>
                    <div className={`task-label ${done ? "done" : ""}`}>{task}</div>
                    <div className="task-sub-text">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="resources-card">
              <div className="res-head"><Icon name="ti ti-books" /> Phase resources</div>
              <div className="res-grid-2">
                {["Korean cover letter guide", "D-2 work regulations", "Recruiter email templates", "More D-2 companies"].map((name, index) => (
                  <div className="res-item" key={name}>
                    <Icon name={["ti ti-file-text", "ti ti-shield", "ti ti-mail", "ti ti-building"][index]} size={20} />
                    <div className="res-name mt-[7px]">{name}</div>
                    <div className="res-type">{["AI-generated template", "Visa compliance guide", "Korean hiring culture", "Filtered internship board"][index]}</div>
                  </div>
                ))}
              </div>
            </div>
            <AiTip button="Draft my LG AI application">
              <strong>AI tip:</strong> You&apos;re 2 applications away from unlocking Phase 4. LG AI Research is your strongest next application because your CIFAR-10 CNN work matches their computer vision focus.
            </AiTip>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Internships() {
  return (
    <section id="internships" className="section-pad">
      <div className="screen-inner">
        <SectionIntro label="Opportunities" title={<>Visa-safe <em>internships</em></>} copy="Every role is filtered for D-2 compatibility, major-relevance, and legal hour limits. No guesswork." />
        <div className="filters-bar">
          <input className="filter-input" placeholder="Search roles, companies, skills..." />
          <select className="filter-select" defaultValue="AI / ML"><option>All fields</option><option>AI / ML</option><option>Backend</option><option>Data</option></select>
          <select className="filter-select" defaultValue="Seoul"><option>All cities</option><option>Seoul</option><option>Seongnam</option><option>Remote</option></select>
          <button className="filter-chip on" type="button"><Icon name="ti ti-shield-check" size={13} /> D-2 only</button>
          <button className="filter-chip" type="button">Major-related</button>
        </div>
        <div className="intern-grid">
          {internships.map((job) => (
            <div className={`intern-card ${job.featured ? "featured" : ""}`} key={job.logo}>
              <div className="ic-top">
                <div className="company-logo avatar-round" style={{ background: job.tone, color: job.color }}>{job.logo}</div>
                <div><div className="ic-match">{job.match}</div><div className="ic-match-label">match</div></div>
              </div>
              <div className="ic-role">{job.role}</div>
              <div className="ic-company">{job.company}</div>
              <div className="ic-tags">
                {job.tags.map((tag) => <span className={`ic-tag ${tag.includes("D-2") ? "visa" : tag.includes("Hybrid") || tag.includes("Remote") ? "remote" : ""}`} key={tag}>{tag.includes("D-2") ? <Icon name="ti ti-shield-check" size={11} /> : null} {tag}</span>)}
              </div>
              <div className="ic-footer">
                <div className="ic-deadline"><Icon name="ti ti-calendar" size={13} /> {job.date}</div>
                <button className="ic-apply" type="button">Apply now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Resume() {
  const feedback = [
    ["ti ti-circle-check", "good", "Strong technical stack", "PyTorch, Python, and CNN experience are in-demand at top Korean AI labs. These keywords will pass most ATS filters."],
    ["ti ti-circle-check", "good", "GitHub project linked", "Korean tech recruiters expect a GitHub link. Your CIFAR-10 repo is clean and well-documented."],
    ["ti ti-alert-triangle", "warn", "Bullet points lack metrics", "Add accuracy rates, dataset sizes, or performance improvements to 3 bullets."],
    ["ti ti-alert-triangle", "warn", "Education section placement", "In Korean-style CVs, education typically appears before experience."],
    ["ti ti-circle-x", "fix", "Missing visa status note", "Add your D-2 visa status and work permit eligibility to the header."],
    ["ti ti-circle-x", "fix", "No Korean language proficiency", "Even basic Korean or TOPIK progress is a differentiator."],
  ];
  return (
    <section id="resume" className="section-pad alt-section">
      <div className="screen-inner">
        <SectionIntro label="AI-powered tool" title={<>Resume <em>Review</em></>} copy="Upload your CV and get instant feedback on ATS compatibility, Korean hiring standards, and project presentation — tailored to tech roles in Korea." />
        <div className="resume-layout">
          <div>
            <div className="upload-zone">
              <Icon name="ti ti-cloud-upload" size={36} />
              <div className="upload-title">Drop your resume here</div>
              <div className="upload-sub">PDF or DOCX · Korean or English<br />AI analyses in under 10 seconds</div>
            </div>
            <div className="score-ring-wrap">
              <div className="score-ring">
                <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="var(--bg3)" strokeWidth="10" />
                  <circle cx="60" cy="60" r="52" fill="none" stroke="var(--teal)" strokeWidth="10" strokeDasharray="327" strokeDashoffset="55" strokeLinecap="round" />
                </svg>
                <div className="score-center"><div className="score-num">91</div><div className="score-sub-text">ATS score</div></div>
              </div>
            </div>
            <div className="ai-rewrite">
              <div className="ar-label"><Icon name="ti ti-wand" /> AI rewrite suggestion</div>
              <div className="mb-2 text-[11px] text-[var(--text3)]">Bullet point · Experience section</div>
              <div className="ar-before">Worked on image classification using neural network.</div>
              <div className="ar-arrows"><Icon name="ti ti-arrow-down" /> AI improved version</div>
              <div className="ar-after">Built and trained a CNN on CIFAR-10 (PyTorch) achieving 87% test accuracy; documented architecture decisions and results on GitHub.</div>
            </div>
          </div>
          <div className="feedback-list">
            <div className="mb-1 text-[13px] font-medium text-[var(--text)]">Feedback — 8 items found</div>
            {feedback.map(([icon, tone, title, copy]) => (
              <div className="feedback-item" key={title}>
                <Icon name={`${icon} fb-icon ${tone}`} />
                <div><div className="fb-title">{title}</div><div className="fb-desc">{copy}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Mentors() {
  return (
    <section id="mentors" className="section-pad">
      <div className="screen-inner">
        <SectionIntro label="Community" title={<>Mentor <em>Marketplace</em></>} copy="Connect with engineers, researchers, and recruiters who have navigated Korea's tech industry — many as international students themselves." />
        <div className="mentor-filters">
          {["All mentors", "ML / AI", "Backend", "Career coaches", "International grads", "Recruiters"].map((item, i) => <button className={`mf-chip ${i === 0 ? "on" : ""}`} type="button" key={item}>{item}</button>)}
        </div>
        <div className="mentor-grid">
          {mentors.map(([initials, name, role, badge, bio, skills, rate, bg, color]) => (
            <div className="mentor-card" key={name}>
              <div className="mc-top">
                <div className="mc-avatar avatar-round" style={{ background: bg, color }}>{initials}</div>
                <div><div className="mc-name">{name}</div><div className="mc-role">{role}</div><div className="mc-badge"><Icon name="ti ti-flag" size={11} /> {badge}</div></div>
              </div>
              <div className="mc-bio">{bio}</div>
              <div className="mc-skills">{skills.map((skill) => <span className="mc-skill" key={skill}>{skill}</span>)}</div>
              <div className="mc-footer"><div className="mc-rate"><Icon name="ti ti-clock" size={13} /> {rate}</div><button className="mc-book" type="button">Book session</button></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Assistant() {
  return (
    <section id="assistant" className="section-pad alt-section">
      <div className="screen-inner">
        <SectionIntro label="Always on" title={<>AI Career <em>Assistant</em></>} copy="Visa-aware, Korea-specific, and available any time. Ask anything about working, applying, or living in Korea as an international student." />
        <div className="chat-layout">
          <div className="chat-sidebar">
            <div className="cs-head">Conversation history</div>
            <div className="cs-thread">{["D-2 work hour limits", "Korean cover letter tips", "How to email a recruiter", "What is TOPIK and should I take it?", "Kakao vs Naver culture diff"].map((item, i) => <div className={`cs-item ${i === 0 ? "active" : ""}`} key={item}><Icon name="ti ti-message" /> {item}</div>)}</div>
            <div className="cs-quick"><div className="cs-quick-label">Quick questions</div>{["Can I legally work here?", "How do I follow up with a recruiter?", "What projects should I build?", "How do Korean interviews work?"].map((q) => <span className="cs-q" key={q}>{q}</span>)}</div>
          </div>
          <div className="chat-window">
            <div className="chat-head"><div className="chat-bot-av avatar-round"><Icon name="ti ti-robot" size={18} /></div><div><div className="chat-bot-name">Kareer AI</div><div className="chat-bot-sub">Visa-aware · Korea-specific · D-2 expert</div></div><div className="online-dot" /></div>
            <div className="chat-messages">
              <ChatMsg bot>Hi Suja! Based on your D-2 visa and AI Convergence major, you can work up to <strong>20 hours per week</strong> during semesters, only in roles directly related to your study field.</ChatMsg>
              <ChatMsg user>How do I email a Korean recruiter professionally?</ChatMsg>
              <ChatMsg bot>Korean professional emails follow a specific structure. Open with <strong>안녕하세요</strong>, state your name and institution early, be direct, and close with <strong>감사합니다</strong>.</ChatMsg>
              <ChatMsg user>Yes please, for Kakao AI ML Intern role</ChatMsg>
              <ChatMsg bot>Here&apos;s a draft tailored to Kakao AI:<br /><br /><strong>Subject:</strong> Internship Application — ML Engineering Intern (D-2 Visa Holder)<br /><br />안녕하세요, 채용 담당자님. 저는 김포대학교 AI융합학과에 재학 중인 Suja입니다...</ChatMsg>
            </div>
            <div className="suggested-qs">{["Generate full email", "What to attach?", "Follow-up timing?"].map((q) => <button className="sq" type="button" key={q}>{q}</button>)}</div>
            <div className="chat-input-row"><textarea className="chat-input" placeholder="Ask anything about working in Korea..." rows={1} /><button className="chat-send" type="button"><Icon name="ti ti-arrow-up" size={18} /></button></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ChatMsg({ bot, user, children }: { bot?: boolean; user?: boolean; children: React.ReactNode }) {
  return (
    <div className={`chat-msg ${user ? "user" : ""}`}>
      <div className={`msg-av avatar-round ${bot ? "bot" : "usr"}`}>{bot ? <Icon name="ti ti-robot" size={14} /> : "SJ"}</div>
      <div className={`msg-bubble ${bot ? "bot" : "usr"}`}>{children}</div>
    </div>
  );
}

export function Visa() {
  const rules = [
    ["ti ti-circle-check", "ok", "Work permitted:", "Up to 20 hours/week during semesters. Unlimited during official vacation periods."],
    ["ti ti-circle-check", "ok", "Field restriction:", "Work must be related to your major field of study."],
    ["ti ti-alert-triangle", "warn", "Employer registration required:", "Your employer must be registered with immigration before you start."],
    ["ti ti-alert-triangle", "warn", "Work permit application:", "File Form 34 before starting paid work, even part-time internships."],
    ["ti ti-circle-x", "no", "Not permitted:", "Restaurant, factory, or unskilled labour work is illegal on D-2."],
  ];
  const docs = ["Alien Registration Card (ARC)", "University enrollment certificate", "Passport copy (valid)", "Official transcript (Korean + English)", "Bank statement (3 months)", "Work permit application (Form 34)", "Employer registration confirmation"];
  return (
    <section id="visa" className="section-pad">
      <div className="screen-inner">
        <SectionIntro label="Stay compliant" title={<>Visa <em>Tracker</em></>} copy="Understand your rights, track required documents, and never miss a deadline. Built specifically for D-2 international students in Korea." />
        <div className="visa-grid">
          <div className="visa-status">
            <div className="vs-header"><div className="vs-icon avatar-round"><Icon name="ti ti-id-badge" size={24} /></div><div><div className="vs-type">D-2 Student Visa</div><div className="vs-sub">Academic status · Valid for study + limited work</div></div></div>
            <div className="vs-rules">{rules.map(([icon, tone, strong, copy]) => <div className="vs-rule" key={strong}><Icon name={`${icon} ${tone}`} /><div className="vs-rule-text"><strong>{strong}</strong> {copy}</div></div>)}</div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="doc-checklist">
              <div className="dc-head">Document checklist <span className="dc-progress-text">5 / 7 ready</span></div>
              {docs.map((doc, i) => (
                <div className="dc-item" key={doc}>
                  <div className={`dc-cb ${i < 5 ? "done" : "open"}`}>{i < 5 ? <Icon name="ti ti-check" size={11} /> : null}</div>
                  <div className={`dc-label ${i < 5 ? "done" : ""}`}>{doc}</div>
                  <div className={`dc-status ${i < 5 ? "ready" : "needed"}`}>{i < 5 ? "Ready" : i === 5 ? "Needed" : "Needed before start date"}</div>
                </div>
              ))}
            </div>
            <AiTip button="Get employer checklist" icon="ti ti-robot">
              <strong>Visa reminder:</strong> Before accepting the Kakao AI offer, confirm they have filed your employer registration with the Seoul Immigration Office.
            </AiTip>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <Logo small />
      <div className="footer-text">Helping international students in Korea build careers — not just survive.</div>
      <div className="flex gap-6">
        {["About", "Privacy", "Contact"].map((item) => <a className="footer-link" href="#" key={item}>{item}</a>)}
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Dashboard />
        <Roadmap />
        <Internships />
        <Visa />
        <Resume />
        <Mentors />
        <Assistant />
      </main>
      <Footer />
    </>
  );
}

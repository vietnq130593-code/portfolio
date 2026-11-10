"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  Bot,
  Boxes,
  BrainCircuit,
  Code2,
  Database,
  Download,
  Gauge,
  Github,
  Globe,
  GraduationCap,
  Trophy,
  Mail,
  MapPin,
  Phone,
  Radar,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

/* ----------------------------- Portfolio data ----------------------------- */

const profile = {
  name: "Nguyễn Quốc Việt",
  role: "AI Application Engineer",
  location: "Ho Chi Minh City, Vietnam",
  email: "vietnq130593@gmail.com",
  mailto:
    "mailto:vietnq130593@gmail.com?subject=AI%20Application%20Engineer%20inquiry%20%2D%20portfolio",
  phone: "+84 356 322 464",
  github: "https://github.com/vietnq130593-code",
  kaggle: "https://www.kaggle.com/vietnguyen130593",
  devpost: "https://devpost.com/vietnq130593",
  cvPath: "/cv/Nguyen-Quoc-Viet-CV.pdf",
  headline:
    "I build AI-powered applications that save businesses real hours — from multi-agent platforms to production CRMs serving thousands of customers.",
  seeking:
    "Open to remote, flexible AI work (10–40 h/week) — model evaluation, rubric-based review & AI-assisted development.",
};

const stats = [
  { icon: Code2, value: "640K+", label: "Production code lines" },
  { icon: Trophy, value: "Top 13.4%", label: "ARC Prize 2026 · solo" },
  { icon: Users, value: "4,199+", label: "Live CRM customers" },
  { icon: Radar, value: "3/3", label: "Kaggle contests, solo" },
];

const competitions = [
  {
    name: "ARC Prize 2026 — ARC-AGI-3",
    result: "Top 13.4%",
    detail: "658 / 4,923 · final ranking",
    category: "AI Reasoning",
    teams: "4,923 teams",
    top: 13.4,
    highlight: true,
  },
  {
    name: "Kaggriculture",
    result: "Top 28.7%",
    detail: "2,915 / 10,148",
    category: "Simulation",
    teams: "10,148 teams",
    top: 28.7,
    highlight: false,
  },
  {
    name: "Biohub — Cell Tracking",
    result: "Top 33.8%",
    detail: "1,332 / 3,947",
    category: "Research · Code Competition",
    teams: "3,947 teams",
    top: 33.8,
    highlight: false,
  },
];

const projects = [
  {
    number: "01",
    title: "TMO — Multi-Agent AI Platform",
    status: "Open source · active development",
    statusVariant: "open" as const,
    image: "/projects/tmo-preview.png",
    imageAlt:
      "TMO multi-agent platform interface — agent orchestration flow and knowledge graph visualization",
    link: "https://github.com/vietnq130593-code/TMO",
    cta: "View on GitHub",
    stack: ["Next.js 16", "TypeScript 5", "Qdrant", "Neo4j"],
    summary:
      "Solo-built multi-agent platform where a supervised agent team plans, generates and verifies real software work — backed by a GraphRAG knowledge base.",
    metrics: [
      { value: "5", label: "Agents in team" },
      { value: "4", label: "LLM providers" },
      { value: "2", label: "Knowledge stores" },
    ],
    features: [
      {
        title: "Supervised 5-agent Code Team",
        text: "Team Lead, 2 Generators and a Verifier collaborate on real software tasks.",
      },
      {
        title: "Skills marketplace",
        text: "Pluggable agent skills: Web Search, TTS/ASR, VLM, image generation.",
      },
      {
        title: "GraphRAG pipeline",
        text: "PDF → Neo4j graph + Qdrant vectors · hybrid search with RRF fusion · D3 graph visualization.",
      },
      {
        title: "Production LLM infra",
        text: "Slot-based rotation & fallback across NVIDIA NIM, Mistral, OpenRouter, Cerebras · token tracking.",
      },
    ],
  },
  {
    number: "02",
    title: "LEVEL 1 HAIRCARE CRM",
    status: "In production · real business",
    statusVariant: "live" as const,
    image: "/projects/crm-preview.png",
    imageAlt:
      "Haircare CRM dashboard — retention charts, churn prediction metrics and appointment calendar",
    link: null,
    cta: "Request a walkthrough",
    stack: ["TypeScript", "Supabase", "PostgreSQL", "PWA"],
    summary:
      "Complete CRM & AI platform for a real haircare business — retention automation, POS cashiering and a 9-module BI suite with churn prediction.",
    metrics: [
      { value: "4,199+", label: "Live customers" },
      { value: "22K", label: "AI engine lines" },
      { value: "225", label: "API routes" },
    ],
    features: [
      {
        title: "Real business impact",
        text: "4,199+ customers · team & channel management · automated retention · periodic Excel reporting.",
      },
      {
        title: "Custom AI engine",
        text: "ANN no-show & 30-day churn prediction · NAS architecture search · RL Q-table · configurable GLM LLM.",
      },
      {
        title: "Offline voice assistant",
        text: "3-step ASR pipeline · consulting quality scored against a rubric.",
      },
      {
        title: "Operations suite",
        text: "POS cashiering · 9-module BI · operations dashboard · R2/S3 storage.",
      },
    ],
  },
];

const skillGroups = [
  {
    icon: BrainCircuit,
    title: "AI & LLM Engineering",
    skills: ["LLM APIs", "RAG", "GraphRAG", "Qdrant", "Neo4j", "Multi-agent systems"],
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    skills: ["Node.js", "TypeScript", "Next.js", "Prisma", "PWA"],
  },
  {
    icon: Database,
    title: "Data & Databases",
    skills: ["SQL", "PostgreSQL", "Supabase", "Excel export pipelines"],
  },
  {
    icon: Gauge,
    title: "Dashboards & BI",
    skills: ["Realtime BI", "Operations dashboards", "9-module BI suites"],
  },
  {
    icon: Target,
    title: "Machine Learning",
    skills: ["Python", "Pandas", "Statistics", "ANN / NAS", "RL Q-table"],
  },
  {
    icon: Boxes,
    title: "Infrastructure",
    skills: ["PM2", "Caddy", "Bun", "Git", "R2/S3 storage"],
  },
];

const education = [
  {
    title: "Data Analytics",
    text: "Data collection from SQL / Excel / API / web scraping → cleaning → analysis → visualization.",
  },
  {
    title: "Machine Learning",
    text: "Confusion matrix, classification & regression metrics.",
  },
  {
    title: "Deep Learning",
    text: "Neural networks, backpropagation, activation functions.",
  },
  {
    title: "Math for AI",
    text: "Linear regression, loss functions.",
  },
];

const languages = [
  { name: "Vietnamese", level: "Native" },
  { name: "English", level: "Technical reading" },
];

const interests = [
  "Machine-learning algorithm research",
  "AGI system architecture",
  "Kaggle competitions",
  "Market data analysis",
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#competitions", label: "Competitions" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

/* Mobile-first inline nav — no hamburger needed for a one-page portfolio */
const mobileNavLinks = [
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

/* Shared class for dark-friendly outline buttons (fixes white-on-white bug) */
const outlineDark =
  "border-zinc-700 bg-zinc-900/80 text-zinc-200 hover:bg-zinc-800 hover:border-emerald-500/50 hover:text-emerald-400";

/* --------------------------------- Motion --------------------------------- */

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

/* ------------------------------ Sub-components ---------------------------- */

function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 space-y-3">
      <motion.p
        {...fadeUp}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400"
      >
        {kicker}
      </motion.p>
      <motion.h2
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="max-w-2xl text-balance text-base leading-relaxed text-zinc-400"
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
  index,
}: {
  icon: typeof Code2;
  value: string;
  label: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
    >
      <Card className="h-full border-zinc-800/80 bg-zinc-900/60 backdrop-blur transition-colors hover:border-emerald-500/40">
        <CardContent className="flex flex-col gap-1.5 p-4 sm:gap-2 sm:p-5">
          <Icon className="h-5 w-5 text-emerald-400" aria-hidden="true" />
          <p className="text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
            {value}
          </p>
          <p className="text-xs text-zinc-400 sm:text-sm">{label}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.article
      {...fadeUp}
      transition={{ duration: 0.55 }}
      className="group relative h-full"
    >
      <Card className="h-full overflow-hidden border-zinc-800/80 bg-zinc-900/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_0_40px_-12px_rgba(16,185,129,0.25)]">
        {/* Visual proof — dashboard preview */}
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-zinc-800/80 bg-zinc-950">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/10 to-transparent"
          />
          <span className="absolute left-4 top-4 rounded-md bg-zinc-950/70 px-2 py-1 font-mono text-xs text-emerald-400 backdrop-blur">
            {project.number}
          </span>
          <Badge
            className={cn(
              "absolute right-4 top-4 border backdrop-blur",
              project.statusVariant === "live"
                ? "border-emerald-500/50 bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/20"
                : "border-zinc-600/60 bg-zinc-950/70 text-zinc-300 hover:bg-zinc-950/70"
            )}
          >
            {project.status}
          </Badge>
        </div>

        <CardHeader className="space-y-3 p-6 pb-4">
          <CardTitle className="text-xl leading-snug text-zinc-50 sm:text-2xl">
            {project.title}
          </CardTitle>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-zinc-800/80 font-mono text-[11px] font-normal text-zinc-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent className="space-y-5 p-6 pt-0">
          <p className="text-balance text-sm leading-relaxed text-zinc-400">
            {project.summary}
          </p>

          {/* Scannable metric strip */}
          <dl className="grid grid-cols-3 gap-2 rounded-lg border border-zinc-800 bg-zinc-950/60 p-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col items-center gap-0.5 text-center"
              >
                <dd className="text-base font-semibold text-emerald-300 sm:text-lg">
                  {metric.value}
                </dd>
                <dt className="text-[11px] leading-tight text-zinc-500">
                  {metric.label}
                </dt>
              </div>
            ))}
          </dl>

          <ul className="space-y-3">
            {project.features.map((feature) => (
              <li key={feature.title} className="flex gap-3">
                <BadgeCheck
                  className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400/90"
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-zinc-300">
                  <span className="font-medium text-zinc-100">
                    {feature.title}
                  </span>
                  <span className="text-zinc-400"> — {feature.text}</span>
                </p>
              </li>
            ))}
          </ul>

          {/* Card CTA — clear affordance */}
          {project.link ? (
            <Button
              asChild
              variant="outline"
              size="sm"
              className={cn("w-full", outlineDark)}
            >
              <a href={project.link} target="_blank" rel="noreferrer noopener">
                {project.cta}
                <ArrowUpRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          ) : (
            <Button
              asChild
              variant="outline"
              size="sm"
              className={cn("w-full", outlineDark)}
            >
              <a href={profile.mailto}>
                {project.cta}
                <ArrowUpRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.article>
  );
}

function CompetitionCard({
  competition,
}: {
  competition: (typeof competitions)[number];
}) {
  return (
    <motion.article
      {...fadeUp}
      transition={{ duration: 0.55 }}
      className="group relative h-full"
    >
      <Card
        className={cn(
          "h-full border-zinc-800/80 bg-zinc-900/60 backdrop-blur transition-all duration-300 hover:-translate-y-1",
          competition.highlight
            ? "hover:border-emerald-500/60 hover:shadow-[0_0_40px_-12px_rgba(16,185,129,0.3)]"
            : "hover:border-zinc-600"
        )}
      >
        <CardHeader className="space-y-3 p-6 pb-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Trophy
                className={cn(
                  "h-5 w-5",
                  competition.highlight ? "text-amber-400" : "text-zinc-500"
                )}
                aria-hidden="true"
              />
              <Badge
                variant="outline"
                className="border-zinc-700 font-mono text-[11px] font-normal text-zinc-400"
              >
                {competition.category}
              </Badge>
            </div>
            {competition.highlight ? (
              <Badge className="bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/15">
                Solo flagship
              </Badge>
            ) : null}
          </div>
          <CardTitle className="text-lg leading-snug text-zinc-50">
            {competition.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-6 pt-0">
          <div className="flex items-baseline justify-between gap-2">
            <p
              className={cn(
                "text-2xl font-semibold tracking-tight",
                competition.highlight ? "text-emerald-300" : "text-zinc-100"
              )}
            >
              {competition.result}
            </p>
            <p className="font-mono text-xs text-zinc-500">
              {competition.detail}
            </p>
          </div>
          <div className="space-y-2">
            <Progress
              value={competition.top}
              className="h-1.5 bg-zinc-800"
              aria-label={`Finished in top ${competition.top} percent`}
            />
            <p className="text-xs text-zinc-500">
              {competition.teams} · finished in the top {competition.top}%
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
}

/* -------------------------------- Portfolio ------------------------------- */

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 antialiased selection:bg-emerald-500/30">
      {/* ------------------------------- Navigation ------------------------------ */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-all duration-300",
          scrolled
            ? "border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md"
            : "border-transparent bg-transparent"
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6"
        >
          <a
            href="#top"
            className="flex items-center gap-2.5 font-semibold tracking-tight text-zinc-50"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 font-mono text-sm font-bold text-emerald-400"
              aria-hidden="true"
            >
              NV
            </span>
            <span className="hidden sm:inline">Nguyễn Quốc Việt</span>
            <span className="sr-only sm:hidden">
              Nguyễn Quốc Việt — home
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-sm text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile inline nav — no hamburger for a one-page portfolio */}
          <ul className="flex items-center gap-1 md:hidden">
            {mobileNavLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-emerald-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button
            asChild
            size="sm"
            className="hidden bg-emerald-500 text-zinc-950 hover:bg-emerald-400 md:inline-flex"
          >
            <a href={profile.mailto}>
              <Mail className="mr-1.5 h-4 w-4" aria-hidden="true" />
              Hire me
            </a>
          </Button>
        </nav>
      </header>

      <main id="top" className="flex-1">
        {/* --------------------------------- Hero ---------------------------------- */}
        <section
          aria-label="Introduction"
          className="relative overflow-hidden border-b border-zinc-800/60"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_55%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(63,63,70,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(63,63,70,0.35)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
          />

          <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:pt-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl space-y-6"
            >
              <Badge
                variant="outline"
                className="max-w-full border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300"
              >
                <Sparkles className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                <span className="text-wrap-balance">
                  ARC Prize 2026 (ARC-AGI-3) — solo top 13.4%
                  <span className="hidden sm:inline"> · 658 / 4,923</span>
                </span>
              </Badge>

              <div className="space-y-4">
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
                  {profile.name}
                </h1>
                <p className="font-mono text-lg text-emerald-400 sm:text-xl">
                  {profile.role}
                </p>
                <p className="max-w-2xl text-balance text-base leading-relaxed text-zinc-400 sm:text-lg">
                  {profile.headline}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  asChild
                  className="bg-emerald-500 px-6 py-6 text-zinc-950 hover:bg-emerald-400"
                >
                  <a href="#projects">
                    View my work
                    <ArrowUpRight
                      className="ml-1.5 h-4 w-4"
                      aria-hidden="true"
                    />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className={cn("px-6 py-6", outlineDark)}
                >
                  <a
                    href={profile.cvPath}
                    download="Nguyen-Quoc-Viet-CV.pdf"
                  >
                    <Download className="mr-1.5 h-4 w-4" aria-hidden="true" />
                    Download CV
                  </a>
                </Button>
              </div>

              {/* Social proof — pill-styled so they read as tappable links */}
              <ul className="flex flex-wrap items-center gap-2 pt-2">
                {[
                  { href: profile.github, icon: Github, label: "GitHub" },
                  { href: profile.kaggle, icon: Trophy, label: "Kaggle" },
                  { href: profile.devpost, icon: Globe, label: "Devpost" },
                ].map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/70 px-3.5 py-1.5 text-sm text-zinc-300 transition-colors hover:border-emerald-500/50 hover:text-emerald-400"
                    >
                      <social.icon className="h-4 w-4" aria-hidden="true" />
                      {social.label}
                      <ArrowUpRight
                        className="h-3 w-3 text-zinc-600"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-1.5 pl-1 text-sm text-zinc-500">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {profile.location}
                </li>
              </ul>
            </motion.div>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 lg:grid-cols-4 lg:gap-4">
              {stats.map((stat, index) => (
                <StatCard key={stat.label} index={index} {...stat} />
              ))}
            </div>
          </div>
        </section>

        {/* --------------------------------- About --------------------------------- */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="border-b border-zinc-800/60"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <SectionHeading
              kicker="01 · About"
              title="Careful judgment, hands-on engineering"
              description={profile.seeking}
            />
            <div className="grid gap-6 lg:grid-cols-3">
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.55 }}
                className="lg:col-span-2"
              >
                <Card className="h-full border-zinc-800/80 bg-zinc-900/60 backdrop-blur">
                  <CardContent className="space-y-4 p-6 text-base leading-relaxed text-zinc-300 sm:p-8">
                    <p>
                      I love data analysis and AI system architecture — and I
                      build AI-powered apps that save businesses real hours.
                      Over the past year I have designed, built and run many
                      production applications and systems (
                      <span className="font-semibold text-emerald-300">
                        ~640,000+ lines of code
                      </span>
                      ) — AI CRM, a multi-agent AI platform, voice assistants.
                    </p>
                    <p>
                      I competed in several hackathons and Kaggle contests,
                      finishing{" "}
                      <span className="font-semibold text-emerald-300">
                        ARC Prize 2026 (ARC-AGI-3) solo at 658 / 4,923
                      </span>{" "}
                      — top 13.4% on an abstract-reasoning benchmark.
                    </p>
                    <p>
                      What I am looking for now: remote, flexible AI work
                      (10–40 h/week) in{" "}
                      <span className="font-semibold text-zinc-100">
                        model evaluation, rubric-based review and AI-assisted
                        development
                      </span>{" "}
                      — where careful judgment and hands-on engineering turn
                      into measurable model quality.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.55, delay: 0.12 }}
                className="space-y-6"
              >
                <Card className="border-zinc-800/80 bg-zinc-900/60 backdrop-blur">
                  <CardHeader className="pb-3 p-6">
                    <CardTitle className="flex items-center gap-2 text-base text-zinc-100">
                      <Bot className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                      Availability
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 p-6 pt-0 text-sm">
                    <div className="flex items-center gap-2">
                      <span
                        className="relative flex h-2.5 w-2.5"
                        aria-hidden="true"
                      >
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      </span>
                      <span className="text-zinc-200">
                        Available for remote work
                      </span>
                    </div>
                    <p className="text-zinc-400">
                      10–40 h/week · model evaluation · rubric-based review ·
                      AI-assisted development
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-zinc-800/80 bg-zinc-900/60 backdrop-blur">
                  <CardHeader className="pb-3 p-6">
                    <CardTitle className="flex items-center gap-2 text-base text-zinc-100">
                      <Globe className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                      Languages
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 p-6 pt-0">
                    {languages.map((language) => (
                      <div key={language.name} className="text-sm">
                        <p className="font-medium text-zinc-200">
                          {language.name}
                        </p>
                        <p className="text-zinc-500">{language.level}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* -------------------------------- Projects -------------------------------- */}
        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="border-b border-zinc-800/60 bg-zinc-900/20"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <SectionHeading
              kicker="02 · Projects"
              title="Flagship systems, built solo"
              description="Two production-grade systems designed, built and run end-to-end — plus a wider portfolio of apps and hackathon entries."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>

            <motion.div {...fadeUp} transition={{ duration: 0.55 }} className="mt-6">
              <Card className="border-dashed border-zinc-800 bg-transparent transition-colors hover:border-emerald-500/40">
                <CardContent className="flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15">
                      <Award className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium text-zinc-100">
                        More products & hackathons
                      </p>
                      <p className="text-sm text-zinc-400">
                        A portfolio of additional production apps and AI systems
                        beyond the two flagships — plus several hackathon
                        entries.
                      </p>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className={cn("shrink-0", outlineDark)}
                  >
                    <a href={profile.devpost} target="_blank" rel="noreferrer noopener">
                      Explore on Devpost
                      <ArrowUpRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* ------------------------------ Competitions ------------------------------ */}
        <section
          id="competitions"
          aria-labelledby="competitions-heading"
          className="border-b border-zinc-800/60"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <SectionHeading
              kicker="03 · Competitions"
              title="Kaggle & AI benchmarks"
              description="All 3 contests entered solo — handling the full analysis, modeling and submissions alone."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {competitions.map((competition) => (
                <CompetitionCard
                  key={competition.name}
                  competition={competition}
                />
              ))}
            </div>
          </div>
        </section>

        {/* --------------------------------- Skills --------------------------------- */}
        <section
          id="skills"
          aria-labelledby="skills-heading"
          className="border-b border-zinc-800/60 bg-zinc-900/20"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <SectionHeading
              kicker="04 · Skills"
              title="Full AI application stack"
              description="From LLM orchestration and RAG pipelines to production infrastructure."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group, groupIndex) => (
                <motion.div
                  key={group.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: groupIndex * 0.06 }}
                >
                  <Card className="h-full border-zinc-800/80 bg-zinc-900/60 backdrop-blur transition-colors hover:border-emerald-500/40">
                    <CardHeader className="space-y-3 p-5 pb-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15">
                        <group.icon
                          className="h-4 w-4 text-emerald-400"
                          aria-hidden="true"
                        />
                      </div>
                      <CardTitle className="text-base text-zinc-100">
                        {group.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2 p-5 pt-1">
                      {group.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-zinc-800/80 font-mono text-[11px] font-normal text-zinc-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------- Education ------------------------------- */}
        <section
          id="education"
          aria-labelledby="education-heading"
          className="border-b border-zinc-800/60"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <SectionHeading
              kicker="05 · Education"
              title="Google Skills Program"
              description="Data Analytics · Machine Learning · Deep Learning · Math for AI."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.55 }}
                className="lg:col-span-2"
              >
                <Card className="h-full border-zinc-800/80 bg-zinc-900/60 backdrop-blur">
                  <CardHeader className="space-y-2 p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/15">
                        <GraduationCap
                          className="h-5 w-5 text-emerald-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-base text-zinc-100">
                          Google Skills — Data Analytics · ML · DL · Math for AI
                        </CardTitle>
                        <CardDescription className="text-sm text-zinc-500">
                          Certified curriculum
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 p-6 pt-0">
                    {education.map((item) => (
                      <div
                        key={item.title}
                        className="flex gap-3 border-l-2 border-emerald-500/30 pl-4"
                      >
                        <div className="text-sm">
                          <p className="font-medium text-zinc-100">
                            {item.title}
                          </p>
                          <p className="text-zinc-400">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.55, delay: 0.12 }}
              >
                <Card className="h-full border-zinc-800/80 bg-zinc-900/60 backdrop-blur">
                  <CardHeader className="space-y-2 p-6">
                    <CardTitle className="flex items-center gap-2 text-base text-zinc-100">
                      <Target className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                      Interests
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2 p-6 pt-0">
                    {interests.map((interest) => (
                      <Badge
                        key={interest}
                        variant="secondary"
                        className="bg-zinc-800/80 text-xs font-normal text-zinc-300"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* -------------------------------- Contact -------------------------------- */}
        <section id="contact" aria-labelledby="contact-heading">
          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.08),transparent_60%)]"
            />
            <div className="relative space-y-8 text-center">
              <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="space-y-4">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400">
                  06 · Contact
                </p>
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                  Let&apos;s build something measurable
                </h2>
                <p className="mx-auto max-w-xl text-balance text-base leading-relaxed text-zinc-400">
                  Remote, flexible AI work — model evaluation, rubric-based
                  review and AI-assisted development. Replies within one
                  business day.
                </p>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                <Button
                  asChild
                  className="bg-emerald-500 px-6 py-6 text-zinc-950 hover:bg-emerald-400"
                >
                  <a href={profile.mailto}>
                    <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                    Email me
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className={cn("px-6 py-6", outlineDark)}
                >
                  <a href={profile.cvPath} download="Nguyen-Quoc-Viet-CV.pdf">
                    <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                    Download CV
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className={cn("px-6 py-6", outlineDark)}
                >
                  <a href={profile.github} target="_blank" rel="noreferrer noopener">
                    <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                    GitHub
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className={cn("px-6 py-6", outlineDark)}
                >
                  <a href={profile.kaggle} target="_blank" rel="noreferrer noopener">
                    <Trophy className="mr-2 h-4 w-4" aria-hidden="true" />
                    Kaggle
                  </a>
                </Button>
              </motion.div>

              <motion.ul
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-400"
              >
                <li className="flex items-center gap-1.5">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {profile.phone}
                </li>
                <li className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {profile.location}
                </li>
                <li>
                  <a
                    href={profile.devpost}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-emerald-400"
                  >
                    <Globe className="h-4 w-4" aria-hidden="true" />
                    devpost.com/vietnq130593
                  </a>
                </li>
              </motion.ul>
            </div>
          </div>
        </section>
      </main>

      {/* --------------------------------- Footer -------------------------------- */}
      <footer className="mt-auto border-t border-zinc-800/60 bg-zinc-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-sm text-zinc-500 sm:flex-row sm:px-6 sm:text-left">
          <p>© {new Date().getFullYear()} Nguyễn Quốc Việt</p>
          <p className="font-mono text-xs">
            AI Application Engineer · Ho Chi Minh City, Vietnam
          </p>
        </div>
      </footer>
    </div>
  );
}

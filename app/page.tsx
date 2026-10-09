"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Boxes,
  BrainCircuit,
  CloudCog,
  Coffee,
  DatabaseZap,
  FileText,
  Gamepad2,
  Mail,
  Network,
  Plane,
  ServerCog,
} from "lucide-react";

type Tab = "about" | "experience" | "research" | "writing";

const tabs: { id: Tab; label: string }[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "writing", label: "Writing & Teaching" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("about");
  const [photoOpen, setPhotoOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#EFE6DC] px-4 py-8 text-[#2A211B] md:px-8 md:py-12">

      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-[260px_1fr]">

        {/* PROFILE PANEL */}
        <aside className="h-fit rounded-[28px] border border-[#DECFC3] bg-[#FFF9F2] p-6 shadow-[0_20px_50px_rgba(70,48,35,0.08)] md:sticky md:top-8">

          <button
            onClick={() => setPhotoOpen(true)}
            className="group inline-block cursor-zoom-in"
            aria-label="Enlarge profile photo"
          >
            <img
              src="/arya.jpg"
              alt="Arya Krishnan"
              className="h-24 w-24 rounded-2xl border border-[#DECFC3] object-cover shadow-sm transition duration-300 group-hover:scale-[1.03] group-hover:shadow-md"
            />
          </button>

          <div className="mt-5 flex items-center gap-2">
            <h1 className="whitespace-nowrap text-[22px] font-semibold tracking-tight">
              Arya Krishnan
            </h1>

            <span className="shrink-0 rounded-full bg-[#F1E5DC] px-2 py-0.5 text-[11px] font-medium text-[#8B7466]">
              she/her
            </span>
          </div>

          <p className="mt-2 text-sm font-semibold text-[#A45236]">
            Software Engineer
          </p>

          <p className="mt-1 text-xs font-medium leading-5 text-[#7A675B]">
            Distributed Systems · Cloud Infrastructure · Networking
          </p>

          <div className="my-6 h-px bg-[#E7D9CF]" />

          <div className="space-y-4 text-sm leading-6 text-[#64544A]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9B8577]">
                Education
              </p>
              <p className="mt-1">MSCS @ UMass Amherst</p>
              <p className="text-[#8B7669]">May 2027</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9B8577]">
                Previously
              </p>
              <p className="mt-1">
                <span className="block">Google · Rubrik</span>
            <span className="block">Flipkart (Walmart Group)</span>
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9B8577]">
                Location
              </p>
              <p className="mt-1">
                Amherst, Massachusetts
              </p>
            </div>

          </div>

          <div className="my-6 h-px bg-[#E7D9CF]" />

          <div className="space-y-3">

            <a
              href="/Arya_Krishnan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-[#A45236] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#8F432E]"
            >
              <FileText size={17} />
              Resume
            </a>

            <a
              href="mailto:aryakrishnan2108@gmail.com"
              className="flex items-center gap-3 rounded-xl border border-[#D8C6B8] bg-white px-4 py-3 text-xs font-medium text-[#493A31] transition hover:bg-[#FFF2E8]"
            >
              <Mail size={16} className="shrink-0" />
              aryakrishnan2108@gmail.com
            </a>

            <a
              href="mailto:aryakrishnan@umass.edu"
              className="flex items-center gap-3 rounded-xl border border-[#D8C6B8] bg-white px-4 py-3 text-xs font-medium text-[#493A31] transition hover:bg-[#FFF2E8]"
            >
              <Mail size={16} className="shrink-0" />
              aryakrishnan@umass.edu
            </a>

            <a
              href="https://www.linkedin.com/in/arya-krishnan-9371b5181"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[#D8C6B8] bg-white px-4 py-3 text-sm font-medium text-[#493A31] transition hover:bg-[#FFF2E8]"
            >
              <span className="flex h-[17px] w-[17px] items-center justify-center rounded-sm bg-[#493A31] text-[9px] font-bold text-white">
                in
              </span>
              LinkedIn
            </a>

          </div>

          <div className="mt-7 flex items-center gap-2 text-sm text-[#8C7567]">
            <Coffee size={17} />
            Always happy to chat.
          </div>

        </aside>

        {/* MAIN WINDOW */}
        <section className="overflow-hidden rounded-[28px] border border-[#DECFC3] bg-[#FFF9F2] shadow-[0_20px_50px_rgba(70,48,35,0.08)]">

          {/* WINDOW BAR */}
          <div className="flex flex-col gap-4 border-b border-[#E5D6CA] px-6 py-5 md:flex-row md:items-center md:justify-between">

            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-[#C8725A]" />
              <div className="h-3 w-3 rounded-full bg-[#D4A55E]" />
              <div className="h-3 w-3 rounded-full bg-[#7A9A87]" />
            </div>

            <nav className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                    activeTab === tab.id
                      ? "bg-[#A45236] text-white"
                      : "text-[#756055] hover:bg-[#F4E9DF]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

          </div>

          <div className="min-h-[680px] p-7 md:p-10">

            {/* ABOUT */}
            {activeTab === "about" && (
              <div className="animate-fade">

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A45236]">
                  Hello
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                  I build infrastructure, networking, and backend systems.
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5D4D43]">
                  I&apos;ve worked on cloud networking at Google, platform
                  infrastructure at Rubrik, and backend and data systems at
                  Flipkart. I&apos;m especially drawn to problems around
                  networking, distributed systems, reliability, and the
                  infrastructure other engineers depend on.
                </p>

                {/* ABOUT ME */}
                <div className="mt-10 rounded-2xl border border-[#E2D3C8] bg-white p-6 md:p-7">

                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4E7466]">
                    A little about me
                  </p>

                  <p className="mt-4 max-w-3xl leading-7 text-[#625249]">
                    I started my career building backend and data systems at
                    Flipkart, then found myself getting increasingly curious
                    about what happens underneath the application layer. That
                    curiosity took me from backend and data systems into cloud
                    networking at Google, and later, while pursuing my MS at
                    UMass, into platform infrastructure at Rubrik. Grad school
                    has also given me room to keep exploring distributed systems,
                    networking, security, and ML infrastructure.
                  </p>

                  <p className="mt-4 max-w-3xl leading-7 text-[#625249]">
                    Outside of engineering, I love traveling, wandering into
                    new cafés, and getting far too invested in video games.
                    I think I like exploring cities for roughly the same reason
                    I like exploring systems: there&apos;s always another layer
                    underneath the obvious one.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">

                    <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF1E7] px-4 py-2 text-sm font-medium text-[#8E4B35]">
                      <Plane size={16} />
                      Traveling
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full bg-[#F3EBE0] px-4 py-2 text-sm font-medium text-[#735A42]">
                      <Coffee size={16} />
                      Exploring cafés
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full bg-[#EDF4F0] px-4 py-2 text-sm font-medium text-[#416657]">
                      <Gamepad2 size={16} />
                      Video games
                    </div>

                  </div>

                </div>

                {/* FOCUS */}
                <div className="mt-10">

                  <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#A45236]">
                    I tend to gravitate toward
                  </p>

                  <div className="grid gap-4 md:grid-cols-2">

                    <div className="rounded-2xl border border-[#E2D3C8] bg-[#FFFDF9] p-5">
                      <ServerCog size={20} className="text-[#A45236]" />
                      <h3 className="mt-3 font-semibold">
                        Distributed Systems
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#62534B]">
                        Reliability, observability, failure handling, and
                        systems that keep working when things go wrong.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#E2D3C8] bg-[#FFFDF9] p-5">
                      <Network size={20} className="text-[#4E7466]" />
                      <h3 className="mt-3 font-semibold">
                        Networking & Cloud Infrastructure
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#62534B]">
                        Kubernetes, Cilium/eBPF, BGP, multi-cluster networking,
                        and the infrastructure connecting distributed services.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#E2D3C8] bg-[#FFFDF9] p-5">
                      <DatabaseZap size={20} className="text-[#7A673B]" />
                      <h3 className="mt-3 font-semibold">
                        Backend & Data
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#62534B]">
                        Microservices, streaming systems, CDC, and production
                        data infrastructure.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#E2D3C8] bg-[#FFFDF9] p-5">
                      <BrainCircuit size={20} className="text-[#A45236]" />
                      <h3 className="mt-3 font-semibold">
                        ML Infrastructure
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#62534B]">
                        Distributed ML systems, developer tooling, and the
                        infrastructure underneath AI workloads.
                      </p>
                    </div>

                  </div>

                </div>

                {/* ACADEMIC INTERESTS */}
                <div className="mt-12">

                  <div className="mb-5 flex items-end justify-between gap-4">

                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4E7466]">
                        Academic interests
                      </p>

                      <h3 className="mt-2 text-xl font-semibold">
                        A few ideas I&apos;ve enjoyed exploring academically.
                      </h3>
                    </div>

                    <button
                      onClick={() => setActiveTab("research")}
                      className="shrink-0 text-sm font-medium text-[#A45236] hover:underline"
                    >
                      View all →
                    </button>

                  </div>

                  <div className="grid gap-4 md:grid-cols-2">

                    <a
                      href="https://www.sciencedirect.com/science/article/pii/S0167739X25001736"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-2xl border border-[#E2D3C8] bg-[#FFFDF9] p-5 transition hover:-translate-y-1"
                    >

                      <div className="flex justify-between gap-4">
                        <BrainCircuit className="text-[#A45236]" size={21} />
                        <ArrowUpRight size={17} className="text-[#A69082]" />
                      </div>

                      <h3 className="mt-4 font-semibold">
                        Hierarchical Federated Learning
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#62534B]">
                        Distributed ML across heterogeneous compute environments.
                      </p>

                    </a>

                    <div className="flex flex-wrap items-center gap-3">
                      <div className="group rounded-2xl border border-[#E2D3C8] bg-[#FFFDF9] p-5 transition hover:-translate-y-1 relative">
                  <a
                    href="https://ieeexplore.ieee.org/document/9179578"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-0 rounded-2xl"
                    aria-label="Read Robotic Grasp Detection paper"
                  />

                  <div className="relative z-10 pointer-events-none">



                      <div className="relative flex justify-between gap-4">
                    <a
                      href="https://ieeexplore.ieee.org/document/9179578"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-0 rounded-2xl"
                      aria-label="Read Robotic Grasp Detection paper"
                    />

                        <Boxes className="text-[#4E7466]" size={21} />
                        <ArrowUpRight size={17} className="text-[#A69082]" />
                      
                    
                  </div>

                      <h3 className="mt-4 font-semibold">
                        Robotic Grasp Detection
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#62534B]">
                        Representation learning for robotic grasp detection.
                      </p>

                    <a
                      href="https://sites.google.com/view/wicvworkshop-cvpr2020/program/poster-presentations"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto mt-5 inline-block text-sm font-medium text-[#4E7466] transition hover:text-[#A45236]"
                    >
                      Women in Computer Vision @ CVPR 2020 — Poster ↗
                    </a>
                  </div>
                </div>

                      <a
                        href="https://sites.google.com/view/wicvworkshop-cvpr2020/program/poster-presentations"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-[#A45236] transition hover:opacity-70"
                      >
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            )}

            {/* EXPERIENCE */}
            {activeTab === "experience" && (
              <section className="animate-fade">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A45236]">
                  Experience
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#2A211B] md:text-3xl">
                  Production systems I&apos;ve helped build and run.
                </h2>

                <div className="relative mt-10 space-y-5 before:absolute before:bottom-5 before:left-[7px] before:top-5 before:w-px before:bg-[#DCCBC0]">

                  {/* Rubrik */}
                  <div className="relative pl-8">
                    <span className="absolute left-0 top-6 h-[15px] w-[15px] rounded-full border-[3px] border-[#F7F1EB] bg-[#728C73]" />

                    <details className="group rounded-2xl border border-[#DED0C6] bg-[#FBF7F3] p-5 shadow-sm transition hover:shadow-md">
                      <summary className="cursor-pointer list-none">
                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                          <div>
                            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                              <h3 className="flex items-center gap-2 text-xl font-semibold text-[#2A211B]">
                                <img
                                  src="/rubrik-logo.png"
                                  alt=""
                                  className="h-5 w-5 shrink-0 object-contain"
                                />
                                Rubrik
                              </h3>
                              <span className="text-sm text-[#756359]">
                                Software Engineer Intern
                              </span>
                            </div>

                            <p className="mt-1 text-sm font-medium text-[#728C73]">
                              Platform Infrastructure · Security Cloud
                            </p>
                          </div>

                          <span className="text-xs font-medium text-[#756359]">
                            2026
                          </span>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {[
                            "Service infrastructure",
                            "Developer tooling",
                            "AI-assisted workflows",
                          ].map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-[#E1D4CA] bg-white px-3 py-1 text-xs font-medium text-[#65554C]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                          <span className="rounded-lg bg-[#E5ECE3] px-3 py-1.5 text-xs font-semibold text-[#536B55]">
                            ~200 distributed services
                          </span>

                          <span className="text-xs text-[#756359] transition group-open:rotate-180">
                            Details ↓
                          </span>
                        </div>

                        <p className="mt-3 text-xs leading-5 text-[#756359]">
                          Go · Python · Kubernetes · gRPC · Bazel · GCP · Claude Code
                        </p>
                      </summary>

                      <div className="mt-5 border-t border-[#E6DAD2] pt-5 text-sm leading-7 text-[#65554C]">
                        Worked on platform infrastructure for Rubrik Security
                        Cloud, standardizing infrastructure dependencies,
                        resources, and runtime configuration across roughly 200
                        distributed services. Built AI-assisted platform tooling
                        for service analysis, code generation, validation, and
                        migration workflows.
                      </div>
                    </details>
                  </div>

                  {/* Google */}
                  <div className="relative pl-8">
                    <span className="absolute left-0 top-6 h-[15px] w-[15px] rounded-full border-[3px] border-[#F7F1EB] bg-[#A45236]" />

                    <details className="group rounded-2xl border border-[#DED0C6] bg-[#FBF7F3] p-5 shadow-sm transition hover:shadow-md">
                      <summary className="cursor-pointer list-none">
                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                          <div>
                            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                              <h3 className="flex items-center gap-2 text-xl font-semibold text-[#2A211B]">
                                <img
                                  src="/google-logo.png"
                                  alt=""
                                  className="h-5 w-5 shrink-0 object-contain"
                                />
                                Google
                              </h3>
                              <span className="text-sm text-[#756359]">
                                Software Engineer
                              </span>
                            </div>

                            <p className="mt-1 text-sm font-medium text-[#A45236]">
                              Multi-cluster Cloud Networking
                            </p>
                          </div>

                          <span className="text-xs font-medium text-[#756359]">
                            2024–2025
                          </span>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {[
                            "Multi-cluster networking",
                            "Production debugging",
                            "SLOs & observability",
                          ].map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-[#E1D4CA] bg-white px-3 py-1 text-xs font-medium text-[#65554C]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                          <span className="rounded-lg bg-[#F2E1D6] px-3 py-1.5 text-xs font-semibold text-[#8F452F]">
                            99.5%+ reliability
                          </span>

                          <span className="text-xs text-[#756359] transition group-open:rotate-180">
                            Details ↓
                          </span>
                        </div>

                        <p className="mt-3 text-xs leading-5 text-[#756359]">
                          Go · Kubernetes · GKE · Cilium/eBPF · BGP · Hubble
                        </p>
                      </summary>

                      <div className="mt-5 border-t border-[#E6DAD2] pt-5 text-sm leading-7 text-[#65554C]">
                        Built and operated networking infrastructure for Google
                        Distributed Cloud Hosted, including Kubernetes,
                        Cilium/eBPF, BGP, ClusterMesh, VXLAN, VRFs, and IP
                        tunneling. Debugged production issues across routing,
                        MTU mismatches, pod IP exhaustion, DNS, TLS, and service
                        reachability, and built observability around control-plane
                        and data-plane reliability.
                      </div>
                    </details>
                  </div>

                  {/* Flipkart */}
                  <div className="relative pl-8">
                    <span className="absolute left-0 top-6 h-[15px] w-[15px] rounded-full border-[3px] border-[#F7F1EB] bg-[#B8925C]" />

                    <details className="group rounded-2xl border border-[#DED0C6] bg-[#FBF7F3] p-5 shadow-sm transition hover:shadow-md">
                      <summary className="cursor-pointer list-none">
                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                          <div>
                            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                              <h3 className="flex items-center gap-2 text-xl font-semibold text-[#2A211B]">
                                <img
                                  src="/flipkart-logo.png"
                                  alt=""
                                  className="h-5 w-5 shrink-0 object-contain"
                                />
                                Flipkart (Walmart)
                              </h3>
                              <span className="text-sm text-[#756359]">
                                Intern → SDE-1 → SDE-2
                              </span>
                            </div>

                            <p className="mt-1 text-sm font-medium text-[#9A7442]">
                              Marketplace Backend · Streaming Data
                            </p>
                          </div>

                          <span className="text-xs font-medium text-[#756359]">
                            2022–2024
                          </span>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {[
                            "Marketplace backend",
                            "CDC streaming",
                            "Data infrastructure",
                          ].map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-[#E1D4CA] bg-white px-3 py-1 text-xs font-medium text-[#65554C]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                          <span className="rounded-lg bg-[#F0E5D2] px-3 py-1.5 text-xs font-semibold text-[#806234]">
                            ~9K RPM
                          </span>

                          <span className="text-xs text-[#756359] transition group-open:rotate-180">
                            Details ↓
                          </span>
                        </div>

                        <p className="mt-3 text-xs leading-5 text-[#756359]">
                          Java · GCP · GKE · Pub/Sub · Dataflow · Debezium · BigQuery
                        </p>
                      </summary>

                      <div className="mt-5 border-t border-[#E6DAD2] pt-5 text-sm leading-7 text-[#65554C]">
                        Built marketplace backend services handling roughly
                        9K requests per minute and supporting growth in sellers
                        and serviceable areas. Also built CDC-based streaming
                        pipelines from SQL Server through Debezium, Pub/Sub, and
                        Dataflow into BigQuery for downstream analytics.
                      </div>
                    </details>
                  </div>

                </div>
              </section>
            )}

            {activeTab === "research" && (
              <div className="animate-fade">

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4E7466]">
                  Academic interests
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  A few ideas I&apos;ve enjoyed exploring academically.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-[#625249]">
                  My academic work has mostly lived at the intersection of
                  machine learning, distributed computation, and representation
                  learning.
                </p>

                <div className="mt-9 grid gap-5 md:grid-cols-2">

                  <a
                    href="https://www.sciencedirect.com/science/article/pii/S0167739X25001736"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-[#E2D3C8] bg-white p-6 transition hover:-translate-y-1"
                  >

                    <div className="flex justify-between">

                      <BrainCircuit
                        size={23}
                        className="text-[#A45236]"
                      />

                      <ArrowUpRight
                        size={18}
                        className="text-[#A69082]"
                      />

                    </div>

                    <h3 className="mt-5 text-xl font-semibold">
                      Hierarchical Federated Learning
                    </h3>

                    <p className="mt-3 leading-7 text-[#625249]">
                      Secure distributed learning across heterogeneous compute
                      environments using hierarchical and personalized
                      training.
                    </p>

                    <p className="mt-5 text-sm font-medium text-[#A45236]">
                      Future Generation Computer Systems ↗
                    </p>

                  </a>

                  <a
                    href="https://ieeexplore.ieee.org/document/9179578"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-[#E2D3C8] bg-white p-6 transition hover:-translate-y-1"
                  >

                    <div className="flex justify-between">

                      <Boxes
                        size={23}
                        className="text-[#4E7466]"
                      />

                      <ArrowUpRight
                        size={18}
                        className="text-[#A69082]"
                      />

                    </div>

                    <h3 className="mt-5 text-xl font-semibold">
                      Robotic Grasp Detection
                    </h3>

                    <p className="mt-3 leading-7 text-[#625249]">
                      Representation learning for robotic grasp detection in a
                      vector-quantized manifold.
                    </p>

                    <p className="mt-5 text-sm font-medium text-[#4E7466]">
                      WiCV @ CVPR 2020 — Poster ↗
                    </p>

                  </a>

                </div>

              </div>
            )}

            {/* WRITING */}
            {activeTab === "writing" && (
              <section className="animate-fade">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A45236]">
                  Writing & Teaching
                </p>

                <h2 className="mt-3 text-xl font-semibold tracking-tight text-[#2A211B] md:text-2xl">
                  Teaching and technical writing.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#62534B]">
                  I like making technical ideas feel intuitive, and I enjoy
                  working through problems with people through writing,
                  teaching, and discussion.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">

                  {/* UMass */}
                  <div className="rounded-2xl border border-[#DED0C6] bg-[#FBF7F3] p-5 transition hover:shadow-md">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A45236]">
                          Teaching
                        </p>

                        <h3 className="mt-2 text-lg font-semibold text-[#2A211B]">
                          Graduate Teaching Assistant
                        </h3>

                        <p className="mt-1 text-sm font-medium text-[#62534B]">
                          UMass Amherst
                        </p>
                      </div>

                      <span className="rounded-full bg-[#E5ECE3] px-2.5 py-1 text-[11px] font-medium text-[#536B55]">
                        Current
                      </span>
                    </div>

                    <p className="mt-4 text-sm text-[#65554C]">
                      Computer Networking
                    </p>
                  </div>

                  {/* IIIT Allahabad */}
                  <div className="rounded-2xl border border-[#DED0C6] bg-[#FBF7F3] p-5 transition hover:shadow-md">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A45236]">
                          Teaching
                        </p>

                        <h3 className="mt-2 text-lg font-semibold text-[#2A211B]">
                          Teaching Assistant
                        </h3>

                        <p className="mt-1 text-sm font-medium text-[#62534B]">
                          IIIT Allahabad
                        </p>
                      </div>

                      <span className="rounded-full bg-[#F2E1D6] px-2.5 py-1 text-[11px] font-medium text-[#8F452F]">
                        Previously
                      </span>
                    </div>

                    <p className="mt-4 text-sm text-[#65554C]">
                      Object-Oriented Methodology
                    </p>
                  </div>

                  {/* Technical writing */}
                  <a
                    href="https://www.geeksforgeeks.org/profile/arya31?tab=articles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-[#DED0C6] bg-[#FBF7F3] p-5 transition hover:-translate-y-0.5 hover:shadow-md md:col-span-2"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A45236]">
                          Technical Writing
                        </p>

                        <h3 className="mt-2 text-lg font-semibold text-[#2A211B]">
                          Articles & technical explanations
                        </h3>

                        <p className="mt-2 max-w-xl text-sm leading-6 text-[#62534B]">
                          Programming, algorithms, computer science concepts,
                          and practical technical explanations.
                        </p>
                      </div>

                      <span className="mt-1 text-sm text-[#A45236] transition group-hover:translate-x-1">
                        ↗
                      </span>
                    </div>
                  </a>

                </div>
              </section>
            )}

          </div>

        </section>

      </div>

      {photoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setPhotoOpen(false)}
        >
          <button
            onClick={() => setPhotoOpen(false)}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl font-semibold text-[#2A211B] shadow-lg transition hover:bg-white"
            aria-label="Close photo"
          >
            ×
          </button>

          <img
            src="/arya.jpg"
            alt="Arya Krishnan"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-3xl border border-white/20 object-contain shadow-2xl"
          />
        </div>
      )}

    </main>
  );
}

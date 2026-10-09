"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  BookOpenCheck,
  Boxes,
  BrainCircuit,
  Coffee,
  DatabaseZap,
  FileText,
  Gamepad2,
  GitFork,
  GraduationCap,
  Mail,
  Medal,
  Network,
  Plane,
  School,
  ServerCog,
} from "lucide-react";

type Tab = "about" | "education" | "experience" | "research" | "writing";

const tabs: { id: Tab; label: string }[] = [
  { id: "experience", label: "About" },
  { id: "education", label: "Education" },
  { id: "research", label: "Research" },
  { id: "writing", label: "Writing & Teaching" },
  { id: "about", label: "Personal" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("experience");
  const [photoOpen, setPhotoOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#EFE6DC] px-4 py-8 text-[#2A211B] md:px-8 md:py-12">
      <div className="grid w-full max-w-none gap-5 md:grid-cols-[280px_minmax(0,1fr)]">
        {/* PROFILE PANEL */}
        <aside className="h-fit rounded-[28px] border border-[#DECFC3] bg-[#FFF9F2] p-6 shadow-[0_20px_50px_rgba(70,48,35,0.08)] md:sticky md:top-8">
          <div className="flex items-center gap-2">
            <h1 className="whitespace-nowrap text-[22px] font-semibold tracking-tight">
              Arya Krishnan
            </h1>

            <span className="shrink-0 rounded-full bg-[#F1E5DC] px-2 py-0.5 text-[11px] font-medium text-[#8B7466]">
              she/her
            </span>
          </div>

          <button
            onClick={() => setPhotoOpen(true)}
            className="group mt-4 block w-full cursor-zoom-in"
            aria-label="Enlarge profile photo"
          >
            <img
              src="/arya.jpg"
              alt="Arya Krishnan"
              className="h-auto w-full rounded-[22px] border border-[#DECFC3] shadow-sm transition duration-300 group-hover:scale-[1.01] group-hover:shadow-md"
            />
          </button>

          <div className="mt-3 rounded-xl border border-[#DED0C6] bg-white/75 px-3 py-2.5 shadow-[0_6px_16px_rgba(70,48,35,0.04)]">
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#43A46B]" />

              <div>
                <p className="text-[9px] font-semibold uppercase leading-none tracking-[0.18em] text-[#9B8577]">
                  Currently
                </p>
                <p className="mt-1.5 text-xs font-semibold leading-4 text-[#2A211B]">
                  M.S. CS · UMass Amherst
                </p>
                <p className="mt-0.5 text-[11px] leading-4 text-[#8B7669]">
                  Graduating May 2027
                </p>
              </div>
            </div>
          </div>

          <p className="mt-4 text-[15px] font-semibold leading-6 !text-[#3F332C]">
            Software Development Engineer
          </p>

          <p className="mt-1 text-sm font-medium leading-6 !text-[#4A3E36]">
            Distributed Systems · Cloud Infrastructure · Networking
          </p>

          <div className="my-6 h-px bg-[#E7D9CF]" />

          <div className="space-y-5 text-[15px] leading-7 text-[#4A3E36]">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] !text-[#5B5048]">
                Previously
              </p>
              <p className="mt-1 !text-[#4A3E36]">
                <span className="block">Google · Rubrik</span>
                <span className="block">Flipkart (Walmart Group)</span>
              </p>
            </div>

            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] !text-[#5B5048]">
                Location
              </p>
              <p className="mt-1 !text-[#4A3E36]">
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
              className="flex items-center gap-3 rounded-xl bg-[#A45236] px-4 py-3 text-sm font-medium !text-white transition hover:bg-[#8F432E]"
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
          <div className="relative flex items-center justify-center border-b border-[#E5D6CA] px-5 py-4 md:px-6">
            <div className="absolute left-5 flex gap-2 md:left-6">
              <div className="h-3 w-3 rounded-full bg-[#C8725A]" />
              <div className="h-3 w-3 rounded-full bg-[#D4A55E]" />
              <div className="h-3 w-3 rounded-full bg-[#7A9A87]" />
            </div>

            <nav className="flex max-w-[calc(100%-5rem)] flex-wrap justify-center gap-1.5 md:flex-nowrap md:gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap rounded-xl px-2.5 py-2 text-xs font-medium transition md:px-4 md:text-sm ${
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

          <div className="min-h-[680px] p-6 md:p-8">

            {/* PERSONAL */}
            {activeTab === "about" && (
              <div className="animate-fade">

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A45236]">
                  Personal
                </p>

                <h2 className="mt-3 max-w-[1180px] text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                  Curious about the machinery behind reliable software.
                </h2>

                <p className="mt-6 max-w-[1180px] text-lg leading-8 text-[#5D4D43]">
                  I like problems with layers: a service behaving oddly, a
                  network path that needs untangling, a migration with too many
                  sharp edges. The best kind of infrastructure work, to me,
                  quietly makes everyone else&apos;s day a little smoother.
                </p>

                {/* ABOUT ME */}
                <div className="mt-10 rounded-2xl border border-[#E2D3C8] bg-white p-6 md:p-7">

                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4E7466]">
                    A little about me
                  </p>

                  <p className="mt-4 max-w-[1120px] leading-7 text-[#625249]">
                    I started in backend and data systems at Flipkart, then
                    drifted steadily toward the parts of software that sit
                    underneath the application layer: networks, clusters,
                    reliability, and developer infrastructure. Google pulled me
                    deep into cloud networking, Rubrik into platform tooling,
                    and UMass has given me room to connect that production work
                    with distributed systems, security, and ML infrastructure.
                  </p>

                  <p className="mt-4 max-w-[1120px] leading-7 text-[#625249]">
                    Outside of engineering, I&apos;m usually planning a trip,
                    looking for a good café, or getting absorbed in a game with
                    too many systems to learn. I like cities and software for
                    almost the same reason: the interesting parts are often just
                    below the surface.
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

              </div>
            )}

            {/* EXPERIENCE */}
            {activeTab === "experience" && (
              <section className="animate-fade">
                <div className="mx-auto max-w-[1280px] pt-2 text-center">
                  <div>
                    <div className="space-y-1.5">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A45236]">
                        Software Development Engineer
                      </p>
                      <p className="text-[10px] font-semibold uppercase leading-5 tracking-[0.16em] text-[#7A675B]">
                        Distributed Systems · Cloud Infrastructure · Networking
                      </p>
                    </div>

                    <h1 className="mx-auto mt-5 max-w-[1280px] text-3xl font-semibold leading-[1.08] tracking-tight text-[#2A211B] md:text-4xl lg:text-[46px]">
                      Building reliable infrastructure for distributed systems,
                      networking, and backend platforms.
                    </h1>

                    <p className="mx-auto mt-5 max-w-[1120px] text-[15px] font-medium leading-7 text-[#584A43] md:text-base">
                      I&apos;ve worked on cloud networking at{" "}
                      <span className="font-semibold text-[#4285F4]">Google</span>,
                      platform infrastructure at{" "}
                      <span className="font-semibold text-[#00A6C8]">Rubrik</span>,
                      and backend and data systems at{" "}
                      <span className="font-semibold text-[#D89B00]">Flipkart</span>.
                      I&apos;m especially drawn to problems around networking,
                      distributed systems, reliability, and the infrastructure
                      other engineers depend on.
                    </p>

                    <div className="mt-5 flex flex-wrap justify-center gap-2">
                      <a
                        href="/Arya_Krishnan_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#D8C6B8] bg-white/80 px-3 py-2 text-xs font-semibold text-[#5B4B43] transition hover:border-[#A45236] hover:text-[#A45236]"
                      >
                        <FileText size={14} />
                        Resume
                      </a>

                      <a
                        href="mailto:aryakrishnan2108@gmail.com"
                        className="inline-flex items-center gap-2 rounded-full border border-[#D8C6B8] bg-white/80 px-3 py-2 text-xs font-semibold text-[#5B4B43] transition hover:border-[#A45236] hover:text-[#A45236]"
                      >
                        <Mail size={14} />
                        aryakrishnan2108@gmail.com
                      </a>

                      <a
                        href="mailto:aryakrishnan@umass.edu"
                        className="inline-flex items-center gap-2 rounded-full border border-[#D8C6B8] bg-white/80 px-3 py-2 text-xs font-semibold text-[#5B4B43] transition hover:border-[#A45236] hover:text-[#A45236]"
                      >
                        <Mail size={14} />
                        aryakrishnan@umass.edu
                      </a>

                      <a
                        href="https://www.linkedin.com/in/arya-krishnan-9371b5181"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#D8C6B8] bg-white/80 px-3 py-2 text-xs font-semibold text-[#5B4B43] transition hover:border-[#A45236] hover:text-[#A45236]"
                      >
                        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-[3px] bg-[#5B4B43] text-[8px] font-bold leading-none text-white">
                          in
                        </span>
                        LinkedIn
                      </a>

                      <a
                        href="https://github.com/winepink"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#D8C6B8] bg-white/80 px-3 py-2 text-xs font-semibold text-[#5B4B43] transition hover:border-[#A45236] hover:text-[#A45236]"
                      >
                        <GitFork size={14} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  id="experience-timeline"
                  className="mx-auto mt-7 max-w-[1280px] border-t border-[#DED0C6] pt-7 text-center"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4E7466]">
                    Experience
                  </p>

                  <p className="mx-auto mt-3 max-w-4xl text-base font-semibold leading-7 text-[#2A211B] md:text-lg">
                    Production systems I&apos;ve helped build and run across
                    cloud networking, platform infrastructure, and backend data.
                  </p>
                </div>

                <div className="relative mx-auto mt-7 max-w-[1280px] space-y-5 before:absolute before:bottom-5 before:left-[7px] before:top-5 before:w-px before:bg-[#DCCBC0]">
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

                <div className="mx-auto mt-12 max-w-[1280px] border-t border-[#DED0C6] pt-8 text-left">

                  <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#A45236]">
                    I tend to gravitate toward
                  </p>

                  <div className="grid gap-4 md:grid-cols-2">

                    <div className="rounded-2xl border border-[#E2D3C8] bg-[#FFFDF9] p-6">
                      <ServerCog size={20} className="text-[#A45236]" />
                      <h3 className="mt-4 text-lg font-semibold">
                        Distributed Systems
                      </h3>
                      <p className="mt-3 leading-7 text-[#62534B]">
                        Reliability, observability, failure handling, and
                        systems that keep working when things go wrong.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#E2D3C8] bg-[#FFFDF9] p-6">
                      <Network size={20} className="text-[#4E7466]" />
                      <h3 className="mt-4 text-lg font-semibold">
                        Networking & Cloud Infrastructure
                      </h3>
                      <p className="mt-3 leading-7 text-[#62534B]">
                        Kubernetes, Cilium/eBPF, BGP, multi-cluster networking,
                        and the infrastructure connecting distributed services.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#E2D3C8] bg-[#FFFDF9] p-6">
                      <DatabaseZap size={20} className="text-[#7A673B]" />
                      <h3 className="mt-4 text-lg font-semibold">
                        Backend & Data
                      </h3>
                      <p className="mt-3 leading-7 text-[#62534B]">
                        Microservices, streaming systems, CDC, and production
                        data infrastructure.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#E2D3C8] bg-[#FFFDF9] p-6">
                      <BrainCircuit size={20} className="text-[#A45236]" />
                      <h3 className="mt-4 text-lg font-semibold">
                        ML Infrastructure
                      </h3>
                      <p className="mt-3 leading-7 text-[#62534B]">
                        Distributed ML systems, developer tooling, and the
                        infrastructure underneath AI workloads.
                      </p>
                    </div>

                  </div>

                </div>

              </section>
            )}

            {/* EDUCATION */}
            {activeTab === "education" && (
              <section className="animate-fade">
                <div className="mx-auto max-w-[1180px]">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A45236]">
                    Education
                  </p>

                  <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-[#2A211B] md:text-4xl">
                        Academic foundations in systems, networking, ML, and
                        security.
                      </h2>

                      <p className="mt-4 max-w-4xl text-base leading-7 text-[#62534B]">
                        Graduate work in computer science at UMass Amherst,
                        built on a dual-degree computer science background from
                        IIIT Allahabad with honors, research, teaching, and an
                        institute medal.
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 grid gap-3 md:grid-cols-3">
                    <div className="rounded-2xl border border-[#E2D3C8] bg-white/80 p-4">
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#9B8577]">
                        Current
                      </p>
                      <p className="mt-2 text-lg font-semibold text-[#2A211B]">
                        M.S. CS
                      </p>
                      <p className="mt-1 text-sm text-[#62534B]">
                        UMass Amherst · 3.95/4.0
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#E2D3C8] bg-white/80 p-4">
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#9B8577]">
                        Foundation
                      </p>
                      <p className="mt-2 text-lg font-semibold text-[#2A211B]">
                        Dual Degree CS
                      </p>
                      <p className="mt-1 text-sm text-[#62534B]">
                        IIIT Allahabad · 9.53/10.0
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#DDBF86] bg-[#FFF8EA] p-4">
                      <div className="flex items-center gap-2">
                        <Medal size={18} className="text-[#B8832F]" />
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#9A7442]">
                          Honor
                        </p>
                      </div>
                      <p className="mt-2 text-lg font-semibold text-[#2A211B]">
                        IIITA Medalist
                      </p>
                      <p className="mt-1 text-sm text-[#62534B]">
                        Computer Science with Honours
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 space-y-5">
                    <article className="rounded-2xl border border-[#E2D3C8] bg-[#FFFDF9] p-5 shadow-sm md:p-6">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div className="flex gap-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#D8C6B8] bg-white shadow-sm">
                            <img
                              src="/umass-symbol.png"
                              alt="UMass Amherst logo"
                              className="h-9 w-9 object-contain"
                            />
                          </div>

                          <div>
                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#A45236]">
                              University of Massachusetts Amherst
                            </p>
                            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#2A211B]">
                              Master of Science, Computer Science
                            </h3>
                            <p className="mt-1 text-sm font-medium text-[#62534B]">
                              Aug 2025 - May 2027
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 md:justify-end">
                          <span className="rounded-full bg-[#F2E1D6] px-3 py-1.5 text-xs font-semibold text-[#8F452F]">
                            Grade 3.95/4.0
                          </span>
                          <span className="rounded-full bg-[#E5ECE3] px-3 py-1.5 text-xs font-semibold text-[#536B55]">
                            Applied ML & scalable systems
                          </span>
                        </div>
                      </div>

                      <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                        <div className="rounded-xl border border-[#E8DCD3] bg-white/75 p-4">
                          <div className="flex items-center gap-2">
                            <BookOpenCheck size={17} className="text-[#A45236]" />
                            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#7A675B]">
                              Coursework
                            </h4>
                          </div>

                          <div className="mt-3 flex flex-wrap gap-2">
                            {[
                              "Machine Learning",
                              "Advanced NLP",
                              "Systems for Data Science",
                              "System Defense and Test",
                              "Applied Information Retrieval",
                              "Systems for Deep Learning",
                            ].map((course) => (
                              <span
                                key={course}
                                className="rounded-full border border-[#E1D4CA] bg-[#FFF9F2] px-3 py-1 text-xs font-medium text-[#65554C]"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-xl border border-[#D9CABC] bg-[#FBF4ED] p-4">
                          <div className="flex items-center gap-2">
                            <GraduationCap size={18} className="text-[#4E7466]" />
                            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#7A675B]">
                              Focus
                            </h4>
                          </div>

                          <p className="mt-3 text-sm leading-6 text-[#62534B]">
                            Applied ML and scalable systems: building ML
                            infrastructure and big data pipelines using Spark,
                            Hadoop, and distributed computing frameworks.
                          </p>
                        </div>
                      </div>
                    </article>

                    <article className="relative overflow-hidden rounded-2xl border border-[#E2D3C8] bg-[#FFFDF9] p-5 shadow-sm md:p-6">
                      <div className="absolute right-5 top-5 hidden rounded-full border border-[#DDBF86] bg-[#FFF8EA] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#9A7442] md:inline-flex md:items-center md:gap-2">
                        <Medal size={15} />
                        Medalist
                      </div>

                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div className="flex gap-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#CFE3DD] bg-white shadow-sm">
                            <img
                              src="/iiita-symbol.png"
                              alt="IIIT Allahabad logo"
                              className="h-10 w-10 object-contain"
                            />
                          </div>

                          <div>
                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#4E7466]">
                              Indian Institute of Information Technology Allahabad
                            </p>
                            <h3 className="mt-2 max-w-3xl text-2xl font-semibold tracking-tight text-[#2A211B]">
                              Dual Degree, Computer Science
                            </h3>
                            <p className="mt-1 text-sm font-medium leading-6 text-[#62534B]">
                              B.Tech + M.Tech spl. Cyber Security · Computer
                              Science with Honours · 2017 - 2022
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 md:max-w-[280px] md:justify-end md:pt-10">
                          <span className="rounded-full bg-[#F0E5D2] px-3 py-1.5 text-xs font-semibold text-[#806234]">
                            Grade 9.53/10.0
                          </span>
                          <span className="rounded-full bg-[#FFF8EA] px-3 py-1.5 text-xs font-semibold text-[#9A7442]">
                            Institute medal
                          </span>
                        </div>
                      </div>

                      <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="rounded-xl border border-[#E8DCD3] bg-white/75 p-4">
                          <div className="flex items-center gap-2">
                            <BookOpenCheck size={17} className="text-[#4E7466]" />
                            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#7A675B]">
                              Coursework
                            </h4>
                          </div>

                          <div className="mt-3 flex flex-wrap gap-2">
                            {[
                              "Data Structures & Algorithms",
                              "Operating Systems",
                              "Computer Networks",
                              "Database Management Systems",
                              "Distributed Systems",
                              "Artificial Intelligence",
                              "Machine Learning",
                              "Data Mining & Warehousing",
                              "Compiler Design",
                              "Cryptography",
                              "Cyber Security",
                            ].map((course) => (
                              <span
                                key={course}
                                className="rounded-full border border-[#E1D4CA] bg-[#FFF9F2] px-3 py-1 text-xs font-medium text-[#65554C]"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="rounded-xl border border-[#D9CABC] bg-[#FBF4ED] p-4">
                            <div className="flex items-center gap-2">
                              <School size={18} className="text-[#A45236]" />
                              <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#7A675B]">
                                Research & teaching
                              </h4>
                            </div>

                            <p className="mt-3 text-sm leading-6 text-[#62534B]">
                              Undertook research projects and an M.Tech thesis
                              in applied ML and systems, and contributed as a
                              Teaching Assistant for Object-Oriented
                              Methodology, supporting 400+ students across
                              multiple batches.
                            </p>
                          </div>

                          <div className="rounded-xl border border-[#DDBF86] bg-[#FFF8EA] p-4">
                            <div className="flex items-center gap-2">
                              <Medal size={18} className="text-[#B8832F]" />
                              <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#9A7442]">
                                IIITA medal
                              </h4>
                            </div>

                            <p className="mt-3 text-sm leading-6 text-[#62534B]">
                              Recognized at IIIT Allahabad alongside a
                              Computer Science degree completed with honours.
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
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

                <p className="mt-4 max-w-5xl leading-7 text-[#625249]">
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

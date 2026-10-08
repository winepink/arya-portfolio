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
  { id: "writing", label: "Writing" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("about");

  return (
    <main className="min-h-screen bg-[#EFE6DC] px-4 py-8 text-[#2A211B] md:px-8 md:py-12">

      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-[260px_1fr]">

        {/* PROFILE PANEL */}
        <aside className="h-fit rounded-[28px] border border-[#DECFC3] bg-[#FFF9F2] p-6 shadow-[0_20px_50px_rgba(70,48,35,0.08)] md:sticky md:top-8">

          <a
            href="/arya.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block"
            title="Open photo"
          >
            <img
              src="/arya.jpg"
              alt="Arya Krishnan"
              className="h-24 w-24 rounded-2xl border border-[#DECFC3] object-cover shadow-sm transition duration-300 group-hover:scale-[1.03] group-hover:shadow-md"
            />
          </a>

          <div className="mt-5 flex items-baseline gap-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              Arya Krishnan
            </h1>
            <span className="text-sm font-medium text-[#9B8577]">
              she/her
            </span>
          </div>

          <p className="mt-2 text-sm font-medium leading-6 text-[#A45236]">
            Backend · Infrastructure · Distributed Systems
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
                Google · Rubrik · Flipkart (Walmart Group)
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

                <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                  I like building systems where the details underneath really matter.
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5D4D43]">
                  I&apos;ve worked on cloud networking at Google, platform
                  infrastructure at Rubrik, and backend and data systems at
                  Flipkart. I&apos;m especially drawn to problems around
                  reliability, distributed systems, infrastructure, and the
                  software layers that other engineers depend on.
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
                    curiosity took me into cloud networking at Google and
                    platform infrastructure at Rubrik, and eventually back to
                    school at UMass to spend more time exploring distributed
                    systems, security, and ML infrastructure.
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
                      <p className="mt-2 text-sm leading-6 text-[#716056]">
                        Reliability, observability, failure handling, and
                        systems that keep working when things go wrong.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#E2D3C8] bg-[#FFFDF9] p-5">
                      <Network size={20} className="text-[#4E7466]" />
                      <h3 className="mt-3 font-semibold">
                        Cloud & Networking
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#716056]">
                        Kubernetes, networking, cloud infrastructure, and the
                        layers connecting distributed services.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#E2D3C8] bg-[#FFFDF9] p-5">
                      <DatabaseZap size={20} className="text-[#7A673B]" />
                      <h3 className="mt-3 font-semibold">
                        Backend & Data
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#716056]">
                        Microservices, streaming systems, CDC, and production
                        data infrastructure.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#E2D3C8] bg-[#FFFDF9] p-5">
                      <BrainCircuit size={20} className="text-[#A45236]" />
                      <h3 className="mt-3 font-semibold">
                        ML Infrastructure
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#716056]">
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

                      <p className="mt-2 text-sm leading-6 text-[#716056]">
                        Distributed ML across heterogeneous compute environments.
                      </p>

                    </a>

                    <a
                      href="https://ieeexplore.ieee.org/document/9179578"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-2xl border border-[#E2D3C8] bg-[#FFFDF9] p-5 transition hover:-translate-y-1"
                    >

                      <div className="flex justify-between gap-4">
                        <Boxes className="text-[#4E7466]" size={21} />
                        <ArrowUpRight size={17} className="text-[#A69082]" />
                      </div>

                      <h3 className="mt-4 font-semibold">
                        Robotic Grasp Detection
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#716056]">
                        Representation learning for robotic grasp detection.
                      </p>

                    </a>

                  </div>
                </div>

              </div>
            )}

            {/* EXPERIENCE */}
            {activeTab === "experience" && (
              <div className="animate-fade">

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A45236]">
                  Experience
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  Systems I&apos;ve helped build
                </h2>

                <div className="mt-9 space-y-5">

                  {/* GOOGLE */}
                  <div className="rounded-2xl border border-[#E2D3C8] bg-white p-6">

                    <div className="flex flex-wrap items-start justify-between gap-3">

                      <div className="flex gap-4">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDF4F0] text-[#416657]">
                          <CloudCog size={22} />
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold">
                            Google
                          </h3>

                          <p className="text-sm font-medium text-[#4E7466]">
                            Software Engineer · Cloud Networking
                          </p>
                        </div>

                      </div>

                      <span className="text-sm text-[#8B776A]">
                        2024 – 2025
                      </span>

                    </div>

                    <p className="mt-5 leading-7 text-[#625249]">
                      Built and operated networking infrastructure for Google
                      Distributed Cloud Hosted using Kubernetes, Cilium/eBPF,
                      BGP, ClusterMesh, VXLAN, VRFs, and IP tunneling.
                    </p>

                    <p className="mt-3 leading-7 text-[#625249]">
                      Debugged production issues spanning routing, MTU, DNS,
                      TLS, pod IP exhaustion, and service reachability, and
                      built observability around control-plane and dataplane
                      reliability.
                    </p>

                    <p className="mt-4 text-sm leading-6 text-[#8B776A]">
                      Go · Python · Kubernetes · GKE · Cilium · eBPF · BGP · Hubble · Grafana · GCP
                    </p>

                  </div>

                  {/* RUBRIK */}
                  <div className="rounded-2xl border border-[#E2D3C8] bg-white p-6">

                    <div className="flex flex-wrap items-start justify-between gap-3">

                      <div className="flex gap-4">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF0E8] text-[#A45236]">
                          <Boxes size={22} />
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold">
                            Rubrik
                          </h3>

                          <p className="text-sm font-medium text-[#A45236]">
                            Software Engineer Intern · Platform Infrastructure
                          </p>
                        </div>

                      </div>

                      <span className="text-sm text-[#8B776A]">
                        2026
                      </span>

                    </div>

                    <p className="mt-5 leading-7 text-[#625249]">
                      Standardized infrastructure dependencies, resources, and
                      runtime configuration across roughly 200 distributed
                      services in Rubrik Security Cloud.
                    </p>

                    <p className="mt-3 leading-7 text-[#625249]">
                      Built AI-assisted platform tooling with Claude Code for
                      service analysis, code generation, validation, and
                      migrations.
                    </p>

                    <p className="mt-4 text-sm leading-6 text-[#8B776A]">
                      Go · Python · Kubernetes · gRPC · Bazel · GCP · Claude Code
                    </p>

                  </div>

                  {/* FLIPKART */}
                  <div className="rounded-2xl border border-[#E2D3C8] bg-white p-6">

                    <div className="flex flex-wrap items-start justify-between gap-3">

                      <div className="flex gap-4">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F2ECDD] text-[#7A673B]">
                          <DatabaseZap size={22} />
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold">
                            Flipkart
                          </h3>

                          <p className="text-sm font-medium text-[#7A673B]">
                            Intern → SDE-1 → SDE-2 · Backend & Data Systems
                          </p>
                        </div>

                      </div>

                      <span className="text-sm text-[#8B776A]">
                        2022 – 2024
                      </span>

                    </div>

                    <p className="mt-5 leading-7 text-[#625249]">
                      Built CDC streaming pipelines and owned a
                      microservices-based marketplace catalog service scaling
                      to roughly 9K RPM.
                    </p>

                    <p className="mt-3 leading-7 text-[#625249]">
                      This is where I first became drawn to
                      infrastructure-heavy work and learned to own production
                      systems end to end.
                    </p>

                    <p className="mt-4 text-sm leading-6 text-[#8B776A]">
                      Java · GCP · GKE · Kafka · BigQuery · Pub/Sub · Dataflow · Debezium · Terraform
                    </p>

                  </div>

                </div>

              </div>
            )}

            {/* RESEARCH */}
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
                      SPCOM 2020 · WiCV @ CVPR 2020 ↗
                    </p>

                  </a>

                </div>

              </div>
            )}

            {/* WRITING */}
            {activeTab === "writing" && (
              <div className="animate-fade">

                <div className="flex items-center gap-3 text-[#A45236]">
                  <BookOpen size={21} />

                  <p className="text-sm font-semibold uppercase tracking-[0.18em]">
                    Writing
                  </p>
                </div>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  Technical writing
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-[#625249]">
                  I&apos;ve also spent time writing and explaining computer
                  science topics. I like breaking technical ideas down until
                  they feel intuitive rather than intimidating.
                </p>

                <a
                  href="https://www.geeksforgeeks.org/profile/arya31?tab=articles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-9 block rounded-2xl border border-[#E2D3C8] bg-white p-6 transition hover:-translate-y-1"
                >

                  <div className="flex items-start justify-between gap-5">

                    <div>

                      <p className="text-sm font-medium text-[#4E7466]">
                        GeeksforGeeks
                      </p>

                      <h3 className="mt-2 text-xl font-semibold">
                        Articles & technical explanations
                      </h3>

                    </div>

                    <ArrowUpRight
                      size={19}
                      className="text-[#A69082]"
                    />

                  </div>

                  <p className="mt-4 max-w-xl leading-7 text-[#625249]">
                    Programming, algorithms, computer science concepts, and
                    practical technical explanations.
                  </p>

                  <p className="mt-5 text-sm font-medium text-[#A45236]">
                    Browse my articles →
                  </p>

                </a>

              </div>
            )}

          </div>

        </section>

      </div>

    </main>
  );
}

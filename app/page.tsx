"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Boxes,
  BrainCircuit,
  CloudCog,
  Coffee,
  Database,
  DatabaseZap,
  FileText,
  Mail,
  Network,
  ServerCog,
} from "lucide-react";

function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

const focusAreas = [
  {
    title: "Distributed Systems",
    description:
      "Reliable services, control planes, failure handling, observability, and systems that keep working when things go wrong.",
    icon: ServerCog,
  },
  {
    title: "Cloud & Networking",
    description:
      "Kubernetes, GKE, Cilium/eBPF, BGP, multi-cluster networking, and production cloud infrastructure.",
    icon: Network,
  },
  {
    title: "Backend & Data",
    description:
      "Microservices, streaming pipelines, CDC, data platforms, and backend systems operating at production scale.",
    icon: Database,
  },
  {
    title: "ML Infrastructure",
    description:
      "Distributed ML systems, developer tooling, data infrastructure, and the systems underneath model training and serving.",
    icon: BrainCircuit,
  },
];

/*
  ADD YOUR GEEKSFORGEEKS ARTICLES HERE LATER.

  Example:

  {
    title: "Your article title",
    description: "One-line description.",
    url: "https://www.geeksforgeeks.org/...",
  },
*/
const writing: {
  title: string;
  description: string;
  url: string;
}[] = [
  {
    title: "Technical Writing on GeeksforGeeks",
    description:
      "Articles and explanations on computer science, programming, algorithms, and systems topics.",
    url: "https://www.geeksforgeeks.org/profile/arya31?tab=articles",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9F2] text-[#2A211B]">

      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-[#E8D9CC]/80 bg-[#FFF9F2]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">

          <a
            href="#home"
            className="text-lg font-semibold tracking-tight text-[#2A211B]"
          >
            AK
          </a>

          <div className="flex gap-5 text-sm font-medium text-[#6B594E] md:gap-7">
            <a className="transition hover:text-[#A45236]" href="#experience">
              Experience
            </a>

            <a className="transition hover:text-[#A45236]" href="#focus">
              Focus
            </a>

            <a className="transition hover:text-[#A45236]" href="#writing">
              Writing
            </a>

            <a className="transition hover:text-[#A45236]" href="#contact">
              Contact
            </a>
          </div>

        </div>
      </nav>

      {/* HOME */}
      <section id="home" className="scroll-mt-24 border-b border-[#EADCCF]">
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-20 md:pb-24 md:pt-24">

          <Reveal>
            <div className="mb-6 inline-flex rounded-full border border-[#D8C3B3] bg-[#FFF3E8] px-4 py-2 text-sm font-medium text-[#8C4D35]">
              MSCS @ UMass Amherst · May 2027
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.06] tracking-tight md:text-7xl">
              Hi, I&apos;m Arya.
            </h1>

            <h2 className="mt-5 max-w-3xl text-2xl font-medium leading-snug text-[#A45236] md:text-3xl">
              I build backend, infrastructure, and distributed systems.
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#55473E]">
              I&apos;ve worked on cloud networking at Google, platform
              infrastructure at Rubrik, and backend and data systems at
              Flipkart. I&apos;m especially drawn to hard systems problems where
              reliability, scale, and the details underneath really matter.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href="/Arya_Krishnan_Resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-[#A45236] px-5 py-3 font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#8E432D]"
              >
                <FileText size={17} />
                Resume
              </a>

              <a
                href="https://www.linkedin.com/in/arya-krishnan-9371b5181"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl border border-[#CDB9AA] bg-white px-5 py-3 font-medium text-[#382E28] transition hover:-translate-y-0.5 hover:bg-[#FFF3E8]"
              >
                <span className="flex h-[18px] w-[18px] items-center justify-center rounded-sm bg-[#382E28] text-[10px] font-bold leading-none text-white">
                  in
                </span>
                LinkedIn
              </a>

              <a
                href="mailto:aryakrishnan2108@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-[#CDB9AA] bg-white px-5 py-3 text-sm font-medium text-[#382E28] transition hover:-translate-y-0.5 hover:bg-[#FFF3E8]"
              >
                <Mail size={17} />
                aryakrishnan2108@gmail.com
              </a>

            </div>
          </Reveal>

          {/* RESEARCH ON FIRST PAGE */}
          <Reveal delay={120}>
            <div className="mt-20">

              <div className="mb-7 flex items-end justify-between">
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#4E7466]">
                    Research
                  </p>

                  <h2 className="text-2xl font-semibold tracking-tight">
                    A little of what I explored before industry
                  </h2>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">

                <a
                  href="https://www.sciencedirect.com/science/article/pii/S0167739X25001736"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-[#DECEC1] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(79,56,42,0.08)]"
                >
                  <div className="flex items-start justify-between gap-4">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF0E8] text-[#A45236]">
                      <BrainCircuit size={20} />
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-[#A58F81] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    Hierarchical Federated Learning
                  </h3>

                  <p className="mt-3 leading-7 text-[#66564C]">
                    Secure distributed learning across heterogeneous compute
                    environments using hierarchical and personalized training.
                  </p>

                  <p className="mt-4 text-sm font-medium text-[#A45236]">
                    Future Generation Computer Systems
                  </p>
                </a>

                <a
                  href="https://ieeexplore.ieee.org/document/9179578"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-[#DECEC1] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(79,56,42,0.08)]"
                >
                  <div className="flex items-start justify-between gap-4">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDF4F0] text-[#4E7466]">
                      <Boxes size={20} />
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-[#A58F81] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    Robotic Grasp Detection
                  </h3>

                  <p className="mt-3 leading-7 text-[#66564C]">
                    Representation learning for robotic grasp detection using a
                    vector-quantized manifold.
                  </p>

                  <p className="mt-4 text-sm font-medium text-[#4E7466]">
                    SPCOM 2020 · WiCV @ CVPR 2020
                  </p>
                </a>

              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="scroll-mt-20 mx-auto max-w-5xl px-6 py-20"
      >

        <Reveal>
          <div className="mb-12">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#A45236]">
              Experience
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Building systems in production
            </h2>
          </div>
        </Reveal>

        <div className="space-y-8">

          {/* GOOGLE */}
          <Reveal>
            <article className="rounded-2xl border border-[#E4D5C9] bg-white p-7 shadow-[0_8px_30px_rgba(79,56,42,0.05)] md:p-9">

              <div className="flex flex-wrap items-start justify-between gap-4">

                <div className="flex gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EDF4F0] text-[#416657]">
                    <CloudCog size={24} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold">Google</h3>

                    <p className="mt-1 font-medium text-[#4E7466]">
                      Software Engineer · Cloud Networking
                    </p>
                  </div>

                </div>

                <span className="rounded-full bg-[#EDF4F0] px-3 py-1 text-sm text-[#416657]">
                  Jul 2024 – Aug 2025
                </span>

              </div>

              <p className="mt-6 max-w-3xl text-[17px] leading-8 text-[#594C43]">
                Built and operated networking infrastructure for Google
                Distributed Cloud Hosted using Kubernetes, Cilium/eBPF, BGP,
                ClusterMesh, VXLAN, VRFs, and IP tunneling.
              </p>

              <p className="mt-4 max-w-3xl text-[17px] leading-8 text-[#594C43]">
                Debugged production incidents spanning routing, MTU, DNS, TLS,
                pod IP exhaustion, and service reachability, and built
                observability around control-plane and dataplane reliability.
              </p>

              <p className="mt-6 text-sm font-medium leading-7 text-[#887569]">
                Go · Python · Kubernetes · GKE · Cilium · eBPF · BGP · Hubble · Grafana · GCP
              </p>

            </article>
          </Reveal>

          {/* RUBRIK */}
          <Reveal delay={80}>
            <article className="rounded-2xl border border-[#E4D5C9] bg-white p-7 shadow-[0_8px_30px_rgba(79,56,42,0.05)] md:p-9">

              <div className="flex flex-wrap items-start justify-between gap-4">

                <div className="flex gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF0E8] text-[#A45236]">
                    <Boxes size={24} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold">Rubrik</h3>

                    <p className="mt-1 font-medium text-[#A45236]">
                      Software Engineer Intern · Platform Infrastructure
                    </p>
                  </div>

                </div>

                <span className="rounded-full bg-[#FFF0E8] px-3 py-1 text-sm text-[#8E432D]">
                  May 2026 – Aug 2026
                </span>

              </div>

              <p className="mt-6 max-w-3xl text-[17px] leading-8 text-[#594C43]">
                Standardized infrastructure dependencies, resources, and runtime
                configuration across roughly 200 distributed services in Rubrik
                Security Cloud.
              </p>

              <p className="mt-4 max-w-3xl text-[17px] leading-8 text-[#594C43]">
                Built AI-assisted platform tooling with Claude Code for service
                analysis, code generation, validation, and migrations.
              </p>

              <p className="mt-6 text-sm font-medium leading-7 text-[#887569]">
                Go · Python · Kubernetes · gRPC · Bazel · GCP · Claude Code
              </p>

            </article>
          </Reveal>

          {/* FLIPKART */}
          <Reveal delay={140}>
            <article className="rounded-2xl border border-[#E4D5C9] bg-white p-7 shadow-[0_8px_30px_rgba(79,56,42,0.05)] md:p-9">

              <div className="flex flex-wrap items-start justify-between gap-4">

                <div className="flex gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F2ECDD] text-[#7A673B]">
                    <DatabaseZap size={24} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold">Flipkart</h3>

                    <p className="mt-1 font-medium text-[#7A673B]">
                      Intern → SDE-1 → SDE-2 · Backend & Data Systems
                    </p>
                  </div>

                </div>

                <span className="rounded-full bg-[#F2ECDD] px-3 py-1 text-sm text-[#67562F]">
                  Jan 2022 – Jul 2024
                </span>

              </div>

              <p className="mt-6 max-w-3xl text-[17px] leading-8 text-[#594C43]">
                Built CDC streaming pipelines and designed and owned a
                microservices-based marketplace catalog service that scaled to
                roughly 9K RPM.
              </p>

              <p className="mt-4 max-w-3xl text-[17px] leading-8 text-[#594C43]">
                This is where I first became drawn to infrastructure-heavy work
                and learned to own production systems end to end.
              </p>

              <p className="mt-6 text-sm font-medium leading-7 text-[#887569]">
                Java · GCP · GKE · Kafka · BigQuery · Pub/Sub · Dataflow · Debezium · Terraform · MySQL · Elasticsearch
              </p>

            </article>
          </Reveal>

        </div>
      </section>

      {/* FOCUS AREAS */}
      <section id="focus" className="scroll-mt-20 bg-[#F5EEE5]">
        <div className="mx-auto max-w-5xl px-6 py-20">

          <Reveal>
            <div className="mb-12">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#4E7466]">
                Focus
              </p>

              <h2 className="text-3xl font-semibold tracking-tight">
                What I like building
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">

            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <Reveal key={area.title} delay={index * 70}>
                  <article className="h-full rounded-2xl border border-[#DECEC1] bg-[#FFFDF9] p-7">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF0E8] text-[#A45236]">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold">
                      {area.title}
                    </h3>

                    <p className="mt-3 leading-7 text-[#64544A]">
                      {area.description}
                    </p>

                  </article>
                </Reveal>
              );
            })}

          </div>
        </div>
      </section>

      {/* WRITING / BLOG */}
      <section
        id="writing"
        className="scroll-mt-20 mx-auto max-w-5xl px-6 py-20"
      >

        <Reveal>
          <div className="mb-10">

            <div className="mb-3 flex items-center gap-3 text-[#A45236]">
              <BookOpen size={21} />
              <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                Writing
              </p>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight">
              Notes, explanations & technical writing
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-[#64544A]">
              I&apos;ve also spent time writing about computer science and
              explaining technical ideas on GeeksforGeeks. I&apos;ll collect a
              few of my favorite pieces here.
            </p>

          </div>
        </Reveal>

        {writing.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2">

            {writing.map((article, index) => (
              <Reveal key={article.url} delay={index * 70}>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-2xl border border-[#E4D5C9] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(79,56,42,0.08)]"
                >
                  <div className="flex items-start justify-between gap-5">

                    <h3 className="text-lg font-semibold">
                      {article.title}
                    </h3>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-[#A58F81] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />

                  </div>

                  <p className="mt-3 leading-7 text-[#64544A]">
                    {article.description}
                  </p>

                  <p className="mt-5 text-sm font-medium text-[#A45236]">
                    GeeksforGeeks
                  </p>

                </a>

              </Reveal>
            ))}

          </div>
        ) : (
          <Reveal>
            <div className="rounded-2xl border border-dashed border-[#D4C0B1] bg-[#FFF6ED] p-7">

              <p className="font-medium text-[#5A473B]">
                GeeksforGeeks articles coming here next.
              </p>

              <p className="mt-2 text-sm leading-6 text-[#806C5E]">
                We&apos;ll add your actual article titles and links here instead
                of filling this section with generic placeholders.
              </p>

            </div>
          </Reveal>
        )}

      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-20 bg-[#243B33] text-[#FFF9F2]">
        <div className="mx-auto max-w-5xl px-6 py-20">

          <Reveal>

            <div className="mb-4 flex items-center gap-3 text-[#D9B49F]">
              <Coffee size={24} strokeWidth={1.7} />

              <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                Coffee & conversation
              </p>
            </div>

            <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
              Always happy to talk about systems, infrastructure, or an
              interesting engineering problem.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#D9E2DD]">
              I graduate from UMass Amherst in May 2027 and am interested in
              backend, platform, distributed systems, data infrastructure, and
              ML infrastructure opportunities.
            </p>

            <div className="mt-8 flex flex-col gap-3">

              <a
                href="mailto:aryakrishnan2108@gmail.com"
                className="inline-flex items-center gap-3 text-lg font-medium underline decoration-[#D9B49F] underline-offset-4"
              >
                <Mail size={19} />
                aryakrishnan2108@gmail.com
              </a>

            </div>

          </Reveal>
        </div>
      </section>

    </main>
  );
}

"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import {
  Boxes,
  CloudCog,
  Coffee,
  DatabaseZap,
  FileText,
  Mail,
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
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
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
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9F2] text-[#2A211B]">

      {/* HERO */}
      <section className="border-b border-[#EADCCF]">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">

          <div className="mb-7 inline-flex rounded-full border border-[#D8C3B3] bg-[#FFF3E8] px-4 py-2 text-sm font-medium text-[#8C4D35]">
            MSCS @ UMass Amherst · Graduating May 2027
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
            Hi, I&apos;m Arya.
          </h1>

          <h2 className="mt-5 max-w-4xl text-2xl font-medium leading-snug text-[#A45236] md:text-3xl">
            I build backend, infrastructure, and distributed systems that people can rely on.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#55473E] md:text-xl">
            Over the last few years, I&apos;ve worked on cloud networking at Google,
            platform infrastructure at Rubrik, and backend and streaming systems
            at Flipkart. I enjoy the parts of software engineering where reliability,
            scale, and the details underneath actually matter.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">

            <a
              href="/Arya_Krishnan_Resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-[#A45236] px-6 py-3 font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#8E432D]"
            >
              <FileText size={18} />
              Resume
            </a>

            <a
              href="https://www.linkedin.com/in/arya-krishnan-9371b5181"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border border-[#CDB9AA] bg-white px-6 py-3 font-medium text-[#382E28] transition hover:-translate-y-0.5 hover:bg-[#FFF3E8]"
            >
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-sm bg-[#382E28] text-[10px] font-bold leading-none text-white">in</span>
              LinkedIn
            </a>

            <a
              href="mailto:aryakrishnan2108@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl border border-[#CDB9AA] bg-white px-5 py-3 text-sm font-medium text-[#382E28] transition hover:-translate-y-0.5 hover:bg-[#FFF3E8]"
            >
              <Mail size={17} />
              aryakrishnan2108@gmail.com
            </a>

            <a
              href="mailto:aryakrishnan@umas.edu"
              className="inline-flex items-center gap-2 rounded-xl border border-[#CDB9AA] bg-white px-5 py-3 text-sm font-medium text-[#382E28] transition hover:-translate-y-0.5 hover:bg-[#FFF3E8]"
            >
              <Mail size={17} />
              aryakrishnan@umas.edu
            </a>

          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mx-auto max-w-5xl px-6 py-20">

        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#A45236]">
            Experience
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            A few things I&apos;ve worked on
          </h2>
        </div>

        <div className="space-y-8">

          <Reveal>
            <article className="group rounded-2xl border border-[#E4D5C9] bg-white p-7 shadow-[0_8px_30px_rgba(79,56,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(79,56,42,0.10)] md:p-9">

              <div className="flex flex-wrap items-start justify-between gap-4">

                <div className="flex items-start gap-4">

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
                I worked on networking for Google Distributed Cloud Hosted,
                building and operating Kubernetes infrastructure using
                Cilium/eBPF, BGP, ClusterMesh, VXLAN, VRFs, and IP tunneling.
              </p>

              <p className="mt-4 max-w-3xl text-[17px] leading-8 text-[#594C43]">
                One of my favorite parts of the job was debugging problems that
                crossed layers, from routing and MTU mismatches to DNS, TLS,
                pod IP exhaustion, and service reachability. I also built an
                SLO and observability framework for control-plane and dataplane
                latency and availability.
              </p>

              <p className="mt-6 text-sm font-medium leading-7 text-[#887569]">
                Go · Python · Kubernetes · GKE · Cilium · eBPF · BGP · Hubble · Grafana · GCP
              </p>

            </article>
          </Reveal>

          <Reveal delay={80}>
            <article className="group rounded-2xl border border-[#E4D5C9] bg-white p-7 shadow-[0_8px_30px_rgba(79,56,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(79,56,42,0.10)] md:p-9">

              <div className="flex flex-wrap items-start justify-between gap-4">

                <div className="flex items-start gap-4">

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
                I worked on Rubrik Security Cloud, helping standardize how roughly
                200 distributed services declare infrastructure dependencies,
                resources, and runtime configuration.
              </p>

              <p className="mt-4 max-w-3xl text-[17px] leading-8 text-[#594C43]">
                I also built AI-assisted platform tooling with Claude Code for
                service analysis, code generation, validation, and migrations,
                with the goal of making shared infrastructure easier and safer
                for engineers to use.
              </p>

              <p className="mt-6 text-sm font-medium leading-7 text-[#887569]">
                Go · Python · Kubernetes · gRPC · Bazel · GCP · Claude Code
              </p>

            </article>
          </Reveal>

          <Reveal delay={160}>
            <article className="group rounded-2xl border border-[#E4D5C9] bg-white p-7 shadow-[0_8px_30px_rgba(79,56,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(79,56,42,0.10)] md:p-9">

              <div className="flex flex-wrap items-start justify-between gap-4">

                <div className="flex items-start gap-4">

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
                This is where I learned to own production systems end to end.
                I built CDC and streaming pipelines and later designed and owned
                a marketplace catalog service that scaled to roughly 9K RPM.
              </p>

              <p className="mt-4 max-w-3xl text-[17px] leading-8 text-[#594C43]">
                It was also where I became drawn to infrastructure-heavy work:
                systems that sit behind the product but need to be fast,
                reliable, and boring in exactly the right ways.
              </p>

              <p className="mt-6 text-sm font-medium leading-7 text-[#887569]">
                Java · GCP · GKE · Kafka · BigQuery · Pub/Sub · Dataflow · Debezium · Terraform · MySQL · Elasticsearch
              </p>

            </article>
          </Reveal>

        </div>
      </section>

      {/* RESEARCH */}
      <section className="bg-[#F5EEE5]">
        <div className="mx-auto max-w-5xl px-6 py-20">

          <Reveal>
            <div className="mb-10">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#A45236]">
                Research
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                ML systems & research
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">

            <Reveal>
              <article className="h-full rounded-2xl border border-[#DECEC1] bg-[#FFFDF9] p-7 transition hover:-translate-y-1">
                <div className="mb-4 h-2 w-12 rounded-full bg-[#A45236]" />
                <h3 className="text-xl font-semibold">
                  Hierarchical Federated Learning
                </h3>
                <p className="mt-4 leading-7 text-[#5F5046]">
                  Research on secure distributed machine learning and collaboration
                  across heterogeneous compute environments.
                </p>
              </article>
            </Reveal>

            <Reveal delay={100}>
              <article className="h-full rounded-2xl border border-[#DECEC1] bg-[#FFFDF9] p-7 transition hover:-translate-y-1">
                <div className="mb-4 h-2 w-12 rounded-full bg-[#4E7466]" />
                <h3 className="text-xl font-semibold">
                  Robotic Grasp Detection
                </h3>
                <p className="mt-4 leading-7 text-[#5F5046]">
                  Representation learning for robotic grasp detection, accepted
                  at SPCOM 2020 with a poster accepted at WiCV @ CVPR 2020.
                </p>
              </article>
            </Reveal>

          </div>
        </div>
      </section>

      {/* INTERESTS */}
      <section className="mx-auto max-w-5xl px-6 py-20">

        <Reveal>
          <div className="grid gap-12 md:grid-cols-2">

            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#A45236]">
                Interests
              </p>

              <h2 className="text-2xl font-semibold">
                What I enjoy working on
              </h2>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Distributed Systems",
                  "Cloud Infrastructure",
                  "Kubernetes",
                  "Networking",
                  "Backend Systems",
                  "Data Infrastructure",
                  "Reliability",
                  "Developer Tooling",
                  "ML Infrastructure",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#D8C7B9] bg-[#FFF4E9] px-4 py-2 text-sm font-medium text-[#664C3D]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#4E7466]">
                Toolkit
              </p>

              <h2 className="text-2xl font-semibold">
                Technologies
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-[#5F5046]">
                Go · Python · Java · C/C++ · SQL · Kubernetes · GKE · Linux ·
                GCP · AWS · Terraform · Cilium · eBPF · BGP · gRPC · Kafka ·
                BigQuery · Dataflow · Debezium · Elasticsearch · Claude Code · Gemini
              </p>
            </div>

          </div>
        </Reveal>

      </section>

      {/* CONTACT */}
      <section className="bg-[#243B33] text-[#FFF9F2]">
        <div className="mx-auto max-w-5xl px-6 py-20">

          <Reveal>

            <div className="mb-4 flex items-center gap-3 text-[#D9B49F]">
              <Coffee size={24} strokeWidth={1.7} />
              <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                Coffee & conversation
              </p>
            </div>

            <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
              I&apos;m always happy to talk about systems, infrastructure, or interesting engineering problems.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#D9E2DD]">
              I graduate from UMass Amherst in May 2027 and am interested in
              backend, platform, distributed systems, data infrastructure, and
              ML infrastructure opportunities.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3">

              <a
                href="mailto:aryakrishnan2108@gmail.com"
                className="inline-flex items-center gap-3 text-lg font-medium text-[#FFF9F2] underline decoration-[#D9B49F] underline-offset-4 transition hover:text-white"
              >
                <Mail size={19} />
                aryakrishnan2108@gmail.com
              </a>

              <a
                href="mailto:aryakrishnan@umas.edu"
                className="inline-flex items-center gap-3 text-lg font-medium text-[#FFF9F2] underline decoration-[#D9B49F] underline-offset-4 transition hover:text-white"
              >
                <Mail size={19} />
                aryakrishnan@umas.edu
              </a>

            </div>

          </Reveal>

        </div>
      </section>

    </main>
  );
}

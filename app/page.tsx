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
            Hi, I'm Arya.
          </h1>

          <h2 className="mt-5 max-w-4xl text-2xl font-medium leading-snug text-[#A45236] md:text-3xl">
            I build backend, infrastructure, and distributed systems that people can rely on.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#55473E] md:text-xl">
            Over the last few years, I've worked on cloud networking at Google,
            platform infrastructure at Rubrik, and backend and streaming systems
            at Flipkart. I enjoy the parts of software engineering where reliability,
            scale, and the details underneath actually matter.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="/Arya_Krishnan_Resume.pdf"
              target="_blank"
              className="rounded-xl bg-[#A45236] px-6 py-3 font-medium text-white shadow-sm transition hover:bg-[#8E432D]"
            >
              View Resume
            </a>

            <a
              href="https://www.linkedin.com/in/arya-krishnan-9371b5181"
              target="_blank"
              className="rounded-xl border border-[#CDB9AA] bg-white px-6 py-3 font-medium text-[#382E28] transition hover:bg-[#FFF3E8]"
            >
              LinkedIn
            </a>

            <a
              href="mailto:aryakrishnan2108@gmail.com"
              className="rounded-xl border border-[#CDB9AA] bg-white px-6 py-3 font-medium text-[#382E28] transition hover:bg-[#FFF3E8]"
            >
              Email
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
            A few things I've worked on
          </h2>
        </div>

        <div className="space-y-7">

          {/* GOOGLE */}
          <article className="rounded-2xl border border-[#E4D5C9] bg-white p-7 shadow-[0_8px_30px_rgba(79,56,42,0.06)] md:p-9">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-2xl font-semibold">Google</h3>
                <p className="mt-1 font-medium text-[#4E7466]">
                  Software Engineer · Cloud Networking
                </p>
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

          {/* RUBRIK */}
          <article className="rounded-2xl border border-[#E4D5C9] bg-white p-7 shadow-[0_8px_30px_rgba(79,56,42,0.06)] md:p-9">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-2xl font-semibold">Rubrik</h3>
                <p className="mt-1 font-medium text-[#4E7466]">
                  Software Engineer Intern · Platform Infrastructure
                </p>
              </div>
              <span className="rounded-full bg-[#EDF4F0] px-3 py-1 text-sm text-[#416657]">
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

          {/* FLIPKART */}
          <article className="rounded-2xl border border-[#E4D5C9] bg-white p-7 shadow-[0_8px_30px_rgba(79,56,42,0.06)] md:p-9">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-2xl font-semibold">Flipkart</h3>
                <p className="mt-1 font-medium text-[#4E7466]">
                  Intern → SDE-1 → SDE-2 · Backend & Data Systems
                </p>
              </div>
              <span className="rounded-full bg-[#EDF4F0] px-3 py-1 text-sm text-[#416657]">
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

        </div>
      </section>

      {/* RESEARCH */}
      <section className="bg-[#F5EEE5]">
        <div className="mx-auto max-w-5xl px-6 py-20">

          <div className="mb-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#A45236]">
              Research
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              ML systems & research
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <article className="rounded-2xl border border-[#DECEC1] bg-[#FFFDF9] p-7">
              <div className="mb-4 h-2 w-12 rounded-full bg-[#A45236]" />
              <h3 className="text-xl font-semibold">
                Hierarchical Federated Learning
              </h3>
              <p className="mt-4 leading-7 text-[#5F5046]">
                Research on secure distributed machine learning and collaboration
                across heterogeneous compute environments.
              </p>
            </article>

            <article className="rounded-2xl border border-[#DECEC1] bg-[#FFFDF9] p-7">
              <div className="mb-4 h-2 w-12 rounded-full bg-[#4E7466]" />
              <h3 className="text-xl font-semibold">
                Robotic Grasp Detection
              </h3>
              <p className="mt-4 leading-7 text-[#5F5046]">
                Representation learning for robotic grasp detection, accepted
                at SPCOM 2020 with a poster accepted at WiCV @ CVPR 2020.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* INTERESTS + TECH */}
      <section className="mx-auto max-w-5xl px-6 py-20">

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
      </section>

      {/* CONTACT */}
      <section className="bg-[#243B33] text-[#FFF9F2]">
        <div className="mx-auto max-w-5xl px-6 py-20">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D9B49F]">
            Say hello
          </p>

          <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
            I'm looking for the next hard systems problem worth solving.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#D9E2DD]">
            I graduate from UMass Amherst in May 2027 and am interested in
            backend, platform, distributed systems, data infrastructure, and
            ML infrastructure opportunities.
          </p>

          <a
            href="mailto:aryakrishnan2108@gmail.com"
            className="mt-8 inline-block rounded-xl bg-[#FFF9F2] px-6 py-3 font-semibold text-[#243B33] transition hover:bg-white"
          >
            Get in touch
          </a>

        </div>
      </section>

    </main>
  );
}

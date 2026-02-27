import type { CSSProperties, ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, CheckCircle2, Code2, Database, GraduationCap, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { certifications, specializationTracks, type CertificateArea, type Certification, type TrackFocus } from "@/data/certifications";
import { cn } from "@/lib/utils";

const focusStyles: Record<TrackFocus, string> = {
  Python: "border-white/15 bg-white/[0.03]",
  Database: "border-white/15 bg-white/[0.03]",
};

const areaBadgeStyles: Record<CertificateArea, string> = {
  Python: "border-white/25 bg-white/[0.08] text-slate-200",
  Database: "border-white/25 bg-white/[0.08] text-slate-200",
  MERN: "border-white/25 bg-white/[0.08] text-slate-200",
};

const areaCardStyles: Record<CertificateArea, string> = {
  Python: "border-white/15 bg-white/[0.03]",
  Database: "border-white/15 bg-white/[0.03]",
  MERN: "border-white/15 bg-white/[0.03]",
};

const areaGlowStyles: Record<CertificateArea, string> = {
  Python: "bg-white/10",
  Database: "bg-white/10",
  MERN: "bg-white/10",
};

const previewAccentStyles: Record<CertificateArea, string> = {
  Python: "text-slate-800",
  Database: "text-slate-800",
  MERN: "text-slate-800",
};

const focusIcons: Record<TrackFocus, ComponentType<{ className?: string }>> = {
  Python: Code2,
  Database,
};

const areaOrder: CertificateArea[] = ["Database", "Python", "MERN"];
const profileName = "Abishek Ghimire";

function sortByArea(area: CertificateArea) {
  const index = areaOrder.indexOf(area);
  return index === -1 ? areaOrder.length : index;
}

function compactCredentialId(credentialId: string) {
  if (credentialId.length <= 22) {
    return credentialId;
  }

  return `${credentialId.slice(0, 12)}...${credentialId.slice(-8)}`;
}

function entryAnimationDelay(index: number): CSSProperties {
  return { animationDelay: `${index * 90}ms` };
}

function CertificatePreview({ certificate }: { certificate: Certification }) {
  if (certificate.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm">
        <Image
          src={certificate.image}
          alt={`${certificate.title} certificate image`}
          fill
          sizes="(max-width: 768px) 100vw, 480px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 bg-[linear-gradient(180deg,#f8fafc,#f1f5f9)] p-4 text-slate-800 shadow-sm">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,rgba(100,116,139,0.13),transparent_36%)]" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
          <span>{certificate.issuer}</span>
          <span>{certificate.area}</span>
        </div>
        <div className="my-auto space-y-1.5 text-center">
          <p className="text-[0.64rem] font-medium uppercase tracking-[0.2em] text-slate-500">Certificate of Completion</p>
          <p className={cn("text-sm font-bold leading-tight", previewAccentStyles[certificate.area])}>{certificate.title}</p>
          <p className="text-[0.66rem] text-slate-600">Presented to {profileName}</p>
        </div>
        <div className="flex items-end justify-between text-[0.58rem] text-slate-500">
          <span>{certificate.issuedOn}</span>
          <span className="font-mono">{compactCredentialId(certificate.credentialId)}</span>
        </div>
      </div>
    </div>
  );
}

export function CertificationsSection() {
  const orderedCertificates = [...certifications].sort((a, b) => {
    const areaDelta = sortByArea(a.area) - sortByArea(b.area);
    if (areaDelta !== 0) {
      return areaDelta;
    }

    return a.title.localeCompare(b.title);
  });

  const statItems = [
    { label: "Tracks", value: `${specializationTracks.length}` },
    { label: "Certificates", value: `${certifications.length}` },
    { label: "Issued", value: "2025-2026" },
  ];

  return (
    <section id="certifications" className="container py-16 md:py-24">
      <div className="cert-mesh relative isolate overflow-hidden rounded-[2.2rem] border border-white/15 p-6 shadow-[0_30px_120px_-60px_rgba(0,0,0,0.95)] md:p-10">
        <div className="cert-grid-overlay pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl motion-safe:animate-glow-pulse" />
        <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl motion-safe:animate-glow-pulse [animation-delay:1.3s]" />
        <div className="pointer-events-none absolute bottom-0 right-16 h-72 w-72 rounded-full bg-white/5 blur-3xl motion-safe:animate-glow-pulse [animation-delay:2.2s]" />

        <div className="relative mb-8 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl space-y-4">
            <Badge className="w-fit border-white/25 bg-white/[0.08] px-3 py-1 text-slate-200">
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              Specialization and Certifications
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Verified Certificates with Image Proof
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
              Complete certification showcase from IOA Global x Dataquest and LinkedIn Learning, including specialization tracks,
              course credentials, issue dates, and certificate image previews.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {statItems.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/15 bg-white/[0.05] px-3 py-3 text-center backdrop-blur-md"
              >
                <p className="text-lg font-semibold text-white sm:text-xl">{item.value}</p>
                <p className="mt-1 text-[0.66rem] uppercase tracking-[0.14em] text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative grid gap-8 xl:grid-cols-[0.95fr_1.45fr]">
          <div className="space-y-4">
            {specializationTracks.map((track, index) => {
              const TrackIcon = focusIcons[track.focus];

              return (
                <article
                  key={track.title}
                  style={entryAnimationDelay(index)}
                  className={cn(
                    "group relative overflow-hidden rounded-3xl border p-5 text-slate-100 backdrop-blur-md motion-safe:animate-[cert-card-rise_900ms_cubic-bezier(0.16,1,0.3,1)_both]",
                    focusStyles[track.focus],
                  )}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_18%,rgba(255,255,255,0.16)_46%,transparent_72%)] bg-[length:220%_100%] motion-safe:animate-[gradient_4s_linear_infinite]" />
                  </div>

                  {track.snapshotImage && (
                    <div className="relative mb-4 overflow-hidden rounded-xl border border-white/25 bg-black/25">
                      <div className="relative aspect-[16/10]">
                        <Image
                          src={track.snapshotImage}
                          alt={`${track.title} snapshot`}
                          fill
                          sizes="(max-width: 1280px) 100vw, 420px"
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                  )}

                  <div className="relative mb-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-white/20 bg-black/25 p-2">
                        <TrackIcon className="h-4 w-4 text-slate-200" />
                      </span>
                      <h3 className="text-base font-semibold leading-tight text-white">{track.title}</h3>
                    </div>
                    <Badge variant="outline" className="border-white/30 text-[0.66rem] uppercase tracking-[0.16em] text-white/90">
                      {track.focus}
                    </Badge>
                  </div>

                  <p className="relative text-sm leading-relaxed text-slate-200">{track.description}</p>
                  <p className="relative mt-1.5 text-xs text-slate-300">{track.provider}</p>

                  <ul className="relative mt-4 space-y-2.5">
                    {track.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-xs text-slate-100 sm:text-sm">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-300" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={track.platformUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="relative mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 transition-colors hover:text-white"
                  >
                    Explore Program Platform
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </article>
              );
            })}
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2.5 text-sm text-slate-100">
              <Award className="h-4 w-4 text-slate-300" />
              Full certificate records with image previews and credential details
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {orderedCertificates.map((certificate, index) => (
                <article
                  key={`${certificate.title}-${certificate.credentialId}`}
                  style={entryAnimationDelay(index + 2)}
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-2xl border p-4 text-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_60px_-35px_rgba(255,255,255,0.16)] motion-safe:animate-[cert-card-rise_900ms_cubic-bezier(0.16,1,0.3,1)_both]",
                    areaCardStyles[certificate.area],
                  )}
                >
                  <div
                    className={cn(
                      "pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full blur-3xl motion-safe:animate-glow-pulse",
                      areaGlowStyles[certificate.area],
                    )}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(112deg,transparent_0%,rgba(255,255,255,0.14)_44%,transparent_72%)] bg-[length:220%_100%] opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-safe:group-hover:animate-[gradient_2.8s_linear_infinite]" />

                  <div className="relative">
                    <CertificatePreview certificate={certificate} />
                  </div>

                  <div className="relative mt-4 flex items-start justify-between gap-3">
                    <Badge className={cn("border text-[0.62rem] uppercase tracking-[0.16em]", areaBadgeStyles[certificate.area])}>
                      {certificate.area}
                    </Badge>
                    <span className="text-xs text-slate-300">{certificate.issuedOn}</span>
                  </div>

                  <h3 className="relative mt-3 text-base font-semibold leading-snug text-white">{certificate.title}</h3>
                  <p className="relative mt-1.5 flex items-center gap-1.5 text-xs text-slate-300">
                    <GraduationCap className="h-3.5 w-3.5 text-slate-300" />
                    {certificate.issuer}
                  </p>

                  {certificate.details && <p className="relative mt-2 text-xs leading-relaxed text-slate-200">{certificate.details}</p>}
                  {certificate.duration && <p className="relative mt-1 text-xs font-medium text-slate-200">Duration: {certificate.duration}</p>}

                  <div className="relative mt-3 rounded-lg border border-white/20 bg-black/25 px-2.5 py-2">
                    <p className="text-[0.68rem] uppercase tracking-[0.14em] text-slate-300">Credential ID</p>
                    <p title={certificate.credentialId} className="mt-1 font-mono text-xs text-slate-100">
                      {compactCredentialId(certificate.credentialId)}
                    </p>
                  </div>

                  <div className="relative mt-3 flex flex-wrap gap-1.5">
                    {certificate.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[0.68rem] text-slate-100">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {certificate.credentialUrl && (
                    <Link
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="relative mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-semibold text-slate-200 transition-colors hover:text-white"
                    >
                      {certificate.issuer.includes("LinkedIn") ? "View on LinkedIn" : "Verify Certificate"}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center px-6 py-16">
      <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Portfolio</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-100 sm:text-6xl">
        Build and ship your best work.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
        This starter sets up Next.js App Router, TypeScript, and Tailwind CSS with a dark-first
        design system so you can focus on your content and projects.
      </p>
    </main>
  );
}
